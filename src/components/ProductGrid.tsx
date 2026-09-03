/**
 * Lays out catalog cards without filtering or remote loading.
 * Not responsible for product data ownership.
 */
import type { Product } from "@/data/products";

import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

type ProductGridProps = { products: readonly Product[] };

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
