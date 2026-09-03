/**
 * Keeps the primary contact action reachable on every viewport.
 * Not responsible for product-specific messaging.
 */
import { WhatsAppIcon } from "./Icons";
import styles from "./FloatingWhatsApp.module.css";
import WhatsAppLink from "./WhatsAppLink";

export default function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      className={styles.button}
      ariaLabel="WhatsApp'tan sipariş ver"
    >
      <WhatsAppIcon />
      <span>WhatsApp&apos;tan yaz</span>
    </WhatsAppLink>
  );
}
