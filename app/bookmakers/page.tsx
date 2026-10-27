"use client";

import { useState } from "react";

type PaymentGroup = {
  title: string;
  description: string;
};

type Bookmaker = {
  name: string;
  slug: string;
  logo: string;
  bonus: string;
  bonusPercentage: string;
  bonusCode: string;
  description: string;
  affiliateUrl: string;
  advantages: string[];
  disadvantages: string[];
  paymentMethods: PaymentGroup[];
};

const bookmakers: Bookmaker[] = [
  {
    name: "1xBet",
    slug: "1xbet",
    logo: "/images/bookmakers/1xbet.png",
    bonus: "Bonus de premier dépôt",
    bonusPercentage: "Jusqu’à 200 %*",
    bonusCode: "UBET10",
    description:
      "Une plateforme de paris sportifs proposant de nombreux marchés de football et différentes compétitions.",
    affiliateUrl:
      "https://reffpa.com/L?tag=d_6116212m_97c_&site=6116212&ad=97",
    advantages: [
      "Nombreux marchés de football",
      "Large choix de compétitions",
      "Utilisation sur mobile",
    ],
    disadvantages: [
      "Conditions du bonus à vérifier",
      "Disponibilité variable selon le pays",
    ],
    paymentMethods: [
      {
        title: "Mobile Money & Paiements locaux",
        description:
          "Orange Money, MTN MoMo, Wave, Moov Money, Airtel Money.",
      },
      {
        title: "Cartes & Virements",
        description: "Visa, Mastercard.",
      },
      {
        title: "E-wallets & Cryptomonnaies",
        description:
          "Skrill, Neteller, Perfect Money, Bitcoin, USDT.",
      },
    ],
  },
  {
    name: "1win",
    slug: "1win",
    logo: "/images/bookmakers/1win.png",
    bonus: "Bonus de bienvenue",
    bonusPercentage: "Jusqu’à 500 %*",
    bonusCode: "400MC",
    description:
      "Une plateforme proposant des paris sportifs, notamment sur le football, avec une offre de bienvenue annoncée.",
    affiliateUrl: "https://r1wlulu.life/?p=8kkp",
    advantages: [
      "Offre de bienvenue annoncée",
      "Paris sur différentes compétitions",
      "Utilisation sur mobile",
    ],
    disadvantages: [
      "Conditions du bonus à vérifier",
      "Disponibilité à confirmer dans ton pays",
    ],
    paymentMethods: [
      {
        title: "Mobile Money & Paiements locaux",
        description:
          "Orange Money, MTN MoMo, Wave, Perfect Money.",
      },
      {
        title: "Cartes & Crypto",
        description:
          "Visa, Mastercard, Cryptomonnaies (USDT, BTC).",
      },
    ],
  },
  {
    name: "Betwinner",
    slug: "betwinner",
    logo: "/images/bookmakers/betwinner.png",
    bonus: "Bonus de premier dépôt",
    bonusPercentage: "Jusqu’à 100 %*",
    bonusCode: "400MC",
    description:
      "Une plateforme de paris sportifs qui propose plusieurs marchés, dont les paris sur les matchs de football.",
    affiliateUrl: "https://bwredir.com/3ev6",
    advantages: [
      "Différents marchés de football",
      "Offre de bienvenue annoncée",
      "Accès sur mobile",
    ],
    disadvantages: [
      "Conditions de dépôt et de retrait à vérifier",
      "Offre variable selon le pays",
    ],
    paymentMethods: [
      {
        title: "Mobile Money & Paiements locaux",
        description:
          "Orange Money, MTN MoMo, Wave, Moov Money, M-Pesa.",
      },
      {
        title: "Autres options",
        description:
          "Visa, Mastercard, Skrill, Neteller, Crypto.",
      },
    ],
  },
];

function BonusPanel({
  bookmaker,
  copied,
  onCopy,
}: {
  bookmaker: Bookmaker;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07] p-4">
      <p className="text-sm text-slate-300">{bookmaker.bonus}</p>

      <p className="mt-1 text-2xl font-extrabold text-emerald-300">
        {bookmaker.bonusPercentage}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3">
        <div>
          <p className="text-xs text-slate-400">Code d’inscription</p>
          <p className="mt-1 text-lg font-extrabold tracking-wider text-white">
            {bookmaker.bonusCode}
          </p>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
        >
          {copied ? "Copié ✓" : "Copier le code"}
        </button>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-400">
        * Offre annoncée, soumise aux conditions du bookmaker et aux
        restrictions applicables dans ton pays. Vérifie les conditions
        avant tout dépôt.
      </p>
    </div>
  );
}

