/**
 * Composes one flower detail with a product-specific contact action.
 * Not responsible for availability promises or transaction handling.
 */
import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/products";
import { buildPhoneUrl } from "@/lib/ordering";

import { PhoneIcon, WhatsAppIcon } from "./Icons";
import styles from "./ProductDetail.module.css";
import WhatsAppLink from "./WhatsAppLink";

type ProductDetailProps = { product: Product };

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Sayfa yolu">
        <Link href="/">Ana sayfa</Link>
        <span>/</span>
        <Link href="/urunler">Çiçekler</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <section className={styles.detail}>
        <div className={styles.visual}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={800}
            height={920}
            priority
          />
          {product.isPlaceholder && (
            <span className={styles.placeholder}>Temsili görsel</span>
          )}
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{product.occasion}</p>
          <h1>{product.name}</h1>
          <p className={styles.lead}>{product.description}</p>
          <div className={styles.priceNote}>
            <span>Güncel bilgi</span>
            <strong>Fiyat ve teslimat için bize yazın</strong>
          </div>
          <div className={styles.actions}>
            <WhatsAppLink className={styles.primary} productName={product.name}>
              <WhatsAppIcon />
              WhatsApp&apos;tan Sipariş Ver
            </WhatsAppLink>
            <a className={styles.secondary} href={buildPhoneUrl()}>
              <PhoneIcon />
              Telefonla ara
            </a>
          </div>
          <ul className={styles.notes}>
            <li>Mevsimin en taze çiçekleriyle hazırlanır</li>
            <li>Renk ve içerik stok durumuna göre birlikte netleştirilir</li>
            <li>Kişisel notunuzu sipariş sırasında paylaşabilirsiniz</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
