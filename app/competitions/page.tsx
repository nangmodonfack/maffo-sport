  import type { Metadata } from "next"; 
import EditorialHubPage from "../components/EditorialHubPage";

const title = "Compétitions de football : calendriers, classements et résultats";
const description =
"Retrouvez les grandes compétitions de football couvertes par Maffo Sport : championnats européens, coupes continentales, calendrier, classement et résultats.";

export const metadata: Metadata = {
title,
description,
alternates: { canonical: "https://sport.maffohub.com/competitions" },
openGraph: {
title,
description,
url: "https://sport.maffohub.com/competitions",
siteName: "Maffo Sport",
type: "website",
locale: "fr_FR",
},
};
const competitions = [
  {
    title: "Premier League",
    label: "Angleterre",
    description:
      "Suivez la saison anglaise, les journées, les résultats et la lutte au classement. Les données de chaque journée doivent être vérifiées au moment de la consultation.",
    href: "/competitions/premier-league",
  },
  {
    title: "La Liga",
    label: "Espagne",
    description:
      "Retrouvez les informations de saison sur le championnat espagnol, ses équipes, ses résultats et son classement.",
    href: "/competitions/liga",
  },
  {
    title: "Ligue 1",
    label: "France",
    description:
      "Explorez les rencontres du championnat français, les résultats, les équipes et les évolutions du classement.",
    href: "/competitions/ligue-1",
  },
  {
    title: "Serie A",
    label: "Italie",
    description:
      "Consultez les contenus consacrés au championnat italien, à ses rencontres et à ses principaux enjeux sportifs.",
    href: "/competitions/serie-a",
  },
  {
    title: "Bundesliga",
    label: "Allemagne",
    description:
      "Retrouvez les repères essentiels du championnat allemand et les informations relatives à la saison en cours.",
    href: "/competitions/bundesliga",
  },
  {
    title: "Ligue des champions",
    label: "Europe",
    description:
      "Suivez la compétition européenne des clubs : phase de ligue, tours à élimination directe et finale.",
    href: "/competitions/ligue-des-champions",
  },
  {
    title: "Ligue Europa",
    label: "Europe",
    description:
      "Découvrez les rencontres, les étapes de la compétition et les équipes engagées en Ligue Europa.",
    href: "/competitions/ligue-europa",
  },
  {
    title: "Ligue des champions de la CAF",
    label: "Afrique",
    description:
      "Suivez la principale compétition interclubs de la CAF, les clubs participants et les différentes étapes de la saison.",
    href: "/competitions/ligue-des-champions-caf",
  },
];

export default function CompetitionsPage() {
return (
<EditorialHubPage
eyebrow="Football · Compétitions"
title="Compétitions de football : calendriers, classements et résultats"
intro="Maffo Sport rassemble les repères utiles pour suivre les championnats et les coupes de football : format des compétitions, calendrier des rencontres, classements et résultats. Cette page sert de point d’entrée vers les compétitions couvertes par le média."
notice="Les calendriers, résultats et classements évoluent au fil des journées. Vérifie toujours la date de mise à jour et les informations de la rencontre. Les liens de calendrier renvoient à la zone correspondante du site lorsqu’elle est disponible."
cardsHeading="Les compétitions à suivre"
cards={competitions}
sections={[
{
heading: "Comment utiliser une page de compétition ?",
paragraphs: [
"Pour suivre un championnat, commence par identifier la journée ou le tour de coupe concerné, puis vérifie la date, l’heure locale et le statut de chaque rencontre. Un match programmé peut être reporté, déplacé ou interrompu : il est donc important de consulter les informations les plus récentes.",
"Le classement permet de situer les équipes selon les règles de la compétition. Selon le championnat, les critères de départage peuvent inclure les points, la différence de buts, les buts marqués ou d’autres règles officielles. En cas d’égalité, consulte le règlement de la compétition concernée.",
],
bullets: [
"Calendrier : rencontres prévues, dates et horaires.",
"Résultats : scores des matchs terminés, avec leur date.",
"Classement : position des équipes et points acquis.",
"Format : nombre d’équipes, système de qualification et règles de départage.",
],
},
{
heading: "Championnats et coupes : quelle différence ?",
paragraphs: [
"Un championnat se déroule généralement sur plusieurs journées, au cours desquelles les équipes accumulent des points. Le classement évolue au fil des rencontres et permet de déterminer le champion, les qualifications continentales ou les équipes reléguées, selon les règles de chaque compétition.",
"Une coupe peut se jouer en élimination directe, en plusieurs tours ou avec une phase initiale suivie de matchs à élimination directe. Certaines compétitions prévoient des prolongations et des tirs au but ; d’autres utilisent des règles spécifiques. Le règlement officiel reste la référence.",
],
},
{
heading: "Pourquoi les informations doivent-elles être actualisées ?",
paragraphs: [
"Une page de compétition combine des informations durables et des données qui changent. La présentation générale d’un championnat peut rester valable plusieurs saisons, tandis que son classement, son calendrier et les équipes qualifiées doivent être actualisés au fil de la saison.",
"Maffo Sport peut progressivement relier ces pages aux données de calendrier, de classement et de résultats déjà prévues dans l’application. En attendant que chaque bloc soit branché et testé, il vaut mieux consulter les liens disponibles sur le site et ne pas considérer un tableau non actualisé comme un classement en direct.",
],
},
]}
relatedHeading="Continuer sur Maffo Sport"
relatedLinks={[
{ title: "Football africain", description: "CAN, clubs africains et compétitions continentales.", href: "/football-africain" },
{ title: "Équipes et joueurs", description: "Profils, effectifs et statistiques individuelles.", href: "/equipes-joueurs" },
{ title: "Records et histoire", description: "Repères historiques, palmarès et records du football.", href: "/histoire-football" },
{ title: "Pronostics", description: "Consulter les analyses et contenus de pronostics disponibles.", href: "/pronostics" },
]}
faq={[
{ question: "Où trouver le calendrier d’une compétition ?", answer: "Choisis la compétition concernée puis consulte la zone calendrier ou résultats disponible sur Maffo Sport. Vérifie toujours la date de mise à jour, car les rencontres peuvent être reportées." },
{ question: "Les classements sont-ils actualisés en direct ?", answer: "Ils ne doivent être considérés comme actuels que si la source de données et la date de mise à jour le confirment. Une page statique ne constitue pas un classement en direct." },
{ question: "Quelles compétitions sont couvertes par Maffo Sport ?", answer: "Le site prévoit notamment plusieurs grands championnats européens, des compétitions de clubs européennes et des compétitions africaines. La couverture réelle peut évoluer selon les données disponibles." },
]}
footerNote="Maffo Sport propose des contenus informatifs sur le football. Les données sportives peuvent changer après publication ; vérifie les informations officielles de la compétition pour les décisions importantes."
/>
);
}
