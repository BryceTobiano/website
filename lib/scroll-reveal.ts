export type ScrollRevealOptions = {
  once?: boolean;
  root?: Element | null;
  rootMargin?: string;
  selector?: string;
  threshold?: number;
  visibleClassName?: string;
};

const DEFAULT_OPTIONS: Required<ScrollRevealOptions> = {
  once: true,
  root: null,
  rootMargin: "0px 0px -5% 0px",
  selector: "[data-reveal]",
  threshold: 0.10,
  visibleClassName: "is-visible",
};

export function initScrollReveal(options: ScrollRevealOptions = {}) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const settings = { ...DEFAULT_OPTIONS, ...options };
  const elements = Array.from(document.querySelectorAll<HTMLElement>(settings.selector));

  if (!elements.length) {
    return () => {};
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add(settings.visibleClassName);
    });

    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(settings.visibleClassName);

          if (settings.once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!settings.once) {
          entry.target.classList.remove(settings.visibleClassName);
        }
      });
    },
    {
      root: settings.root,
      rootMargin: settings.rootMargin,
      threshold: settings.threshold,
    },
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    observer.disconnect();
  };
}
