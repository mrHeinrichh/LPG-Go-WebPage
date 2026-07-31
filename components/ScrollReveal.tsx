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
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
    } else {
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

      const updateParallax = () => {
        const viewportCenter = window.innerHeight / 2;
        parallaxEls.forEach((el) => {
          const factor = Number(el.dataset.parallax ?? 0);
          const rect = el.getBoundingClientRect();
          const distance = rect.top + rect.height / 2 - viewportCenter;
          const offset = Math.max(-48, Math.min(48, distance * factor));
          el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
        });
      };

      let frame = 0;
      const requestParallaxUpdate = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          updateParallax();
          frame = 0;
        });
      };

      updateParallax();
      window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
      window.addEventListener("resize", requestParallaxUpdate);

      return () => {
        io.disconnect();
        window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", requestParallaxUpdate);
        window.removeEventListener("resize", requestParallaxUpdate);
      };
    }
  }, []);

  return null;
}
