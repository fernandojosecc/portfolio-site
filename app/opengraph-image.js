import { ImageResponse } from "next/og";

// Link-preview image used when the site is shared (iMessage, LinkedIn, Slack...).
export const alt = "Fernando Contreras — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8F5EE",
          color: "#1A1A16",
          padding: 72,
          border: "12px solid #1A1A16",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, textTransform: "uppercase", color: "#6B6B60" }}>
          Software Developer · AI Tools · EN/ES
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1.05 }}>Fernando</div>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1.05 }}>Contreras</div>
          <div style={{ marginTop: 28, width: 220, height: 12, background: "#F5C842" }} />
        </div>
        <div style={{ fontSize: 30, color: "#6B6B60" }}>fernandocontreras.dev</div>
      </div>
    ),
    size
  );
}
