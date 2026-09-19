import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maffo Sport — Actualités, analyses, résultats et pronostics",
  description: "Maffo Sport : actualités sportives, football, analyses, résultats, calendrier et pronostics.",
  metadataBase: new URL("https://sport.maffohub.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}