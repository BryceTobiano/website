"use client";

import { useEffect, useMemo, useState } from "react";
import { navGroupsType } from "@/lib/site-content";
import styles from "@/styles/layout/SidebarNav.module.css";

type SidebarNavProps = {
  brand: string;
  groups: navGroupsType;
};

function NavItem({
  href,
  isExternal,
  label,
  onClick,
}: {
  href?: string;
  isExternal?: boolean;
  label: string;
  onClick?: () => void;
}) {
  if (!href) {
    return (
      <span aria-disabled="true" className={styles.placeholder}>
        {label}
      </span>
    );
  }

  return (
    <a
      className={styles.link}
      href={href}
      onClick={onClick}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}

export function SidebarNav({ brand, groups }: SidebarNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileItems = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 961px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.mobileBar}>
        <a className={styles.brand} href="#top">
          {brand}.
        </a>
        <button
          aria-controls="mobile-site-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className={styles.menuIcon} />
        </button>
      </div>

      <div className={styles.desktopSidebar}>
        <a className={styles.brand} href="#top">
          {brand}.
        </a>
        <nav aria-label="Primary" className={styles.nav}>
          {groups.map((group) => (
            <div
              className={styles.group}
              key={group.label ?? group.items.map((item) => item.label).join("-")}
            >
              {group.label ? <p className={styles.groupLabel}>{group.label}</p> : null}
              <div className={styles.items}>
                {group.items.map((item) => (
                  <NavItem
                    href={item.href}
                    isExternal={item.isExternal}
                    key={`${group.label}-${item.label}`}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {isMenuOpen ? (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileOverlayHeader}>
            <a className={styles.brand} href="#top" onClick={() => setIsMenuOpen(false)}>
              {brand}.
            </a>
            <button
              aria-label="Close navigation menu"
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <span className={`${styles.menuIcon} ${styles.menuIconOpen}`} />
            </button>
          </div>
          <nav aria-label="Mobile primary" className={styles.mobileMenu} id="mobile-site-menu">
            {mobileItems.map((item) => (
              <NavItem
                href={item.href}
                isExternal={item.isExternal}
                key={`mobile-${item.label}`}
                label={item.label}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
