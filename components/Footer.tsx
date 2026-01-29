"use client";

import Image from "next/image";
import { SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/namazu-logo.png"
            alt="NAMAZU"
            width={240}
            height={104}
            className="h-12 w-auto sm:h-14"
            priority
          />
          <div>
            <p className="text-sm font-semibold text-white">NAMAZU</p>
            <p className="text-xs text-white/50">Lele bumbu & kremes renyah</p>
          </div>
        </div>
        <div className="text-sm text-white/70">WhatsApp: +{WHATSAPP_NUMBER}</div>
        <div className="flex flex-wrap gap-4 text-xs text-white/60">
          {SOCIAL_LINKS.map((link) => (
            <span key={link.label}>
              {link.label}: {link.value}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        (c) 2026 NAMAZU. All rights reserved.
      </div>
    </footer>
  );
}
