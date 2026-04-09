"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scroll-reveal";

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.dataset.js = "true";

    const cleanup = initScrollReveal();

    return () => {
      cleanup();
      delete document.documentElement.dataset.js;
    };
  }, []);

  return null;
}
