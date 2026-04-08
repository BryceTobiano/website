import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@/styles/ui/Button.module.css";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
