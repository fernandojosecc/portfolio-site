import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sketchshelf — Fernando Contreras",
  other: { "apple-itunes-app": "app-id=6838025633" },
  openGraph: { title: "Sketchshelf", url: "/sketchshelf", description: "A free iPhone and iPad sketchbook library: open a sketchbook, draw in it and keep it." },
  description: "Sketchshelf is a free iPhone and iPad app: a library of sketchbooks you can open, draw in and keep. Built with React Native, Expo and Skia.",
};

// If this is empty, the page shows "Coming soon" instead of the download button.
const APP_STORE_URL = "https://apps.apple.com/us/app/sketchshelf/id6838025633";

const phones = [
  ["phone-01-library.jpg", "The library: sketchbooks in a row"],
  ["phone-02-shelf.jpg", "Books standing on a shelf"],
  ["phone-04-open-book.jpg", "An open sketchbook"],
  ["phone-05-canvas.jpg", "The drawing canvas"],
];

const features = [
  ["Real books", "Four real sizes and six thicknesses, with covers you design. Pages turn like paper."],
  ["Draw and collage", "Pencil, marker, watercolour and more. Pinch to zoom, cut out pictures with a lasso, add notes."],
  ["Three ways to browse", "A row of books, spines on named shelves, or a gallery of covers."],
  ["A little every day", "A daily prompt, a streak, and small pixel things for your shelf to unlock."],
  ["Private", "Everything stays on your device. No account, no ads, no tracking."],
  ["Free, with one purchase", "Every tool is free. A one-time Pro purchase lifts the limits and adds paper types and export. No subscription."],
];

const built = [
  ["Expo and React Native", "One TypeScript codebase for iPhone and iPad, with typed routes and the React Compiler."],
  ["Skia", "The page, ink, eraser layer and paper are drawn with Skia, with a pinch-zoomable canvas on the raw touch responder system."],
  ["Reanimated", "The book opening and page-turn animations bend each sheet strip by strip, since React Native has no 3D layers."],
  ["Local-first storage", "Zustand for metadata and files on disk for pages, with no migrations: older data always keeps loading."],
  ["RevenueCat", "A one-time in-app purchase, with free limits that never lock work already made."],
];

const wrap = { flex: 1, maxWidth: 880, width: "100%", margin: "0 auto", padding: "56px 20px 80px" };
const h2 = { fontFamily: "var(--font-playfair)", fontSize: 26, margin: "56px 0 16px" };
const label = { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-light)" };

export default function Sketchshelf() {
  return (
    <main style={wrap}>
      <style>{`body{cursor:auto}.ss-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.ss-phones{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.ss-card{background:var(--cream-dark);border-radius:6px;padding:18px}.ss-card h3{font-family:var(--font-playfair);font-size:18px;margin-bottom:6px}.ss-card p{color:var(--ink-mid);line-height:1.7}.ss-btn{display:inline-block;padding:12px 20px;border-radius:6px;font-size:13px}.ss-btn:hover{opacity:.85}`}</style>
      <Link href="/" style={{ color: "var(--ink-mid)", fontSize: 13 }}>&larr; fernandocontreras.dev</Link>

      <p style={{ ...label, marginTop: 32 }}>iPhone and iPad app</p>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: 48, lineHeight: 1.1, margin: "8px 0 14px" }}>Sketchshelf</h1>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-mid)", maxWidth: 560 }}>
        Your sketchbook library. Open a sketchbook, turn its pages, draw and collage, then put it back on the shelf.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "24px 0 8px" }}>
        {APP_STORE_URL ? (
          <a className="ss-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--ink)", color: "var(--cream)" }}>Download on the App Store</a>
        ) : (
          <span className="ss-btn" style={{ background: "var(--yellow-pale)", border: "1px solid var(--yellow-dark)" }}>Coming soon to the App Store</span>
        )}
        <Link className="ss-btn" href="/sketchshelf/support" style={{ border: "1px solid var(--ink-light)" }}>Support</Link>
      </div>

      <div className="ss-phones" style={{ marginTop: 40 }}>
        {phones.map(([file, alt]) => (
          <Image key={file} src={`/sketchshelf/${file}`} alt={alt} width={640} height={1390} sizes="(max-width: 600px) 45vw, 200px" style={{ width: "100%", height: "auto", borderRadius: 10, border: "1px solid var(--cream-dark)" }} />
        ))}
      </div>

      <h2 style={h2}>What it is</h2>
      <div className="ss-grid">
        {features.map(([title, text]) => (
          <div className="ss-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <Image src="/sketchshelf/ipad-gallery.jpg" alt="The gallery view on iPad" width={1500} height={1125} sizes="(max-width: 900px) 100vw, 880px" style={{ width: "100%", height: "auto", borderRadius: 10, marginTop: 32, border: "1px solid var(--cream-dark)" }} />

      <h2 style={h2}>How it&apos;s built</h2>
      <div className="ss-grid">
        {built.map(([title, text]) => (
          <div className="ss-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p style={{ marginTop: 56, color: "var(--ink-mid)" }}>
        Designed and built by Fernando Contreras. Pixel art by Cup Nooble (Sprout Lands).
        {" "}<Link href="/sketchshelf/privacy" style={{ textDecoration: "underline" }}>Privacy policy</Link>
        {" · "}<Link href="/sketchshelf/support" style={{ textDecoration: "underline" }}>Support</Link>
      </p>
    </main>
  );
}
