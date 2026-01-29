"use client";

import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { LOCATION_ADDRESS, WHATSAPP_NUMBER } from "@/lib/constants";

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
        <div className="inline-flex items-center gap-2 text-sm text-white/70">
          <MessageCircle className="h-4 w-4 text-orange-300" />
          WhatsApp: +{WHATSAPP_NUMBER}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
            <MessageCircle className="h-3.5 w-3.5 text-orange-300" />
            Chat langsung via WhatsApp
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
            <MapPin className="h-3.5 w-3.5 text-orange-300" />
            {LOCATION_ADDRESS}
          </span>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        (c) 2026 NAMAZU. All rights reserved.
      </div>
    </footer>
  );
}
