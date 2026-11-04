import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Pomopal Privacy Policy — Fernando Contreras" };

export default function Privacy() {
  return (
    <LegalPage title="Pomopal Privacy Policy" updated="November 4, 2026">
      <p>Pomopal is made by Fernando Contreras. Contact: <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
      <h2>What stays on your device</h2>
      <p>Your focus sessions, tags, settings and pets are stored on your device. Without an account, nothing else leaves it.</p>
      <h2>Account and cloud sync (optional)</h2>
      <p>If you create an account we store your email address and your synced data (sessions, tags, settings, owned pets) with our provider Supabase, so you can use several devices. You can delete your account in the app (Settings, then Account, then Delete account). This removes your account and your cloud data.</p>
      <h2>Ads</h2>
      <p>The free version shows optional rewarded ads through Google AdMob. AdMob may collect your device&apos;s advertising identifier and usage data to serve ads. On iOS you are asked for permission to track, and you can say no and still use every feature.</p>
      <h2>Purchases</h2>
      <p>Purchases are handled by Apple and RevenueCat. We receive a record of what you bought, not your payment details.</p>
      <h2>Notifications</h2>
      <p>If you allow them, the app schedules local notifications when a session or break ends. Nothing is sent to a server for this.</p>
      <h2>Children</h2>
      <p>Pomopal is not directed at children under 13.</p>
      <h2>Changes and contact</h2>
      <p>We will post changes on this page. Questions: <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
    </LegalPage>
  );
}
