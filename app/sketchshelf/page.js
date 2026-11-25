import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

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


export default function Sketchshelf() {
  return (
    <PageShell>
      <Link href="/" className="pg-back link-u">&larr; fernandocontreras.dev</Link>

      <p className="eyebrow rise" style={{ marginTop: 40, "--d": 0 }}>iPhone and iPad app</p>
      <h1 className="pg-title rise" style={{ "--d": 1 }}>Sketchshelf</h1>
      <p className="pg-lead rise" style={{ "--d": 2 }}>
        Your sketchbook library. Open a sketchbook, turn its pages, draw and collage, then put it back on the shelf.
      </p>

      <div className="pg-actions rise" style={{ "--d": 3 }}>
        {APP_STORE_URL ? (
          <a className="btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store <span className="arrow">↗</span></a>
        ) : (
          <span className="btn btn-ghost">Coming soon to the App Store</span>
        )}
        <Link className="btn btn-ghost" href="/sketchshelf/support">Support</Link>
      </div>

      <div className="pg-phones rise" style={{ "--d": 4 }}>
        {phones.map(([file, alt]) => (
          <Image key={file} src={`/sketchshelf/${file}`} alt={alt} width={640} height={1390} sizes="(max-width: 600px) 45vw, 200px" className="pg-shot" style={{ width: "100%", height: "auto" }} />
        ))}
      </div>

      <h2 className="pg-h2 reveal">What it is</h2>
      <div className="pg-grid">
        {features.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <Image src="/sketchshelf/ipad-gallery.jpg" alt="The gallery view on iPad" width={1500} height={1125} sizes="(max-width: 900px) 100vw, 880px" className="pg-shot pg-wide reveal" style={{ width: "100%", height: "auto" }} />

      <h2 className="pg-h2 reveal">How it&apos;s built</h2>
      <div className="pg-grid">
        {built.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p className="pg-credit reveal">
        Designed and built by Fernando Contreras. Pixel art by Cup Nooble (Sprout Lands).
        {" "}<Link href="/sketchshelf/privacy" className="link-u">Privacy policy</Link>
        {" · "}<Link href="/sketchshelf/support" className="link-u">Support</Link>
      </p>
    </PageShell>
  );
}
