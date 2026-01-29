"use client";

import { CartItem, formatRupiah, MenuItem } from "@/lib/menu";
import { CustomerInfo } from "@/lib/whatsapp";

type OrderSectionProps = {
  cart: CartItem[];
  menu: MenuItem[];
  subtotal: number;
  customer: CustomerInfo;
  onCustomerChange: (field: keyof CustomerInfo, value: string) => void;
  onAdd: (item: MenuItem) => void;
  onRemove: (itemId: string) => void;
  onDelete: (itemId: string) => void;
  onSubmit: () => void;
  error: string | null;
};

export default function OrderSection({
  cart,
  menu,
  subtotal,
  customer,
  onCustomerChange,
  onAdd,
  onRemove,
  onDelete,
  onSubmit,
  error,
}: OrderSectionProps) {
  return (
    <section id="pesan" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Pesan Sekarang
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Keranjang & Form Pemesanan
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Keranjang Pesanan</h3>
          <div className="mt-4 space-y-4">
            {cart.length === 0 ? (
              <p className="text-sm text-white/60">
                Keranjang kamu masih kosong. Tambah menu favorit di atas.
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-white/60">
                      {formatRupiah(item.price)} / porsi
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-sm font-semibold text-white/60 hover:text-white"
                      >
                        -
                      </button>
                      <span className="text-sm text-white">{item.qty}</span>
                      <button
                        onClick={() => onAdd(item)}
                        className="text-sm font-semibold text-white/60 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-xs text-orange-300 hover:text-orange-200"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-sm text-white/70">Subtotal</p>
            <p className="text-lg font-semibold text-orange-300">
              {formatRupiah(subtotal)}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Form Pemesanan</h3>
          <div className="mt-4 grid gap-4">
            <input
              value={customer.name}
              onChange={(event) => onCustomerChange("name", event.target.value)}
              placeholder="Nama"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400 focus:outline-none"
            />
            <input
              value={customer.whatsapp}
              onChange={(event) =>
                onCustomerChange("whatsapp", event.target.value)
              }
              placeholder="Nomor WhatsApp"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400 focus:outline-none"
            />
            <textarea
              value={customer.address}
              onChange={(event) => onCustomerChange("address", event.target.value)}
              placeholder="Alamat lengkap"
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400 focus:outline-none"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {(["Pickup", "Delivery"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onCustomerChange("method", option)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    customer.method === option
                      ? "border-orange-400 bg-orange-400/20 text-white"
                      : "border-white/10 text-white/60 hover:border-orange-400/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <textarea
              value={customer.notes}
              onChange={(event) => onCustomerChange("notes", event.target.value)}
              placeholder="Catatan tambahan (opsional)"
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange-400 focus:outline-none"
            />

            {error && (
              <p className="rounded-xl border border-orange-400/40 bg-orange-400/10 px-4 py-3 text-xs text-orange-200">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={onSubmit}
              className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Kirim via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
        <h4 className="text-lg font-semibold text-white">Menu Ringkas</h4>
        <p className="mt-2 text-sm text-white/60">
          Butuh inspirasi? Pilih paket hemat atau kombinasikan menu favoritmu.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {menu.slice(0, 3).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onAdd(item)}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-left text-sm text-white/80 transition hover:border-orange-400/40"
            >
              <span>{item.name}</span>
              <span className="text-orange-200">{formatRupiah(item.price)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
