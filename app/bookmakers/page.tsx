"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  CreditCard,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Star,
  Trophy,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type AvailabilityStatus = "accessible" | "verify" | "unavailable";

type ZoneKey =
  | "centralAfrica"
  | "westAfrica"
  | "easternEurope"
  | "latinAmerica"
  | "westernEurope";

type AvailabilityMap = Record<ZoneKey, AvailabilityStatus>;

type AvailabilityZone = {
  key: ZoneKey;
  zone: string;
  examples: string[];
};

type Bookmaker = {
  name: string;
  slug: string;
  logo: string;
  bonus: string;
  description: string;
  rating: string;
  mobile: boolean;
  football: boolean;
  payments: string[];
  availability: AvailabilityMap;
  advantages: string[];
  disadvantages: string[];
  affiliateUrl: string;
};

/* =========================================================
   DONNÉES COMMUNES
   Les zones et leurs pays ne sont définis qu'une seule fois.
========================================================= */

const availabilityZones: AvailabilityZone[] = [
  {
    key: "centralAfrica",
    zone: "Afrique centrale",
    examples: ["Cameroun", "Congo", "Gabon", "RDC"],
  },
  {
    key: "westAfrica",
    zone: "Afrique de l’Ouest",
    examples: ["Côte d’Ivoire", "Sénégal", "Bénin", "Togo"],
  },
  {
    key: "easternEurope",
    zone: "Europe de l’Est",
    examples: ["Géorgie", "Arménie", "Moldavie"],
  },
  {
    key: "latinAmerica",
    zone: "Amérique latine",
    examples: ["Brésil", "Argentine", "Pérou"],
  },
  {
    key: "westernEurope",
    zone: "Europe occidentale",
    examples: ["France", "Belgique", "Allemagne"],
  },
];

/* =========================================================
   CONFIGURATION DES BOOKMAKERS
========================================================= */

const bookmakers: Bookmaker[] = [
  {
    name: "1xBet",
    slug: "1xbet",
    logo: "/images/bookmakers/1xbet.png",

    bonus: "Bonus de premier dépôt jusqu’à 120 %*",

    description:
      "Une plateforme internationale avec une offre importante de marchés sportifs et une forte présence sur le football.",

    rating: "4,5/5",

    mobile: true,
    football: true,

    payments: [
      "Mobile Money",
      "Carte bancaire",
      "Virement",
      "Crypto",
    ],

    availability: {
      centralAfrica: "accessible",
      westAfrica: "verify",
      easternEurope: "verify",
      latinAmerica: "verify",
      westernEurope: "unavailable",
    },

    advantages: [
      "Large choix de marchés football",
      "Nombreuses compétitions disponibles",
      "Plusieurs moyens de paiement",
    ],

    disadvantages: [
      "Conditions variables selon le pays",
      "Certaines promotions sont soumises à des conditions de mise",
    ],

    affiliateUrl: "TON_LIEN_AFFILIE_1XBET",
  },

  {
    name: "1win",
    slug: "1win",
    logo: "/images/bookmakers/1win.png",

    bonus: "Bonus de bienvenue*",

    description:
      "Une plateforme orientée paris sportifs avec une interface moderne et une offre couvrant notamment le football.",

    rating: "4,3/5",

    mobile: true,
    football: true,

    payments: [
      "Mobile Money",
      "Carte bancaire",
      "Crypto",
    ],

    availability: {
      centralAfrica: "verify",
      westAfrica: "verify",
      easternEurope: "verify",
      latinAmerica: "verify",
      westernEurope: "verify",
    },

    advantages: [
      "Interface moderne",
      "Offre football importante",
      "Plusieurs options de paiement",
    ],

    disadvantages: [
      "Disponibilité à vérifier selon le pays",
      "Promotions susceptibles de changer",
    ],

    affiliateUrl: "TON_LIEN_AFFILIE_1WIN",
  },

  {
    name: "Betwinner",
    slug: "betwinner",
    logo: "/images/bookmakers/betwinner.png",

    bonus: "Bonus de premier dépôt jusqu’à 100 %*",

    description:
      "Un bookmaker international proposant de nombreux marchés sportifs et une offre particulièrement développée autour du football.",

    rating: "4,4/5",

    mobile: true,
    football: true,

    payments: [
      "Mobile Money",
      "Carte bancaire",
      "Virement",
      "Crypto",
    ],

    availability: {
      centralAfrica: "accessible",
      westAfrica: "verify",
      easternEurope: "accessible",
      latinAmerica: "verify",
      westernEurope: "unavailable",
    },

    advantages: [
      "Nombreux marchés football",
      "Large couverture des compétitions",
      "Plusieurs moyens de paiement",
    ],

    disadvantages: [
      "Conditions de bonus à vérifier",
      "Disponibilité variable selon le pays",
    ],

    affiliateUrl: "TON_LIEN_AFFILIE_BETWINNER",
  },
];

