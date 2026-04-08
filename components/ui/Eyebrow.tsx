import type { ReactNode } from "react";
import styles from "@/styles/ui/Eyebrow.module.css";

type EyebrowProps = {
  accent?: boolean;
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ accent = false, children, className }: EyebrowProps) {
  return (
    <p className={[styles.eyebrow, accent ? styles.accent : "", className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}
