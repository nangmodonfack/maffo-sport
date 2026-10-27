import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7FY4LXNQW5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7FY4LXNQW5');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
