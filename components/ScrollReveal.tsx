"use client";

import { useEffect } from "react";

/**
 * Re-implements the original site's reveal-on-scroll behaviour: every element
 * with the `reveal` class fades/slides in once it enters the viewport.
 * Mounted once near the root so it can observe the whole page.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "#terms") {
      window.location.replace("/terms");
      return;
    }
    if (window.location.pathname === "/" && window.location.hash === "#privacy") {
      window.location.replace("/privacy");
      return;
    }

    const animatedRevealSelector =
      ".card.reveal, .step.reveal, .aud.reveal, .safety-reference-card.reveal, .emergency.reveal, .portal-band.reveal, .partner-card.reveal, .shot.reveal, .testimonial.reveal, .coverage-band.reveal, .contact-card.reveal, .dl-card.reveal, .donate.reveal, .support-link.reveal";
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(animatedRevealSelector)
    );
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

      const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const tiltEls = canTilt
        ? Array.from(
            document.querySelectorAll<HTMLElement>(
              ".card.reveal, .safety-reference-card.reveal, .testimonial.reveal, .shot.reveal, .contact-card.reveal, .dl-card.reveal, .coverage-band.reveal"
            )
          )
        : [];

      const resetTilt = (el: HTMLElement) => {
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
        el.style.setProperty("--tilt-lift", "0px");
      };

      const tiltListeners = tiltEls.map((el) => {
        el.classList.add("interactive-tilt");
        const onMove = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          el.style.setProperty("--tilt-x", `${(-y * 3.5).toFixed(2)}deg`);
          el.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
          el.style.setProperty("--tilt-lift", "-5px");
        };
        const onLeave = () => resetTilt(el);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        return { el, onMove, onLeave };
      });

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
        tiltListeners.forEach(({ el, onMove, onLeave }) => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
          el.classList.remove("interactive-tilt");
          resetTilt(el);
        });
      };
    }
  }, []);

  return null;
}
