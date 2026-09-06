/**
 * Shared editorial heading for secondary pages.
 * Not responsible for route metadata or page actions.
 */
import styles from "./PageIntro.module.css";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <span>{description}</span>
    </header>
  );
}
