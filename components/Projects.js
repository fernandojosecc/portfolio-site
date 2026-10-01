"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// All projects: AI apps, hardware builds, games — finished or in progress.
// To add a photo/screenshot, drop it in /public/projects/ and set `image`.
// `year` is optional; leave it null to hide it.
const projects = [
  {
    id: "bilingual-chatbot",
    title: "Bilingual AI Chatbot",
    category: "ai",
    status: "live",
    year: null,
    description:
      "Conversational AI that responds in both English and Spanish. Built with Python, Flask, and the OpenAI API.",
    stack: ["Python", "Flask", "OpenAI", "Railway"],
    image: null,
    link: "https://web-production-a3065.up.railway.app/",
    github: "https://github.com/fernandojosecc/bilingual-chatbot",
  },
  {
    id: "rag-assistant",
    title: "RAG Document Assistant",
    category: "ai",
    status: "live",
    year: null,
    description:
      "Upload any PDF and ask questions about it in English and Spanish. Powered by LangChain, Claude API, and Pinecone vector search.",
    stack: ["Python", "FastAPI", "LangChain", "Claude API", "Pinecone", "Next.js"],
    image: null,
    link: "https://rag-assistant-ui.vercel.app/",
    github: "https://github.com/fernandojosecc/rag-assistant-api",
  },
  {
    id: "research-agent",
    title: "AI Research Agent",
    category: "ai",
    status: "live",
    year: null,
    description:
      "Autonomous agent that researches any topic and writes structured reports with sources, using LangChain tool use, Tavily web search, and Claude.",
    stack: ["Python", "FastAPI", "LangChain", "Claude API", "Tavily", "Next.js"],
    image: null,
    link: "https://research-agent-ui-pi.vercel.app",
    github: "https://github.com/fernandojosecc/research-agent-api",
  },
  {
    id: "croptails",
    title: "Croptails",
    category: "games",
    status: "building",
    year: "2026",
    description:
      "A video game I'm currently building — work in progress, devlog coming soon.",
    stack: [],
    image: null,
    link: null,
    github: null,
  },
  {
    id: "bmo-cyberdeck",
    title: "BMO Cyberdeck",
    category: "hardware",
    status: "shipped",
    year: "2026",
    description:
      "A handmade cyberdeck built inside a BMO-inspired case — a portable computer with a personality.",
    stack: [],
    image: null,
    link: null,
    github: null,
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI apps" },
  { key: "hardware", label: "Hardware" },
  { key: "games", label: "Games" },
];

const categoryLabel = {
  ai: "AI app",
  hardware: "Hardware",
  games: "Game",
};

const statusLabel = {
  live: "Live",
  building: "In progress",
  shipped: "Shipped",
};

function Preview({ project }) {
  if (!project) {
    return (
      <div className="proj-preview proj-preview-empty">
        <span>hover a project to preview</span>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="proj-preview" style={{ position: "relative" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
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

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const active = projects.find((p) => p.id === activeId) || null;

  return (
    <section
      id="projects"
      style={{
        padding: "64px 48px",
        borderBottom: "1.5px solid var(--ink)",
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
          paddingBottom: "16px",
          borderBottom: "1.5px solid var(--ink)",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "var(--ink-light)",
          }}
        >
          01 — Projects
        </span>

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
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.description}</p>
                  {(project.link || project.github) && (
                    <div className="proj-links">
                      {project.link && (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View project ↗
                        </Link>
                      )}
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub →
                        </Link>
                      )}
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
          <Preview project={active} />
        </div>
      </div>
    </section>
  );
}
