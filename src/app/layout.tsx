/**
 * Global document shell and verified brand metadata.
 * Not responsible for route-specific page content.
 */
import type { Metadata, Viewport } from "next";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { brand } from "@/data/brand";
import { siteUrl } from "@/lib/site-url";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: brand.name, template: `%s | ${brand.name}` },
  description:
    "Bahçe-i Firdevs çiçeklerini keşfedin, seçtiğiniz ürün için WhatsApp üzerinden kolayca sipariş verin.",
  icons: { icon: "/brand/bahce-i-firdevs-mark.png" },
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    locale: "tr_TR",
    type: "website",
    images: ["/brand/bahce-i-firdevs-logo.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#18372c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
