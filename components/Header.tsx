"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="LPG Go" />
        </a>
        <nav className={`nav-links${menuOpen ? " show" : ""}`} id="navLinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#privacy" onClick={closeMenu}>
            Privacy
          </a>
          <a href="#terms" onClick={closeMenu}>
            Terms
          </a>
        </nav>
        <a className="btn app-cta" href="#download" onClick={closeMenu}>
          Get the App
        </a>
        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="svg"
            viewBox="0 0 24 24"
            style={{ width: 28, height: 28 }}
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
