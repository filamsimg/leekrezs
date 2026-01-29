export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
};

export type CartItem = MenuItem & {
  qty: number;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "lele-bumbu",
    name: "Lele Bumbu",
    price: 35000,
    image: "/food/lele-kremes.jpg",
    badge: "Pedas Favorit",
  },
  {
    id: "nasi-lele-kremes",
    name: "Nasi Lele Kremes",
    price: 10000,
    image: "/food/lele-kremes.jpg",
    badge: "Best Seller",
  },
  {
    id: "kremes-100",
    name: "Kremes Isi 100gr",
    price: 10000,
    image: "/food/lele-kremes.jpg",
  },
  {
    id: "kremes-250",
    name: "Kremes Isi 250gr",
    price: 25000,
    image: "/food/lele-kremes.jpg",
  },
  {
    id: "nasi-ayam-bakar",
    name: "Nasi Ayam Bakar",
    price: 10000,
    image: "/food/lele-kremes.jpg",
    badge: "Smoky",
  },
];

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
