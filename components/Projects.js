"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// All projects: AI apps, hardware builds, games — finished or in progress.
// Projects with `hidden: true` are kept here but not shown on the site.
// Preview panel: `slides` is a list of pictures that crossfade while the project is shown.
// A slide is { src } (fills the panel) or { phones: [src, src, src] } (portrait screenshots side by side).
// `year` is optional; leave it null to hide it.
const allProjects = [
  {
    id: "pomopal",
    title: "Pomopal",
    category: "apps",
    status: "live",
    year: "2026",
    description:
      "A Pomodoro focus timer for iPhone and iPad. Finished sessions raise a pixel-art pet and fill a farm. Strict mode, stats, badges, a Lock Screen timer and optional cloud sync.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "RevenueCat"],
    slides: [
      { src: "/pomopal/ipad-farm.jpg" },
      { phones: ["/pomopal/phone-01-focus.jpg", "/pomopal/phone-03-pets.jpg", "/pomopal/phone-04-achievements.jpg"] },
    ],
    links: [
      { label: "App Store ↗", href: "https://apps.apple.com/us/app/pomopal-pomodoro-pet-timer/id6830915125", external: true },
      { label: "Details →", href: "/pomopal" },
    ],
  },
  {
    id: "sketchshelf",
    title: "Sketchshelf",
    category: "apps",
    status: "live",
    year: "2026",
    description:
      "A sketchbook library for iPhone and iPad. Open a book, turn its pages, draw and collage, then put it back on the shelf. Everything stays on your device.",
    stack: ["React Native", "Expo", "TypeScript", "Skia"],
    slides: [
      { src: "/sketchshelf/ipad-gallery.jpg" },
      { phones: ["/sketchshelf/phone-01-library.jpg", "/sketchshelf/phone-04-open-book.jpg", "/sketchshelf/phone-05-canvas.jpg"] },
    ],
    links: [
      { label: "App Store ↗", href: "https://apps.apple.com/us/app/sketchshelf/id6838025633", external: true },
      { label: "Details →", href: "/sketchshelf" },
    ],
  },
  {
    id: "bilingual-chatbot",
    title: "Bilingual AI Chatbot",
    category: "ai",
    status: "live",
    year: "2025",
    description:
      "Conversational AI that responds in both English and Spanish. Built with Python, Flask, and the OpenAI API.",
    stack: ["Python", "Flask", "OpenAI", "Railway"],
    link: "https://web-production-a3065.up.railway.app/",
    github: "https://github.com/fernandojosecc/bilingual-chatbot",
  },
  {
    id: "rag-assistant",
    title: "RAG Document Assistant",
    category: "ai",
    status: "live",
    year: "2025",
    description:
      "Upload any PDF and ask questions about it in English and Spanish. Powered by LangChain, Claude API, and Pinecone vector search.",
    stack: ["Python", "FastAPI", "LangChain", "Claude API", "Pinecone", "Next.js"],
    link: "https://rag-assistant-ui.vercel.app/",
    github: "https://github.com/fernandojosecc/rag-assistant-api",
  },
  {
    id: "research-agent",
    title: "AI Research Agent",
    category: "ai",
    status: "live",
    year: "2025",
    description:
      "Autonomous agent that researches any topic and writes structured reports with sources, using LangChain tool use, Tavily web search, and Claude.",
    stack: ["Python", "FastAPI", "LangChain", "Claude API", "Tavily", "Next.js"],
    link: "https://research-agent-ui-pi.vercel.app",
    github: "https://github.com/fernandojosecc/research-agent-api",
  },
  {
    id: "bmo-cyberdeck",
    title: "BMO Cyberdeck",
    category: "hardware",
    status: "built",
    year: "2026",
    description:
      "A handmade cyberdeck built inside a BMO-inspired case — a portable computer with a personality.",
    stack: ["Raspberry Pi 5", "Ollama", "whisper.cpp", "Piper", "RetroArch"],
    slides: [{ src: "/projects/bmo-cyberdeck.gif" }],
    thumb: "/projects/bmo-cyberdeck-poster.jpg", // light still used on small screens
    links: [{ label: "Details →", href: "/bmo-cyberdeck" }],
  },
];

const projects = allProjects.filter((p) => !p.hidden);

const allFilters = [
  { key: "all", label: "All" },
  { key: "apps", label: "Mobile apps" },
  { key: "ai", label: "AI apps" },
  { key: "hardware", label: "Hardware" },
  { key: "games", label: "Games" },
];

// Only show filter chips that have at least one project.
const filters = allFilters.filter(
  (f) => f.key === "all" || projects.some((p) => p.category === f.key)
);

const categoryLabel = {
  apps: "Mobile app",
  ai: "AI app",
  hardware: "Hardware",
  games: "Game",
};

const statusLabel = {
  live: "Live",
  soon: "Coming soon",
  building: "In progress",
  built: "Built",
};

const SLIDE_MS = 3200;

function SlideContent({ slide, title, priority }) {
  if (slide.phones) {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", padding: "22px", background: "var(--cream-dark)" }}>
        {slide.phones.map((src) => (
          <Image
            key={src}
            src={src}
            alt={title}
            width={640}
            height={1391}
            sizes="160px"
            style={{ height: "100%", width: "auto", borderRadius: "8px", border: "1px solid var(--hair-strong)", boxShadow: "var(--shadow-soft)" }}
          />
        ))}
      </div>
    );
  }
  return (
    <Image
      src={slide.src}
      alt={title}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      unoptimized={slide.src.endsWith(".gif")}
      style={{ objectFit: "cover" }}
    />
  );
}

