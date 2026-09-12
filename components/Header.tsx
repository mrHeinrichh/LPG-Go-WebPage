"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { Menu, X } from "lucide-react";

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
        <a className="brand" href="/#home" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="LPG Go" />
          <span>LPG<span className="brand-go">GO</span></span>
        </a>
        <nav className={`nav-links${menuOpen ? " show" : ""}`} id="navLinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="/privacy" onClick={closeMenu}>
            Privacy
          </a>
          <a href="/terms" onClick={closeMenu}>
            Terms
          </a>
        </nav>
        <a className="btn app-cta" href="/#download" onClick={closeMenu}>
          Get the App
        </a>
        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
