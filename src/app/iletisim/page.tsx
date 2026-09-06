/** Contact page exposing the three verified communication channels. */
import type { Metadata } from "next";

import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import PageIntro from "@/components/PageIntro";
import WhatsAppLink from "@/components/WhatsAppLink";
import { brand } from "@/data/brand";
import { buildPhoneUrl } from "@/lib/ordering";

import styles from "../info.module.css";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Bahçe-i Firdevs'e WhatsApp, telefon veya Instagram üzerinden ulaşın.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="Buradayız"
        title="Birlikte hazırlayalım"
        description="Çiçeğiniz, renk tercihiniz, notunuz ve teslimat detayları için bize dilediğiniz kanaldan ulaşın."
      />
      <section className={styles.contactGrid}>
        <article className={styles.contactCard}>
          <WhatsAppIcon />
          <div>
            <h2>WhatsApp</h2>
            <p>En hızlı sipariş ve ürün bilgi kanalı.</p>
          </div>
          <WhatsAppLink>Mesaj gönderin</WhatsAppLink>
        </article>
        <article className={styles.contactCard}>
          <PhoneIcon />
          <div>
            <h2>Telefon</h2>
            <p>Doğrudan arayarak bilgi alabilirsiniz.</p>
          </div>
          <a href={buildPhoneUrl()}>{brand.phoneDisplay}</a>
        </article>
        <article className={styles.contactCard}>
          <InstagramIcon />
          <div>
            <h2>Instagram</h2>
            <p>Güncel çalışmalarımızı ve yeni çiçekleri görün.</p>
          </div>
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
            {brand.instagramLabel}
          </a>
        </article>
      </section>
    </main>
  );
}
