import type { Metadata } from "next";
import EditorialHubPage from "../../components/EditorialHubPage";
import { competitionContent } from "../competitionContent";

const page = competitionContent["ligue-des-champions-caf"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.canonical,
  },
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
    <EditorialHubPage
      eyebrow={`Football africain · ${page.name}`}
      title={page.title}
      intro={page.intro}
      notice="Données dynamiques disponibles prochainement : les calendriers, résultats et classements de cette compétition ne sont pas encore affichés ici. En attendant, retrouvez nos contenus éditoriaux et consultez les sources officielles pour les informations actualisées."
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
            "Découvrir les clubs, les joueurs et les compétitions du football africain.",
          href: "/football-africain",
        },
      ]}
      faq={page.faqs.map(([question, answer]) => ({
        question,
        answer,
      }))}
      footerNote="Maffo Sport propose des contenus informatifs sur le football africain. Les calendriers, résultats, classements et statistiques peuvent changer. Consultez les sources officielles pour vérifier les informations récentes."
    />
  );
}
