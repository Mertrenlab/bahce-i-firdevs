/** Brand story page using only verified and intentionally general claims. */
import type { Metadata } from "next";

import PageIntro from "@/components/PageIntro";

import styles from "../info.module.css";

export const metadata: Metadata = {
  title: "Hikâyemiz",
  description: "Bahçe-i Firdevs'in çiçeklere yaklaşımını keşfedin.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="Hikâyemiz"
        title="Çiçeklerin diliyle"
        description="Her duygunun kendine özgü bir rengi, her çiçeğin anlatacak bir hikâyesi olduğuna inanıyoruz."
      />
      <section className={styles.content}>
        <div className={styles.monogram} aria-hidden="true">
          BF
        </div>
        <div className={styles.prose}>
          <h2>Bir buketten daha fazlası</h2>
          <p>
            Bahçe-i Firdevs&apos;te her aranjman, gönderenin duygusuna ve
            alıcının anına eşlik edecek şekilde düşünülür. Hazır kalıplar yerine
            sizinle konuşur, renk ve çiçek seçimini birlikte netleştiririz.
          </p>
          <p>
            Mevsimin sunduğu taze çiçekleri doğal dokularla bir araya getirir;
            sade, zarif ve hatırlanmaya değer bir sonuç hedefleriz.
          </p>
          <div className={styles.values}>
            <article>
              <span>01</span>
              <strong>Taze ve mevsimsel</strong>
            </article>
            <article>
              <span>02</span>
              <strong>Kişiye özel</strong>
            </article>
            <article>
              <span>03</span>
              <strong>Özenli hazırlık</strong>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
