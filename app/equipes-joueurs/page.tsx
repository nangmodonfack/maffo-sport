import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const SITE_URL = "https://sport.maffohub.com";
const PAGE_URL = `${SITE_URL}/equipes-joueurs`;

const title =
  "Équipes et joueurs de football : profils, effectifs et statistiques";
const description =
  "Explorez les équipes et joueurs de football : profils, effectifs, palmarès, statistiques individuelles et repères pour mieux comprendre les performances.";

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
    images: [{ url: `${SITE_URL}/images/home/equipes-terrain.svg` }],
  },
};

/* ---------- Données ---------- */

// Deux liens de navigation du haut (repris de la page d'accueil)
const topNav = [
  { label: "Actualités", href: "/actualites" },
  { label: "Résultats & calendrier", href: "/resultats-calendrier" },
];

// Deux illustrations créées pour la page (à placer dans /public/images/home)
const miniPhotos = [
  {
    src: "/images/home/equipes-terrain.svg",
    alt: "Schéma tactique d’une équipe de football en 4-3-3 sur un terrain",
    caption: "Effectifs et postes",
  },
  {
    src: "/images/home/equipes-statistiques.svg",
    alt: "Exemple de carte de statistiques individuelles d’un joueur",
    caption: "Statistiques individuelles",
  },
];

// Uniquement des pages qui existent déjà sur le site
const topics = [
  {
    title: "Analyser une équipe",
    label: "Clubs",
    description:
      "Forme récente, absences, calendrier : les repères pour comprendre où en est une équipe avant un match.",
    href: "/articles/analyser-une-equipe-avant-un-match",
  },
  {
    title: "Statistiques du football",
    label: "Données",
    description:
      "Possession, tirs cadrés, buts attendus : ce que mesurent les principaux indicateurs.",
    href: "/articles/principales-statistiques-du-football",
  },
  {
    title: "Lire les statistiques d’un match",
    label: "Comprendre le jeu",
    description:
      "Comment les chiffres éclairent le déroulement d’une rencontre et les performances des équipes.",
    href: "/articles/lire-statistiques-match-football",
  },
  {
    title: "Joueurs africains",
    label: "Football africain",
    description:
      "Parcours des joueurs africains en club et en sélection, et talents à suivre cette saison.",
    href: "/articles/joueurs-africains-a-suivre-cette-saison",
  },
];

const sections: {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}[] = [
  {
    heading: "Comment lire les statistiques d’un joueur ?",
    paragraphs: [
      "Une statistique n’a de sens que si l’on sait ce qu’elle mesure. Le nombre de buts décrit la production offensive d’un joueur, mais il ne dit pas tout de son travail. Son poste, son temps de jeu, son rôle tactique, les coups de pied arrêtés qu’il tire et le niveau de la compétition influencent les chiffres.",
      "Pour comparer deux joueurs, regardez des périodes comparables et tenez compte des minutes jouées : un total brut avantage celui qui a disputé plus de matchs. Rapporter les chiffres au temps de jeu donne un autre éclairage, sans effacer les différences de rôle.",
    ],
    bullets: [
      "Buts et passes décisives : la contribution directe aux actions qui finissent en but.",
      "Minutes jouées et titularisations : la place du joueur dans la rotation.",
      "Tirs, occasions créées et passes clés : la production offensive.",
      "Interceptions, duels et récupérations : des indicateurs défensifs, à lire selon le poste.",
    ],
  },
  {
    heading: "Comprendre le rôle d’un joueur dans son équipe",
    paragraphs: [
      "Le poste affiché ne résume pas toujours ce qu’un joueur fait réellement. Un latéral peut participer à la construction du jeu, un milieu protéger sa défense ou se projeter dans la surface, un attaquant créer des espaces pour ses partenaires. Le système de jeu et les consignes de l’entraîneur définissent ces missions.",
      "Les performances individuelles dépendent aussi du collectif. Un joueur est souvent plus efficace aux côtés de partenaires qui épousent son style. Un changement de système ou de rôle peut faire évoluer ses statistiques sans que son niveau ait vraiment changé.",
    ],
  },
  {
    heading: "Effectifs et transferts : regardez la date",
    paragraphs: [
      "Un effectif change au fil de la saison. Un joueur peut partir lors du mercato, revenir de blessure, être prêté ou quitter une compétition. D’où l’intérêt de distinguer les informations de carrière, durables, de celles de la saison en cours, qui évoluent.",
      "Pour une information importante, fiez-vous aux annonces officielles du club, de la compétition ou de l’instance concernée. Une rumeur de transfert ou une composition probable reste une hypothèse tant qu’elle n’est pas confirmée.",
    ],
  },
  {
    heading: "Fiches de clubs : aller au-delà du résultat",
    paragraphs: [
      "Pour bien connaître un club, regardez son identité, son stade, son histoire, ses titres majeurs et la compétition qu’il dispute. Ces repères expliquent les rivalités, les ambitions et le poids historique d’une équipe.",
      "Un palmarès se lit avec sa compétition et sa période : un titre national n’a pas la même portée qu’un titre continental. Les statistiques d’une saison, elles, ne valent que pour cette saison.",
    ],
  },
];

