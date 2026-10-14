export type CompetitionSection = [heading: string, paragraphs: string[]]; 
export type CompetitionPageContent = {
  name: string; label: string; title: string; description: string; canonical: string;
  intro: string; sections: CompetitionSection[]; faqs: [string, string][];
};
export const competitionContent: Record<string, CompetitionPageContent> = {
  "premier-league": {
    "name": "Premier League",
    "label": "Angleterre",
    "title": "Premier League : classement, calendrier et résultats",
    "description": "Suivez la Premier League : classement, calendrier, résultats, format du championnat anglais et repères utiles pour comprendre la saison.",
    "intro": "Bienvenue sur la page Premier League de Maffo Sport. Retrouvez les informations utiles pour suivre le championnat de première division anglaise : calendrier, résultats et classement lorsque les données sont disponibles et à jour. Cette page rassemble aussi des explications sur le fonctionnement de la compétition, les critères de classement et les éléments à observer pour comprendre les enjeux de chaque journée.",
    "sections": [
      [
        "Comprendre le championnat anglais",
        [
          "La Premier League réunit les clubs de première division du football anglais. Les équipes disputent les rencontres prévues au calendrier officiel et accumulent des points au fil de la saison. Le classement final détermine le champion, les places qualificatives pour les compétitions européennes et les clubs concernés par la relégation, selon les règles de la saison.",
          "Le classement doit être lu avec le nombre de matchs joués, les buts marqués et encaissés ainsi que les critères de départage prévus par le règlement. Une équipe qui compte une rencontre en retard peut avoir une situation différente de celle que suggère une comparaison limitée aux points."
        ]
      ],
      [
        "Calendrier et résultats",
        [
          "Le calendrier indique les prochaines rencontres et leurs horaires, tandis que les résultats présentent les scores des matchs terminés. La programmation peut évoluer : une rencontre peut être déplacée ou reportée. Vérifiez toujours la date, l’heure locale et le statut avant de considérer une information comme actuelle.",
          "Maffo Sport a vocation à réunir ces données dans une présentation lisible. Les résultats et classements ne doivent être considérés comme actualisés que lorsque la source et la date de mise à jour le confirment. En cas de données indisponibles, il vaut mieux afficher un message explicite plutôt que des chiffres anciens."
        ]
      ],
      [
        "Comment analyser les enjeux d’une journée ?",
        [
          "La forme récente peut donner une indication, mais elle ne suffit pas à prévoir la suite. Pour mieux comprendre une rencontre, observez les adversaires récemment affrontés, les performances à domicile et à l’extérieur, les buts marqués et encaissés, le calendrier et les absences confirmées.",
          "La lutte pour le titre, les places européennes et le maintien évolue au fil des journées. Une série de résultats doit être replacée dans son contexte et ne garantit pas la même performance lors du prochain match. Les statistiques sont plus utiles lorsqu’elles sont comparées sur une période clairement définie."
        ]
      ],
      [
        "Format, records et histoire",
        [
          "Les règles et modalités de qualification doivent être vérifiées pour la saison concernée. Les records historiques doivent eux aussi préciser leur périmètre : une statistique peut concerner l’ère Premier League ou l’ensemble de l’histoire de la première division anglaise. Il est important de ne pas mélanger ces catégories.",
          "Maffo Sport privilégiera des repères historiques vérifiables et contextualisés. Les informations historiques complètent les données de la saison en cours, mais ne les remplacent pas."
        ]
      ]
    ],
    "faqs": [
      [
        "Où consulter le classement de Premier League ?",
        "Dans le bloc classement de cette page lorsqu’il est disponible. Vérifiez la date de mise à jour et le nombre de matchs joués."
      ],
      [
        "Où trouver les prochains matchs ?",
        "Consultez le calendrier disponible sur cette page et vérifiez les horaires les plus récents, car la programmation peut changer."
      ],
      [
        "Les résultats sont-ils en direct ?",
        "Ils ne doivent être considérés comme actuels que si la source et la dernière actualisation le confirment."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/premier-league"
  },
  "liga": {
    "name": "La Liga",
    "label": "Espagne",
    "title": "La Liga : classement, calendrier et résultats du championnat espagnol",
    "description": "Consultez le classement, le calendrier et les résultats de La Liga, avec des repères sur le format du championnat espagnol et ses enjeux.",
    "intro": "Maffo Sport rassemble sur cette page les informations essentielles pour suivre La Liga, le championnat de première division espagnole. Vous pourrez consulter les données de calendrier, de résultats et de classement lorsqu’elles sont disponibles et actualisées, ainsi que des explications sur les règles, les qualifications et les performances des équipes.",
    "sections": [
      [
        "Le fonctionnement de La Liga",
        [
          "La Liga se déroule sur plusieurs journées selon le calendrier officiel. Les équipes obtiennent des points en fonction de leurs résultats, et le classement final détermine le champion, les places européennes et les situations de relégation selon le règlement en vigueur.",
          "Il faut distinguer les informations durables, comme les principes généraux du championnat, des données saisonnières, comme les équipes engagées, les horaires, les scores et les points. Ces dernières évoluent et doivent être vérifiées régulièrement."
        ]
      ],
      [
        "Classement et qualifications",
        [
          "Les points sont un premier repère, mais le nombre de matchs disputés et les critères officiels de départage comptent aussi. Les buts marqués et encaissés peuvent faire partie des indicateurs à examiner, selon le règlement de la compétition.",
          "Les places européennes et la relégation constituent des enjeux différents selon la position des clubs. Les conséquences exactes dépendent du règlement de la saison ; une qualification ne doit pas être annoncée comme définitive avant confirmation officielle."
        ]
      ],
      [
        "Calendrier, résultats et analyse",
        [
          "Les dates et horaires des matchs peuvent changer. Vérifiez le statut de chaque rencontre et associez toujours un score à la bonne journée. Un tableau qui n’a pas été actualisé ne doit pas être présenté comme un classement en direct.",
          "Pour analyser une équipe, comparez ses performances récentes sur une période définie et tenez compte du niveau des adversaires, des matchs à domicile et à l’extérieur, du calendrier et des absences confirmées. Les confrontations passées donnent du contexte, mais ne prédisent pas automatiquement la prochaine rencontre."
        ]
      ],
      [
        "Palmarès et statistiques historiques",
        [
          "Les records et le palmarès permettent de replacer la saison actuelle dans l’histoire du football espagnol. Chaque chiffre historique doit avoir un périmètre clair et une source vérifiable, notamment lorsqu’il s’agit de distinguer les saisons anciennes des données actuelles.",
          "Les contenus historiques doivent rester séparés des données dynamiques : le lecteur doit savoir s’il consulte un fait stable ou une information susceptible de changer après chaque journée."
        ]
      ]
    ],
    "faqs": [
      [
        "Où voir le classement de La Liga ?",
        "Consultez le bloc classement de cette page lorsque les données sont disponibles et vérifiez sa date d’actualisation."
      ],
      [
        "Comment consulter le calendrier ?",
        "Le calendrier disponible sur cette page regroupe les rencontres à venir. Vérifiez les horaires les plus récents."
      ],
      [
        "Les records historiques sont-ils des statistiques de la saison ?",
        "Non. Les records historiques et les statistiques courantes sont deux catégories distinctes."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/liga"
  },
  "ligue-1": {
    "name": "Ligue 1",
    "label": "France",
    "title": "Ligue 1 : classement, calendrier et résultats du championnat de France",
    "description": "Suivez la Ligue 1 avec le classement, le calendrier, les résultats et des explications sur le format du championnat français.",
    "intro": "Cette page Maffo Sport est consacrée à la Ligue 1, le championnat de première division française. Elle rassemble les repères utiles pour suivre la compétition, consulter les résultats et le classement lorsque les données sont disponibles, et comprendre les enjeux sportifs de la saison. Les données évolutives doivent toujours être accompagnées d’une actualisation vérifiable.",
    "sections": [
      [
        "Présentation de la Ligue 1",
        [
          "Les clubs de Ligue 1 disputent les rencontres prévues au calendrier officiel et accumulent des points au fil de la saison. Le classement final détermine le titre, les places de qualification continentale et les situations de relégation ou de barrage selon le format applicable.",
          "Le nombre de clubs, les modalités de qualification et les règles peuvent évoluer. Les informations propres à une édition doivent donc être vérifiées à partir du règlement et des communications officielles."
        ]
      ],
      [
        "Comprendre le classement",
        [
          "Les points donnent une première vue d’ensemble, mais il faut aussi observer le nombre de matchs joués, les buts pour et contre et les critères de départage prévus par le règlement. Une équipe ayant un match en retard peut être difficile à comparer directement à une autre.",
          "Les places européennes et la lutte pour le maintien évoluent au fil des journées. Une position provisoire ne constitue pas une qualification définitive tant que les conditions officielles ne sont pas remplies."
        ]
      ],
      [
        "Calendrier, résultats et performances",
        [
          "Le calendrier permet de repérer les prochaines rencontres et les résultats indiquent les scores des matchs terminés. Les reports et modifications d’horaires rendent nécessaire la vérification de la date, de l’heure locale et du statut du match.",
          "Pour analyser une rencontre, croisez la forme récente, les adversaires, les performances à domicile et à l’extérieur, les statistiques offensives et défensives et les absences confirmées. Aucun chiffre isolé ne garantit le résultat d’un match."
        ]
      ],
      [
        "Histoire et repères statistiques",
        [
          "Les records du football français doivent être vérifiés et présentés avec leur période de référence. Il faut distinguer les statistiques liées au format actuel de la compétition de celles issues d’anciennes appellations ou de formats différents.",
          "Les repères historiques complètent les informations de saison. Ils permettent de comprendre le contexte d’un club ou d’une performance, sans être confondus avec le classement actuel."
        ]
      ]
    ],
    "faqs": [
      [
        "Où trouver le classement de Ligue 1 ?",
        "Dans le bloc classement de cette page lorsque les données sont disponibles ; vérifiez la date de mise à jour."
      ],
      [
        "Le calendrier peut-il changer ?",
        "Oui, les matchs peuvent être déplacés ou reportés. Vérifiez les informations les plus récentes."
      ],
      [
        "Comment départager deux équipes à égalité ?",
        "Les critères sont ceux du règlement officiel de la saison et doivent être vérifiés pour l’édition concernée."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/ligue-1"
  },
  "serie-a": {
    "name": "Serie A",
    "label": "Italie",
    "title": "Serie A : classement, calendrier et résultats du championnat italien",
    "description": "Retrouvez les informations de Serie A : classement, calendrier, résultats, format du championnat italien et repères statistiques.",
    "intro": "Bienvenue sur la page Serie A de Maffo Sport, consacrée au championnat de première division italienne. Retrouvez les informations sur les rencontres, les résultats et le classement lorsque les données sont disponibles et à jour. Des explications éditoriales permettent aussi de comprendre le fonctionnement de la compétition et les enjeux qui se dessinent au fil de la saison.",
    "sections": [
      [
        "Les repères essentiels de Serie A",
        [
          "Les clubs de Serie A disputent un championnat organisé selon le calendrier officiel. Les points accumulés déterminent le classement et les conséquences de la saison : titre, places continentales et relégation selon les règles applicables.",
          "Le format et les critères de qualification doivent être vérifiés pour l’édition en cours. Une page fiable distingue les explications générales des données de saison qui changent régulièrement."
        ]
      ],
      [
        "Lire le classement italien",
        [
          "Les points constituent un indicateur central, mais le nombre de matchs joués, les buts marqués et encaissés et les critères officiels de départage doivent aussi être pris en compte. Les règles précises doivent être consultées avant de conclure qu’une équipe est devant une autre à égalité.",
          "Il est utile de distinguer une position provisoire d’une place définitivement acquise. Tant que toutes les rencontres ne sont pas disputées, le classement peut évoluer et certaines équipes peuvent avoir un match en retard."
        ]
      ],
      [
        "Calendrier et analyse des matchs",
        [
          "Les horaires peuvent changer et des rencontres peuvent être reportées. Vérifiez la date, le fuseau horaire et le statut du match. Un score doit être associé à la bonne rencontre et à la bonne journée.",
          "Pour comparer deux clubs, observez les résultats récents, le niveau des adversaires, les performances à domicile et à l’extérieur, les absences et le calendrier. Les confrontations passées donnent un contexte, mais les effectifs et les entraîneurs peuvent avoir changé."
        ]
      ],
      [
        "Palmarès et records",
        [
          "Les statistiques historiques de Serie A doivent préciser la période et le périmètre : saison, club, joueur ou compétition. Il faut éviter de mélanger les données du championnat avec celles des coupes nationales ou européennes.",
          "Les records enrichissent la lecture de la saison actuelle à condition d’être vérifiés. Ils ne remplacent pas les données de classement et de résultats, qui doivent être actualisées séparément."
        ]
      ]
    ],
    "faqs": [
      [
        "Où consulter le classement de Serie A ?",
        "Dans le bloc classement de cette page lorsqu’il est alimenté, en vérifiant la date d’actualisation."
      ],
      [
        "Où trouver les résultats ?",
        "Consultez la zone résultats et vérifiez que les scores correspondent à la journée recherchée."
      ],
      [
        "Les records évoluent-ils ?",
        "Certains records peuvent évoluer, mais ils doivent être vérifiés et distingués des statistiques courantes."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/serie-a"
  },
  "bundesliga": {
    "name": "Bundesliga",
    "label": "Allemagne",
    "title": "Bundesliga : classement, calendrier et résultats du championnat allemand",
    "description": "Consultez le classement, le calendrier et les résultats de Bundesliga, avec des informations sur le format du championnat allemand.",
    "intro": "Maffo Sport vous propose cette page consacrée à la Bundesliga, le championnat de première division allemande. Elle rassemble les repères sur la compétition, les rencontres à venir, les résultats et le classement lorsque les données sont disponibles et actualisées. Les sections éditoriales aident à replacer les chiffres dans le contexte de la saison.",
    "sections": [
      [
        "Présentation de la Bundesliga",
        [
          "Les clubs de Bundesliga disputent les rencontres prévues au calendrier officiel et accumulent des points. Le classement final détermine le champion, les places de qualification continentale et les situations de relégation ou de barrage selon le règlement en vigueur.",
          "Le nombre d’équipes, le format et les critères de qualification doivent être vérifiés pour la saison concernée. Les règles d’une édition ne doivent pas être présentées comme immuables si elles peuvent changer."
        ]
      ],
      [
        "Interpréter les positions",
        [
          "Le nombre de points est essentiel, mais les matchs joués, les buts pour et contre et les critères de départage doivent être lus ensemble. Deux équipes n’ayant pas disputé le même nombre de rencontres ne sont pas toujours directement comparables.",
          "La lutte pour le titre, les places européennes et le maintien évolue au fil des journées. Une position provisoire n’est pas une qualification officielle tant que les conditions réglementaires ne sont pas remplies."
        ]
      ],
      [
        "Suivre les matchs et analyser les équipes",
        [
          "La programmation peut être ajustée et des rencontres peuvent être reportées. Vérifiez la date, l’heure locale et le statut affiché. Les scores doivent correspondre à la bonne rencontre.",
          "La forme récente, l’efficacité offensive, la solidité défensive, les performances à domicile et à l’extérieur et les absences confirmées peuvent aider à comprendre la dynamique d’une équipe. Ces indicateurs doivent être comparés sur des périodes définies et replacés dans leur contexte."
        ]
      ],
      [
        "Histoire et records",
        [
          "Les records historiques de Bundesliga doivent être sourcés et délimités : une saison, une période, un club ou un joueur. Les statistiques de la première division ne doivent pas être confondues avec celles d’autres divisions ou coupes.",
          "Les données historiques complètent le calendrier, les résultats et le classement. Maffo Sport privilégiera des informations vérifiables plutôt qu’une accumulation de chiffres sans contexte."
        ]
      ]
    ],
    "faqs": [
      [
        "Comment consulter le classement de Bundesliga ?",
        "Consultez le bloc classement lorsqu’il est disponible et vérifiez sa date d’actualisation."
      ],
      [
        "Les horaires peuvent-ils changer ?",
        "Oui. Vérifiez les informations les plus récentes avant la rencontre."
      ],
      [
        "Comment interpréter les statistiques d’une équipe ?",
        "Comparez plusieurs indicateurs sur une période définie et tenez compte du niveau des adversaires et du nombre de matchs joués."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/bundesliga"
  },
  "ligue-des-champions": {
    "name": "Ligue des champions",
    "label": "Europe",
    "title": "Ligue des champions : classement, calendrier et résultats",
    "description": "Suivez la Ligue des champions : calendrier, résultats, classement de la phase en cours et explications sur le format de la compétition.",
    "intro": "Cette page Maffo Sport est consacrée à la Ligue des champions de l’UEFA, compétition européenne de clubs. Retrouvez les rencontres, les résultats et le classement de la phase concernée lorsque les données sont disponibles, ainsi que des explications sur le format, les qualifications et les tours à élimination directe. Les règles doivent être vérifiées pour l’édition en cours.",
    "sections": [
      [
        "Comprendre le format de la compétition",
        [
          "Le format de la Ligue des champions a évolué au fil des éditions. Il faut consulter les règles de la saison concernée pour connaître la phase initiale, les modalités de classement et les conditions d’accès aux tours suivants.",
          "La page doit distinguer la phase de ligue ou de groupes, selon l’édition, des tours à élimination directe. Les modalités de qualification et les critères de départage doivent correspondre au règlement officiel en vigueur."
        ]
      ],
      [
        "Classement et qualifications",
        [
          "Le classement s’interprète en fonction de la phase disputée. Les points et critères de départage déterminent les positions selon le règlement de l’édition. Les conséquences d’une position ne doivent pas être déduites des règles d’une ancienne saison.",
          "Dans les tours à élimination directe, il faut suivre les affiches et les scores des rencontres, notamment lorsqu’une qualification dépend de plusieurs matchs. Les règles en cas d’égalité doivent être vérifiées pour le tour concerné."
        ]
      ],
      [
        "Calendrier et analyse des rencontres",
        [
          "Les matchs européens ont une programmation distincte des championnats nationaux. Vérifiez la date, l’heure locale et le statut de chaque rencontre. Les horaires peuvent changer et les scores doivent être associés au bon tour.",
          "Pour analyser une affiche, tenez compte de la forme récente, des absences confirmées, du calendrier national et européen et des performances offensives et défensives. Les confrontations historiques donnent du contexte mais ne garantissent pas le même résultat."
        ]
      ],
      [
        "Palmarès et statistiques",
        [
          "Les records de la Ligue des champions doivent préciser leur périmètre : compétition sous son nom actuel, ancienne appellation, tours de qualification ou phase principale. Les chiffres historiques doivent être vérifiés avant publication.",
          "Les repères historiques complètent les informations de la saison en cours. Il faut les distinguer clairement des classements et résultats dynamiques pour que le lecteur sache ce qui peut évoluer."
        ]
      ]
    ],
    "faqs": [
      [
        "Où consulter le classement de la Ligue des champions ?",
        "Consultez le tableau de la phase en cours lorsqu’il est disponible et vérifiez sa date de mise à jour."
      ],
      [
        "Le format est-il toujours identique ?",
        "Non. Le format a évolué ; vérifiez les règles officielles de l’édition concernée."
      ],
      [
        "Comment suivre les tours à élimination directe ?",
        "Consultez les affiches, les dates, les scores et les règles officielles de qualification en cas d’égalité."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/ligue-des-champions"
  },
  "ligue-europa": {
    "name": "Ligue Europa",
    "label": "Europe",
    "title": "Ligue Europa : classement, calendrier et résultats",
    "description": "Retrouvez le calendrier, les résultats et les informations de classement de la Ligue Europa, avec des repères sur son format.",
    "intro": "Maffo Sport consacre cette page à la Ligue Europa, compétition européenne de clubs organisée par l’UEFA. Retrouvez les informations de calendrier, les résultats et le classement de la phase concernée lorsque les données sont disponibles, ainsi que des explications sur les différentes étapes et les qualifications. Les règles et les participants doivent être vérifiés pour chaque édition.",
    "sections": [
      [
        "Fonctionnement de la Ligue Europa",
        [
          "La Ligue Europa accueille des clubs qualifiés selon les règles de l’UEFA et les résultats des compétitions nationales. Son format peut évoluer ; il faut donc distinguer les principes généraux des règles exactes de la saison en cours.",
          "Les clubs participants, le calendrier, les scores et le classement sont des données saisonnières qui nécessitent une actualisation régulière. Les explications de format doivent correspondre à l’édition affichée."
        ]
      ],
      [
        "Classement et progression",
        [
          "Le classement doit être lu selon la phase concernée. Les points et critères de départage sont définis par le règlement officiel, et les conséquences d’une position dépendent du format de l’édition.",
          "Dans les tours à élimination directe, suivez les affiches et les scores. Selon le tour, la qualification peut dépendre d’une rencontre ou de plusieurs matchs, conformément aux règles applicables."
        ]
      ],
      [
        "Calendrier et analyse",
        [
          "Les rencontres européennes sont souvent programmées en semaine et leurs horaires peuvent être modifiés. Vérifiez la date, le fuseau horaire et le statut. Les scores doivent être associés au bon tour afin d’éviter toute confusion.",
          "L’analyse d’un match peut prendre en compte la forme récente, le niveau des adversaires, les absences confirmées, les performances à domicile et à l’extérieur et l’enchaînement des rencontres nationales et européennes. Une tendance n’est jamais une certitude."
        ]
      ],
      [
        "Histoire et records",
        [
          "Les records historiques doivent être vérifiés et leur périmètre précisé, notamment lorsque le nom ou le format de la compétition a changé au fil du temps.",
          "Les contenus historiques complètent les données de la saison. Ils ne remplacent pas les calendriers, résultats et classements, qui doivent être actualisés séparément."
        ]
      ]
    ],
    "faqs": [
      [
        "Où consulter les résultats de Ligue Europa ?",
        "Dans le bloc résultats de cette page lorsque les données sont disponibles, en vérifiant la date de mise à jour."
      ],
      [
        "Le classement existe-t-il à toutes les phases ?",
        "Cela dépend du format de l’édition et de la phase en cours."
      ],
      [
        "Où vérifier les règles de qualification ?",
        "Le règlement officiel de l’UEFA pour l’édition concernée est la référence."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/ligue-europa"
  },
  "ligue-des-champions-caf": {
    "name": "Ligue des champions de la CAF",
    "label": "Afrique",
    "title": "Ligue des champions de la CAF : calendrier, résultats et classement",
    "description": "Suivez la Ligue des champions de la CAF : calendrier, résultats, classement des groupes lorsque disponible et format de la compétition.",
    "intro": "Cette page Maffo Sport est consacrée à la Ligue des champions de la CAF, compétition interclubs majeure du football africain. Retrouvez les informations utiles sur les rencontres, les résultats et les classements de groupe lorsqu’ils s’appliquent, ainsi que des explications sur les différentes étapes et les conditions de qualification. Les données de saison doivent être vérifiées et actualisées à partir de sources fiables.",
    "sections": [
      [
        "Une grande compétition interclubs africaine",
        [
          "Les clubs participants se qualifient selon les règles définies par la Confédération africaine de football et les résultats des compétitions nationales. Le parcours peut comporter des tours préliminaires, une phase de groupes et des tours à élimination directe selon le format officiel de l’édition.",
          "Le nombre de participants, le calendrier et les modalités exactes doivent être vérifiés pour la saison concernée. Il faut éviter de présenter les règles d’une ancienne édition comme si elles étaient toujours en vigueur."
        ]
      ],
      [
        "Groupes, classement et qualifications",
        [
          "Lorsqu’une phase de groupes est prévue, le classement permet de suivre les points et les positions des clubs. Les critères de départage et les conséquences de chaque place doivent correspondre au règlement officiel de la saison.",
          "Dans les tours à élimination directe, suivez les affiches, les scores et les règles de qualification. Selon le tour, la progression peut dépendre d’une ou de plusieurs rencontres."
        ]
      ],
      [
        "Calendrier et performances des clubs",
        [
          "La programmation peut évoluer selon les décisions d’organisation. Vérifiez la date, l’heure locale, le lieu et le statut de chaque match. Un score doit être associé à la bonne rencontre et au bon tour.",
          "Pour comprendre les performances d’un club, observez ses résultats récents, les buts marqués et encaissés, les absences confirmées et son calendrier national. Les comparaisons entre clubs doivent utiliser des données vérifiées et des périodes comparables."
        ]
      ],
      [
        "Palmarès et histoire du football africain",
        [
          "Les titres, records et statistiques historiques doivent être vérifiés auprès de sources fiables et présentés avec leur période de référence. Il convient de distinguer la Ligue des champions de la CAF des autres compétitions continentales.",
          "Les repères historiques complètent les données de la saison en cours. Ils doivent rester distincts des scores et classements dynamiques pour éviter de mélanger les faits établis et les informations qui évoluent."
        ]
      ]
    ],
    "faqs": [
      [
        "Où trouver le calendrier de la Ligue des champions de la CAF ?",
        "Consultez le bloc calendrier lorsqu’il est alimenté et vérifiez la date de mise à jour."
      ],
      [
        "Y a-t-il toujours une phase de groupes ?",
        "Le format doit être vérifié pour l’édition concernée, car il peut évoluer."
      ],
      [
        "Comment suivre le classement des clubs ?",
        "Consultez le tableau de la phase en cours lorsqu’il existe et vérifiez les critères officiels de départage."
      ]
    ],
    "canonical": "https://sport.maffohub.com/competitions/ligue-des-champions-caf"
  }
};
