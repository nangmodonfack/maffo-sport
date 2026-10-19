import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const SITE_URL = "https://sport.maffohub.com";
const PAGE_URL = `${SITE_URL}/histoire-football`;

const title = "Histoire du football : légendes, records et grandes équipes";
const description =
  "Découvrez l’histoire du football, ses grandes légendes, les clubs mythiques, les records, les finales mémorables et les moments qui ont marqué le football africain et mondial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    siteName: "Maffo Sport",
    type: "article",
    locale: "fr_FR",
    images: [{ url: `${SITE_URL}/images/home/histoire-chronologie.svg` }],
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
    src: "/images/home/histoire-chronologie.svg",
    alt: "Frise des grandes dates du football : 1863, 1904, 1930 et 1957",
    caption: "Les grandes dates",
  },
  {
    src: "/images/home/histoire-trophee.svg",
    alt: "Illustration d’un trophée et d’un ballon de football",
    caption: "Les grands tournois",
  },
];

// Les cartes renvoient vers les sections de cette page (ancres)
const themes = [
  {
    title: "Les records du football",
    label: "Statistiques",
    description:
      "Buts, titres, performances individuelles et records collectifs : les chiffres qui ont marqué l’histoire du football.",
    href: "#records",
  },
  {
    title: "Les grandes équipes",
    label: "Clubs et sélections",
    description:
      "Du Real Madrid aux grands clubs africains, retour sur les équipes qui ont marqué leur époque.",
    href: "#clubs",
  },
  {
    title: "Les légendes du football",
    label: "Joueurs",
    description:
      "Pelé, Maradona, Messi, Cristiano Ronaldo : les parcours qui ont marqué le jeu.",
    href: "#legendes",
  },
  {
    title: "Les finales mémorables",
    label: "Grands matchs",
    description:
      "La finale de la Coupe du monde 2022 et les rencontres qui ont changé l’histoire des compétitions.",
    href: "#records",
  },
  {
    title: "L’histoire du football africain",
    label: "Afrique",
    description:
      "De la première Coupe d’Afrique des nations aux grandes épopées continentales.",
    href: "#afrique",
  },
  {
    title: "L’évolution du football",
    label: "Tactique et règles",
    description:
      "Comment les règles, les formations et les méthodes de jeu ont transformé le football.",
    href: "#tactique",
  },
];

