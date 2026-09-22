import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "Maffo Sport — Actualités, analyses, résultats et pronostics",
  description:
    "Maffo Sport : actualités sportives, football, analyses, résultats, calendrier et pronostics.",
  metadataBase: new URL("https://sport.maffohub.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#07090d] text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
