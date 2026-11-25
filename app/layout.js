import { Playfair_Display, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Software development student building iPhone and iPad apps and AI tools. Bilingual EN/ES. Based in California.";

export const metadata = {
  metadataBase: new URL("https://fernandocontreras.dev"),
  title: "Fernando Contreras — Software Developer",
  description,
  openGraph: {
    title: "Fernando Contreras — Software Developer",
    description,
    url: "/",
    siteName: "Fernando Contreras",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmMono.variable} ${inter.variable}`}>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
