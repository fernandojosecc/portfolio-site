import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

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


export default function Pomopal() {
  return (
    <PageShell>
      <Link href="/" className="pg-back link-u">&larr; fernandocontreras.dev</Link>

      <p className="eyebrow rise" style={{ marginTop: 40, "--d": 0 }}>iPhone and iPad app</p>
      <h1 className="pg-title rise" style={{ "--d": 1 }}>Pomopal</h1>
      <p className="pg-lead rise" style={{ "--d": 2 }}>
        A Pomodoro timer with a pet. Focus for a session and raise a pixel-art chick into a chicken, then fill a farm with every pet you grow.
      </p>

      <div className="pg-actions rise" style={{ "--d": 3 }}>
        <a className="btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store <span className="arrow">↗</span></a>
        <Link className="btn btn-ghost" href="/pomopal/support">Support</Link>
      </div>

      <div className="pg-phones rise" style={{ "--d": 4 }}>
        {phones.map(([file, alt]) => (
          <Image key={file} src={`/pomopal/${file}`} alt={alt} width={640} height={1391} sizes="(max-width: 600px) 45vw, 200px" className="pg-shot" style={{ width: "100%", height: "auto" }} />
        ))}
      </div>

      <h2 className="pg-h2 reveal">What it is</h2>
      <div className="pg-grid">
        {features.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <Image src="/pomopal/ipad-farm.jpg" alt="The farm on iPad" width={1500} height={1125} sizes="(max-width: 900px) 100vw, 880px" className="pg-shot pg-wide reveal" style={{ width: "100%", height: "auto" }} />

      <h2 className="pg-h2 reveal">How it&apos;s built</h2>
      <div className="pg-grid">
        {built.map(([title, text], i) => (
          <div className="pg-card lux-card reveal" key={title} style={{ transitionDelay: `${(i % 3) * 90}ms` }}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>

      <p className="pg-credit reveal">
        Designed and built by Fernando Contreras. Pixel art by Cup Nooble (Sprout Lands).
        {" "}<Link href="/pomopal/privacy" className="link-u">Privacy policy</Link>
        {" · "}<Link href="/pomopal/support" className="link-u">Support</Link>
      </p>
    </PageShell>
  );
}
