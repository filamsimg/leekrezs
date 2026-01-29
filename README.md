# NAMAZU Landing Page

Landing page pemesanan brand **NAMAZU** (Next.js App Router + TypeScript + Tailwind CSS).

## Jalankan Project

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Konfigurasi Penting

Ubah nilai berikut di `lib/constants.ts`:

- `WHATSAPP_NUMBER` - nomor WA tujuan (format internasional tanpa +, contoh: `62812xxxx`).
- `LOCATION_ADDRESS` - alamat outlet.
- `OPEN_HOURS` - jam operasional.

## Gambar & Logo

- Logo utama: `public/brand/namazu-logo.png`
- Foto makanan: letakkan gambar di folder `public/food/`.
  - Contoh nama file yang dipakai: `lele-1.png` s/d `lele-12.png`
  - Ganti dengan foto asli agar galeri dan menu tampil nyata.

## Struktur Utama

- `app/layout.tsx` - metadata + font Inter
- `app/page.tsx` - halaman landing
- `components/` - komponen UI utama
- `lib/` - data menu, constants, dan helper WhatsApp

Siap untuk di-deploy atau dikembangkan lebih lanjut.
