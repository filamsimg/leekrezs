"use client";

const testimonials = [
  {
    name: "Rina",
    quote: "Lele bumbunya pedas pas, kremesnya renyah banget!",
  },
  {
    name: "Bagus",
    quote: "Porsinya mantap, delivery cepat, mantul!",
  },
  {
    name: "Tika",
    quote: "Kremes isi 250gr bikin nagih, cocok buat rame-rame.",
  },
  {
    name: "Dimas",
    quote: "Nasi ayam bakarnya gurih, bumbunya meresap.",
  },
  {
    name: "Salsa",
    quote: "Sistem pesannya gampang, tinggal isi form.",
  },
  {
    name: "Rafi",
    quote: "Rasanya konsisten, pedasnya nampol!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Testimoni
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Mereka Sudah Coba
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6"
          >
            <p className="text-sm text-white/70">"{item.quote}"</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300/70">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
