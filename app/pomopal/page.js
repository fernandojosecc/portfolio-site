import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pomopal — Fernando Contreras",
  other: { "apple-itunes-app": "app-id=6830915125" },
  openGraph: { title: "Pomopal", url: "/pomopal", description: "A free iPhone and iPad focus timer: finish a Pomodoro session and raise a pixel-art pet." },
  description: "Pomopal is a free iPhone and iPad focus timer: finish a Pomodoro session and raise a pixel-art pet. Built with React Native and Expo.",
};

const APP_STORE_URL = "https://apps.apple.com/us/app/pomopal-pomodoro-pet-timer/id6830915125";

const phones = [
  ["phone-01-focus.jpg", "The focus timer with a baby chick"],
  ["phone-02-farm.jpg", "The farm, filled with the week's pets"],
  ["phone-03-pets.jpg", "Choosing a pet"],
  ["phone-04-achievements.jpg", "Achievement badges"],
];

const features = [
  ["Focus, then grow", "Start a session and your pet hatches, grows and levels up with every minute you stay focused."],
  ["Stay in the app", "Strict mode is on your side: leave for more than 15 seconds and your pet dies. Locking your phone is fine."],
  ["A farm of your own", "Every finished session adds to a pixel farm you can view by week, month or all time."],
  ["Collect pets", "Chickens and cows in many colours, unlocked by level, hearts or purchase."],
  ["Stats and badges", "Day, week, month and year stats, a timeline, a streak, and ten badges to earn."],
  ["On your Lock Screen", "A Live Activity and a home screen widget keep your timer in sight. Works on iPad too."],
];

const built = [
  ["Expo and React Native", "One TypeScript codebase for iPhone and iPad, with Expo Router and layouts that follow the window, so Split View works."],
  ["Pixel art in code", "Sprites are cropped from sheets and shipped pre-scaled, because React Native cannot scale pixels with nearest-neighbour."],
  ["Timer that survives", "A session stores its start time and length, so the countdown stays right when the app is backgrounded or closed."],
  ["Optional cloud sync", "Works fully offline. With an account, Supabase syncs your data and merges it safely so a new device never overwrites it."],
  ["Native pieces", "A small local Expo module tells a phone lock from an app switch, and expo-widgets drives the Live Activity."],
  ["RevenueCat and AdMob", "Paid pets through in-app purchase, and optional rewarded ads in the free version."],
];

const wrap = { flex: 1, maxWidth: 880, width: "100%", margin: "0 auto", padding: "56px 20px 80px" };
const h2 = { fontFamily: "var(--font-playfair)", fontSize: 26, margin: "56px 0 16px" };
const label = { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-light)" };

export default function Pomopal() {
  return (
    <main style={wrap}>
      <style>{`body{cursor:auto}.pp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.pp-phones{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.pp-card{background:var(--cream-dark);border-radius:6px;padding:18px}.pp-card h3{font-family:var(--font-playfair);font-size:18px;margin-bottom:6px}.pp-card p{color:var(--ink-mid);line-height:1.7}.pp-btn{display:inline-block;padding:12px 20px;border-radius:6px;font-size:13px}.pp-btn:hover{opacity:.85}`}</style>
      <Link href="/" style={{ color: "var(--ink-mid)", fontSize: 13 }}>&larr; fernandocontreras.dev</Link>

      <p style={{ ...label, marginTop: 32 }}>iPhone and iPad app</p>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: 48, lineHeight: 1.1, margin: "8px 0 14px" }}>Pomopal</h1>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-mid)", maxWidth: 560 }}>
        A Pomodoro timer with a pet. Focus for a session and raise a pixel-art chick into a chicken, then fill a farm with every pet you grow.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "24px 0 8px" }}>
        <a className="pp-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--ink)", color: "var(--cream)" }}>Download on the App Store</a>
        <Link className="pp-btn" href="/pomopal/support" style={{ border: "1px solid var(--ink-light)" }}>Support</Link>
      </div>

      <div className="pp-phones" style={{ marginTop: 40 }}>
        {phones.map(([file, alt]) => (
          <Image key={file} src={`/pomopal/${file}`} alt={alt} width={640} height={1391} sizes="(max-width: 600px) 45vw, 200px" style={{ width: "100%", height: "auto", borderRadius: 10, border: "1px solid var(--cream-dark)" }} />
        ))}
      </div>

      <h2 style={h2}>What it is</h2>
      <div className="pp-grid">
        {features.map(([title, text]) => (
          <div className="pp-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <Image src="/pomopal/ipad-farm.jpg" alt="The farm on iPad" width={1500} height={1125} sizes="(max-width: 900px) 100vw, 880px" style={{ width: "100%", height: "auto", borderRadius: 10, marginTop: 32, border: "1px solid var(--cream-dark)" }} />

      <h2 style={h2}>How it&apos;s built</h2>
      <div className="pp-grid">
        {built.map(([title, text]) => (
          <div className="pp-card" key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p style={{ marginTop: 56, color: "var(--ink-mid)" }}>
        Designed and built by Fernando Contreras. Pixel art by Cup Nooble (Sprout Lands).
        {" "}<Link href="/pomopal/privacy" style={{ textDecoration: "underline" }}>Privacy policy</Link>
        {" · "}<Link href="/pomopal/support" style={{ textDecoration: "underline" }}>Support</Link>
      </p>
    </main>
  );
}
