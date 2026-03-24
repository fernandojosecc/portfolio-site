"use client";

import Link from "next/link";

export default function Navbar() {
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

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          fontSize: "13px",
          textTransform: "lowercase",
          letterSpacing: "0.5px",
        }}
      >
        <Link
          href="#projects"
          style={{
            color: "var(--ink-mid)",
            transition: "color 0.15s ease-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
        >
          work
        </Link>
        <Link
          href="#about"
          style={{
            color: "var(--ink-mid)",
            transition: "color 0.15s ease-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
        >
          about
        </Link>
        <Link
          href="#contact"
          style={{
            color: "var(--ink-mid)",
            transition: "color 0.15s ease-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
        >
          contact
        </Link>
      </div>

      {/* Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12px",
          color: "var(--ink-mid)",
        }}
      >
        <span className="status-dot" />
        <span>Open to opportunities</span>
      </div>
    </nav>
  );
}
