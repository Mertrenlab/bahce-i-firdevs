/**
 * Home page composition for discovery, trust, and WhatsApp ordering.
 * Not responsible for owning product or contact data.
 */
import Link from "next/link";

import Hero from "@/components/Hero";
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppLink from "@/components/WhatsAppLink";
import { brand } from "@/data/brand";
import { products } from "@/data/products";

import styles from "./page.module.css";
import narrative from "./narrative.module.css";

const steps = [
  ["01", "Çiçeğini seç", "Koleksiyondan duyguna en yakın çiçeği keşfet."],
  [
    "02",
    "WhatsApp'tan yaz",
    "Ürün adı mesajına otomatik eklenir; bize gönder.",
  ],
  ["03", "Birlikte netleştirelim", "Renk, not ve teslimat detayını konuşalım."],
] as const;

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className={styles.featured}>
        <div className={styles.sectionHeading}>
          <div>
            <p>Özenle seçildi</p>
            <h2>Kalbinize dokunanlar</h2>
          </div>
          <Link href="/urunler">
            Tüm çiçekler <ArrowIcon />
          </Link>
        </div>
        <ProductGrid products={products.slice(0, 3)} />
      </section>
      <section className={styles.ordering}>
        <div className={styles.orderIntro}>
          <p>Çok kolay</p>
          <h2>Üç adımda çiçeğiniz hazır</h2>
          <WhatsAppLink>
            <WhatsAppIcon /> Siparişe başla
          </WhatsAppLink>
        </div>
        <div className={styles.steps}>
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={narrative.story}>
        <div className={narrative.storyMark}>BF</div>
        <div>
          <p className={narrative.kicker}>Bahçe-i Firdevs</p>
          <h2>Her çiçek bir duygunun sessiz cümlesidir.</h2>
          <p>
            Kutlamalara, teşekkürlere ve içten gelen tüm anlara taze çiçeklerle
            eşlik ediyoruz. Her siparişi konuşarak, size özel hazırlıyoruz.
          </p>
          <Link href="/hakkimizda">
            Hikâyemizi keşfedin <ArrowIcon />
          </Link>
        </div>
      </section>
      <section className={narrative.instagram}>
        <InstagramIcon />
        <p>
          Yeni aranjmanları ve güncel çalışmalarımızı Instagram&apos;da görün.
        </p>
        <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
          {brand.instagramLabel} <ArrowIcon />
        </a>
      </section>
    </main>
  );
}
