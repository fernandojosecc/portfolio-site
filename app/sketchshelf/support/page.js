import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Sketchshelf Support — Fernando Contreras" };

export default function Support() {
  return (
    <LegalPage title="Sketchshelf Support">
      <p>Questions, bugs or feedback? Email <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
      <h2>Restore Sketchshelf Pro</h2>
      <p>Open the &quot;…&quot; menu, then About &amp; credits, then Restore purchase. Use the Apple ID you bought it with.</p>
      <h2>Your sketchbooks</h2>
      <p>Everything is stored on your device only, so deleting the app deletes your sketchbooks. Export a sketchbook as a PDF (a Pro feature) to keep a copy.</p>
      <p><Link href="/sketchshelf/privacy">Privacy policy</Link></p>
    </LegalPage>
  );
}
