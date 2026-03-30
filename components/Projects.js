"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Bilingual AI Chatbot",
    status: "⭐ Featured · Live in Production",
    description:
      "Conversational AI that responds in both English and Spanish. Built with Python, Flask, and the OpenAI API. Fully deployed and accessible to anyone.",
    stack: ["Python", "Flask", "OpenAI", "Railway"],
    link: "https://web-production-a3065.up.railway.app/",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "RAG Document Assistant",
    status: "LIVE",
    description:
      "Upload any PDF and ask questions about it in English and Spanish. Powered by LangChain, Claude API, and Pinecone vector search.",
    stack: ["Python", "FastAPI", "LangChain", "Claude API", "Pinecone", "Next.js"],
    link: "https://rag-assistant.vercel.app",
    github: "https://github.com/fernandojosecc/rag-assistant-api",
    featured: false,
  },
  {
    id: 3,
    number: "03",
    title: "AI Operations Agent",
    status: "Coming Soon",
    description:
      "Autonomous agent that solves real operations problems using tool-use. Built for reliability and real-world deployment.",
    stack: ["Agents", "AWS", "FastAPI"],
    link: "#",
    featured: false,
  },
];

const featuredCodeSnippet = `from openai import OpenAI
from flask import Flask, request

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_msg = request.json['message']
    client = OpenAI()
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", 
             "content": "You are a bilingual AI assistant..."},
            {"role": "user", 
             "content": user_msg}
        ]
    )
    
    return {"response": response}`;

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "64px 48px",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "48px",
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
          01 — Selected Work
        </span>
        <Link
          href="https://github.com/fernandojosecc"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "var(--ink-mid)",
            transition: "color 0.15s ease-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
        >
          view all on github →
        </Link>
      </div>

      {/* Featured project */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "var(--ink)",
          border: "1.5px solid var(--ink)",
          marginBottom: "32px",
          position: "relative",
        }}
        className="hover-underline cursor-hover"
      >
        {/* Left half - Content */}
        <div
          style={{
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "24px",
              }}
            >
              <span className="badge badge-glass" style={{ color: "var(--yellow)" }}>
                <span style={{ color: "var(--yellow)" }}>⭐</span>
                <span>Featured · Live in Production</span>
              </span>
            </div>

            {/* Number */}
            <div
              style={{
                fontSize: "12px",
                color: "var(--ink-light)",
                marginBottom: "8px",
              }}
            >
              {projects[0].number}
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "32px",
                fontStyle: "italic",
                color: "var(--cream)",
                marginBottom: "16px",
              }}
            >
              {projects[0].title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "400px",
                marginBottom: "24px",
              }}
            >
              {projects[0].description}
            </p>

            {/* Stack */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              {projects[0].stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          <Link
            href={projects[0].link}
            style={{
              fontSize: "13px",
              color: "var(--cream)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            View project ↗
          </Link>
        </div>

        {/* Right half - Code snippet */}
        <div
          style={{
            padding: "48px",
            borderLeft: "1.5px solid var(--ink)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "24px",
              width: "100%",
              fontFamily: "var(--font-dm-mono)",
              fontSize: "12px",
              lineHeight: 1.8,
              overflow: "hidden",
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "var(--terminal-off-white)" }}>
              {featuredCodeSnippet}
            </pre>
          </div>
        </div>
      </div>

      {/* Standard projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        {projects.slice(1).map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "var(--cream)",
              border: "1.5px solid var(--ink)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "280px",
            }}
            className="hover-underline card-hover cursor-hover"
          >
            <div>
              {/* Badge */}
              <span
                className="badge badge-yellow"
                style={{ marginBottom: "16px", display: "inline-flex" }}
              >
                {project.status}
              </span>

              {/* Number */}
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--ink-light)",
                  marginBottom: "8px",
                  marginTop: "16px",
                }}
              >
                {project.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "24px",
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--ink-mid)",
                  marginBottom: "16px",
                }}
              >
                {project.description}
              </p>

              {/* Stack */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "3px 8px",
                      border: "1px solid var(--ink-light)",
                      fontSize: "11px",
                      color: "var(--ink-mid)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <Link
              href={project.link}
              style={{
                fontSize: "13px",
                color: "var(--ink-mid)",
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.15s ease-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--ink-mid)")}
            >
              Follow progress →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
