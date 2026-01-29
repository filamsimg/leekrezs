"use client";

import Image from "next/image";
import { MenuItem, CartItem, formatRupiah } from "@/lib/menu";

type MenuGridProps = {
  items: MenuItem[];
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
};

export default function MenuGrid({ items, cart, onAdd }: MenuGridProps) {
  return (
    <section id="menu" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Menu Favorit
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Pilihan Menu Paling Dicari
        </h2>
        <p className="max-w-2xl text-white/70">
          Pedasnya nampol, kremesnya melimpah. Tambahkan ke keranjang dan
          lanjutkan ke form pemesanan.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const inCart = cart.find((cartItem) => cartItem.id === item.id);
          return (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(255,122,26,0.2)]"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={380}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-black">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-orange-300">
                    {formatRupiah(item.price)}
                  </p>
                </div>
                <button
                  onClick={() => onAdd(item)}
                  className="inline-flex items-center justify-center rounded-full border border-orange-400/40 px-4 py-2 text-sm font-semibold text-orange-200 transition hover:bg-orange-400/20"
                >
                  Tambah
                </button>
              </div>
              {inCart && (
                <p className="mt-3 text-xs text-white/60">
                  Sudah di keranjang: {inCart.qty}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
