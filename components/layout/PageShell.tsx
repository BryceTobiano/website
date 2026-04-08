import type { ReactNode } from "react";
import styles from "@/styles/layout/PageShell.module.css";

type PageShellProps = {
  children: ReactNode;
  footer?: ReactNode;
  sidebar: ReactNode;
};

export function PageShell({ children, footer, sidebar }: PageShellProps) {
  return (
    <div className={styles.viewport}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <div className={styles.mainColumn}>
        <main className={styles.main}>{children}</main>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  );
}
