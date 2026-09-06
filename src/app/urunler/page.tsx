/** Flower listing route backed by the single typed catalog. */
import type { Metadata } from "next";

import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

import styles from "./urunler.module.css";

export const metadata: Metadata = {
  title: "Çiçekler",
  description: "Bahçe-i Firdevs çiçek koleksiyonunu keşfedin.",
};

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow={`${products.length} özel seçim`}
        title="Çiçekler"
        description="Her aranjman siparişinizden sonra sizinle konuşularak, mevsimin en taze çiçekleriyle hazırlanır."
      />
      <ProductGrid products={products} />
    </main>
  );
}
