'use client';

import Image from 'next/image';

type HeroProps = {
  whatsappLink: string;
};

export default function Hero({ whatsappLink }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/food/lele-kremes.webp"
          alt="Lee KreZs background"
          fill
          priority
          className="hero-bg-animate object-cover object-center opacity-75 scale-110 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/10" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-12 px-4 pb-16 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6">
          <div className="hero-fade-in flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-orange-300/80">
            <span className="rounded-full border border-orange-400/40 px-3 py-1">
              Fresh
            </span>
            <span className="rounded-full border border-orange-400/40 px-3 py-1">
              Kremes Renyah
            </span>
            <span className="rounded-full border border-orange-400/40 px-3 py-1">
              Pickup/Delivery
            </span>
          </div>
          <h1 className="hero-fade-in hero-fade-in-delay-1 text-balance text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lele Bumbu & Kremes Renyah
          </h1>
          <p className="hero-fade-in hero-fade-in-delay-2 max-w-xl text-lg text-white/70">
            Pedasnya nampol, kremesnya crunchy. Pesan cepat lewat form atau
            WhatsApp, tinggal pilih favoritmu.
          </p>
          <div className="hero-fade-in hero-fade-in-delay-3 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pesan"
              className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Pesan Sekarang
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-orange-400/60 hover:text-white"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          <div className="rounded-2xl border border-amber-400/30 bg-zinc-900/60 p-3">
            <Image
              src="/food/lele-kremes.webp"
              alt="Lele bumbu pedas"
              width={480}
              height={360}
              className="h-40 w-full rounded-xl object-cover sm:h-52"
              priority
            />
          </div>
          <div className="rounded-2xl border border-amber-400/30 bg-zinc-900/60 p-3">
            <Image
              src="/food/lele-kremes.webp"
              alt="Kremes renyah"
              width={480}
              height={360}
              className="h-40 w-full rounded-xl object-cover sm:h-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
