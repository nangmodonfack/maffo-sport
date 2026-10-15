import type { Metadata } from "next";
import Link from "next/link";

const title = "Compétitions de football : calendriers, classements et résultats";
const description =
  "Retrouvez les grandes compétitions de football européennes et africaines couvertes par Maffo Sport : championnats, coupes, calendriers, résultats et classements.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://sport.maffohub.com/competitions",
  },
  openGraph: {
    title,
    description,
    url: "https://sport.maffohub.com/competitions",
    siteName: "Maffo Sport",
    type: "website",
    locale: "fr_FR",
  },
};

type Competition = {
  title: string;
  country: string;
  description: string;
  logo: string;
  href: string;
  abbreviation: string;
};

const competitions: Competition[] = [
  {
    title: "Premier League",
    country: "Angleterre",
    description:
      "Le championnat anglais réunit des clubs historiques et des équipes ambitieuses. Suivez les résultats, le calendrier et l'évolution du classement.",
    logo: "/images/competitions/premier-league.png",
    href: "/competitions/premier-league",
    abbreviation: "PL",
  },
  {
    title: "La Liga",
    country: "Espagne",
    description:
      "Le championnat espagnol est marqué par ses grandes rivalités et ses clubs emblématiques. Retrouvez les rencontres et les enjeux de chaque journée.",
    logo: "/images/competitions/liga.png",
    href: "/competitions/liga",
    abbreviation: "LL",
  },
  {
    title: "Ligue 1",
    country: "France",
    description:
      "Le football français rassemble des clubs aux ambitions variées. La course au titre, les places européennes et le maintien rythment la saison.",
    logo: "/images/competitions/ligue-1.png",
    href: "/competitions/ligue-1",
    abbreviation: "L1",
  },
  {
    title: "Serie A",
    country: "Italie",
    description:
      "Clubs historiques, rivalités et enjeux tactiques caractérisent le championnat italien. Les résultats font évoluer le classement tout au long de la saison.",
    logo: "/images/competitions/serie-a.png",
    href: "/competitions/serie-a",
    abbreviation: "SA",
  },
  {
    title: "Bundesliga",
    country: "Allemagne",
    description:
      "Le championnat allemand se distingue par son intensité et ses rivalités. Consultez les informations consacrées aux équipes et aux rencontres.",
    logo: "/images/competitions/bundesliga.png",
    href: "/competitions/bundesliga",
    abbreviation: "BL",
  },
  {
    title: "Ligue des champions",
    country: "Europe",
    description:
      "La compétition européenne des clubs réunit les équipes qualifiées pour se disputer le titre continental. Suivez les affiches et les différentes étapes du tournoi.",
    logo: "/images/competitions/ligue-des-champions.png",
    href: "/competitions/ligue-des-champions",
    abbreviation: "UCL",
  },
  {
    title: "Ligue Europa",
    country: "Europe",
    description:
      "La Ligue Europa oppose des clubs issus de différents championnats. Les confrontations européennes mènent progressivement les équipes vers la finale.",
    logo: "/images/competitions/ligue-europa.png",
    href: "/competitions/ligue-europa",
    abbreviation: "UEL",
  },
  {
    title: "Ligue des champions de la CAF",
    country: "Afrique",
    description:
      "Les meilleurs clubs africains s'affrontent pour remporter un titre continental majeur. La compétition met en lumière les équipes et les talents du football africain.",
    logo: "/images/competitions/ligue-des-champions-caf.png",
    href: "/competitions/ligue-des-champions-caf",
    abbreviation: "CAF",
  },
];

const relatedLinks = [
  {
    title: "Football africain",
    description:
      "Actualités, compétitions continentales et football des sélections africaines.",
    href: "/football-africain",
  },
  {
    title: "Équipes et joueurs",
    description: "Clubs, effectifs et statistiques individuelles.",
    href: "/equipes-joueurs",
  },
  {
    title: "Records et histoire",
    description:
      "Palmarès, grandes équipes et moments marquants du football.",
    href: "/histoire-football",
  },
  {
    title: "Pronostics",
    description: "Analyses et pronostics publiés sur Maffo Sport.",
    href: "/pronostics",
  },
];

const faqs = [
  {
    q: "Quelles compétitions sont présentées sur Maffo Sport ?",
    a: "La rubrique présente notamment la Premier League, La Liga, la Ligue 1, la Serie A, la Bundesliga, la Ligue des champions, la Ligue Europa et la Ligue des champions de la CAF.",
  },
  {
    q: "Où consulter les calendriers et les résultats ?",
    a: "Chaque compétition dispose d'un lien vers sa page dédiée. Les calendriers et les résultats sont accessibles selon les données et les fonctionnalités disponibles sur cette page.",
  },
  {
    q: "Maffo Sport couvre-t-il aussi le football africain ?",
    a: "Oui. La rubrique comprend notamment la Ligue des champions de la CAF et propose également une page consacrée au football africain.",
  },
];

