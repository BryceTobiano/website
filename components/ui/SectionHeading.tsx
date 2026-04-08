import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "@/styles/ui/SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  hiddenTitle?: boolean;
  id: string;
  title: string;
};

export function SectionHeading({
  eyebrow,
  hiddenTitle = false,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <header className={styles.header}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={hiddenTitle ? styles.hiddenTitle : styles.title} id={id}>
        {title}
      </h2>
    </header>
  );
}
