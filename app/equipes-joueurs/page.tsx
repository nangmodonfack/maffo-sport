import type { Metadata } from "next";
import EditorialHubPage from "../components/EditorialHubPage";

const title = "Équipes et joueurs de football : profils, effectifs et statistiques";
const description =
"Explorez les équipes et joueurs de football : profils, effectifs, palmarès, statistiques individuelles et repères pour mieux comprendre les performances.";

export const metadata: Metadata = {
title,
description,
alternates: { canonical: "https://sport.maffohub.com/equipes-joueurs" },
openGraph: {
title,
description,
url: "https://sport.maffohub.com/equipes-joueurs",
siteName: "Maffo Sport",
type: "website",
locale: "fr_FR",
},
};

const topics = [
{ title: "Fiches des équipes", label: "Clubs", description: "Repères sur l’identité d’un club, son championnat, son stade, son histoire et son palmarès.", href: "/competitions" },
{ title: "Profils de joueurs", label: "Joueurs", description: "Comprendre le poste, le parcours, les rôles et les principales étapes de la carrière d’un joueur.", href: "/football-africain" },
{ title: "Statistiques individuelles", label: "Données", description: "Buts, passes décisives, temps de jeu et autres indicateurs, à interpréter selon la compétition et la période.", href: "/#resultats" },
{ title: "Palmarès et records", label: "Repères historiques", description: "Titres remportés, distinctions et performances remarquables, replacés dans leur contexte historique.", href: "/histoire-football" },
{ title: "Effectifs et postes", label: "Comprendre le jeu", description: "Découvrir la composition d’un effectif, les rôles des joueurs et les équilibres d’une équipe.", href: "/competitions" },
{ title: "Joueurs africains", label: "Football africain", description: "Parcours des joueurs africains en club et en sélection, avec des informations vérifiées et datées.", href: "/football-africain" },
];

export default function EquipesJoueursPage() {
return (
<EditorialHubPage
eyebrow="Football · Références"
title="Équipes et joueurs de football : profils, effectifs et statistiques"
intro="Retrouvez les repères essentiels pour mieux connaître les clubs et les joueurs : identité, poste, parcours, palmarès, effectifs et statistiques individuelles. Cette rubrique a vocation à relier les données sportives aux histoires qui expliquent les performances sur le terrain."
notice="Les effectifs, transferts, blessures et statistiques de saison changent. Une donnée individuelle doit être associée à une compétition, une période et, lorsque c’est nécessaire, une date de mise à jour."
cardsHeading="Explorer les profils et les statistiques"
cards={topics}
sections={[
{
heading: "Comment lire les statistiques d’un joueur ?",
paragraphs: [
"Une statistique n’a de sens que si l’on sait ce qu’elle mesure. Le nombre de buts peut aider à décrire la production offensive d’un joueur, mais il ne suffit pas à évaluer l’ensemble de son travail. Le poste, le temps de jeu, le rôle tactique, les responsabilités sur coups de pied arrêtés et le niveau de la compétition influencent les chiffres.",
"Pour comparer deux joueurs, il faut examiner des périodes comparables et tenir compte du nombre de minutes jouées. Un total brut peut favoriser un joueur qui a disputé davantage de matchs. Les statistiques rapportées au temps de jeu peuvent apporter un autre éclairage, sans supprimer les différences de rôle ou de contexte.",
],
bullets: [
"Buts et passes décisives : contribution directe aux actions terminées.",
"Minutes jouées et titularisations : place dans la rotation de l’équipe.",
"Tirs, occasions créées et passes clés : éléments de production offensive.",
"Interceptions, duels et récupérations : indicateurs défensifs à interpréter selon le poste.",
],
},
{
heading: "Comprendre le rôle d’un joueur dans son équipe",
paragraphs: [
"Le poste annoncé ne décrit pas toujours la fonction réelle d’un joueur. Un latéral peut participer à la construction offensive, un milieu peut protéger la défense ou se projeter dans la surface, et un attaquant peut créer des espaces pour ses partenaires. Le système tactique et les consignes de l’entraîneur influencent ces missions.",
"Les performances individuelles dépendent aussi du collectif. Un joueur peut produire davantage lorsqu’il évolue avec des partenaires qui correspondent à son style. À l’inverse, un changement de système ou de rôle peut modifier ses statistiques sans que son niveau ait nécessairement changé dans les mêmes proportions.",
],
},
{
heading: "Effectifs, transferts et actualité : vérifier la date",
paragraphs: [
"Les effectifs sont des données évolutives. Un joueur peut changer de club lors d’un mercato, revenir de blessure, être prêté ou quitter une compétition. Les fiches doivent donc distinguer les informations de carrière, qui sont relativement durables, des informations de saison, qui nécessitent des mises à jour.",
"Pour une information importante, privilégie les annonces officielles du club, de la compétition ou de l’instance concernée. Les rumeurs de transfert et les compositions probables doivent être présentées comme telles tant qu’elles ne sont pas confirmées.",
],
},
{
heading: "Fiches de clubs : aller au-delà du résultat",
paragraphs: [
"Une fiche de club utile peut présenter son identité, son stade, son histoire, ses titres majeurs et sa compétition actuelle. Ces éléments aident à comprendre les rivalités, les objectifs sportifs et le poids historique d’une équipe.",
"Les palmarès doivent préciser la compétition et la période concernées. Les statistiques doivent être accompagnées de leur contexte, et les données de saison doivent être datées pour éviter de laisser croire qu’elles sont toujours actuelles.",
],
},
]}
relatedHeading="Rubriques complémentaires"
relatedLinks={[
{ title: "Compétitions", description: "Championnats, coupes, calendriers et classements.", href: "/competitions" },
{ title: "Football africain", description: "Clubs du continent, CAN et joueurs africains à l’étranger.", href: "/football-africain" },
{ title: "Records et histoire", description: "Grandes équipes, palmarès et moments marquants.", href: "/histoire-football" },
{ title: "Actualités", description: "Retrouver les actualités publiées sur le site.", href: "/actualites" },
]}
faq={[
{ question: "Quelles statistiques regarder pour comparer deux joueurs ?", answer: "Cela dépend de leur poste et de leur rôle. Compare les minutes jouées, les contributions offensives ou défensives pertinentes, la compétition et la période étudiée." },
{ question: "Les effectifs affichés sont-ils définitifs ?", answer: "Les effectifs peuvent changer lors des transferts, des prêts ou après des décisions sportives. Vérifie la date de mise à jour et les annonces officielles." },
{ question: "Pourquoi deux sources donnent-elles parfois des statistiques différentes ?", answer: "Les fournisseurs peuvent utiliser des définitions, des méthodes de collecte ou des périodes de calcul différentes. Il faut vérifier la définition de chaque indicateur avant de comparer les chiffres." },
]}
footerNote="Les statistiques et profils doivent être datés et attribués à des sources fiables lorsque cela est nécessaire. Les informations présentées ici sont destinées à la compréhension du football, et non à garantir un résultat sportif."
/>
);
}