function Preview({ project }) {
  const slides = project.slides ?? [];
  const [index, setIndex] = useState(0);

  // Cycle through the project's slides while it is shown (skipped for reduced motion).
  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length > 0) {
    return (
      <>
        <div className="proj-preview" style={{ position: "relative", "--slide-ms": `${SLIDE_MS}ms` }}>
          {slides.map((slide, i) => (
            <div
              key={slide.src ?? slide.phones[0]}
              className={i === index ? "proj-slide-img" : undefined}
              style={{ position: "absolute", inset: 0, opacity: i === index ? 1 : 0, transition: "opacity 0.9s var(--ease)" }}
            >
              <SlideContent slide={slide} title={project.title} priority={i === 0} />
            </div>
          ))}
          {slides.length > 1 && (
            <div className="proj-bars">
              {slides.map((_, i) => (
                <span key={i} className={i === index ? "on" : undefined} />
              ))}
            </div>
          )}
        </div>
        <div className="proj-caption">
          <span>{project.title}</span>
          <span>{categoryLabel[project.category]}</span>
        </div>
      </>
    );
  }

  // No image yet: terminal-style card that matches the hero terminal
  return (
    <div className="proj-preview proj-preview-terminal scan-lines">
      <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-red)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-yellow)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-green)" }} />
      </div>
      <div style={{ color: "var(--terminal-green-soft)" }}>$ cat {project.id}/info</div>
      <div style={{ marginTop: "12px", lineHeight: 2 }}>
        <div>
          <span style={{ color: "var(--terminal-blue)" }}>type</span>{"    "}
          {categoryLabel[project.category]}
        </div>
        <div>
          <span style={{ color: "var(--terminal-blue)" }}>status</span>{"  "}
          <span style={{ color: "var(--yellow)" }}>{statusLabel[project.status]}</span>
        </div>
        {project.year && (
          <div>
            <span style={{ color: "var(--terminal-blue)" }}>year</span>{"    "}
            {project.year}
          </div>
        )}
        {project.stack.length > 0 && (
          <div style={{ whiteSpace: "normal" }}>
            <span style={{ color: "var(--terminal-blue)" }}>stack</span>{"   "}
            {project.stack.join(" · ")}
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: "auto",
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: "40px",
          lineHeight: 1.1,
          color: "var(--cream)",
          whiteSpace: "normal",
        }}
      >
        {project.title}
        <span className="blinking-cursor" style={{ marginLeft: "8px" }} />
      </div>
    </div>
  );
}

// Links on a row. Projects can define their own `links`; otherwise use link + github.
const rowLinks = (project) =>
  project.links ?? [
    project.link && { label: "View project ↗", href: project.link, external: true },
    project.github && { label: "GitHub →", href: project.github, external: true },
  ].filter(Boolean);

// Where the title goes: the details page if there is one, otherwise the first link.
const titleLink = (project) => {
  const links = rowLinks(project);
  return links.find((l) => l.label.startsWith("Details")) ?? links[0];
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  // With nothing hovered, show the first project instead of an empty panel.
  const shown = projects.find((p) => p.id === activeId) || visible[0] || null;

  return (
    <section
      id="projects"
      style={{
        padding: "88px 48px 96px",
        borderBottom: "1px solid var(--hair)",
      }}
      className="responsive-padding"
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          paddingBottom: "20px",
          borderBottom: "1px solid var(--hair-strong)",
        }}
      >
        <span className="eyebrow">01 — Selected work</span>

        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }} role="tablist" aria-label="Filter projects">
          {filters.map((f) => {
            const count = projects.filter((p) => f.key === "all" || p.category === f.key).length;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`proj-filter cursor-hover${filter === f.key ? " is-active" : ""}`}
              >
                {f.label} <span style={{ opacity: 0.5 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="proj-layout">
        {/* Project list */}
        <ul className="proj-list" onMouseLeave={() => setActiveId(null)}>
          {visible.map((project, i) => (
            <li
              key={project.id}
              onMouseEnter={() => setActiveId(project.id)}
              onFocus={() => setActiveId(project.id)}
              className={activeId === project.id ? "is-active" : ""}
            >
              <div className="proj-row cursor-hover" tabIndex={0}>
                <span className="proj-num">{String(i + 1).padStart(2, "0")}</span>
                <div style={{ minWidth: 0 }}>
                  <h3 className="proj-title">
                    {titleLink(project) ? (
                      <Link
                        href={titleLink(project).href}
                        className="proj-title-link"
                        {...(titleLink(project).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="proj-desc">{project.description}</p>
                  {project.stack.length > 0 && (
                    <ul className="proj-stack" aria-label="Tech stack">
                      {project.stack.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  {(project.thumb ?? project.slides?.[0]?.src) && (
                    <div className="proj-thumb">
                      <Image
                        src={project.thumb ?? project.slides[0].src}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  {rowLinks(project).length > 0 && (
                    <div className="proj-links">
                      {rowLinks(project).map((l) => (
                        <Link
                          key={l.label}
                          href={l.href}
                          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="proj-meta">
                  {project.year && <span>{project.year}</span>}
                  <span className={`proj-status proj-status-${project.status}`}>
                    {statusLabel[project.status]}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Preview panel */}
        <div className="proj-preview-wrap hide-mobile" aria-hidden="true">
          {shown && <Preview key={shown.id} project={shown} />}
        </div>
      </div>
    </section>
  );
}
