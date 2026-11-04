import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Pomopal Support — Fernando Contreras" };

export default function Support() {
  return (
    <LegalPage title="Pomopal Support">
      <p>Questions, bugs or feedback? Email <a href="mailto:fernandorodasc1@gmail.com">fernandorodasc1@gmail.com</a>.</p>
      <h2>Delete your account</h2>
      <p>Open Settings, then Account, then Delete account in the app. This removes your account and your cloud data.</p>
      <p><Link href="/pomopal/privacy">Privacy policy</Link></p>
    </LegalPage>
  );
}
