import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Sketchshelf Privacy Policy — Fernando Contreras" };

export default function Privacy() {
  return (
    <LegalPage title="Sketchshelf Privacy Policy" updated="November 22, 2026">
      <p>Sketchshelf is made by Fernando Contreras. Contact: <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
      <h2>What stays on your device</h2>
      <p>Everything you create (sketchbooks, pages, drawings, notes, covers and the pictures you add) is saved only on your device. Sketchshelf has no accounts, and we do not upload, collect or see your work.</p>
      <h2>Photos and camera</h2>
      <p>The app asks for access to your photos or camera only when you choose to add a picture to a page or a cover. Those pictures are copied into the app&apos;s own storage on your device and are not sent anywhere.</p>
      <h2>Purchases</h2>
      <p>Sketchshelf is free, with an optional one-time purchase called Sketchshelf Pro. Payments are handled by Apple. We use RevenueCat to check whether a purchase has been made. RevenueCat receives an anonymous identifier and your purchase information, and does not receive your name, your email or anything you have drawn.</p>
      <h2>Exporting and sharing</h2>
      <p>If you export a PDF or share a page, the file goes to the app you choose in the iOS share sheet. We do not receive it.</p>
      <h2>What we do not do</h2>
      <p>No ads, no analytics, no tracking across other apps and websites, and we do not sell any data.</p>
      <h2>Children</h2>
      <p>The app does not knowingly collect personal information from anyone, including children.</p>
      <h2>Deleting your data</h2>
      <p>Deleting the app removes everything stored on your device. Purchase records are kept by Apple and can be restored on any device signed in to the same Apple ID.</p>
      <h2>Changes and contact</h2>
      <p>We will post changes on this page. Questions: <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
    </LegalPage>
  );
}
