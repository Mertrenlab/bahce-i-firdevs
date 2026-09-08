/**
 * Introduces the brand and the primary flower-ordering journey.
 * Not responsible for product selection or campaign promises.
 */
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, WhatsAppIcon } from "./Icons";
import styles from "./Hero.module.css";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Bir duygu, bir çiçek</p>
        <h1>
          Kalpten gelen <em>çiçekler.</em>
        </h1>
        <p className={styles.lead}>
          Sevdiklerinize söylemek istediklerinizi mevsimin en güzel çiçekleriyle
          anlatın. Her aranjman size özel, özenle hazırlanır.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/urunler">
            Çiçekleri keşfet <ArrowIcon />
          </Link>
          <WhatsAppLink className={styles.secondary}>
            <WhatsAppIcon /> WhatsApp&apos;tan yaz
          </WhatsAppLink>
        </div>
        <div className={styles.assurances}>
          <span>
            <i>01</i> Taze çiçekler
          </span>
          <span>
            <i>02</i> Size özel hazırlık
          </span>
          <span>
            <i>03</i> WhatsApp ile kolay sipariş
          </span>
        </div>
      </div>
      <div className={styles.visual} aria-label="Bahçe-i Firdevs resmi logosu">
        <span className={styles.orbit} aria-hidden="true" />
        <div className={styles.logoCard}>
          <Image
            src="/brand/bahce-i-firdevs-logo.png"
            alt="Bahçe-i Firdevs çiçekli BF logosu"
            width={1000}
            height={1000}
            sizes="(max-width: 900px) 90vw, 40vw"
            priority
          />
        </div>
        <p className={styles.signature}>Özenle hazırlandı</p>
      </div>
    </section>
  );
}
