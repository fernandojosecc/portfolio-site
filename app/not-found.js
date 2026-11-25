import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Not found — Fernando Contreras" };

export default function NotFound() {
  return (
    <PageShell narrow>
      <p className="eyebrow rise">Error 404</p>
      <h1 className="pg-title rise" style={{ "--d": 1 }}>
        Page <em style={{ color: "var(--ink-mid)", fontWeight: 500 }}>not found.</em>
      </h1>
      <p className="pg-lead rise" style={{ "--d": 2 }}>That page doesn&apos;t exist, or it moved.</p>
      <div className="pg-actions rise" style={{ "--d": 3 }}>
        <Link href="/" className="btn">Back home <span className="arrow">→</span></Link>
      </div>
    </PageShell>
  );
}
