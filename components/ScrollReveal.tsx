"use client";

import { useEffect } from "react";

/**
 * Re-implements the original site's reveal-on-scroll behaviour: every element
 * with the `reveal` class fades/slides in once it enters the viewport.
 * Mounted once near the root so it can observe the whole page.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
