import type { ReactNode } from "react";
import styles from "@/styles/layout/MaxWidth.module.css";

type MaxWidthSize = "narrow" | "content" | "wide";

const sizeClassNames: Record<MaxWidthSize, string> = {
  narrow: styles.narrow,
  content: styles.content,
  wide: styles.wide,
};

type MaxWidthProps = {
  children: ReactNode;
  className?: string;
  size?: MaxWidthSize;
};

export function MaxWidth({
  children,
  className,
  size = "content",
}: MaxWidthProps) {
  return (
    <div className={[styles.wrapper, sizeClassNames[size], className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
