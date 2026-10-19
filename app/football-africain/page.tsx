import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const SITE_URL = "https://sport.maffohub.com";
const PAGE_URL = `${SITE_URL}/football-africain`;

const title = "Football africain : CAN, clubs, sélections et joueurs africains";
const description =
  "Suivez le football africain avec Maffo Sport : histoire de la CAN, compétitions de clubs, sélections nationales, clubs africains et parcours des joueurs à l’étranger.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    siteName: "Maffo Sport",
    type: "website",
    locale: "fr_FR",
    images: [{ url: `${SITE_URL}/images/home/afrique-1.jpg` }],
  },
};

/* ---------- Données ---------- */

// Deux liens de navigation du haut (tirés de la page d'accueil)
const topNav = [
  { label: "Actualités", href: "/actualites" },
  { label: "Résultats & calendrier", href: "/resultats-calendrier" },
];

// Deux mini photos (déjà présentes dans /public/images/home)
const miniPhotos = [
  {
    src: "/images/home/afrique-1.jpg",
    alt: "Joueurs africains en action lors d’un match de football",
    caption: "Joueurs africains",
  },
  {
    src: "/images/home/afrique-2.jpg",
    alt: "Compétitions africaines de football",
    caption: "Compétitions africaines",
  },
];

// Uniquement des pages qui existent déjà sur le site
const topics = [
  {
    title: "Coupe d’Afrique des nations",
    label: "Sélections",
    description:
      "Format, palmarès, éditions marquantes : tout ce qu’il faut savoir sur la grande compétition des sélections africaines.",
    href: "/articles/grandes-competitions-africaines-expliquees",
  },
  {
    title: "Ligue des champions de la CAF",
    label: "Clubs",
    description:
      "Comment un club se qualifie, comment se déroule la compétition et pourquoi elle compte autant sur le continent.",
    href: "/articles/grandes-competitions-africaines-expliquees",
  },
  {
    title: "Coupe de la Confédération CAF",
    label: "Clubs",
    description:
      "La seconde compétition continentale de clubs, et les équipes qui s’y distinguent.",
    href: "/articles/clubs-africains-et-leurs-performances",
  },
  {
    title: "Joueurs africains à l’étranger",
    label: "Joueurs",
    description:
      "Les parcours et les performances des talents africains qui évoluent dans les grands championnats.",
    href: "/articles/joueurs-africains-a-suivre-cette-saison",
  },
];

const sections = [
  {
    heading: "La Coupe d’Afrique des nations, rendez-vous majeur du continent",
    paragraphs: [
      "La Coupe d’Afrique des nations, ou CAN, est la compétition qui réunit les meilleures sélections du continent. Organisée par la Confédération africaine de football (CAF), elle existe depuis 1957 et rassemble aujourd’hui 24 équipes, réparties en groupes avant une phase à élimination directe.",
      "Chaque édition a son pays hôte, ses équipes qualifiées et son lot d’histoires. Pour suivre un tournoi, repérez d’abord les groupes et les règles de qualification pour les huitièmes de finale : ce sont elles qui expliquent bien des calculs, des surprises et des éliminations.",
    ],
  },
  {
    heading: "Les compétitions africaines de clubs",
    paragraphs: [
      "Deux compétitions réunissent les meilleurs clubs du continent : la Ligue des champions de la CAF et la Coupe de la Confédération. Les équipes y accèdent grâce à leurs résultats dans leur championnat ou leur coupe nationale, puis s’affrontent en matchs aller-retour.",
      "La Ligue des champions est la plus prestigieuse. Al Ahly, en Égypte, y détient le plus grand nombre de titres. Pour suivre une édition en cours, concentrez-vous sur le tour actuel, les équipes encore en lice et les dates des prochaines rencontres.",
    ],
  },
  {
    heading: "Les joueurs africains dans les championnats étrangers",
    paragraphs: [
      "Beaucoup de joueurs africains font carrière en Europe et dans d’autres championnats. Pour comprendre leur niveau, regardez leur parcours : le club formateur, les étapes de leur carrière, leur poste, leur temps de jeu et leurs sélections.",
      "Quand vous lisez un transfert ou une rumeur, vérifiez qu’elle est confirmée par le club ou le joueur. Pour les statistiques, regardez toujours la compétition et la saison concernées : un même joueur peut afficher des chiffres différents selon la période et la source.",
    ],
  },
  {
    heading: "Les clubs et les championnats nationaux",
    paragraphs: [
      "Le football africain, ce n’est pas seulement la CAN et les stars de l’étranger. Les championnats nationaux forment les joueurs, animent les stades et font vivre des rivalités souvent anciennes.",
      "Pour découvrir un club, intéressez-vous à son histoire, à son stade, à son palmarès et à sa place dans son championnat. Ces repères aident à mieux situer ses résultats, en championnat comme en compétition continentale.",
    ],
  },
  {
    heading: "Comment bien suivre l’actualité du football africain",
    paragraphs: [
      "Résultats, listes de joueurs et dates peuvent changer rapidement, surtout pendant les qualifications, le mercato et les tournois. Avant de partager une information, vérifiez sa date de publication et son origine.",
      "Le plus fiable reste de croiser plusieurs sources : le site de la CAF, les communiqués des fédérations et des clubs, puis les articles de fond qui remettent les événements en contexte. C’est ce que nous vous proposons sur Maffo Sport.",
    ],
  },
];