/* =========================================================
   CONFIGURATION DES STATUTS
========================================================= */

const statusConfig: Record<
  AvailabilityStatus,
  {
    label: string;
    className: string;
    icon: typeof Check;
  }
> = {
  accessible: {
    label: "Disponible",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    icon: Check,
  },

  verify: {
    label: "À vérifier",
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-400",
    icon: CircleHelp,
  },

  unavailable: {
    label: "Non disponible",
    className:
      "border-red-500/20 bg-red-500/10 text-red-400",
    icon: X,
  },
};

/* =========================================================
   COMPOSANTS
========================================================= */

function BookmakerLogo({
  bookmaker,
  size = "md",
}: {
  bookmaker: Bookmaker;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-20 w-20",
  };

  return (
    <div
      className={`relative ${dimensions[size]} shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white p-2`}
    >
      <Image
        src={bookmaker.logo}
        alt={`Logo ${bookmaker.name}`}
        fill
        sizes="80px"
        className="object-contain p-1"
      />
    </div>
  );
}

function AvailabilityBadge({
  status,
}: {
  status: AvailabilityStatus;
}) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${config.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}

function AvailabilityZoneCard({
  zone,
  status,
}: {
  zone: AvailabilityZone;
  status: AvailabilityStatus;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-white">
          {zone.zone}
        </h4>

        <AvailabilityBadge status={status} />
      </div>

      <p className="text-xs leading-5 text-zinc-500">
        Exemples : {zone.examples.join(", ")}
      </p>
    </div>
  );
}

function Rating({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

      <span className="font-semibold text-white">
        {rating}
      </span>
    </div>
  );
}

/* =========================================================
   POINTS CLÉS
   Générés automatiquement depuis les données du bookmaker.
========================================================= */

