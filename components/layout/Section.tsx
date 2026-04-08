import type { ElementType, ReactNode } from "react";
import { MaxWidth } from "@/components/layout/MaxWidth";
import styles from "@/styles/layout/Section.module.css";

type SectionProps = {
  "aria-labelledby"?: string;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "narrow" | "content" | "wide";
};

export function Section({
  "aria-labelledby": ariaLabelledBy,
  as: Tag = "section",
  children,
  className,
  id,
  size = "content",
}: SectionProps) {
  return (
    <Tag
      aria-labelledby={ariaLabelledBy}
      className={[styles.section, className].filter(Boolean).join(" ")}
      id={id}
    >
      <MaxWidth size={size}>{children}</MaxWidth>
    </Tag>
  );
}