function CountryProfilePanel({
  bookmaker,
}: {
  bookmaker: Bookmaker;
}) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <h4 className="text-lg font-extrabold text-white">
        Disponibilité par pays
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Les conditions d’inscription et les restrictions géographiques
        varient selon le pays. Consulte les informations officielles
        avant de t’inscrire.
      </p>

    </section>
  );
}

function PaymentMethodsPanel({
  paymentMethods,
}: {
  paymentMethods: PaymentGroup[];
}) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <h4 className="text-lg font-extrabold text-white">
        Moyens de paiement
      </h4>

      <div className="mt-4 space-y-4">
        {paymentMethods.map((group) => (
          <div key={group.title}>
            <h5 className="font-semibold text-emerald-300">
              {group.title}
            </h5>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {group.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.05] p-3 text-xs leading-5 text-amber-100/80">
        Avant tout dépôt, consulte la caisse officielle de l’opérateur
        pour vérifier les méthodes disponibles, les frais, les limites
        et les conditions de retrait dans ton pays.
      </p>
    </section>
  );
}

export default function BookmakersPage() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  async function copyBonusCode(bookmaker: Bookmaker) {
    setCopyError(null);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(bookmaker.bonusCode);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = bookmaker.bonusCode;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();

        const success = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (!success) {
          throw new Error("Copie impossible");
        }
      }

      setCopiedSlug(bookmaker.slug);

      window.setTimeout(() => {
        setCopiedSlug((current) =>
          current === bookmaker.slug ? null : current
        );
      }, 2200);
    } catch {
      setCopyError(
        `Copie impossible. Sélectionne manuellement le code ${bookmaker.bonusCode}.`
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.16),transparent_55%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            Guide Maffo Sport
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Bookmakers : compare les offres et les codes bonus
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Compare les offres de bienvenue, retrouve les codes
            d’inscription et vérifie les conditions avant de choisir une
            plateforme. Un bonus ne garantit aucun gain.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#comparatif"
              className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300"
            >
              Comparer les offres
            </a>

            <a
              href="#jeu-responsable"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
            >
              Jouer responsable
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          {
            icon: "🎁",
            title: "Bonus affichés clairement",
            text: "Consulte les offres annoncées et leurs conditions.",
          },
          {
            icon: "🏷️",
            title: "Codes faciles à retrouver",
            text: "Copie le code directement depuis sa fiche.",
          },
          {
            icon: "🔎",
            title: "Conditions à vérifier",
            text: "Les offres et les restrictions varient selon le pays.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="text-2xl">{item.icon}</div>
            <h2 className="mt-3 font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="comparatif"
        className="mx-auto max-w-7xl scroll-mt-6 px-4 py-8 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-black">
          Comparatif des bookmakers
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          Les pourcentages sont indicatifs et ne garantissent pas
          l’éligibilité à l’offre. Vérifie les conditions officielles
          avant de t’inscrire.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-5 py-4">Bookmaker</th>
                <th className="px-5 py-4">Bonus annoncé</th>
                <th className="px-5 py-4">Code</th>
                <th className="px-5 py-4">Lien</th>
              </tr>
            </thead>

            <tbody>
              {bookmakers.map((bookmaker) => (
                <tr
                  key={bookmaker.slug}
                  className="border-t border-white/10 hover:bg-slate-900/70"
                >
                  <td className="px-5 py-5">
                    <a
  href={bookmaker.affiliateUrl}
  target="_blank"
  rel="sponsored nofollow noopener noreferrer"
  aria-label={`Visiter ${bookmaker.name} via notre lien affilié`}
  className="inline-flex items-center gap-3"
>
  <img
    src={bookmaker.logo}
    alt=""
    width={44}
    height={44}
    className="h-11 w-11 rounded-lg bg-white object-contain p-1 transition hover:scale-105"
  />

  <span className="font-bold text-white transition hover:text-emerald-300">
    {bookmaker.name}
  </span>
</a>
                  </td>

                  <td className="px-5 py-5">
                    <p className="font-extrabold text-emerald-300">
                      {bookmaker.bonusPercentage}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {bookmaker.bonus}
                    </p>
                  </td>

                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <code className="font-bold tracking-wider">
                        {bookmaker.bonusCode}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyBonusCode(bookmaker)}
                        className="text-sm font-semibold text-emerald-300"
                      >
                        {copiedSlug === bookmaker.slug
                          ? "Copié ✓"
                          : "Copier"}
                      </button>
                    </div>
                  </td>

                  <td className="px-5 py-5">
                    <a
                      href={bookmaker.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="inline-flex rounded-lg bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-emerald-300"
                    >
                      Découvrir l’offre ↗️
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {copyError && (
          <p role="status" className="mt-4 text-sm text-amber-300">
            {copyError}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">
          Découvrir chaque bookmaker
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {bookmakers.map((bookmaker) => (
            <article
              key={bookmaker.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
  <a
    href={bookmaker.affiliateUrl}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    aria-label={`Visiter ${bookmaker.name} via notre lien affilié`}
    className="shrink-0"
  >
    <img
      src={bookmaker.logo}
      alt=""
      width={64}
      height={64}
      className="h-16 w-16 rounded-xl bg-white object-contain p-2 transition hover:scale-105"
    />
  </a>

  <div>
    <h3 className="text-xl font-extrabold">
      <a
        href={bookmaker.affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="transition hover:text-emerald-300"
      >
        {bookmaker.name}
      </a>
    </h3>

    <p className="mt-1 text-sm text-slate-400">
      {bookmaker.bonus}
    </p>
  </div>
</div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {bookmaker.description}
              </p>

              <div className="mt-5">
                <BonusPanel
                  bookmaker={bookmaker}
                  copied={copiedSlug === bookmaker.slug}
                  onCopy={() => copyBonusCode(bookmaker)}
                />
              </div>

              <div className="mt-6">
                <h4 className="font-bold">Points à retenir</h4>
                <ul className="mt-3 space-y-2">
                  {bookmaker.advantages.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-6 text-slate-300"
                    >
                      <span className="mr-2 text-emerald-300">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <h4 className="font-bold">À vérifier</h4>
                <ul className="mt-3 space-y-2">
                  {bookmaker.disadvantages.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-6 text-slate-400"
                    >
                      <span className="mr-2 text-amber-300">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <CountryProfilePanel bookmaker={bookmaker} />

              <PaymentMethodsPanel
                paymentMethods={bookmaker.paymentMethods}
              />

              <a
                href={bookmaker.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-6 block rounded-xl bg-emerald-400 px-5 py-3 text-center font-extrabold text-slate-950 hover:bg-emerald-300"
              >
                Découvrir {bookmaker.name} ↗️
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
          <h2 className="font-bold">
            Comprendre la disponibilité par pays
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Une plateforme peut être accessible sur Internet sans être
            autorisée à proposer ses services dans ton pays. Vérifie les
            conditions de l’opérateur et la réglementation locale avant
            toute inscription.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Maffo Sport
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Analyses et actualités sportives
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Retrouve les publications de Maffo Sport sur Telegram.
            </p>
          </div>

          <a
            href="https://t.me/maffoparissportifs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300"
          >
            Rejoindre Telegram ↗️
          </a>
        </div>
      </section>

      <section
        id="jeu-responsable"
        className="mx-auto max-w-7xl scroll-mt-6 px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-6 sm:p-8">
          <h2 className="text-2xl font-black text-amber-200">
            Jouer responsable
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Les paris sportifs comportent un risque de perte financière.
            Un bonus ne garantit aucun gain. Ne mise pas l’argent nécessaire
            à tes dépenses essentielles et ne cherche pas à récupérer tes
            pertes.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Respecte l’âge légal et la réglementation de ton pays. Utilise
            uniquement les services autorisés dans ton pays de résidence.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <p className="text-xs leading-6 text-slate-500">
          Les bonus et les codes sont soumis aux conditions des opérateurs.
          Les offres, les conditions de mise et les moyens de paiement
          peuvent changer selon le pays et la promotion. Vérifie les
          conditions officielles avant toute inscription ou tout dépôt.
          Maffo Sport ne garantit aucun résultat de pari.
        </p>

        <p className="mt-3 text-[10px] leading-5 text-slate-600">
          Certains liens de cette page sont affiliés. Maffo Sport peut
          recevoir une commission si tu t’inscris via ces liens, sans
          frais supplémentaires pour toi. Cette rémunération ne garantit
          ni gain ni pertinence de l’offre pour ta situation.
        </p>
      </footer>
    </main>
  );
}
