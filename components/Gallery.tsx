"use client";

import Image from "next/image";

const galleryImages = Array.from({ length: 12 }, () => "/food/lele-kremes.jpg");

export default function Gallery() {
  return (
    <section id="galeri" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Galeri
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Langsung Bikin Lapar
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60"
          >
            <Image
              src={src}
              alt={`Galeri NAMAZU ${index + 1}`}
              width={500}
              height={420}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
