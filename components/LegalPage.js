import Link from "next/link";
import PageShell from "./PageShell";

/** Plain, readable page for app legal text (privacy policy, support). Uses the site's colors and fonts. */
export default function LegalPage({ title, updated, children }) {
  return (
    <PageShell narrow>
      <Link href="/" className="pg-back link-u">&larr; fernandocontreras.dev</Link>
      <div className="legal">
        <h1 className="pg-title rise" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 32 }}>{title}</h1>
        {updated && <p className="eyebrow" style={{ margin: "12px 0 32px" }}>Last updated: {updated}</p>}
        {children}
      </div>
    </PageShell>
  );
}
