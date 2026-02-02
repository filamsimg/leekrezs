"use client";

type Testimonial = {
  name: string;
  message: string;
  time: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mb Rita",
    message: "Lele bumbunya pedas pas, kremesnya renyah banget!",
    time: "10:12",
  },
  {
    name: "Mas Anggit",
    message: "Porsinya mantap, delivery cepat. Mantul.",
    time: "11:03",
  },
  {
    name: "Pak Rudi",
    message: "Kremes isi 250gr bikin nagih, cocok buat rame-rame.",
    time: "12:45",
  },
  {
    name: "Bu Risma",
    message: "Nasi ayam bakarnya gurih, bumbunya meresap.",
    time: "13:20",
  },
  {
    name: "Bu Yuni",
    message: "Sistem pesannya gampang, tinggal chat WA.",
    time: "15:05",
  },
  {
    name: "Pak Fauzi",
    message: "Rasanya konsisten, pedasnya nampol!",
    time: "16:40",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300/80">
          Testimoni
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Cuplikan Chat Pelanggan
        </h2>
        <p className="mt-2 text-sm text-white/60">
          Contoh tampilan chat WA (disamarkan) untuk inspirasi.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-400/20 text-sm font-semibold text-orange-200">
                {item.name.split(" ")[1]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">WhatsApp</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl rounded-tl-sm border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80">
              {item.message}
              <div className="mt-2 text-right text-[10px] text-white/40">
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
