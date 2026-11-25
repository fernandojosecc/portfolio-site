"use client";

import Image from "next/image";
import Terminal from "./Terminal";

const stack = [
  "React Native · Expo · TypeScript",
  "Python · FastAPI · Flask",
  "OpenAI API · LangChain · Pinecone",
  "Agents · Prompt Engineering · AWS",
];

export default function Hero() {
  return (
    <section id="about" className="hero responsive-grid">
      <div className="hero-left responsive-padding">
        <div>
          <div className="rise" style={{ "--d": 0 }}>
            <span className="hero-photo">
              <Image src="/fernando.jpg" alt="Fernando Contreras" width={72} height={72} priority />
            </span>
          </div>

          <div className="rise hero-eyebrow" style={{ "--d": 1 }}>
            <span style={{ width: 28, height: 1, backgroundColor: "var(--gold)" }} />
            <span className="eyebrow" style={{ color: "var(--ink-mid)" }}>
              Software Developer · AI Tools · Bilingual EN/ES
            </span>
          </div>

          <h1 className="hero-title">
            <span className="rise" style={{ "--d": 2 }}>Building</span>
            <span className="rise hero-title-italic" style={{ "--d": 3 }}>intelligent</span>
            <span className="rise" style={{ "--d": 4 }}>
              <span className="highlight-text">systems.</span>
            </span>
          </h1>

          <p className="rise hero-bio" style={{ "--d": 5 }}>
            I&apos;m a software development student who ships real things: iPhone
            and iPad apps on the App Store, plus AI tools like chatbots, RAG
            pipelines, and autonomous agents. From a pixel-pet focus timer to a
            talking BMO, I build with a bias toward what actually works.
            Bilingual EN/ES, based in California.
          </p>

          <div className="rise" style={{ "--d": 6, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#projects" className="btn">
              View my work <span className="arrow">→</span>
            </a>
            <a href="https://github.com/fernandojosecc" target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 13 }}>
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="rise hero-stack" style={{ "--d": 7 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Core stack</div>
          <ul>
            {stack.map((row) => (
              <li key={row}>{row}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-right">
        <Terminal />
      </div>
    </section>
  );
}
