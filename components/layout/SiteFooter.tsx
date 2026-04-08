import styles from "@/styles/layout/SiteFooter.module.css";

type SiteFooterProps = {
  quote: string;
};

export function SiteFooter({ quote }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.quote}>{quote}</p>
      </div>
    </footer>
  );
}
