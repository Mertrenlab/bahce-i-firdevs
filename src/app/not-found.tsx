/** Friendly recovery for unknown product and page routes. */
import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <p>404</p>
      <h1>Bu çiçek burada değil.</h1>
      <p>Aradığınız sayfa taşınmış veya henüz açmamış olabilir.</p>
      <Link href="/urunler">Tüm çiçeklere dönün</Link>
    </main>
  );
}
