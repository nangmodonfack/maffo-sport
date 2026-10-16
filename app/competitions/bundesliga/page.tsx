import type { Metadata } from "next";
import EditorialHubPage from "../../components/EditorialHubPage";
import CompetitionMatches from "../../components/CompetitionMatches";
import { competitionContent } from "../competitionContent";

const page = competitionContent["bundesliga"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonical,
    siteName: "Maffo Sport",
    type: "website",
    locale: "fr_FR",
  },
};

export default function CompetitionPage() {
  return (
    <>
      <EditorialHubPage
        eyebrow={`Football · ${page.name}`}
        title={page.title}
        intro={page.intro}
        notice="Les calendriers, résultats et classements évoluent au fil de la saison. Vérifiez la date de mise à jour et les informations officielles en cas de changement."
        cardsHeading="Repères de la compétition"
        cards={[]}
        sections={page.sections.map(([heading, paragraphs]) => ({
          heading,
          paragraphs,
        }))}
        relatedHeading="Continuer sur Maffo Sport"
        relatedLinks={[
          {
            title: "Toutes les compétitions",
            description:
              "Retrouver les huit compétitions suivies par Maffo Sport.",
            href: "/competitions",
          },
          {
            title: "Équipes et joueurs",
            description:
              "Explorer les contenus consacrés aux clubs et aux joueurs.",
            href: "/equipes-joueurs",
          },
          {
            title: "Records et histoire",
            description:
              "Retrouver les repères historiques du football.",
            href: "/histoire-football",
          },
          {
            title: "Football africain",
            description:
              "Découvrir les clubs et compétitions du football africain.",
            href: "/football-africain",
          },
        ]}
        faq={page.faqs.map(([question, answer]) => ({
          question,
          answer,
        }))}
        footerNote="Maffo Sport propose des contenus informatifs sur le football. Les calendriers, résultats, classements et statistiques peuvent changer ; vérifiez leur date de mise à jour et les sources officielles."
      />

      <CompetitionMatches league="Bundesliga" />
    </>
  );
}
