"use client";

import { useMemo, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import Gallery from "@/components/Gallery";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import LocationHours from "@/components/LocationHours";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { CartItem, MENU_ITEMS, MenuItem, formatRupiah } from "@/lib/menu";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import {
  buildWhatsAppLink,
  buildWhatsAppMessage,
  CustomerInfo,
} from "@/lib/whatsapp";

const initialCustomer: CustomerInfo = {
  name: "",
  whatsapp: "",
  address: "",
  method: "Ambil Sendiri",
  notes: "",
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<CustomerInfo>(initialCustomer);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.qty, 0),
    [cart]
  );

  const whatsappMessage = useMemo(
    () => buildWhatsAppMessage(cart, customer, subtotal),
    [cart, customer, subtotal]
  );

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(WHATSAPP_NUMBER, whatsappMessage),
    [whatsappMessage]
  );

  const heroWhatsappLink = buildWhatsAppLink(
    WHATSAPP_NUMBER,
    "Halo Lee KreZs, saya mau pesan sekarang."
  );

  const handleAdd = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    setToast(`${item.name} ditambahkan ke keranjang.`);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToast(null);
    }, 1800);
  };

  const handleRemove = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === itemId);
      if (!existing) return prev;
      if (existing.qty <= 1) {
        return prev.filter((cartItem) => cartItem.id !== itemId);
      }
      return prev.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      );
    });
  };

  const handleDelete = (itemId: string) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== itemId));
  };

  const handleCustomerChange = (field: keyof CustomerInfo, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const validateRequired = () => {
    if (!customer.name.trim() || !customer.whatsapp.trim()) {
      setError("Nama dan WhatsApp wajib diisi sebelum mengirim pesanan.");
      return false;
    }
    return true;
  };

  const openWhatsApp = () => {
    if (!validateRequired()) return;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const paketHemat = [
    {
      title: "Paket Pedas Double",
      items: ["lele-bumbu", "kremes-100"],
    },
    {
      title: "Paket Keluarga",
      items: ["lele-bumbu", "nasi-lele-kremes", "kremes-250"],
    },
    {
      title: "Paket Hemat Ayam",
      items: ["nasi-ayam-bakar", "kremes-100"],
    },
  ].map((pack) => {
    const items = pack.items
      .map((id) => MENU_ITEMS.find((item) => item.id === id))
      .filter((item): item is MenuItem => Boolean(item));
    const price = items.reduce((total, item) => total + item.price, 0);
    return { ...pack, items, price };
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero whatsappLink={heroWhatsappLink} />
      <MenuGrid
        items={MENU_ITEMS}
        cart={cart}
        onAdd={handleAdd}
        onGoToOrder={() => {
          const orderSection = document.getElementById("pesan");
          if (orderSection) {
            orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <Gallery />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
            Paket Hemat
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Kombinasi Favorit
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {paketHemat.map((pack) => (
            <div
              key={pack.title}
              className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{pack.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {pack.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/60">Total</span>
                <span className="text-base font-semibold text-orange-300">
                  {formatRupiah(pack.price)}
                </span>
              </div>
              <button
                onClick={() => pack.items.forEach(handleAdd)}
                className="mt-5 w-full rounded-full border border-orange-400/40 px-4 py-2 text-sm font-semibold text-orange-200 transition hover:bg-orange-400/10"
              >
                Tambah Paket
              </button>
            </div>
          ))}
        </div>
      </section>

      <Steps />
      {/* Testimonials temporarily hidden */}
      <LocationHours />
      <OrderSection
        cart={cart}
        menu={MENU_ITEMS}
        subtotal={subtotal}
        customer={customer}
        onCustomerChange={handleCustomerChange}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onDelete={handleDelete}
        onSubmit={openWhatsApp}
        error={error}
      />
      <Footer />
      <FloatingWA />
      {toast && (
        <div className="fixed bottom-24 right-6 z-50 rounded-full border border-orange-400/40 bg-black/80 px-5 py-3 text-sm text-orange-100 shadow-[0_0_20px_rgba(255,122,26,0.25)]">
          {toast}
        </div>
      )}
    </div>
  );
}
