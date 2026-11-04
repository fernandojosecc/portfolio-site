import Link from "next/link";

/** Plain, readable page for app legal text (privacy policy, support). Uses the site's colors and fonts. */
export default function LegalPage({ title, updated, children }) {
  return (
    <main style={{ flex: 1, maxWidth: 680, width: "100%", margin: "0 auto", padding: "56px 20px 80px" }}>
      <style>{`body{cursor:auto}.legal h2{font-family:var(--font-playfair);font-size:22px;margin:32px 0 8px}.legal p{margin:0 0 12px;line-height:1.75}.legal a{text-decoration:underline}`}</style>
      <Link href="/" style={{ color: "var(--ink-mid)", fontSize: 13 }}>&larr; fernandocontreras.dev</Link>
      <div className="legal">
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: 36, margin: "24px 0 6px" }}>{title}</h1>
        {updated && <p style={{ color: "var(--ink-light)", fontSize: 13 }}>Last updated: {updated}</p>}
        {children}
      </div>
    </main>
  );
}
