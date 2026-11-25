"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#projects", id: "projects", label: "Work" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Navbar({ home = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!home) return;
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="site-logo" aria-label="Fernando Contreras, home">
        <span style={{ fontWeight: 700 }}>Fernando</span>
        <span style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 600 }}>C.</span>
      </Link>

      <div className="site-nav-links hide-mobile">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`site-nav-link${active === link.id ? " is-active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="site-nav-status hide-mobile">
        <span className="status-dot" />
        <span>Open to opportunities</span>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`mobile-menu-btn cursor-hover${isMenuOpen ? " is-open" : ""}`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href} onClick={() => setIsMenuOpen(false)} className="mobile-menu-link">
              {link.label}
            </Link>
          ))}
          <div className="site-nav-status" style={{ marginTop: 16 }}>
            <span className="status-dot" />
            <span>Open to opportunities</span>
          </div>
        </div>
      )}
    </nav>
  );
}