const sections: {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}[] = [
  {
    id: "origines",
    heading: "Quand et comment le football moderne est-il né ?",
    paragraphs: [
      "Le football possède des racines anciennes, mais le jeu moderne s’est structuré au XIXe siècle en Angleterre. À cette époque, les écoles et les clubs pratiquaient différentes variantes du jeu, avec des règles qui n’étaient pas toujours compatibles.",
      "Une étape décisive intervient le 26 octobre 1863, avec la création de la Football Association en Angleterre. Elle établit des règles communes et distingue le football association des autres formes de football pratiquées à l’époque.",
      "Dans les décennies suivantes, le sport se diffuse dans de nombreux pays. Les clubs se multiplient, les compétitions nationales se développent et les rencontres internationales prennent de l’ampleur. Le football devient un phénomène populaire, porté par les rivalités locales, les grandes équipes et l’essor des médias.",
    ],
    bullets: [
      "1863 : création de la Football Association en Angleterre.",
      "1904 : fondation de la FIFA à Paris.",
      "1930 : première Coupe du monde masculine, organisée en Uruguay.",
      "1955-1956 : première édition de la Coupe des clubs champions européens, ancêtre de la Ligue des champions.",
    ],
  },
  {
    id: "coupe-du-monde",
    heading: "Quand a eu lieu la première Coupe du monde ?",
    paragraphs: [
      "La première Coupe du monde masculine de la FIFA se déroule en Uruguay en 1930. Le pays organisateur remporte cette édition inaugurale en battant l’Argentine en finale. Depuis, la compétition est devenue l’un des rendez-vous majeurs du football international.",
      "Au fil des éditions, plusieurs sélections ont marqué l’histoire du tournoi. Le Brésil s’est illustré par ses générations de joueurs talentueux, tandis que l’Italie, l’Allemagne, l’Argentine et la France ont aussi construit des palmarès importants. Chaque génération apporte ses héros, ses surprises et ses matchs mémorables.",
      "Les compétitions continentales occupent elles aussi une place essentielle. Le Championnat d’Europe rassemble les meilleures sélections européennes, tandis que la Coupe d’Afrique des nations met en valeur les équipes nationales du continent africain. Ces tournois créent des rivalités, révèlent des joueurs et forgent l’identité footballistique des pays participants.",
    ],
  },
  {
    id: "legendes",
    heading: "Qui sont les grandes légendes du football ?",
    paragraphs: [
      "Pelé reste l’une des figures les plus emblématiques de l’histoire du football. Avec le Brésil, il remporte trois Coupes du monde, en 1958, 1962 et 1970. Son talent technique, son sens du but et son influence internationale en ont fait une référence mondiale.",
      "Diego Maradona marque le football par sa créativité, sa conduite de balle et ses performances lors de la Coupe du monde 1986. Capitaine de l’Argentine, il joue un rôle majeur dans le parcours qui conduit son équipe au titre mondial au Mexique.",
      "Des décennies plus tard, Lionel Messi et Cristiano Ronaldo dominent une grande partie du football mondial. Leurs performances en club et en sélection, leurs records de buts et leurs nombreux trophées alimentent une rivalité qui a marqué toute une génération de supporters.",
      "L’histoire du football ne se résume pas à quelques noms. De Johan Cruyff à Zinedine Zidane, en passant par Ronaldo Nazário, Marta et bien d’autres, les grandes carrières racontent aussi l’évolution des techniques, des tactiques et de la place des joueurs dans le sport.",
    ],
  },
  {
    id: "clubs",
    heading: "Quels clubs ont marqué l’histoire du football ?",
    paragraphs: [
      "Certains clubs ont bâti une réputation mondiale grâce à leurs titres, à leurs joueurs et à leur influence sur le jeu. Le Real Madrid occupe une place particulière dans l’histoire de la Coupe d’Europe : il a remporté les cinq premières éditions de la Coupe des clubs champions européens, de 1956 à 1960, une série historique.",
      "Le FC Barcelone, l’AC Milan, Liverpool, le Bayern Munich, l’Ajax Amsterdam et Manchester United ont aussi marqué différentes périodes du football européen. Leurs succès sont liés à des générations de joueurs, à des entraîneurs influents et à des styles de jeu qui ont parfois inspiré d’autres équipes.",
      "Le football de clubs ne se limite pas à l’Europe. En Amérique du Sud, des formations comme Boca Juniors, River Plate, Santos et Flamengo tiennent une place importante dans la culture footballistique. En Afrique, Al Ahly, le TP Mazembe et l’Espérance de Tunis figurent parmi les clubs qui ont marqué les compétitions continentales.",
      "Pour comparer des clubs, précisez d’abord le critère : nombre de titres, compétitions prises en compte, période étudiée. Un palmarès européen ne mesure pas la même chose qu’un palmarès africain ou sud-américain.",
    ],
  },
  {
    id: "afrique",
    heading: "Quels sont les grands moments du football africain ?",
    paragraphs: [
      "La Confédération africaine de football (CAF) est créée en février 1957. Quelques jours plus tard, la première Coupe d’Afrique des nations est organisée au Soudan et remportée par l’Égypte. La compétition devient peu à peu un événement majeur du calendrier sportif africain.",
      "Au fil des éditions, plusieurs sélections se distinguent par leurs titres et leurs parcours. Le Cameroun, le Nigeria, le Ghana, la Côte d’Ivoire, l’Égypte et le Sénégal comptent parmi les nations qui ont marqué l’histoire de la CAN. Leurs succès ont donné naissance à des générations de joueurs admirés bien au-delà de leurs frontières.",
      "Roger Milla, George Weah, Samuel Eto’o, Didier Drogba et Jay-Jay Okocha ont aussi contribué à la renommée du football africain. Leurs carrières illustrent des parcours variés, entre compétitions continentales, grands championnats et rencontres internationales.",
      "Les clubs africains ont eux aussi une histoire riche, construite autour des championnats nationaux, de la Ligue des champions de la CAF et des rivalités régionales. Pour la comprendre, il faut s’intéresser autant aux titres qu’aux supporters, aux villes et aux traditions qui entourent les équipes.",
    ],
  },
  {
    id: "records",
    heading: "Quels sont les records et les matchs les plus marquants ?",
    paragraphs: [
      "Les records mesurent des performances exceptionnelles sur une carrière ou une saison : nombre de buts, titres remportés, matchs disputés, séries de victoires ou parcours d’une équipe dans une compétition.",
      "Le classement des meilleurs buteurs dépend toutefois du périmètre retenu. Les buts en club ne se confondent pas avec ceux marqués en sélection, et les statistiques d’une compétition ne correspondent pas forcément au total d’une carrière. Pour comparer deux joueurs, vérifiez que les chiffres reposent sur les mêmes critères.",
      "Certaines rencontres restent célèbres pour leur scénario. La finale de la Coupe du monde 2022 entre l’Argentine et la France se termine sur un score de 3-3 après prolongation. L’Argentine remporte ensuite la séance de tirs au but 4-2. Lionel Messi inscrit deux buts, tandis que Kylian Mbappé réalise un triplé : un scénario exceptionnel pour une finale mondiale.",
      "Les grandes soirées européennes, les remontées au score et les surprises en coupe font aussi partie de la mémoire collective. Au-delà du résultat, ces matchs deviennent historiques par les émotions qu’ils suscitent et par leurs conséquences sur les équipes ou les compétitions.",
    ],
  },
  {
    id: "tactique",
    heading: "Comment le football a-t-il évolué tactiquement ?",
    paragraphs: [
      "Les systèmes de jeu ont beaucoup changé depuis les débuts du football organisé. Les formations anciennes laissaient une grande place aux attaquants ; l’évolution des règles et des méthodes d’entraînement a peu à peu transformé l’équilibre entre défense, milieu et attaque.",
      "Au XXe siècle, plusieurs écoles tactiques ont influencé le jeu : organisation défensive, pressing, contre-attaque, jeu de possession et transitions rapides. Des entraîneurs et des équipes ont popularisé certaines approches, ensuite adaptées par leurs adversaires.",
      "Le football actuel repose sur des principes variés. Certaines équipes cherchent à contrôler le ballon et à construire depuis l’arrière ; d’autres privilégient la récupération haute, les attaques rapides ou la solidité défensive. Le système affiché sur la feuille de match ne décrit pas toujours le jeu réel d’une équipe, car les positions changent selon les phases de jeu.",
      "L’analyse vidéo, les données statistiques et les nouvelles méthodes de préparation physique ont aussi transformé la préparation des rencontres. Malgré ces évolutions, la qualité technique, la prise de décision et la coordination collective restent essentielles.",
    ],
  },
];

