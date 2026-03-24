"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "24px 48px",
        borderTop: "1.5px solid var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "13px",
      }}
    >
      {/* Left */}
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          color: "var(--ink-mid)",
        }}
      >
        Fernando Contreras
      </div>

      {/* Center */}
      <div style={{ color: "var(--ink-light)", fontSize: "12px" }}>
        fernandocontreras.dev · 2025
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "16px",
            height: "2px",
            backgroundColor: "var(--yellow)",
          }}
        />
        <span
          style={{
            fontSize: "12px",
            color: "var(--ink-mid)",
            fontStyle: "italic",
            fontFamily: "var(--font-playfair)",
          }}
        >
          commit to change
        </span>
      </div>
    </footer>
  );
}
