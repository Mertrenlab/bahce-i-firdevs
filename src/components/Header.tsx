/**
 * Global storefront header and primary navigation.
 * Not responsible for catalog search, cart, or account actions.
 */
import Image from "next/image";
import Link from "next/link";

import { brand } from "@/data/brand";
import { buildPhoneUrl } from "@/lib/ordering";

import { PhoneIcon, WhatsAppIcon } from "./Icons";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./Header.module.css";

const navigation = [
  { href: "/urunler", label: "Çiçekler" },
  { href: "/hakkimizda", label: "Hikâyemiz" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export default function Header() {
  return (
    <>
      <div className={styles.announcement}>
        <span>Özenle hazırlanan çiçekler</span>
        <span className={styles.announcementDot}>•</span>
        <span>WhatsApp ile kolay sipariş</span>
      </div>
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Bahçe-i Firdevs ana sayfa"
        >
          <Image
            src="/brand/bahce-i-firdevs-mark.png"
            alt=""
            width={66}
            height={59}
            priority
          />
          <span>{brand.name}</span>
        </Link>
        <nav className={styles.nav} aria-label="Ana menü">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <a
            className={styles.phone}
            href={buildPhoneUrl()}
            aria-label={brand.phoneDisplay}
          >
            <PhoneIcon />
            <span>{brand.phoneDisplay}</span>
          </a>
          <WhatsAppLink
            className={styles.whatsapp}
            ariaLabel="WhatsApp'tan yaz"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </WhatsAppLink>
        </div>
      </header>
    </>
  );
}
