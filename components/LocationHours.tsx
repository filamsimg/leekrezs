"use client";

import { LOCATION_ADDRESS, MAPS_EMBED_URL, OPEN_HOURS } from "@/lib/constants";

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
      <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Alamat & Jam</h3>
          <p className="text-sm text-white/70">{LOCATION_ADDRESS}</p>
          <ul className="space-y-1 text-sm text-white/70">
            {OPEN_HOURS.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 w-full overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Google Maps NAMAZU"
            src={MAPS_EMBED_URL}
            className="h-60 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