function KeyFeatures({
  bookmaker,
}: {
  bookmaker: Bookmaker;
}) {
  const features = [];

  if (bookmaker.football) {
    features.push({
      label: "Paris football",
      icon: Trophy,
    });
  }

  if (bookmaker.mobile) {
    features.push({
      label: "Application mobile",
      icon: Smartphone,
    });
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Points clés
      </p>

      <div className="mt-4 space-y-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.label}
              className="flex items-center gap-2 text-sm text-zinc-300"
            >
              <Icon className="h-4 w-4 text-emerald-400" />

              {feature.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BookmakersPage() {
  return (
    <main className="min-h-screen bg-[#050706] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.13),transparent_35%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              Comparatif bookmakers
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Quel bookmaker choisir pour vos paris sportifs ?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Comparez les principaux bookmakers suivis par Maffo Sport :
              bonus, football, moyens de paiement, disponibilité selon les
              zones et expérience mobile.
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Les informations peuvent varier selon votre pays de résidence,
              votre devise et les promotions actuellement proposées.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <Trophy className="mb-4 h-6 w-6 text-emerald-400" />

            <h2 className="text-lg font-semibold">
              Comparaison simple
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Retrouvez les principales informations avant de choisir une
              plateforme.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <CreditCard className="mb-4 h-6 w-6 text-emerald-400" />

            <h2 className="text-lg font-semibold">
              Paiements
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Consultez les principaux moyens de paiement proposés selon les
              plateformes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <ShieldCheck className="mb-4 h-6 w-6 text-emerald-400" />

            <h2 className="text-lg font-semibold">
              Disponibilité
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              La disponibilité peut changer selon le pays. Vérifiez toujours
              les conditions locales.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TABLEAU COMPARATIF
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Comparatif rapide
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Une première vue pour comparer les plateformes en quelques
            secondes.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Bookmaker
                  </th>

                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Bonus
                  </th>

                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Note
                  </th>

                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Football
                  </th>

                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Mobile
                  </th>

                  <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookmakers.map((bookmaker) => (
                  <tr
                    key={bookmaker.slug}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <BookmakerLogo
                          bookmaker={bookmaker}
                          size="sm"
                        />

                        <div>
                          <div className="font-semibold text-white">
                            {bookmaker.name}
                          </div>

                          <div className="mt-1 max-w-[250px] text-xs text-zinc-500">
                            {bookmaker.description.slice(0, 65)}...
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-semibold text-emerald-400">
                        {bookmaker.bonus}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <Rating rating={bookmaker.rating} />
                    </td>

                    <td className="px-6 py-5">
                      {bookmaker.football ? (
                        <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                          <Check className="h-4 w-4" />
                          Oui
                        </span>
                      ) : (
                        <span className="text-sm text-zinc-500">
                          Non
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5">
                      {bookmaker.mobile ? (
                        <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                          <Smartphone className="h-4 w-4" />
                          Oui
                        </span>
                      ) : (
                        <span className="text-sm text-zinc-500">
                          Non
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5 text-right">
                      <a
                        href={bookmaker.affiliateUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
                      >
                        Voir l'offre

                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          CARTES BOOKMAKERS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Les bookmakers en détail
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Consultez les avantages, les limites, les paiements et la
            disponibilité avant de vous inscrire.
          </p>
        </div>

        <div className="space-y-8">
          {bookmakers.map((bookmaker) => (
            <article
              key={bookmaker.slug}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              {/* HEADER */}

              <div className="border-b border-white/10 p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <BookmakerLogo
                      bookmaker={bookmaker}
                      size="lg"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">
                          {bookmaker.name}
                        </h3>

                        <Rating rating={bookmaker.rating} />
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                        {bookmaker.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={bookmaker.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
                  >
                    Découvrir {bookmaker.name}

                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* INFORMATIONS PRINCIPALES */}

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">
                {/* BONUS */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Offre
                  </p>

                  <p className="mt-3 text-xl font-bold text-emerald-400">
                    {bookmaker.bonus}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Offre susceptible de varier selon le pays, la devise et
                    la promotion en cours.
                  </p>
                </div>

                {/* PAIEMENTS */}

                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-emerald-400" />

                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Moyens de paiement
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {bookmaker.payments.map((payment) => (
                      <span
                        key={payment}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                      >
                        {payment}
                      </span>
                    ))}
                  </div>
                </div>

                {/* POINTS CLÉS DYNAMIQUES */}

                <KeyFeatures bookmaker={bookmaker} />
              </div>

              {/* AVANTAGES / INCONVÉNIENTS */}

              <div className="grid gap-6 border-t border-white/10 p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-white">
                    Ce qu'on apprécie
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {bookmaker.advantages.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    À prendre en compte
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {bookmaker.disadvantages.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <CircleHelp className="mt-1 h-4 w-4 shrink-0 text-amber-400" />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DISPONIBILITÉ */}

              <div className="border-t border-white/10 p-6 sm:p-8">
                <div className="mb-5">
                  <h4 className="font-semibold text-white">
                    Disponibilité par zone
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Les pays indiqués sont des exemples et ne constituent
                    pas une liste exhaustive. Vérifiez toujours la
                    disponibilité actuelle lors de l'inscription.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {availabilityZones.map((zone) => (
                    <AvailabilityZoneCard
                      key={zone.key}
                      zone={zone}
                      status={bookmaker.availability[zone.key]}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          LÉGENDE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />

            <div>
              <h2 className="font-semibold text-white">
                Comment lire la disponibilité ?
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <AvailabilityBadge status="accessible" />

                  <span className="text-xs text-zinc-500">
                    Disponibilité actuellement indiquée
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <AvailabilityBadge status="verify" />

                  <span className="text-xs text-zinc-500">
                    Vérification recommandée
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <AvailabilityBadge status="unavailable" />

                  <span className="text-xs text-zinc-500">
                    Non disponible selon les informations consultées
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRANSPARENCE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-400" />

            <div>
              <h2 className="font-semibold text-white">
                Transparence sur les liens
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Certains liens présents sur cette page sont des liens
                affiliés. Maffo Sport peut percevoir une commission si vous
                vous inscrivez ou effectuez une action via ces liens, sans
                coût supplémentaire pour vous.
              </p>

              <p className="mt-3 text-xs leading-5 text-zinc-500">
                Notre classement ne doit pas être considéré comme une
                garantie de gain. Les offres, conditions et disponibilités
                peuvent évoluer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TELEGRAM
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 sm:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold text-emerald-400">
              Maffo Sport
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Retrouvez aussi nos analyses et pronostics
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Les bookmakers ne représentent qu'une partie de l'expérience.
              Retrouvez également nos analyses football et nos contenus
              dédiés aux paris sportifs.
            </p>

            <Link
              href="https://t.me/maffoparissportifs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Rejoindre Telegram

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          JEU RESPONSABLE
      ===================================================== */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <ShieldCheck className="h-6 w-6 shrink-0 text-amber-400" />

            <div>
              <h2 className="font-semibold text-white">
                Jouez de manière responsable
              </h2>

              <p className="mt-2 max-w-4xl text-xs leading-6 text-zinc-500">
                Accès strictement interdit aux mineurs. L’âge minimum
                applicable peut varier selon votre pays de résidence
                (+18/+21 selon la réglementation locale). Les paris sportifs
                comportent un risque de perte. Ne misez jamais plus que ce
                que vous pouvez vous permettre de perdre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTE FINALE
      ===================================================== */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-xs leading-6 text-zinc-600">
            * Les offres, pourcentages, conditions, plafonds et critères
            d’éligibilité peuvent varier selon le pays, la devise, le moyen
            de paiement et la promotion en cours. Vérifiez toujours les
            conditions affichées par le bookmaker au moment de l'inscription.
          </p>

          <Link
            href="/jouer-responsable"
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition hover:text-white"
          >
            En savoir plus sur le jeu responsable

            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
