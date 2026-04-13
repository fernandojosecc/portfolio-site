"use client";

import Terminal from "./Terminal";

const stackItems = [
  "Python",
  "OpenAI API",
  "Flask",
  "LangChain",
  "FastAPI",
  "AWS",
  "Pinecone",
  "Agents",
  "Prompt Engineering",
];

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1.5px solid var(--ink)",
      }}
      className="responsive-grid"
    >
      {/* Left column */}
      <div
        style={{
          padding: "64px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1.5px solid var(--ink)",
        }}
        className="responsive-padding"
      >
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "var(--yellow)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--ink-mid)",
              }}
            >
              AI Tools Specialist · Bilingual EN/ES
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.05 }} className="responsive-headline">
              Building
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 600,
                fontStyle: "italic",
                lineHeight: 1.05,
                color: "var(--ink-mid)",
              }}
              className="responsive-headline"
            >
              intelligent
            </div>
            <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.05 }} className="responsive-headline">
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  systems.
                </span>
                <span
                  style={{
                    position: "absolute",
                    inset: "-2px -12px -8px -8px",
                    backgroundColor: "var(--yellow)",
                    transform: "rotate(-0.5deg)",
                    zIndex: 0,
                  }}
                />
              </span>
            </div>
          </h1>

          {/* Bio */}
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--ink-mid)",
              maxWidth: "420px",
              marginBottom: "32px",
            }}
          >
            I'm a software development student with a focus on AI engineering. I
            build real tools — chatbots, RAG pipelines, and autonomous agents —
            with a bias toward shipping things that actually work. Bilingual
            EN/ES, based in California.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href="#projects"
              style={{
                backgroundColor: "var(--ink)",
                color: "var(--cream)",
                padding: "12px 24px",
                fontSize: "13px",
                fontWeight: 500,
                transition: "all 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--yellow)";
                e.target.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "var(--ink)";
                e.target.style.color = "var(--cream)";
              }}
            >
              View my work
            </a>
            <a
              href="https://github.com/fernandojosecc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--ink)",
                fontSize: "13px",
                borderBottom: "1.5px solid var(--ink-light)",
                paddingBottom: "2px",
                transition: "border-color 0.15s ease-out",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderColor = "var(--ink)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderColor = "var(--ink-light)")
              }
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Stack pills */}
        <div style={{ marginTop: "48px" }}>
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--ink-light)",
              marginBottom: "12px",
            }}
          >
            Core stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {stackItems.map((item) => (
              <span key={item} className="pill cursor-hover">
                {item}
              </span>
            ))}
            <span className="pill cursor-hover">Bilingual EN/ES</span>
          </div>
        </div>
      </div>

      {/* Right column - Terminal */}
      <div
        style={{
          backgroundColor: "var(--ink)",
        }}
      >
        <Terminal />
      </div>
    </section>
  );
}