// Pages qui existent déjà sur le site
const relatedLinks = [
  {
    title: "Football africain",
    description: "Sélections, clubs et grandes compétitions du continent.",
    href: "/football-africain",
  },
  {
    title: "Équipes et joueurs",
    description: "Profils, effectifs et statistiques : comment les lire.",
    href: "/equipes-joueurs",
  },
  {
    title: "Résultats & calendrier",
    description: "Les scores et les matchs du jour.",
    href: "/resultats-calendrier",
  },
  {
    title: "Actualités football",
    description: "Les nouvelles et événements récents du football.",
    href: "/actualites",
  },
];

const faq = [
  {
    question: "Quand le football moderne a-t-il été créé ?",
    answer:
      "Le football moderne s’est structuré au XIXe siècle. La création de la Football Association en Angleterre, le 26 octobre 1863, est une étape majeure : elle a permis d’établir des règles communes.",
  },
  {
    question: "Quand a eu lieu la première Coupe du monde de football ?",
    answer:
      "La première Coupe du monde masculine de la FIFA a eu lieu en Uruguay en 1930. Le pays hôte a remporté la finale contre l’Argentine.",
  },
  {
    question: "Quand la FIFA a-t-elle été fondée ?",
    answer:
      "La FIFA a été fondée à Paris en 1904.",
  },
  {
    question: "Quel pays a gagné le plus de Coupes du monde ?",
    answer:
      "Le Brésil, avec cinq titres. L’Argentine a remporté la dernière édition en date, en 2022, après une finale face à la France.",
  },
  {
    question: "Qui a remporté la finale de la Coupe du monde 2022 ?",
    answer:
      "L’Argentine a battu la France aux tirs au but (4-2) après un score de 3-3 à l’issue de la prolongation.",
  },
  {
    question: "Quand la Coupe d’Afrique des nations a-t-elle été créée ?",
    answer:
      "La première édition s’est déroulée en 1957 au Soudan. L’Égypte a remporté ce premier tournoi.",
  },
  {
    question: "Quel club a gagné le plus de Coupes d’Europe ?",
    answer:
      "Le Real Madrid détient le record de titres dans la plus grande compétition européenne de clubs. Pour le total à jour, consultez les statistiques officielles de l’UEFA.",
  },
  {
    question: "Qui sont les grandes légendes de l’histoire du football ?",
    answer:
      "Pelé, Diego Maradona, Johan Cruyff, Zinedine Zidane, Lionel Messi et Cristiano Ronaldo comptent parmi les plus célèbres. Le football africain a aussi ses légendes : Roger Milla, Samuel Eto’o, Didier Drogba, George Weah.",
  },
  {
    question: "Pourquoi les records de football varient-ils selon les sources ?",
    answer:
      "Les sources ne comptent pas toujours la même chose : compétitions retenues, matchs officiels ou amicaux, archives disponibles, méthode de comptage. Vérifiez toujours ce que couvre le chiffre avant de le comparer.",
  },
];

