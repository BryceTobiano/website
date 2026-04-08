import type { ReactNode } from "react";
import styles from "@/styles/ui/Badge.module.css";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
