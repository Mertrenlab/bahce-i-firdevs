/**
 * Global footer with verified public contact channels.
 * Not responsible for legal claims or unverified address details.
 */
import Image from "next/image";
import Link from "next/link";

import { brand } from "@/data/brand";
import { buildPhoneUrl } from "@/lib/ordering";

import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import styles from "./Footer.module.css";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Image
            src="/brand/bahce-i-firdevs-mark.png"
            alt="Bahçe-i Firdevs monogramı"
            width={126}
            height={112}
          />
          <p>{brand.tagline}</p>
        </div>
        <div className={styles.column}>
          <h2>Keşfet</h2>
          <Link href="/urunler">Tüm çiçekler</Link>
          <Link href="/hakkimizda">Hikâyemiz</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
        <div className={styles.column}>
          <h2>Bize ulaşın</h2>
          <WhatsAppLink>
            <WhatsAppIcon /> WhatsApp&apos;tan yazın
          </WhatsAppLink>
          <a href={buildPhoneUrl()} aria-label={brand.phoneDisplay}>
            <PhoneIcon /> {brand.phoneDisplay}
          </a>
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon /> {brand.instagramLabel}
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} {brand.name}
        </span>
        <span>Çiçekler mevsim ve stok durumuna göre değişebilir.</span>
      </div>
    </footer>
  );
}