const relatedLinks = [
  {
    title: "Joueurs africains à suivre",
    description: "Les talents africains à suivre cette saison.",
    href: "/articles/joueurs-africains-a-suivre-cette-saison",
  },
  {
    title: "Compétitions africaines expliquées",
    description: "CAN, Ligue des champions CAF : formats et enjeux.",
    href: "/articles/grandes-competitions-africaines-expliquees",
  },
  {
    title: "Clubs africains et performances",
    description: "Les clubs du continent et leurs résultats.",
    href: "/articles/clubs-africains-et-leurs-performances",
  },
  {
    title: "Actualités",
    description: "Les informations récentes publiées sur Maffo Sport.",
    href: "/actualites",
  },
];

const faq = [
  {
    question: "Qu’est-ce que la CAN ?",
    answer:
      "La Coupe d’Afrique des nations est la compétition des sélections nationales africaines, organisée par la CAF depuis 1957. Notre article sur les grandes compétitions africaines détaille son format et son histoire.",
  },
  {
    question: "Quelles compétitions de clubs africains suivre ?",
    answer:
      "Les deux principales sont la Ligue des champions de la CAF et la Coupe de la Confédération. Le format et les dates peuvent varier d’une saison à l’autre.",
  },
  {
    question: "Comment savoir si un transfert est confirmé ?",
    answer:
      "Fiez-vous à l’annonce officielle du club, du joueur ou de la fédération. Une rumeur de presse ou une liste provisoire n’est pas une confirmation.",
  },
];

// Sources externes faisant autorité
const sources = [
  {
    name: "CAF – Confédération africaine de football",
    description: "Site officiel : compétitions, calendriers et règlements.",
    href: "https://www.cafonline.com",
  },
  {
    name: "FIFA",
    description: "Instance mondiale : classements et compétitions internationales.",
    href: "https://www.fifa.com",
  },
  {
    name: "Wikipédia – Coupe d’Afrique des nations de football",
    description: "Historique, palmarès et éditions de la CAN.",
    href: "https://fr.wikipedia.org/wiki/Coupe_d%27Afrique_des_nations_de_football",
  },
];

/* ---------- Données structurées (SEO) ---------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Football africain",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

/* ---------- Page ---------- */

export default function FootballAfricainPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* En-tête : navigation + titre + 2 mini photos */}
        <section className="hero-grid border-b border-white/10">
          <div className="container-x py-10 md:py-14">
            <nav
              aria-label="Navigation rapide"
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                  <ChevronRight size={15} className="text-green-400" />
                </Link>
              ))}
            </nav>

            <div className="grid lg:grid-cols-[1.4fr_.6fr] gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">
                  Football · Afrique
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
                  {title}
                </h1>

                <p className="text-zinc-300 mt-4 max-w-2xl leading-7">
                  La CAN, les clubs, les sélections, les joueurs : retrouvez
                  ici les repères essentiels pour comprendre et suivre le
                  football africain, avec des guides clairs et des liens vers
                  nos analyses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {miniPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <div className="relative h-36 sm:h-44">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 45vw, 20vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-xs text-zinc-400">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avis d'actualisation */}
        <section className="container-x pt-8">
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4 text-sm text-yellow-200">
            Bon à savoir : calendriers, résultats et transferts évoluent vite. Consultez toujours la date de publication et les annonces officielles des organisateurs et des clubs.
          </div>
        </section>

        {/* Cartes thématiques */}
        <section className="container-x py-10">
          <h2 className="text-2xl md:text-3xl font-black mb-5">
            Explorer le football africain
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="glass card-hover rounded-2xl p-5 block"
              >
                <div className="text-xs text-green-400 font-bold uppercase">
                  {topic.label}
                </div>

                <h3 className="font-black text-lg mt-2">{topic.title}</h3>

                <p className="text-sm text-zinc-400 mt-2 leading-6">
                  {topic.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-bold mt-4">
                  Lire l’article
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contenu éditorial */}
        <section className="bg-[#0b0e14] border-y border-white/5">
          <div className="container-x py-12 max-w-4xl">
            {sections.map((section) => (
              <article key={section.heading} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-black">{section.heading}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-zinc-300 mt-4 leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container-x py-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black mb-5">
            Questions fréquentes
          </h2>

          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="glass rounded-2xl p-5 group"
              >
                <summary className="font-bold cursor-pointer list-none flex items-center justify-between gap-3">
                  {item.question}
                  <ChevronRight
                    size={18}
                    className="text-green-400 transition group-open:rotate-90"
                  />
                </summary>
                <p className="text-zinc-400 mt-3 leading-7">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="container-x pb-12 max-w-4xl">
          <h2 className="text-2xl font-black mb-4">Sources et références</h2>

          <ul className="space-y-3">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-hover rounded-xl p-4 flex items-start justify-between gap-3"
                >
                  <span>
                    <span className="font-bold block">{source.name}</span>
                    <span className="text-sm text-zinc-400">
                      {source.description}
                    </span>
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-green-400 shrink-0 mt-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Rubriques liées */}
        <section className="bg-[#0b0e14] border-t border-white/5">
          <div className="container-x py-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5">
              Autres rubriques Maffo Sport
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glass card-hover rounded-2xl p-5 block"
                >
                  <h3 className="font-black">{link.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-6">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>

            <p className="text-xs text-zinc-500 mt-8 max-w-3xl leading-5">
              Maffo Sport s’appuie sur des sources officielles et date ses articles pour vous aider à repérer facilement les informations à jour.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
