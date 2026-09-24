"use client";

import { useState } from "react";
import {
  Facebook,
  Youtube,
  Send,
  Link2,
  Share2,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") {
      return "";
    }

    return window.location.href;
  };

  const shareFacebook = () => {
    const url = encodeURIComponent(getShareUrl());

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareWhatsApp = () => {
    const url = encodeURIComponent(getShareUrl());

    window.open(
      `https://wa.me/?text=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareTelegram = () => {
    const url = encodeURIComponent(getShareUrl());

    window.open(
      `https://t.me/share/url?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareX = () => {
    const url = encodeURIComponent(getShareUrl());

    window.open(
      `https://twitter.com/intent/tweet?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    const url = getShareUrl();

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.prompt("Copiez le lien de cette page :", url);
    }
  };

  const nativeShare = async () => {
    const url = getShareUrl();

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch {
        // L'utilisateur a simplement fermé la fenêtre de partage.
      }
    } else {
      copyLink();
    }
  };

  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-[#05070a]"
    >
      <div className="container-x py-10 grid md:grid-cols-5 gap-8">

        {/* MARQUE */}
        <div>
          <a href="/" className="font-black text-xl">
            MAFFO{" "}
            <span className="text-green-400">
              SPORT
            </span>
          </a>

          <p className="text-sm text-zinc-500 mt-3 leading-6">
            Actualités, analyses, résultats, calendrier
            et pronostics sportifs.
          </p>
        </div>

        {/* SPORT */}
        <div>
          <div className="font-bold mb-3">
            Sport
          </div>

          <div className="space-y-2 text-sm text-zinc-500">
            <a
              href="/actualites"
              className="block hover:text-white"
            >
              Actualités
            </a>

            <a
              href="#football"
              className="block hover:text-white"
            >
              Football
            </a>

            <a
              href="/analyses-guides"
              className="block hover:text-white"
            >
              Analyses
            </a>

            <a
              href="/#resultats"
              className="block hover:text-white"
            >
              Résultats
            </a>
          </div>
        </div>

        {/* PARIS SPORTIFS */}
        <div>
          <div className="font-bold mb-3">
            Paris sportifs
          </div>

          <div className="space-y-2 text-sm text-zinc-500">
            <a
              href="/pronostics"
              className="block hover:text-white"
            >
              Pronostics
            </a>

            <a
              href="/analyses-guides"
              className="block hover:text-white"
            >
              Guides
            </a>

            <a
              href="#paris"
              className="block hover:text-white"
            >
              Types de paris
            </a>

            <a
              href="#paris"
              className="block hover:text-white"
            >
              Bookmakers
            </a>
          </div>
        </div>

        {/* INFORMATIONS */}
        <div>
          <div className="font-bold mb-3">
            Informations
          </div>

          <div className="space-y-2 text-sm text-zinc-500">
            <a
              href="/a-propos"
              className="block hover:text-white"
            >
              À propos
            </a>

            <a
              href="/contact"
              className="block hover:text-white"
            >
              Contact
            </a>

            <a
              href="/mentions-legales"
              className="block hover:text-white"
            >
              Mentions légales
            </a>

            <a
              href="/politique-confidentialite"
              className="block hover:text-white"
            >
              Confidentialité
            </a>

            <a
              href="/politique-cookies"
              className="block hover:text-white"
            >
              Politique cookies
            </a>

            <a
              href="/jouer-responsable"
              className="block hover:text-white"
            >
              Jouer responsable
            </a>
          </div>
        </div>

        {/* SUIVEZ-NOUS */}
        <div>
          <div className="font-bold mb-3">
            Suivez-nous
          </div>

          <div className="flex flex-col gap-3 text-sm text-zinc-500">

            <a
              href="https://www.facebook.com/share/14xFN6rsTtX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Facebook size={17} />
              Facebook
            </a>

            <a
              href="https://www.youtube.com/@maffohub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Youtube size={17} />
              YouTube
            </a>

            <a
              href="https://tiktok.com/@maffosport"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <span className="font-bold text-[15px]">♪</span>
              TikTok
            </a>

            <a
              href="https://t.me/maffoparissportifs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Send size={17} />
              Telegram
            </a>

          </div>
        </div>
      </div>

      {/* PARTAGER LA PAGE */}
      <div className="container-x py-6 border-t border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <div>
            <div className="font-bold text-sm">
              Partager cette page
            </div>

            <p className="text-xs text-zinc-600 mt-1">
              Partagez cet article ou cette page avec vos proches.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">

            {/* FACEBOOK */}
            <button
              type="button"
              onClick={shareFacebook}
              aria-label="Partager sur Facebook"
              title="Partager sur Facebook"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <Facebook size={18} />
            </button>

            {/* WHATSAPP */}
            <button
              type="button"
              onClick={shareWhatsApp}
              aria-label="Partager sur WhatsApp"
              title="Partager sur WhatsApp"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <MessageCircle size={18} />
            </button>

            {/* TELEGRAM */}
            <button
              type="button"
              onClick={shareTelegram}
              aria-label="Partager sur Telegram"
              title="Partager sur Telegram"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <Send size={18} />
            </button>

            {/* X */}
            <button
              type="button"
              onClick={shareX}
              aria-label="Partager sur X"
              title="Partager sur X"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <span className="font-bold text-sm">
                𝕏
              </span>
            </button>

            {/* PARTAGE NATIF */}
            <button
              type="button"
              onClick={nativeShare}
              aria-label="Partager"
              title="Partager"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <Share2 size={18} />
            </button>

            {/* COPIER LE LIEN */}
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copier le lien"
              title="Copier le lien"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition"
            >
              <Link2 size={18} />
            </button>

            {copied && (
              <span className="text-xs text-green-400 ml-1">
                Lien copié !
              </span>
            )}

          </div>
        </div>
      </div>

      {/* BAS DU FOOTER */}
      <div className="container-x py-5 border-t border-white/5 text-xs text-zinc-600 flex flex-col gap-3">

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © 2026 Maffo Sport. Tous droits réservés.
          </span>

          <span>
            Maffo Sport est un média sportif indépendant.
          </span>
        </div>

        <div className="leading-5">
          <a
            href="/jouer-responsable"
            className="text-zinc-500 hover:text-white underline"
          >
            Jouez responsablement.
          </a>{" "}
          Réservé aux personnes majeures selon la législation
          en vigueur dans votre pays de résidence (18+ / 21+).
          Jouer comporte des risques : endettement, isolement,
          dépendance.
        </div>

      </div>
    </footer>
  );
}
