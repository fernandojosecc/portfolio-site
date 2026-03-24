"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "work" },
    { href: "#about", label: "about" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--cream)",
        borderBottom: "1.5px solid var(--ink)",
        padding: "16px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="responsive-padding"
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "20px",
          fontWeight: 600,
          textDecoration: "none",
          color: "var(--ink)",
        }}
      >
        <span style={{ fontWeight: 700 }}>Fernando</span>
        <span
          style={{
            fontStyle: "italic",
            color: "var(--yellow)",
            fontWeight: 600,
          }}
        >
          C.
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          fontSize: "13px",
          textTransform: "lowercase",
          letterSpacing: "0.5px",
        }}
        className="hide-mobile"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: "var(--ink-mid)",
              transition: "color 0.15s ease-out",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12px",
          color: "var(--ink-mid)",
        }}
        className="hide-mobile"
      >
        <span className="status-dot" />
        <span>Open to opportunities</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          padding: "8px",
          cursor: "pointer",
        }}
        className="mobile-menu-btn cursor-hover"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "var(--ink)",
            marginBottom: "6px",
            transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            transition: "transform 0.2s ease-out",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "var(--ink)",
            marginBottom: "6px",
            opacity: isMenuOpen ? 0 : 1,
            transition: "opacity 0.2s ease-out",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "var(--ink)",
            transform: isMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            transition: "transform 0.2s ease-out",
          }}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--cream)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            zIndex: 99,
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontSize: "24px",
                fontFamily: "var(--font-playfair)",
                color: "var(--ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--ink-light)",
                paddingBottom: "12px",
              }}
              className="cursor-hover"
            >
              {link.label}
            </Link>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "var(--ink-mid)",
              marginTop: "16px",
            }}
          >
            <span className="status-dot" />
            <span>Open to opportunities</span>
          </div>
        </div>
      )}
    </nav>
  );
}
