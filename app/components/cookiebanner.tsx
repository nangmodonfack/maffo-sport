"use client";

import { useEffect, useState } from "react";

type Consent = {
  analytics: boolean;
  advertising: boolean;
};

const COOKIE_NAME = "maffo_cookie_consent_v1";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 jours

function saveConsent(consent: Consent) {
  document.cookie =
    `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}` +
    `; Max-Age=${COOKIE_MAX_AGE}` +
    `; Path=/` +
    `; Domain=.maffohub.com` +
    `; SameSite=Lax` +
    `; Secure`;
}

function readConsent(): Consent | null {
  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) =>
    item.startsWith(`${COOKIE_NAME}=`)
  );

  if (!cookie) return null;

  try {
    const value = cookie.substring(COOKIE_NAME.length + 1);

    return JSON.parse(decodeURIComponent(value)) as Consent;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const saved = readConsent();

    if (saved) {
      setConsent(saved);
      setAnalytics(saved.analytics);
      setAdvertising(saved.advertising);
    } else {
      setShowBanner(true);
    }
  }, []);

  function acceptAll() {
    const newConsent = {
      analytics: true,
      advertising: true,
    };

    saveConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  }

  function rejectAll() {
    const newConsent = {
      analytics: false,
      advertising: false,
    };

    saveConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  }

  function savePreferences() {
    const newConsent = {
      analytics,
      advertising,
    };

    saveConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  }

  if (consent && !showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {/* =========================
          BANDEAU COOKIES
      ========================== */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-white/10 bg-[#090b0f] shadow-2xl">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">
                <h2 className="text-base font-bold text-white">
                  Votre confidentialité compte
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Maffo Sport utilise des cookies et des technologies
                  similaires pour assurer le fonctionnement du site,
                  mesurer son audience et, selon vos choix, permettre
                  certaines fonctionnalités publicitaires.
                </p>

                <a
                  href="/politique-cookies"
                  className="mt-2 inline-block text-sm text-green-400 underline hover:text-green-300"
                >
                  En savoir plus sur les cookies
                </a>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row lg:min-w-fit">
                <button
                  onClick={rejectAll}
                  className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Tout refuser
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Personnaliser
                </button>

                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-green-500 px-4 py-2.5 text-sm font-bold text-black hover:bg-green-400"
                >
                  Tout accepter
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* =========================
          PERSONNALISATION
      ========================== */}
      {showSettings && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4">

          <div className="w-full max-w-xl rounded-t-2xl border border-white/10 bg-[#090b0f] p-6 shadow-2xl sm:rounded-2xl">

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Préférences cookies
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Choisissez les catégories de cookies que vous
                  souhaitez autoriser.
                </p>
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="text-zinc-400 hover:text-white"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">

              {/* NÉCESSAIRES */}
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      Cookies nécessaires
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-zinc-500">
                      Nécessaires au fonctionnement du site.
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-green-400">
                    Toujours actifs
                  </span>
                </div>
              </div>

              {/* ANALYTICS */}
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <h3 className="font-semibold text-white">
                      Mesure d’audience
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-zinc-500">
                      Permet de comprendre comment les visiteurs
                      utilisent le site.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      analytics ? "bg-green-500" : "bg-zinc-700"
                    }`}
                    aria-label="Activer ou désactiver la mesure d’audience"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        analytics ? "left-6" : "left-1"
                      }`}
                    />
                  </button>

                </div>
              </div>

              {/* PUBLICITÉ */}
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <h3 className="font-semibold text-white">
                      Publicité
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-zinc-500">
                      Permet l’utilisation de certaines technologies
                      publicitaires et de personnalisation.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAdvertising(!advertising)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      advertising ? "bg-green-500" : "bg-zinc-700"
                    }`}
                    aria-label="Activer ou désactiver la publicité"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        advertising ? "left-6" : "left-1"
                      }`}
                    />
                  </button>

                </div>
              </div>

            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">

              <button
                onClick={rejectAll}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                Tout refuser
              </button>

              <button
                onClick={savePreferences}
                className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-black hover:bg-green-400"
              >
                Enregistrer mes choix
              </button>

            </div>

            <a
              href="/politique-cookies"
              className="mt-4 block text-center text-sm text-zinc-500 underline hover:text-white"
            >
              Consulter la politique de cookies
            </a>

          </div>
        </div>
      )}
    </>
  );
}
