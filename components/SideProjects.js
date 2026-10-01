"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Side projects: things built for fun, shipped or still in progress.
// To add a photo/screenshot, drop it in /public/side-projects/ and set `image`.
const sideProjects = [
  {
    id: "croptails",
    title: "Croptails",
    status: "building",
    category: "Game",
    year: "2026",
    description:
      "A video game I'm currently building — work in progress, devlog coming soon.",
    stack: [],
    image: null,
    link: null,
  },
  {
    id: "bmo-cyberdeck",
    title: "BMO Cyberdeck",
    status: "shipped",
    category: "Hardware",
    year: "2026",
    description:
      "A handmade cyberdeck built inside a BMO-inspired case — a portable computer with a personality.",
    stack: [],
    image: null,
    link: null,
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "building", label: "Building" },
  { key: "shipped", label: "Shipped" },
];

const statusLabel = {
  building: "In progress",
  shipped: "Shipped",
};

function Preview({ project }) {
  if (!project) {
    return (
      <div className="side-preview side-preview-empty">
        <span>hover a project to preview</span>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="side-preview" style={{ position: "relative" }}>
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
    <div className="side-preview side-preview-terminal scan-lines">
      <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-red)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-yellow)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--terminal-green)" }} />
      </div>
      <div style={{ color: "var(--terminal-green-soft)" }}>$ cat {project.id}/info</div>
      <div style={{ marginTop: "12px", lineHeight: 2 }}>
        <div>
          <span style={{ color: "var(--terminal-blue)" }}>type</span>{"    "}
          {project.category}
        </div>
        <div>
          <span style={{ color: "var(--terminal-blue)" }}>status</span>{"  "}
          <span style={{ color: "var(--yellow)" }}>{statusLabel[project.status]}</span>
        </div>
        <div>
          <span style={{ color: "var(--terminal-blue)" }}>year</span>{"    "}
          {project.year}
        </div>
      </div>
      <div
        style={{
          marginTop: "auto",
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: "40px",
          color: "var(--cream)",
        }}
      >
        {project.title}
        <span className="blinking-cursor" style={{ marginLeft: "8px" }} />
      </div>
    </div>
  );
}

export default function SideProjects() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const visible = sideProjects.filter((p) => filter === "all" || p.status === filter);
  const active = sideProjects.find((p) => p.id === activeId) || null;

  return (
    <section
      id="side-projects"
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
          02 — Side Projects
        </span>

        <div style={{ display: "flex", gap: "4px" }} role="tablist" aria-label="Filter side projects">
          {filters.map((f) => {
            const count = sideProjects.filter((p) => f.key === "all" || p.status === f.key).length;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`side-filter cursor-hover${filter === f.key ? " is-active" : ""}`}
              >
                {f.label} <span style={{ opacity: 0.5 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="side-layout">
        {/* Project list */}
        <ul className="side-list" onMouseLeave={() => setActiveId(null)}>
          {visible.map((project, i) => {
            const row = (
              <>
                <span className="side-num">{String(i + 1).padStart(2, "0")}</span>
                <div style={{ minWidth: 0 }}>
                  <h3 className="side-title">{project.title}</h3>
                  <p className="side-desc">{project.description}</p>
                </div>
                <div className="side-meta">
                  <span>{project.year}</span>
                  <span className={`side-status side-status-${project.status}`}>
                    {statusLabel[project.status]}
                  </span>
                </div>
              </>
            );

            return (
              <li
                key={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                className={activeId === project.id ? "is-active" : ""}
              >
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="side-row cursor-hover"
                  >
                    {row}
                  </Link>
                ) : (
                  <div className="side-row cursor-hover" tabIndex={0}>
                    {row}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Preview panel */}
        <div className="side-preview-wrap hide-mobile" aria-hidden="true">
          <Preview project={active} />
        </div>
      </div>
    </section>
  );
}
