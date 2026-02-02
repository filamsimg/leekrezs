"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      try {
        const response = await fetch("/api/food-images");
        if (!response.ok) {
          throw new Error("Gagal memuat gambar galeri.");
        }
        const data = (await response.json()) as { images?: string[] };
        if (isMounted) {
          setImages(Array.isArray(data.images) ? data.images : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
        }
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

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
      {error && (
        <p className="rounded-2xl border border-orange-400/30 bg-orange-400/10 px-4 py-3 text-sm text-orange-100">
          {error}
        </p>
      )}
      {!error && images.length === 0 && (
        <p className="text-sm text-white/60">
          Gambar galeri belum tersedia.
        </p>
      )}
      {images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60"
            >
              <Image
                src={src}
                alt={`Galeri Lee KreZs ${index + 1}`}
                width={500}
                height={420}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
