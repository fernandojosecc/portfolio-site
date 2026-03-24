"use client";

import Link from "next/link";

const contactLinks = [
  {
    icon: "@",
    label: "Email",
    value: "fernandorodasc1@gmail.com",
    href: "mailto:fernandorodasc1@gmail.com",
  },
  {
    icon: "gh",
    label: "GitHub",
    value: "github.com/fernandojosecc",
    href: "https://github.com/fernandojosecc",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "fernandocontreras.dev",
    href: "https://fernandocontreras.dev",
  },
];

const exploringItems = ["Agents", "Fine-tuning", "Multimodal", "MLOps"];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "64px 48px",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--ink-light)",
          marginBottom: "48px",
        }}
      >
        02 — Get in Touch
      </div>

      {/* Two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Left column */}
        <div>
          {/* Headline */}
          <h2 style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1 }}>
              Let&apos;s build
            </div>
            <div style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1 }}>
              something{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>great.</span>
                <span
                  style={{
                    position: "absolute",
                    inset: "-4px -10px -8px -6px",
                    backgroundColor: "var(--yellow)",
                    transform: "rotate(-0.5deg)",
                    zIndex: 0,
                  }}
                />
              </span>
            </div>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--ink-mid)",
              maxWidth: "400px",
              marginBottom: "48px",
            }}
          >
            I&apos;m actively looking for AI engineering roles, internships,
            and collaborative projects in AI and software development. If
            you&apos;re building something interesting, let&apos;s talk.
          </p>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  border: "1.5px solid var(--ink-light)",
                  transition: "all 0.15s ease-out",
                }}
                className="cursor-hover"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--yellow)";
                  e.currentTarget.style.backgroundColor = "var(--yellow-pale)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-light)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1.5px solid var(--ink-light)",
                    fontSize: "12px",
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  {link.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      color: "var(--ink-light)",
                      marginBottom: "2px",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--ink)",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right column - Glassmorphism card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "32px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {/* Current status label */}
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--ink-light)",
                marginBottom: "16px",
              }}
            >
              Current status
            </div>

            {/* Status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                Available for opportunities
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "var(--ink-light)",
                opacity: 0.3,
                marginBottom: "24px",
              }}
            />

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    fontFamily: "var(--font-playfair)",
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-mid)",
                    marginTop: "4px",
                  }}
                >
                  App in production
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    fontFamily: "var(--font-playfair)",
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-mid)",
                    marginTop: "4px",
                  }}
                >
                  Languages (EN / ES)
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    fontFamily: "var(--font-playfair)",
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-mid)",
                    marginTop: "4px",
                  }}
                >
                  Projects planned
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "var(--ink-light)",
                opacity: 0.3,
                marginBottom: "24px",
              }}
            />

            {/* Currently exploring */}
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--ink-light)",
                marginBottom: "12px",
              }}
            >
              Currently exploring
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {exploringItems.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid var(--ink-light)",
                    fontSize: "12px",
                    color: "var(--ink-mid)",
                    borderRadius: "4px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
