"use client";

import { LOCATION_ADDRESS, OPEN_HOURS } from "@/lib/constants";

export default function LocationHours() {
  return (
    <section id="lokasi" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Lokasi & Jam
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Datang atau Order Delivery
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Alamat</h3>
          <p className="mt-2 text-sm text-white/70">{LOCATION_ADDRESS}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Jam Operasional</h3>
          <ul className="mt-2 space-y-2 text-sm text-white/70">
            {OPEN_HOURS.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
