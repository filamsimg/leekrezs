"use client";

import { ClipboardList, Flame, MessageCircle } from "lucide-react";

const steps = [
  {
    title: "Pilih Menu",
    description: "Tambah menu favorit ke keranjang kamu.",
    icon: Flame,
  },
  {
    title: "Isi Data Pemesanan",
    description: "Lengkapi nama, WhatsApp, dan alamat pengantaran.",
    icon: ClipboardList,
  },
  {
    title: "Konfirmasi via WhatsApp",
    description: "Kirim detail pesanan untuk proses cepat.",
    icon: MessageCircle,
  },
];

export default function Steps() {
  return (
    <section id="cara-pesan" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Cara Pesan
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          3 Langkah Cepat
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 transition hover:border-orange-400/40"
          >
            <step.icon className="mb-4 h-8 w-8 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-white/70">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
