import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { MaxWidth } from "@/components/layout/MaxWidth";
import styles from "@/styles/layout/Section.module.css";

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: "narrow" | "content" | "wide";
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "className">;

export function Section({
  as: Tag = "section",
  children,
  className,
  size = "content",
  ...rest
}: SectionProps) {
  return (
    <Tag className={[styles.section, className].filter(Boolean).join(" ")} {...rest}>
      <MaxWidth size={size}>{children}</MaxWidth>
    </Tag>
  );
}
