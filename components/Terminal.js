"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { type: "command", content: "whoami" },
  { type: "output", content: "ai_engineer / builder / bilingual" },
  { type: "empty", content: "" },
  { type: "command", content: "cat about.json" },
  { type: "json", content: '{' },
  { type: "json", content: '  "name": "Fernando Contreras",', isKeyValue: true, key: '"name"', value: '"Fernando Contreras"' },
  { type: "json", content: '  "focus": "AI Engineering",', isKeyValue: true, key: '"focus"', value: '"AI Engineering"' },
  { type: "json", content: '  "languages": ["English", "Spanish"],', isKeyValue: true, key: '"languages"', value: '["English", "Spanish"]' },
  { type: "json", content: '  "status": "open to work",', isKeyValue: true, key: '"status"', value: '"open to work"' },
  { type: "json", content: '  "location": "California, USA"', isKeyValue: true, key: '"location"', value: '"California, USA"' },
  { type: "json", content: '}' },
  { type: "empty", content: "" },
  { type: "command", content: "ls projects/" },
  { type: "output", content: "bilingual-chatbot/   rag-assistant/   research-agent/", isFolders: true },
  { type: "empty", content: "" },
  { type: "comment", content: "# Ready for new challenges..." },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    const typingSpeed = currentLine.type === "command" ? 40 : 20;

    if (currentCharIndex < currentLine.content.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, { ...currentLine, fullContent: currentLine.content }]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.type === "command" ? 400 : 100);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const renderLine = (line, index, isCurrent = false) => {
    const prompt = (
      <span style={{ color: "var(--yellow)" }}>❯ </span>
    );

    switch (line.type) {
      case "command":
        return (
          <div key={index} style={{ color: "var(--terminal-off-white)" }}>
            {prompt}
            {isCurrent
              ? line.content.slice(0, currentCharIndex)
              : line.fullContent || line.content}
          </div>
        );
      case "output":
        if (line.isFolders) {
          return (
            <div key={index} style={{ color: "var(--terminal-green-soft)" }}>
              {line.fullContent || line.content}
            </div>
          );
        }
        return (
          <div key={index} style={{ color: "rgba(255,255,255,0.45)" }}>
            {line.fullContent || line.content}
          </div>
        );
      case "json":
        if (line.isKeyValue) {
          return (
            <div key={index}>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>  {line.key}: </span>
              <span style={{ color: "var(--terminal-green-soft)" }}>
                {isCurrent ? line.value.slice(0, currentCharIndex) : line.value}
              </span>
            </div>
          );
        }
        return (
          <div key={index} style={{ color: "rgba(255,255,255,0.45)" }}>
            {line.fullContent || line.content}
          </div>
        );
      case "comment":
        return (
          <div key={index} style={{ color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
            {line.fullContent || line.content}
          </div>
        );
      case "empty":
        return <div key={index}>&nbsp;</div>;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "var(--ink)",
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
      className="scan-lines"
    >
      {/* Window controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "var(--terminal-red)",
            }}
          />
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "var(--terminal-yellow)",
            }}
          />
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "var(--terminal-green)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-dm-mono)",
          }}
        >
          fernando.dev — bash
        </span>
        <div style={{ width: "60px" }} />
      </div>

      {/* Terminal content */}
      <div
        style={{
          flex: 1,
          fontFamily: "var(--font-dm-mono)",
          fontSize: "13px",
          lineHeight: "1.8",
          overflow: "hidden",
        }}
      >
        {visibleLines.map((line, index) => renderLine(line, index))}
        {isTyping && currentLineIndex < terminalLines.length && (
          <>
            {renderLine(terminalLines[currentLineIndex], currentLineIndex, true)}
            {terminalLines[currentLineIndex].type !== "json" || !terminalLines[currentLineIndex].isKeyValue ? (
              <span className="blinking-cursor" />
            ) : null}
          </>
        )}
        {!isTyping && (
          <div style={{ color: "var(--terminal-off-white)" }}>
            <span style={{ color: "var(--yellow)" }}>❯ </span>
            <span className="blinking-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
