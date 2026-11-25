"use client";

import { useState } from "react";

const EMAIL = "fernandorodasc1@gmail.com";

const contactLinks = [
  { label: "GitHub", value: "github.com/fernandojosecc", href: "https://github.com/fernandojosecc" },
  { label: "LinkedIn", value: "linkedin.com/in/fernandojosecontreras", href: "https://www.linkedin.com/in/fernandojosecontreras/" },
];

const stats = [
  ["2", "Apps on the App Store"],
  ["2", "Languages (EN / ES)"],
  ["3", "AI projects live"],
];

const exploringItems = ["Agents", "Fine-tuning", "Multimodal", "MLOps"];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="contact responsive-padding">
      <div className="eyebrow reveal" style={{ marginBottom: 56 }}>02 — Get in touch</div>

      <div className="contact-grid responsive-grid">
        <div className="reveal">
          <h2 className="contact-title">
            Let&apos;s build
            <br />
            something <span className="contact-mark">great.</span>
          </h2>

          <p className="contact-copy">
            I&apos;m actively looking for software engineering and AI roles,
            internships, and collaborative projects. If you&apos;re building
            something interesting, let&apos;s talk.
          </p>

          <a href={`mailto:${EMAIL}`} className="contact-email cursor-hover">
            <span>{EMAIL}</span>
            <span className="contact-arrow">↗</span>
          </a>
          <button type="button" onClick={copyEmail} className="contact-copy-btn cursor-hover" aria-live="polite">
            {copied ? "Copied ✓" : "Copy email"}
          </button>

          <div className="contact-rows">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-row cursor-hover">
                <span className="eyebrow">{link.label}</span>
                <span className="contact-row-value">{link.value}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <div className="status-card">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Current status</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="status-dot" />
              <span style={{ fontSize: 17, fontWeight: 500 }}>Available for opportunities</span>
            </div>

            <div className="status-stats">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <div className="status-num">{n}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-mid)", marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="eyebrow" style={{ marginBottom: 14 }}>Currently exploring</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {exploringItems.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
