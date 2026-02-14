export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  badge?: string;
};

export type CartItem = MenuItem & {
  qty: number;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'lele-bumbu-6',
    name: 'Lele Bumbu 1 Kg (Isi 6)',
    price: 35000,
    image: '/food/lele-bumbu2.webp',
    images: ['/food/lele-bumbu2.webp', '/food/lele-bumbu.webp'],
  },
  {
    id: 'lele-bumbu-7',
    name: 'Lele Bumbu 1 Kg (Isi 7)',
    price: 35000,
    image: '/food/lele-bumbu2.webp',
    images: ['/food/lele-bumbu2.webp', '/food/lele-bumbu.webp'],
  },
  {
    id: 'lele-bumbu',
    name: 'Lele Bumbu 1 Kg (Isi 8)',
    price: 35000,
    image: '/food/lele-bumbu2.webp',
    images: ['/food/lele-bumbu2.webp', '/food/lele-bumbu.webp'],
    badge: 'Best Choice',
  },
  {
    id: 'lele-bumbu-9',
    name: 'Lele Bumbu 1 Kg (Isi 9)',
    price: 35000,
    image: '/food/lele-bumbu2.webp',
    images: ['/food/lele-bumbu2.webp', '/food/lele-bumbu.webp'],
  },
  {
    id: 'lele-bumbu-10',
    name: 'Lele Bumbu 1 Kg (Isi 10)',
    price: 35000,
    image: '/food/lele-bumbu2.webp',
    images: ['/food/lele-bumbu2.webp', '/food/lele-bumbu.webp'],
  },
  {
    id: 'nasi-lele-kremes',
    name: 'Nasi Lele Kremes',
    price: 10000,
    image: '/food/lele-kremes1.webp',
    images: [
      '/food/lele-kremes1.webp',
      '/food/lele-kremes2.webp',
      '/food/lele-kremes3.webp',
    ],
    badge: 'Best Seller',
  },
  {
    id: 'kremes-100',
    name: 'Kremes Isi 100gr',
    price: 10000,
    image: '/food/Kremesan.webp',
    images: ['/food/Kremesan.webp'],
  },
  {
    id: 'kremes-200',
    name: 'Kremes Isi 200gr',
    price: 20000,
    image: '/food/Kremesan.webp',
    images: ['/food/Kremesan.webp'],
  },
  {
    id: 'kremes-250',
    name: 'Kremes Isi 250gr',
    price: 25000,
    image: '/food/Kremesan.webp',
    images: ['/food/Kremesan.webp'],
  },
  {
    id: 'nasi-ayam-bakar',
    name: 'Nasi Ayam Bakar',
    price: 10000,
    image: '/food/nasi-ayam-bakar.webp',
    images: ['/food/nasi-ayam-bakar.webp'],
    badge: 'Smoky',
  },
];

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