const relatedLinks = [
  {
    title: "Football africain",
    description: "CAN, clubs du continent et joueurs africains à l’étranger.",
    href: "/football-africain",
  },
  {
    title: "Résultats & calendrier",
    description: "Les scores et les matchs du jour.",
    href: "/resultats-calendrier",
  },
  {
    title: "Types de paris sportifs",
    description: "Le guide complet pour comprendre les principaux marchés.",
    href: "/types-de-paris-sportifs",
  },
  {
    title: "Actualités",
    description: "Les informations récentes publiées sur Maffo Sport.",
    href: "/actualites",
  },
];

const faq = [
  {
    question: "Quelles statistiques regarder pour comparer deux joueurs ?",
    answer:
      "Cela dépend de leur poste et de leur rôle. Comparez les minutes jouées, les contributions offensives ou défensives qui comptent pour ce poste, ainsi que la compétition et la période étudiées.",
  },
  {
    question: "Les effectifs affichés sont-ils définitifs ?",
    answer:
      "Non. Ils changent avec les transferts, les prêts et les décisions sportives. Vérifiez la date de mise à jour et les annonces officielles du club.",
  },
  {
    question:
      "Pourquoi deux sources donnent-elles parfois des statistiques différentes ?",
    answer:
      "Les fournisseurs de données n’utilisent pas toujours les mêmes définitions, méthodes de collecte ou périodes de calcul. Vérifiez la définition de chaque indicateur avant de comparer des chiffres.",
  },
];

// Sources externes de référence
const sources = [
  {
    name: "UEFA – Compétitions et statistiques",
    description: "Site officiel : effectifs, statistiques et palmarès des compétitions européennes.",
    href: "https://www.uefa.com",
  },
  {
    name: "FIFA",
    description: "Instance mondiale : règlements, classements et compétitions internationales.",
    href: "https://www.fifa.com",
  },
  {
    name: "Transfermarkt",
    description: "Base de données sur les effectifs, les transferts et les carrières de joueurs.",
    href: "https://www.transfermarkt.fr",
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
          name: "Équipes et joueurs",
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

export default function EquipesJoueursPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* En-tête : navigation + titre + 2 illustrations */}
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
                  Football · Références
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
                  {title}
                </h1>

                <p className="text-zinc-300 mt-4 max-w-2xl leading-7">
                  Clubs, joueurs, effectifs, palmarès et statistiques : retrouvez
                  ici les repères pour mieux connaître les équipes que vous
                  suivez et comprendre ce que racontent les chiffres sur le
                  terrain.
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
                        unoptimized
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
            Bon à savoir : effectifs, transferts, blessures et statistiques
            changent au fil de la saison. Une donnée n’a de valeur qu’avec sa
            compétition, sa période et sa date de mise à jour.
          </div>
        </section>

        {/* Cartes thématiques */}
        <section className="container-x py-10">
          <h2 className="text-2xl md:text-3xl font-black mb-5">
            Explorer les profils et les statistiques
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

                {section.bullets && (
                  <ul className="mt-4 space-y-2 text-zinc-300 leading-7 list-disc pl-5 marker:text-green-400">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
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
              Rubriques complémentaires
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
              Les informations présentées ici aident à comprendre le football ;
              elles ne garantissent aucun résultat sportif. Maffo Sport date ses
              contenus et s’appuie sur des sources fiables.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
