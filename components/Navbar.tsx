'use client';

import Image from 'next/image';

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Pesan', href: '#pesan' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/namazu-logo.png"
            alt="NAMAZU"
            width={240}
            height={104}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#pesan"
          className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
        >
          Pesan Sekarang
        </a>
      </div>
    </header>
  );
}
