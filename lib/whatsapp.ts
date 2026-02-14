import { CartItem, formatRupiah } from './menu';

export type CustomerInfo = {
  name: string;
  whatsapp: string;
  address: string;
  method: 'Ambil Sendiri' | 'Antar';
  notes: string;
};

export const buildWhatsAppMessage = (
  cart: CartItem[],
  customer: CustomerInfo,
  subtotal: number,
) => {
  const lines = cart.map(
    (item) =>
      `- ${item.name} x${item.qty} = ${formatRupiah(item.price * item.qty)}`,
  );

  return [
    'Halo Kak, saya mau pesan:',
    lines.length > 0 ? lines.join('\n') : '- (Belum ada item)',
    `Total: ${formatRupiah(subtotal)}`,
    `Nama: ${customer.name || '-'}`,
    `WA: ${customer.whatsapp || '-'}`,
    `Alamat: ${customer.address || '-'}`,
    `Metode: ${customer.method || '-'}`,
    `Catatan: ${customer.notes || '-'}`,
  ].join('\n');
};

export const buildWhatsAppLink = (number: string, message: string) => {
  const normalized = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
};