export default function CompetitionsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Compétitions de football suivies par Maffo Sport",
    itemListElement: competitions.map((comp, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: comp.title,
      url: `https://sport.maffohub.com${comp.href}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#07110d] text-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* En-tête de la page */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#10271b] to-[#07110d]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
            MAFFO SPORT · FOOTBALL
          </p>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Les grandes compétitions de football
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Championnats européens, coupes continentales et football africain :
            retrouvez les compétitions suivies par Maffo Sport, avec des
            informations sur les équipes, les rencontres, les résultats et les
            classements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#competitions"
              className="rounded-lg bg-emerald-500 px-5 py-3 font-bold text-[#07110d] transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Explorer les compétitions
            </a>

            <Link
              href="/football-africain"
              className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Football africain
            </Link>
          </div>
        </div>
      </section>

      {/* Grille des compétitions */}
      <section
        id="competitions"
        className="mx-auto max-w-7xl scroll-mt-8 px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            Championnats et coupes
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Toutes les compétitions
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-400">
            Sélectionnez une compétition pour accéder à sa page dédiée.
            Les informations disponibles dépendent des contenus publiés et des
            données intégrées au site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {competitions.map((competition) => (
            <Link
              key={competition.href}
              href={competition.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b14] transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <article className="flex h-full flex-col">
                {/* Zone de logo */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#14291d] to-[#09130e] p-6">
                  <span
                    aria-hidden="true"
                    className="absolute select-none text-7xl font-black tracking-tighter text-white/[0.035]"
                  >
                    {competition.abbreviation}
                  </span>

                  <img
  src={competition.logo}
  alt={`Logo de ${competition.title}`}
  loading="lazy"
  className="relative z-10 h-24 w-full object-contain transition duration-300 group-hover:scale-105"
/>

                  <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-gray-300">
                    {competition.country}
                  </span>
                </div>

                {/* Informations de la compétition */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-white transition group-hover:text-emerald-400">
                    {competition.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                    {competition.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm font-bold text-emerald-400 transition group-hover:text-emerald-300">
                    <span>Découvrir la compétition</span>
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Présentation éditoriale */}
      <section className="border-y border-white/10 bg-[#0a1710]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              Suivi du football
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Calendriers, résultats et classements
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Une compétition se suit au fil des journées, des confrontations et
              des évolutions au classement. Les pages dédiées ont vocation à
              rassembler les informations essentielles pour comprendre le
              déroulement des saisons et les enjeux sportifs.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Les données de matchs et les statistiques sont présentées selon
              les sources disponibles et les fonctionnalités effectivement
              intégrées à Maffo Sport.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1b14] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">
              Une couverture européenne et africaine
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Les grands championnats européens côtoient les compétitions
              continentales. Cette sélection permet de retrouver différentes
              facettes du football de clubs, de l'Europe à l'Afrique.
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-300">
              <li className="flex gap-3">
                <span className="text-emerald-400" aria-hidden="true">✓</span>
                Championnats nationaux européens
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-400" aria-hidden="true">✓</span>
                Coupes européennes de clubs
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-400" aria-hidden="true">✓</span>
                Compétitions africaines
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-400" aria-hidden="true">✓</span>
                Informations et analyses footballistiques
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pages associées */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
          Pour aller plus loin
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Explorer Maffo Sport
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-white/10 bg-[#0d1b14] p-5 transition hover:border-emerald-500/50 hover:bg-[#102219] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <h3 className="font-bold text-white transition group-hover:text-emerald-400">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              <span className="mt-4 inline-block text-sm font-bold text-emerald-400 transition group-hover:text-emerald-300">
                Voir la rubrique →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0a1710]">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            Questions fréquentes
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            À propos des compétitions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/10 bg-[#0d1b14] p-5 focus-within:ring-2 focus-within:ring-emerald-400"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-white focus:outline-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-emerald-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sources éditoriales */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-6">
          <h2 className="text-sm font-bold text-gray-300">
            Sources et références
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Pour vérifier les informations officielles des compétitions :
          </p>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.premierleague.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                Premier League — site officiel
              </a>
            </li>

            <li>
              <a
                href="https://www.laliga.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                La Liga — site officiel
              </a>
            </li>

            <li>
              <a
                href="https://www.ligue1.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                Ligue 1 — site officiel
              </a>
            </li>

            <li>
              <a
                href="https://www.uefa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                UEFA — compétitions européennes
              </a>
            </li>

            <li>
              <a
                href="https://www.cafonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              >
                CAF — compétitions africaines
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
