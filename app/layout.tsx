import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee KreZs",
  description:
    "Landing page pemesanan Lee KreZs. Lele bumbu pedas dan kremes renyah, pesan cepat via Google Form atau WhatsApp.",
  openGraph: {
    title: "Lee KreZs | Lele Bumbu & Kremes Renyah",
    description:
      "Pedasnya nampol, kremesnya crunchy. Pesan cepat lewat form atau WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
