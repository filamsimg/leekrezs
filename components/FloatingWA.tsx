"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWA() {
  const link = buildWhatsAppLink(
    WHATSAPP_NUMBER,
    "Halo Lee KreZs, saya mau tanya menu dan promo hari ini."
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="button-glow fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-black"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
