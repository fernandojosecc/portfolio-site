import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

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


export default function BmoCyberdeck() {
  return (
    <PageShell>
      <Link href="/" className="pg-back link-u">&larr; fernandocontreras.dev</Link>

      <p className="eyebrow rise" style={{ marginTop: 40, "--d": 0 }}>Hardware project</p>
      <h1 className="pg-title rise" style={{ "--d": 1 }}>BMO Cyberdeck</h1>
      <p className="pg-lead rise" style={{ "--d": 2 }}>
        A handmade BMO from Adventure Time: a portable computer with a personality. It listens, talks, sees, plays music and videos, and launches retro games by voice.
      </p>

      <Image
        src="/projects/bmo-cyberdeck.gif"
        alt="The BMO cyberdeck on a desk"
        width={320}
        height={240}
        unoptimized
        priority
        className="pg-shot pg-wide rise" style={{ width: "100%", maxWidth: 480, height: "auto", "--d": 3 }}
      />

      <div className="pg-actions rise" style={{ "--d": 3 }}>
        <a className="btn" href={ORIGINAL_CODE_URL} target="_blank" rel="noopener noreferrer">Original project on GitHub ↗</a>
        <a className="btn btn-ghost" href={ORIGINAL_MODEL_URL} target="_blank" rel="noopener noreferrer">3D model on Printables ↗</a>
      </div>

      <h2 className="pg-h2 reveal">What it does</h2>
      <div className="pg-grid">
        {features.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <h2 className="pg-h2 reveal">What it’s made of</h2>
      <div className="pg-grid">
        {parts.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <h2 className="pg-h2 reveal">The software</h2>
      <div className="pg-grid">
        {built.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p className="pg-credit reveal">
        Built by Fernando Contreras, following the open-source BMO project and 3D model by brenpoly. I added the voice-launched games, music and videos, and the audio fixes.
      </p>
    </PageShell>
  );
}
