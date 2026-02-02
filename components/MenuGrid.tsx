"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuItem, CartItem, formatRupiah } from "@/lib/menu";

type MenuGridProps = {
  items: MenuItem[];
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onGoToOrder: () => void;
};

type MenuImageCarouselProps = {
  images: string[];
  alt: string;
  badge?: string;
};

function MenuImageCarousel({ images, alt, badge }: MenuImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const imagesCount = images.length;
  const hasMultiple = imagesCount > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagesCount);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [hasMultiple, imagesCount, paused]);

  useEffect(() => {
    if (activeIndex >= imagesCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, imagesCount]);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % imagesCount);

  return (
    <div
      className="relative mb-4 overflow-hidden rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={`${alt} foto ${index + 1}`}
            width={500}
            height={380}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-40 w-full shrink-0 object-cover transition duration-500 group-hover:scale-105"
          />
        ))}
      </div>
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-black">
          {badge}
        </span>
      )}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={`Foto sebelumnya untuk ${alt}`}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/60 px-2 py-1 text-xs font-semibold text-white/80 shadow-sm transition hover:border-orange-300/70 hover:text-white"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={`Foto berikutnya untuk ${alt}`}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/60 px-2 py-1 text-xs font-semibold text-white/80 shadow-sm transition hover:border-orange-300/70 hover:text-white"
          >
            {">"}
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {images.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Tampilkan foto ${index + 1} untuk ${alt}`}
                aria-current={index === activeIndex ? "true" : "false"}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  index === activeIndex
                    ? "bg-orange-300"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MenuGrid({
  items,
  cart,
  onAdd,
  onGoToOrder,
}: MenuGridProps) {
  const summary = cart.map((item) => `${item.name} x${item.qty}`).join(", ");

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
      {cart.length > 0 && (
        <button
          type="button"
          onClick={onGoToOrder}
          className="mb-6 w-full rounded-2xl border border-orange-400/30 bg-orange-400/10 px-4 py-3 text-left text-sm text-orange-100 transition hover:border-orange-400/60 hover:bg-orange-400/20"
        >
          Keranjang saat ini: {summary} (klik untuk checkout)
        </button>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const inCart = cart.find((cartItem) => cartItem.id === item.id);
          return (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(255,122,26,0.2)]"
            >
              <MenuImageCarousel
                images={
                  item.images && item.images.length > 0
                    ? item.images
                    : [item.image]
                }
                alt={item.name}
                badge={item.badge}
              />
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
