export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "comment-analyser-un-match-de-football",
    title: "Comment analyser un match de football avant de faire un pronostic ?",
    category: "Analyse & guides",
    excerpt:
      "Forme récente, statistiques, absences, confrontations et contexte : les principaux éléments à examiner avant d’analyser un match de football.",
    image: "/images/home/analyse-match.jpg",
    date: "23 septembre 2026",
    author: "Maffo Sport",
    content: [
      "Analyser un match de football ne consiste pas seulement à regarder le classement des deux équipes. Plusieurs éléments peuvent aider à mieux comprendre une rencontre avant le coup d’envoi.",

      "La forme récente des équipes est un premier indicateur. Il est utile de regarder les derniers résultats, mais aussi la manière dont ces résultats ont été obtenus. Une série de victoires ne raconte pas toujours toute l’histoire.",

      "Les performances à domicile et à l’extérieur peuvent également apporter des informations intéressantes. Certaines équipes sont particulièrement solides devant leur public alors qu’elles rencontrent davantage de difficultés lorsqu’elles jouent à l’extérieur.",

      "Les absences doivent aussi être prises en compte. Une blessure ou une suspension concernant un joueur important peut modifier l’équilibre d’une équipe, notamment lorsqu’il s’agit du gardien, d’un défenseur central, d’un milieu essentiel ou du meilleur buteur.",

      "Les statistiques permettent ensuite d’aller plus loin. Tirs cadrés, buts marqués, buts encaissés, possession, occasions créées ou encore buts attendus peuvent aider à compléter l’analyse.",

      "Le contexte du match compte également. Une équipe qui joue une rencontre européenne quelques jours plus tard peut gérer différemment son effectif. De la même manière, un match décisif pour le classement peut avoir une importance particulière.",

      "Enfin, il est préférable de croiser plusieurs informations plutôt que de se baser sur un seul indicateur. Une analyse solide repose sur un ensemble d'éléments et ne garantit jamais le résultat d'un match ou un gain sur un pari sportif.",
    ],
  },
];