// Sources officielles
const sources = [
  {
    name: "The Football Association – Histoire",
    description: "La création de la Football Association en 1863.",
    href: "https://www.thefa.com/about-football-association/who-we-are/history",
  },
  {
    name: "FIFA",
    description: "Archives et rétrospectives sur la Coupe du monde.",
    href: "https://www.fifa.com/",
  },
  {
    name: "UEFA – Histoire de la Ligue des champions",
    description: "Palmarès et statistiques des compétitions européennes.",
    href: "https://www.uefa.com/uefachampionsleague/history/",
  },
  {
    name: "CAF – Histoire de la confédération",
    description: "La création de la CAF et de la Coupe d’Afrique des nations.",
    href: "https://www.cafonline.com/fr/a-propos-de-la-caf/a-propos-de-nous/caf-history/",
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
          name: "Histoire du football",
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

export default function HistoireFootballPage() {
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
                  Football · Histoire et légendes
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
                  {title}
                </h1>

                <p className="text-zinc-300 mt-4 max-w-2xl leading-7">
                  Comment le football est-il devenu le sport le plus populaire
                  du monde ? Quels joueurs, quels clubs et quelles sélections
                  ont écrit son histoire ? Des origines du jeu moderne aux
                  grandes finales, retrouvez les dates, les personnages et les
                  exploits qui ont façonné le football.
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

        {/* Avis */}
        <section className="container-x pt-8">
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4 text-sm text-yellow-200">
            Bon à savoir : les records et statistiques historiques varient selon
            les compétitions et les critères de comptage. En cas de doute,
            consultez les archives de la FIFA, de l’UEFA ou de la CAF.
          </div>
        </section>

        {/* Cartes thématiques (liens vers les sections de la page) */}
        <section className="container-x py-10">
          <h2 className="text-2xl md:text-3xl font-black mb-5">
            Explorer l’histoire du football
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme) => (
              <a
                key={theme.title}
                href={theme.href}
                className="glass card-hover rounded-2xl p-5 block"
              >
                <div className="text-xs text-green-400 font-bold uppercase">
                  {theme.label}
                </div>

                <h3 className="font-black text-lg mt-2">{theme.title}</h3>

                <p className="text-sm text-zinc-400 mt-2 leading-6">
                  {theme.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-bold mt-4">
                  Aller à la section
                  <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contenu éditorial */}
        <section className="bg-[#0b0e14] border-y border-white/5">
          <div className="container-x py-12 max-w-4xl">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="mb-10 last:mb-0 scroll-mt-24"
              >
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
          <h2 className="text-2xl font-black mb-4">
            Sources et références historiques
          </h2>

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
              À découvrir également
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
              Cet article s’appuie sur des sources officielles (Football
              Association, FIFA, UEFA, CAF). Les palmarès et les records
              peuvent évoluer : vérifiez-les auprès des organisateurs.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
