/**
 * Presents one catalog item with detail and WhatsApp actions.
 * Not responsible for pricing, inventory, or image sourcing.
 */
import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/products";

import { ArrowIcon, WhatsAppIcon } from "./Icons";
import styles from "./ProductCard.module.css";
import WhatsAppLink from "./WhatsAppLink";

type ProductCardProps = { product: Product };

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <Link className={styles.imageLink} href={`/urunler/${product.slug}`}>
        <Image
          className={styles.image}
          src={product.image}
          alt={product.imageAlt}
          width={800}
          height={920}
        />
        {product.isPlaceholder && (
          <span className={styles.placeholder}>Temsili görsel</span>
        )}
      </Link>
      <div className={styles.body}>
        <span className={styles.occasion}>{product.occasion}</span>
        <h3>
          <Link href={`/urunler/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.shortDescription}</p>
        <div className={styles.actions}>
          <WhatsAppLink
            className={styles.order}
            productName={product.name}
            ariaLabel={`${product.name} için WhatsApp'tan yaz`}
          >
            <WhatsAppIcon />
            WhatsApp'tan yaz
          </WhatsAppLink>
          <Link className={styles.detail} href={`/urunler/${product.slug}`}>
            İncele <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
