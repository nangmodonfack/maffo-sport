import type { Metadata } from "next"; 
import EditorialHubPage from "../components/EditorialHubPage";

const title = "Football africain : CAN, clubs, sélections et joueurs africains";
const description =
"Suivez le football africain avec Maffo Sport : histoire de la CAN, compétitions de clubs, sélections nationales, clubs africains et parcours des joueurs à l’étranger.";

export const metadata: Metadata = {
title,
description,
alternates: { canonical: "https://sport.maffohub.com/football-africain" },
openGraph: {
title,
description,
url: "https://sport.maffohub.com/football-africain",
siteName: "Maffo Sport",
type: "website",
locale: "fr_FR",
},
};

const topics = [
{ title: "Coupe d’Afrique des nations", label: "Sélections", description: "L’histoire de la CAN, son format, ses palmarès, ses éditions et les faits marquants de la compétition.", href: "/histoire-football" },
{ title: "Ligue des champions de la CAF", label: "Clubs", description: "Comprendre la compétition interclubs, ses tours, ses équipes et son importance dans le football africain.", href: "/competitions" },
{ title: "Coupe de la Confédération CAF", label: "Clubs", description: "Suivre la deuxième grande compétition interclubs de la CAF et les parcours des équipes engagées.", href: "/competitions" },
{ title: "Sélections nationales africaines", label: "Équipes nationales", description: "Repères sur les sélections, leur histoire, leurs compétitions et leurs grandes générations.", href: "/equipes-joueurs" },
{ title: "Joueurs africains à l’étranger", label: "Joueurs", description: "Portraits et parcours de joueurs africains évoluant dans différents championnats à travers le monde.", href: "/equipes-joueurs" },
{ title: "Clubs et championnats nationaux", label: "Football local", description: "Découvrir les clubs, les championnats et les structures qui font vivre le football dans les pays africains.", href: "/competitions" },
];

export default function FootballAfricainPage() {
return (
<EditorialHubPage
eyebrow="Football · Afrique"
title="Football africain : CAN, clubs, sélections et joueurs africains"
intro="Le football africain rassemble des compétitions historiques, des clubs ambitieux, des sélections nationales et des joueurs présents dans de nombreux championnats. Maffo Sport propose des repères pour comprendre les compétitions du continent, suivre leurs acteurs et découvrir les histoires qui méritent d’être racontées."
notice="Les dates, convocations, résultats et transferts sont des informations évolutives. Pour les actualités, vérifie la date de publication et privilégie les annonces officielles des compétitions, fédérations et clubs."
cardsHeading="Explorer le football africain"
cards={topics}
sections={[
{
heading: "La Coupe d’Afrique des nations : une compétition majeure",
paragraphs: [
"La Coupe d’Afrique des nations, souvent appelée CAN, est la compétition des sélections nationales organisée par la Confédération africaine de football. Elle réunit des équipes représentant les pays participants et constitue un rendez-vous majeur du calendrier du football africain.",
"Pour comprendre une édition, il faut connaître son format, les groupes ou phases de classement, les règles de qualification et le tableau à élimination directe lorsqu’il existe. Les dates, le pays hôte, les équipes qualifiées et les résultats doivent toujours être associés à l’édition concernée, car ils changent d’un tournoi à l’autre.",
],
},
{
heading: "Les compétitions africaines de clubs",
paragraphs: [
"Les compétitions interclubs de la CAF permettent aux équipes qualifiées par leurs championnats ou coupes nationales de se mesurer à l’échelle continentale. La Ligue des champions de la CAF et la Coupe de la Confédération ont chacune leur format, leurs critères de qualification et leur calendrier.",
"Les parcours des clubs doivent être suivis à partir des informations de l’édition en cours. Les résultats historiques, le palmarès et la présentation du format sont des contenus durables ; les tirages, classements et rencontres programmées nécessitent des mises à jour régulières.",
],
},
{
heading: "Les joueurs africains dans les championnats étrangers",
paragraphs: [
"De nombreux joueurs africains évoluent dans des championnats nationaux et internationaux. Leurs parcours peuvent être étudiés à travers leur formation, leurs clubs successifs, leur rôle en équipe, leurs performances et leurs participations en sélection.",
"Un portrait sérieux distingue les informations confirmées des rumeurs. Les transferts, prêts, blessures et convocations doivent être vérifiés auprès de sources fiables. Les statistiques individuelles doivent préciser la compétition et la période retenues, car les totaux peuvent différer d’un fournisseur à l’autre.",
],
},
{
heading: "Les clubs et les championnats nationaux",
paragraphs: [
"Le football africain ne se limite pas aux tournois continentaux ni aux joueurs qui évoluent à l’étranger. Les clubs et championnats nationaux jouent un rôle essentiel dans la formation, la progression des joueurs et la vie sportive locale.",
"Les dossiers consacrés aux clubs peuvent présenter leur histoire, leur stade, leur palmarès et leur place dans le championnat national. Pour l’actualité, il faut préciser le pays, la compétition, la saison et la date afin que les lecteurs puissent situer correctement les informations.",
],
},
{
heading: "Comment suivre l’actualité du football africain avec méthode",
paragraphs: [
"Les informations concernant les sélections, les clubs et les compétitions peuvent être diffusées à des rythmes différents. Avant de partager un résultat, une liste de joueurs ou une date, vérifie l’annonce officielle et la date de mise à jour. Cette précaution est particulièrement importante lors des périodes de qualification, de mercato et de tournoi.",
"Maffo Sport peut associer des articles d’actualité à des guides durables sur l’histoire de la CAN, les règles des compétitions, les palmarès des clubs et les parcours des joueurs. Les dossiers evergreen apportent du contexte tandis que les articles récents couvrent les événements qui évoluent.",
],
},
]}
relatedHeading="Autres rubriques Maffo Sport"
relatedLinks={[
{ title: "Compétitions", description: "Championnats, coupes, calendriers et classements.", href: "/competitions" },
{ title: "Équipes et joueurs", description: "Profils de clubs, joueurs et statistiques individuelles.", href: "/equipes-joueurs" },
{ title: "Records et histoire", description: "Records, légendes et grandes finales du football.", href: "/histoire-football" },
{ title: "Actualités", description: "Les informations récentes publiées sur Maffo Sport.", href: "/actualites" },
]}
faq={[
{ question: "Où trouver l’histoire de la CAN ?", answer: "La rubrique Histoire du football est prévue pour les palmarès, les éditions marquantes et les records historiques, tandis que cette page rassemble les principaux sujets du football africain." },
{ question: "Quelles compétitions de clubs africains suivre ?", answer: "Les compétitions continentales de la CAF comprennent notamment la Ligue des champions de la CAF et la Coupe de la Confédération. Les équipes, dates et formats doivent être vérifiés pour chaque édition." },
{ question: "Comment vérifier un transfert ou une convocation ?", answer: "Privilégie les annonces officielles du club, de la fédération ou de l’organisateur de la compétition. Une rumeur ou une liste provisoire ne doit pas être présentée comme une confirmation." },
]}
footerNote="Maffo Sport vise à couvrir le football africain avec des informations contextualisées et vérifiables. Les données de saison et les actualités doivent être datées ; les dossiers historiques doivent préciser leurs sources."
/>
);
}
