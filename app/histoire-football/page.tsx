import type { Metadata } from "next";
import EditorialHubPage from "../components/EditorialHubPage";

const title = "Histoire du football : records, légendes et grandes équipes";
const description =
"Découvrez l’histoire du football à travers ses records, ses légendes, ses grandes équipes, ses finales mémorables et les moments qui ont marqué ce sport.";

export const metadata: Metadata = {
title,
description,
alternates: { canonical: "https://sport.maffohub.com/histoire-football" },
openGraph: {
title,
description,
url: "https://sport.maffohub.com/histoire-football",
siteName: "Maffo Sport",
type: "website",
locale: "fr_FR",
},
};

const themes = [
{ title: "Les records du football", label: "Records", description: "Comprendre les performances historiques en précisant la compétition, la période et les règles de comptage.", href: "/competitions" },
{ title: "Les grandes équipes", label: "Clubs et sélections", description: "Revenir sur les équipes qui ont marqué leur époque par leur jeu, leurs titres et leur influence.", href: "/equipes-joueurs" },
{ title: "Les légendes du jeu", label: "Joueurs", description: "Explorer les carrières, les styles et les héritages des joueurs qui ont marqué l’histoire du football.", href: "/equipes-joueurs" },
{ title: "Les finales mémorables", label: "Moments forts", description: "Replacer les grandes finales dans leur contexte, avec les scores, les faits décisifs et les conséquences.", href: "/competitions" },
{ title: "L’histoire de la CAN", label: "Football africain", description: "Découvrir les éditions marquantes de la Coupe d’Afrique des nations et l’évolution de la compétition.", href: "/football-africain" },
{ title: "L’évolution du football", label: "Tactique et règles", description: "Comprendre comment les règles, les systèmes tactiques et les méthodes d’entraînement ont évolué.", href: "/football-africain" },
];

export default function HistoireFootballPage() {
return (
<EditorialHubPage
eyebrow="Football · Mémoire et culture"
title="Histoire du football : records, légendes et grandes équipes"
intro="Le football se raconte à travers des records, des rivalités, des équipes légendaires et des moments qui ont changé la trajectoire d’une compétition. Maffo Sport explore ces histoires pour donner du contexte aux résultats d’aujourd’hui et transmettre les repères qui permettent de mieux comprendre le jeu."
notice="Les records peuvent varier selon les compétitions prises en compte et les méthodes de comptage. Nos dossiers doivent préciser leur périmètre, leur période et les sources utilisées."
cardsHeading="Explorer les grandes histoires du football"
cards={themes}
sections={[
{
heading: "Pourquoi l’histoire du football reste utile aujourd’hui",
paragraphs: [
"Connaître l’histoire du football ne consiste pas seulement à se souvenir des scores. Les grandes équipes ont aussi marqué leur époque par leur organisation, leur style de jeu, leur formation des joueurs ou leur influence sur les compétitions. Replacer une performance dans son contexte permet de comprendre pourquoi elle a été importante.",
"Les comparaisons entre générations demandent toutefois de la prudence. Les calendriers, les règles, les formats des compétitions, les conditions d’entraînement et les méthodes statistiques ont évolué. Une comparaison sérieuse doit expliquer les critères utilisés au lieu de présenter des époques différentes comme si elles étaient identiques.",
],
},
{
heading: "Comment vérifier un record de football",
paragraphs: [
"Avant de présenter un record, il faut préciser ce qui est compté : buts en club ou en sélection, compétition nationale ou internationale, matchs officiels ou amicaux, saison complète ou carrière. Des définitions différentes peuvent produire des totaux différents.",
"La vérification passe idéalement par les archives officielles des compétitions, des fédérations ou des clubs, complétées si nécessaire par des sources historiques reconnues. Lorsqu’un chiffre est contesté ou que les archives sont incomplètes, il faut le signaler clairement plutôt que présenter une certitude artificielle.",
],
bullets: [
"Préciser le périmètre du record et les compétitions incluses.",
"Indiquer la période concernée et la date de vérification.",
"Distinguer les statistiques officielles des estimations historiques.",
"Citer les sources et expliquer les éventuelles différences de comptage.",
],
},
{
heading: "Les grandes équipes et leur héritage",
paragraphs: [
"Une équipe devient mémorable pour différentes raisons : titres remportés, domination sur une période, qualité collective, innovations tactiques ou influence culturelle. Le palmarès est un repère important, mais il ne raconte pas à lui seul le style de jeu, les adversaires rencontrés ni les difficultés traversées.",
"Les portraits de grandes équipes peuvent aussi étudier les entraîneurs, les joueurs clés, la formation, les choix tactiques et le contexte dans lequel les succès ont été obtenus. Cette approche permet de produire des dossiers durables, utiles aux lecteurs qui cherchent à comprendre plus qu’un simple résultat.",
],
},
{
heading: "Les légendes et les moments décisifs",
paragraphs: [
"Un portrait de joueur peut mettre en lumière son parcours, ses qualités, ses principales étapes et l’influence qu’il a exercée sur son équipe ou sur le football. Pour éviter l’idéalisation, il faut s’appuyer sur des faits vérifiables et distinguer les statistiques, les témoignages et les appréciations éditoriales.",
"Les finales, les remontées au score, les surprises et les changements de règles peuvent être racontés comme des événements historiques. Une bonne rétrospective explique ce qui s’est passé, pourquoi le contexte comptait et quelles conséquences ont suivi, sans réécrire l’histoire à partir des seuls souvenirs les plus populaires.",
],
},
{
heading: "Un contenu evergreen à enrichir dans le temps",
paragraphs: [
"Les dossiers historiques ont l’avantage de rester pertinents longtemps, à condition d’être précis, documentés et bien entretenus. Ils peuvent être enrichis lorsqu’un record évolue, qu’une archive devient accessible ou qu’une nouvelle source permet de corriger un détail.",
"Maffo Sport peut développer cette rubrique progressivement : records de clubs et de sélections, palmarès de compétitions, portraits de légendes, grandes finales, histoire des tactiques et moments marquants du football africain comme mondial.",
],
},
]}
relatedHeading="Poursuivre la découverte"
relatedLinks={[
{ title: "Football africain", description: "Histoire de la CAN, clubs africains et grandes figures du continent.", href: "/football-africain" },
{ title: "Équipes et joueurs", description: "Parcours, profils, effectifs et statistiques.", href: "/equipes-joueurs" },
{ title: "Compétitions", description: "Comprendre les championnats et les coupes.", href: "/competitions" },
{ title: "Actualités", description: "Retrouver les informations récentes du football.", href: "/actualites" },
]}
faq={[
{ question: "Comment savoir si un record de football est officiel ?", answer: "Vérifie le périmètre du record et privilégie les archives de la compétition, de la fédération ou du club concerné. Certaines données anciennes peuvent être incomplètes ou comptées différemment selon les sources." },
{ question: "Pourquoi les comparaisons entre générations sont-elles difficiles ?", answer: "Les règles, les formats, les calendriers, les conditions de jeu et les méthodes de collecte statistique évoluent. Une comparaison doit préciser ses critères et ses limites." },
{ question: "Les articles historiques doivent-ils être mis à jour ?", answer: "Oui, lorsque de nouveaux éléments fiables apparaissent, qu’un record change ou qu’une erreur est identifiée. Les informations historiques peuvent rester durables tout en nécessitant des corrections documentées." },
]}
footerNote="Maffo Sport privilégie les faits vérifiables et le contexte historique. Les records et statistiques peuvent dépendre du périmètre retenu ; les sources et les définitions doivent être précisées dans les dossiers détaillés."
/>
);
}
