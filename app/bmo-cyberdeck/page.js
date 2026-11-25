import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BMO Cyberdeck — Fernando Contreras",
  openGraph: { title: "BMO Cyberdeck", url: "/bmo-cyberdeck", description: "A handmade BMO from Adventure Time that talks, sees, and launches retro games by voice." },
  description: "A handmade BMO from Adventure Time: a 3D-printed case around a Raspberry Pi 5 that talks, sees, plays music and videos, and launches retro games by voice.",
};

const ORIGINAL_CODE_URL = "https://github.com/brenpoly/be-more-agent";
const ORIGINAL_MODEL_URL = "https://www.printables.com/model/1582055-bmo-from-adventure-time-local-ai-agent-project/remixes";

const features = [
  ["Say “Hey BMO”", "A wake word starts it listening. Speech is turned into text on the device, and BMO answers out loud in its own voice."],
  ["Runs locally", "The language model runs on the Pi itself through Ollama, so chatting with BMO does not need a cloud AI service."],
  ["It can see", "A camera lets BMO describe what is in front of it, using a small vision model."],
  ["Music and videos", "Ask for music or videos by voice and BMO opens them on the screen."],
  ["Plays retro games", "Launch Nintendo 64, DS, Game Boy and SNES games by voice through RetroArch, with Bluetooth controllers."],
  ["Handmade body", "The case is 3D printed at full size around the real parts: a 5-inch screen, buttons, arms and legs."],
];

const parts = [
  ["Raspberry Pi 5 (8 GB)", "The brain, with the official active cooler and a 45 W power supply."],
  ["5-inch DSI touchscreen", "BMO’s face. It connects straight to the Pi, so it needs no extra power cable."],
  ["USB mic and speaker", "Small USB parts that give BMO ears and a mouth."],
  ["Camera Module 3", "The official camera, which the printed faceplate was designed around."],
  ["128 GB microSD", "Holds the operating system, the AI models and the games."],
  ["3D-printed shell", "Printed in PLA on a Bambu Lab A1 mini, split across several plates because the parts are close to the bed size."],
];

const built = [
  ["Ollama", "Runs Gemma 3 for conversation and Moondream for vision, entirely on the Pi."],
  ["whisper.cpp", "Turns speech into text on the device."],
  ["Piper", "Gives BMO a custom voice, also generated on the device."],
  ["Wake word", "OpenWakeWord listens for “Hey BMO” so nothing is recorded until it hears it."],
  ["RetroArch", "Runs the emulator cores for N64, DS, GBA, Game Boy and SNES, started by voice commands I added."],
  ["Linux, by hand", "Setting up the audio devices so the mic and speaker survive a reboot took real debugging."],
];

const wrap = { flex: 1, maxWidth: 880, width: "100%", margin: "0 auto", padding: "56px 20px 80px" };
const h2 = { fontFamily: "var(--font-playfair)", fontSize: 26, margin: "56px 0 16px" };
const label = { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-light)" };

export default function BmoCyberdeck() {
  return (
    <main style={wrap}>
      <style>{`body{cursor:auto}.bm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.bm-card{background:var(--cream-dark);border-radius:6px;padding:18px}.bm-card h3{font-family:var(--font-playfair);font-size:18px;margin-bottom:6px}.bm-card p{color:var(--ink-mid);line-height:1.7}.bm-btn{display:inline-block;padding:12px 20px;border-radius:6px;font-size:13px}.bm-btn:hover{opacity:.85}`}</style>
      <Link href="/" style={{ color: "var(--ink-mid)", fontSize: 13 }}>&larr; fernandocontreras.dev</Link>

      <p style={{ ...label, marginTop: 32 }}>Hardware project</p>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: 48, lineHeight: 1.1, margin: "8px 0 14px" }}>BMO Cyberdeck</h1>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-mid)", maxWidth: 600 }}>
        A handmade BMO from Adventure Time: a portable computer with a personality. It listens, talks, sees, plays music and videos, and launches retro games by voice.
      </p>

      <Image
        src="/projects/bmo-cyberdeck.gif"
        alt="The BMO cyberdeck on a desk"
        width={320}
        height={240}
        unoptimized
        priority
        style={{ width: "100%", maxWidth: 480, height: "auto", borderRadius: 10, marginTop: 32, border: "1px solid var(--cream-dark)" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "28px 0 0" }}>
        <a className="bm-btn" href={ORIGINAL_CODE_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--ink)", color: "var(--cream)" }}>Original project on GitHub ↗</a>
        <a className="bm-btn" href={ORIGINAL_MODEL_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--ink-light)" }}>3D model on Printables ↗</a>
      </div>

      <h2 style={h2}>What it does</h2>
      <div className="bm-grid">
        {features.map(([title, text]) => (
          <div className="bm-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <h2 style={h2}>What it’s made of</h2>
      <div className="bm-grid">
        {parts.map(([title, text]) => (
          <div className="bm-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <h2 style={h2}>The software</h2>
      <div className="bm-grid">
        {built.map(([title, text]) => (
          <div className="bm-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p style={{ marginTop: 56, color: "var(--ink-mid)", lineHeight: 1.7 }}>
        Built by Fernando Contreras, following the open-source BMO project and 3D model by brenpoly. I added the voice-launched games, music and videos, and the audio fixes.
      </p>
    </main>
  );
}
