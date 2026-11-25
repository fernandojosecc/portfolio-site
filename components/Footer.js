import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/fernandojosecc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fernandojosecontreras/" },
  { label: "Email", href: "mailto:fernandorodasc1@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        Fernando <em>Contreras</em>
      </div>

      <div className="site-footer-links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="link-u"
            {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.label}
          </a>
        ))}
        <Link href="/#about" className="link-u">Back to top ↑</Link>
      </div>

      <div className="site-footer-copy">
        <span>fernandocontreras.dev · {new Date().getFullYear()}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 16, height: 1, background: "var(--gold)" }} />
          <em style={{ fontFamily: "var(--font-playfair)" }}>commit to change</em>
        </span>
      </div>
    </footer>
  );
}
