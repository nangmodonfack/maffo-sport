export type ArticleSource = {
  name: string;
  url: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt?: string;
  image: string;
  date: string;
  /** Date de dernière mise à jour (affichée si présente) */
  updated?: string;
  author: string;
  content: string[];
  /** Sources cliquables, affichées en bas de l'article */
  sources?: ArticleSource[];
};

export function generateExcerpt(content: string[]) {
  const text = content.join(" ").trim();

  if (text.length <= 280) {
    return text;
  }

  const shortened = text.slice(0, 280);
  const lastSpace = shortened.lastIndexOf(" ");

  return shortened.slice(0, lastSpace) + "...";
}

export const articles: Article[] = [
  {
    slug: "real-madrid-demande-demission-javier-tebas",
    title:
      "Real Madrid : le club exige la démission de Javier Tebas après ses propos polémiques",
    category: "Football",
    excerpt:
      "Le Real Madrid réclame la démission de Javier Tebas après ses déclarations controversées sur la communication du club. L'affaire Negreira et la réforme de l'arbitrage espagnol sont également au cœur du communiqué.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85",
    date: "17 octobre 2026",
    author: "Maffo Sport",
    content: [
      "ACTUALITÉ FOOTBALL — ESPAGNE",

      "Le conflit entre le Real Madrid et Javier Tebas franchit un nouveau cap. Le club madrilène réclame le départ du président de LaLiga après des déclarations controversées sur les méthodes de communication du club. Dans son communiqué du 16 octobre 2026, le Real Madrid demande également une réforme de l'arbitrage espagnol et remet en avant ses revendications concernant l'affaire Negreira.",


      "POURQUOI LE REAL MADRID RÉCLAME-T-IL LA DÉMISSION DE TEBAS ?",

      "À l'origine de cette nouvelle confrontation se trouvent des propos de Javier Tebas concernant la communication du Real Madrid et de sa chaîne de télévision, Real Madrid TV. Le dirigeant a établi une comparaison avec des méthodes de propagande associées à Joseph Goebbels, ancien ministre de la Propagande du régime nazi.",

      "Cette comparaison a provoqué une réaction ferme du club madrilène. Dans son communiqué, le Real Madrid juge ces déclarations absolument intolérables et estime qu'elles sont incompatibles avec les responsabilités institutionnelles du président de LaLiga.",

      "Le club demande donc la démission de Javier Tebas de la présidence de LaLiga et de son poste de vice-président de la Fédération royale espagnole de football. Cette demande constitue la position officielle du Real Madrid : elle ne signifie pas que le dirigeant a effectivement quitté ses fonctions.",

    
      "L'AFFAIRE NEGREIRA REVIENT DANS LE DÉBAT",

      "Le communiqué permet également au Real Madrid de réaffirmer ses demandes concernant l'affaire Negreira. Ce dossier porte sur des paiements effectués par le FC Barcelone à des sociétés liées à José María Enríquez Negreira, ancien vice-président du Comité technique des arbitres espagnols.",

      "Cette affaire a suscité de nombreuses interrogations sur les relations entre le club catalan et l'environnement arbitral. Le Real Madrid demande que les faits soient examinés et que la transparence des institutions du football espagnol soit renforcée.",

      "Il convient toutefois de distinguer les faits établis, les accusations et les conclusions judiciaires. L'existence de paiements ne permet pas, à elle seule, d'affirmer que des matchs ont été truqués ou que des arbitres ont été corrompus.",

      "ARBITRAGE ESPAGNOL : LE REAL MADRID VEUT DES RÉFORMES",

      "Au-delà du départ de Javier Tebas, le club réclame des changements dans le fonctionnement de l'arbitrage et des instances du football espagnol. Il souhaite notamment davantage de transparence et de confiance dans les mécanismes de gouvernance.",

      "Cette revendication s'inscrit dans un conflit plus large entre le Real Madrid et les responsables du football espagnol. Les critiques portant sur l'arbitrage, la communication des clubs et la gestion des compétitions alimentent régulièrement les tensions.",

      

      "JAVIER TEBAS VA-T-IL DÉMISSIONNER ?",

      "La demande du Real Madrid ouvre un nouvel épisode dans les relations déjà tendues entre le club et Javier Tebas. La suite dépendra des réactions du dirigeant et des éventuelles prises de position des instances concernées.",

      "Une demande de démission ne constitue pas une démission effective. La situation devra donc être suivie à partir de déclarations officielles et de sources journalistiques fiables.",

      "CE QU'IL FAUT RETENIR",

      "En réclamant le départ de Javier Tebas, le Real Madrid transforme une polémique sur la communication en une nouvelle confrontation institutionnelle. Le club maintient également la pression sur les questions liées à l'affaire Negreira et à la réforme de l'arbitrage espagnol.",

      "Sources : Real Madrid, communiqué officiel du 16 octobre 2026 ; Reuters, compte rendu de la demande de démission ; médias espagnols couvrant la réaction de Javier Tebas."
    ],
  },

  /* =====================================================
     ANALYSE : deux angles distincts
     - l'ÉQUIPE (style, effectif, forme)
     - le MATCH (confrontation, contexte, checklist)
  ===================================================== */
  {
    slug: "analyser-une-equipe-avant-un-match",
    title: "Comment analyser une équipe de football : style de jeu, effectif et forme",
    category: "Analyse",
    excerpt:
      "Avant de parler d’un match, il faut connaître l’équipe : sa façon de jouer, ses joueurs clés, sa solidité et sa dynamique. Voici comment dresser son profil.",
    image: "/images/home/analyse-1.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Analyser une équipe, ce n’est pas lire son classement. C’est comprendre comment elle joue, sur quels joueurs elle s’appuie et dans quel état elle arrive. Cet article se concentre sur le profil de l’équipe elle-même ; pour étudier une rencontre précise, consultez notre guide sur l’analyse d’un match.",

      "Commencez par le style de jeu. Certaines équipes cherchent à garder le ballon et à construire depuis l’arrière, d’autres pressent haut pour récupérer vite, d’autres encore défendent bas et jouent la contre-attaque. Regardez deux ou trois de ses derniers matchs pour repérer ces habitudes : elles changent peu d’une semaine à l’autre.",

      "Regardez ensuite l’entraîneur et le système. Un 4-3-3 n’a pas les mêmes forces qu’un 3-5-2. Un entraîneur récemment arrivé peut aussi avoir besoin de temps avant que ses idées se voient sur le terrain.",

      "Identifiez les joueurs clés. Une équipe qui dépend d’un seul buteur ou d’un seul créateur devient fragile s’il est absent. À l’inverse, un effectif profond, avec de bons remplaçants, encaisse mieux les blessures et les enchaînements de matchs.",

      "Étudiez la forme sur une période assez longue, par exemple cinq à dix matchs, en regardant aussi le niveau des adversaires rencontrés. Quatre victoires contre des équipes du bas de tableau n’ont pas la même valeur que deux victoires contre des équipes du haut.",

      "Évaluez enfin la solidité. Combien de buts l’équipe encaisse-t-elle ? Est-elle vulnérable sur les coups de pied arrêtés ou en contre-attaque ? Les points faibles récurrents se répètent souvent d’un match à l’autre.",

      "Pour résumer, vous pouvez vous poser cinq questions : comment joue-t-elle, avec quel système, sur quels joueurs, dans quelle dynamique et avec quelles faiblesses ? Les réponses forment un profil clair, qui sert ensuite de base à l’analyse d’un match.",
    ],
  },
  {
    slug: "comment-analyser-un-match-de-football",
    title: "Comment analyser un match de football : confrontation, contexte et checklist",
    category: "Analyse & guides",
    excerpt:
      "Historique, enjeux, lieu, calendrier, compositions : voici les éléments propres à un match, avec une checklist à parcourir avant le coup d’envoi.",
    image: "/images/home/analyse-match.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Une fois que l’on connaît les deux équipes, il reste à étudier la rencontre elle-même. Ce guide porte sur ce qui est propre à un match : la confrontation, le contexte et les dernières informations disponibles. Pour dresser le profil d’une équipe, voyez notre article sur l’analyse d’une équipe.",

      "Les confrontations directes donnent un premier repère : qui a gagné les dernières fois, avec quels scores ? Il faut toutefois les relativiser. Les effectifs et les entraîneurs changent, et un résultat vieux de trois ans dit peu de choses sur le match d’aujourd’hui.",

      "L’enjeu compte beaucoup. Une équipe qui joue le titre, la qualification ou le maintien n’aborde pas le match comme une équipe déjà assurée de sa place. Une équipe tranquille peut faire tourner son effectif, une équipe sous pression peut prendre moins de risques.",

      "Le lieu influence aussi la rencontre. Jouer devant son public, supporter un long déplacement, affronter une pelouse difficile ou des conditions météo particulières peut modifier le déroulement du match, surtout entre deux équipes de niveau proche.",

      "Regardez le calendrier. Une équipe qui joue trois matchs en une semaine, ou qui revient d’un long voyage, arrive souvent moins fraîche. À l’inverse, plusieurs jours de repos peuvent lui donner un avantage.",

      "Les compositions et les absences sont les informations qui changent le plus vite. Les compositions probables sont publiées dans la presse, mais les compositions officielles sont généralement connues environ une heure avant le coup d’envoi. Un gardien, un défenseur central ou un buteur absent peut modifier l’équilibre d’une équipe.",

      "Avant le coup d’envoi, vous pouvez parcourir cette checklist : l’enjeu du match, le lieu, le calendrier des deux équipes, les absences confirmées, la composition officielle et les dernières confrontations. Si une information manque, notez-la plutôt que de la deviner.",

      "Enfin, aucune analyse ne permet de prévoir un résultat. Un match de football comporte toujours une part d’imprévu, et rien de ce qui précède ne garantit un gain sur un pari sportif.",
    ],
  },

  /* =====================================================
     STATISTIQUES : trois angles distincts
     - GLOSSAIRE (définitions)
     - AVANT le match (lesquelles consulter, pièges)
     - APRÈS le match (lire une feuille, exemple)
  ===================================================== */
  {
    slug: "principales-statistiques-du-football",
    title: "Glossaire des statistiques du football : ce que mesure chaque indicateur",
    category: "Guide football",
    excerpt:
      "Possession, tirs cadrés, buts attendus (xG), passes clés, PPDA : la définition simple des principaux indicateurs du football.",
    image: "/images/home/analyse-2.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Les statistiques de football utilisent un vocabulaire qui peut déconcerter. Voici une définition simple des principaux indicateurs. Pour savoir lesquels consulter avant un match, ou comment lire une feuille de match, voyez nos deux autres guides sur les statistiques.",

      "La possession est le pourcentage du temps de jeu pendant lequel une équipe a le ballon. Elle indique qui a contrôlé le jeu, mais pas qui a été dangereux : on peut avoir 65 % de possession et créer peu d’occasions.",

      "Les tirs comptent toutes les frappes, et les tirs cadrés celles qui visent le but et obligent le gardien à intervenir, ou qui entrent. Un grand nombre de tirs non cadrés ne signifie pas qu’une équipe a été très dangereuse.",

      "Les buts attendus, ou xG (expected goals), estiment la probabilité qu’un tir devienne un but, selon la distance, l’angle et la situation. Un xG de 1,5 signifie que les occasions créées valaient, en moyenne, un but et demi. C’est un outil d’analyse, pas un résultat.",

      "Une passe décisive est la dernière passe avant un but. Une passe clé est une passe qui mène à un tir, qu’il soit transformé ou non. Les passes clés mesurent donc la création d’occasions sur une base plus large.",

      "Les duels gagnés mesurent les confrontations directes avec un adversaire, au sol ou dans les airs. Ils sont utiles pour juger l’activité défensive ou la présence physique d’un joueur, mais dépendent de son poste.",

      "Le PPDA (passes par action défensive) indique l’intensité du pressing : c’est le nombre de passes que laisse faire une équipe avant d’intervenir. Plus il est bas, plus l’équipe presse haut et fort.",

      "Enfin, l’efficacité offensive compare les occasions créées aux buts marqués. Une équipe qui marque beaucoup avec peu d’occasions peut être très efficace, ou simplement chanceuse sur une courte période.",
    ],
  },
  {
    slug: "statistiques-a-connaitre-football",
    title: "Quelles statistiques consulter avant un match de football (et leurs pièges)",
    category: "Analyse & guides",
    excerpt:
      "Buts marqués et encaissés, tirs concédés, xG, résultats à domicile et à l’extérieur : les statistiques à regarder avant un match, et comment éviter de les surinterpréter.",
    image: "/images/home/statistiques.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Avant un match, toutes les statistiques ne se valent pas. Voici celles qui apportent le plus d’informations, et les pièges à éviter pour ne pas en tirer de mauvaises conclusions. Pour la définition de chaque indicateur, consultez notre glossaire.",

      "Commencez par les buts marqués et encaissés par match, plutôt que par les totaux. Une moyenne permet de comparer deux équipes qui n’ont pas joué le même nombre de rencontres.",

      "Regardez ensuite les tirs concédés et les tirs cadrés concédés. Ils disent si une défense est réellement solide ou si elle a surtout été protégée par son gardien. Une équipe qui encaisse peu mais subit beaucoup de tirs peut finir par craquer.",

      "Les buts attendus (xG) marqués et concédés complètent cette lecture. Si une équipe marque beaucoup plus que son xG, ses résultats risquent de baisser ; si elle marque beaucoup moins, ils peuvent s’améliorer.",

      "Séparez les résultats à domicile et à l’extérieur. Certaines équipes affichent deux visages selon le lieu, et une moyenne globale peut cacher cet écart.",

      "Premier piège : un échantillon trop court. Trois matchs ne suffisent pas à dégager une tendance fiable ; visez cinq à dix rencontres, ou la saison entière pour les indicateurs lents à évoluer.",

      "Deuxième piège : oublier le contexte. Une équipe qui mène tôt laisse souvent le ballon à son adversaire, ce qui fausse la possession. Troisième piège : comparer des chiffres de compétitions différentes, dont le niveau n’est pas le même.",

      "Aucune statistique ne prévoit un résultat avec certitude. Le but est de croiser plusieurs indicateurs avec le contexte du match pour construire une analyse plus cohérente.",
    ],
  },
  {
    slug: "lire-statistiques-match-football",
    title: "Comment lire les statistiques d’un match terminé : exemple pas à pas",
    category: "Guide",
    excerpt:
      "Après le coup de sifflet, que disent vraiment les chiffres ? Un exemple fictif, lu étape par étape, pour comprendre ce qui s’est passé sur le terrain.",
    image: "/images/home/analyse-3.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Une feuille de statistiques peut impressionner au premier regard. Pour apprendre à la lire, prenons un exemple fictif : l’équipe A bat l’équipe B 1-0. Les chiffres sont inventés pour l’occasion.",

      "Possession : 38 % pour A, 62 % pour B. Première lecture : B a eu le ballon. Mais ce chiffre ne dit pas encore qui a été dangereux.",

      "Tirs : 9 pour A, 16 pour B. Tirs cadrés : 4 pour A, 3 pour B. B a davantage tiré, mais A a obligé son adversaire à plus d’arrêts. B a donc souvent frappé sans réussir à cadrer.",

      "Buts attendus (xG) : 1,3 pour A, 1,1 pour B. Les occasions de A étaient donc un peu plus dangereuses, malgré moins de tirs. Le résultat de 1-0 est cohérent avec ce chiffre.",

      "Statistiques défensives : A a gagné davantage de duels et fait plus de dégagements. Cela correspond à une équipe qui a défendu bas, résisté, puis frappé en contre-attaque.",

      "Contexte : si A a marqué dès la 10e minute, il est logique qu’elle ait ensuite laissé le ballon à B. La possession reflète alors la façon dont le match s’est déroulé, plutôt que la supériorité de B.",

      "Conclusion de l’exemple : A a gagné de manière logique, en défendant bien et en étant plus dangereuse sur ses rares occasions. Pour lire une feuille de match, comparez toujours possession, tirs, xG et contexte entre eux plutôt qu’un chiffre isolé.",
    ],
  },

  /* =====================================================
     PARIS SPORTIFS
     - vue d'ensemble des marchés
     - les 3 marchés de base en détail
     - cotes
     - méthode d'analyse
  ===================================================== */
  {
    slug: "comprendre-principaux-marches-paris-sportifs",
    title: "Les principaux marchés de paris sportifs : vue d’ensemble",
    category: "Paris sportifs",
    excerpt:
      "Résultat, buts, handicap, mi-temps, joueurs, combinés : un tour d’horizon des familles de marchés, pour savoir de quoi on parle avant de choisir.",
    image: "/images/home/paris-sportifs.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Les paris sportifs proposent des dizaines de marchés pour un seul match. Cet article les présente par familles, pour s’y repérer. Les trois marchés de base (1N2, double chance, Over/Under) sont détaillés avec des exemples dans notre guide dédié.",

      "La famille « résultat » regroupe les paris sur l’issue du match : victoire de l’une ou l’autre équipe, ou match nul. Le plus connu est le 1N2, et la double chance en est une variante qui couvre deux issues sur trois.",

      "La famille « buts » porte sur le nombre de buts : plus ou moins de buts dans le match (Over/Under), les deux équipes marquent ou non, le nombre de buts d’une équipe, ou le score exact. Plus le marché est précis, plus il est difficile à réaliser.",

      "Les marchés « handicap » donnent un avantage ou un retard virtuel à une équipe. Par exemple, avec un handicap de -1 sur la favorite, elle doit gagner avec au moins deux buts d’écart pour que le pari soit gagnant. C’est utile quand une équipe est très favorite, mais les règles varient selon le type de handicap.",

      "D’autres marchés portent sur la mi-temps (résultat à la pause, ou mi-temps/fin de match), sur les joueurs (buteur, passeur) ou sur des événements du match, comme les corners ou les cartons.",

      "Le combiné consiste à regrouper plusieurs sélections dans un seul pari. Les cotes se multiplient, ce qui augmente le gain potentiel, mais il suffit qu’une seule sélection soit perdante pour perdre tout le pari. Le risque grimpe donc avec le nombre de sélections.",

      "Avant de valider un pari, lisez toujours les règles du marché. En général, les marchés sur le résultat s’appliquent au temps réglementaire, prolongation exclue, sauf indication contraire, mais cela peut varier selon l’opérateur.",

      "Enfin, aucun marché ne garantit un résultat. Les paris sportifs comportent un risque de perte financière et sont réservés aux personnes majeures selon la législation de leur pays. Ne misez jamais plus que ce que vous pouvez vous permettre de perdre.",
    ],
    sources: [
      {
        name: "GamCare – informations sur les paris et le jeu responsable",
        url: "https://www.gamcare.org.uk",
      },
    ],
  },
  {
    slug: "1n2-double-chance-over-under-comprendre-les-bases",
    title: "1N2, double chance, Over/Under : comprendre les bases",
    category: "Types de paris",
    excerpt:
      "1N2, double chance, Over/Under : comment fonctionnent ces trois marchés, avec des exemples concrets pour savoir ce que signifie chaque sélection.",
    image: "/images/home/paris-1n2.svg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Avant de regarder une cote ou de choisir une sélection, il faut d’abord comprendre le marché sur lequel elle porte. Ce guide détaille les trois marchés de base du football, avec des exemples. Pour un tour d’horizon de tous les types de marchés, voyez notre vue d’ensemble.",

      "Le marché 1N2 est le plus connu. Le 1 correspond à une victoire de l’équipe qui reçoit, le N à un match nul et le 2 à une victoire de l’équipe visiteuse. Par exemple, pour un match entre Marseille et Lille, sélectionner « 1 » signifie que l’on mise sur une victoire de Marseille.",

      "La double chance permet de couvrir deux des trois résultats possibles. Les sélections les plus courantes sont 1X, X2 et 12. Avec 1X, le pari est gagnant si l’équipe à domicile gagne ou si le match se termine par un nul. Avec X2, le pari est gagnant en cas de nul ou de victoire de l’équipe extérieure. Avec 12, il est gagnant si l’une des deux équipes gagne, c’est-à-dire s’il n’y a pas de match nul.",

      "Le marché Over/Under concerne généralement le nombre total de buts marqués pendant la rencontre. Un Over 2,5 signifie qu’il faut au moins trois buts dans le match. Un Under 2,5 signifie qu’il doit y avoir zéro, un ou deux buts.",

      "Lisez la sélection jusqu’au bout avant de la valider. Une différence entre Over 1,5 et Over 2,5, par exemple, change complètement la condition nécessaire pour gagner : deux buts suffisent pour l’un, il en faut trois pour l’autre.",

      "Les cotes indiquent le retour potentiel selon le montant misé, mais elles ne sont pas une probabilité certaine du résultat. Les opérateurs intègrent aussi leur marge dans les cotes proposées. Notre article sur l’analyse des cotes explique comment les lire.",

      "Enfin, aucun marché ne supprime le risque. Un match peut prendre une tournure différente de ce que les statistiques ou les tendances laissaient penser. Les paris sportifs restent une activité avec un risque de perte financière.",
    ],
    sources: [
      {
        name: "GamCare – informations pédagogiques sur le fonctionnement des paris et des cotes",
        url: "https://www.gamcare.org.uk",
      },
    ],
  },
  {
    slug: "comment-analyser-les-cotes-d-un-match",
    title: "Comment analyser les cotes d’un match ?",
    category: "Stratégie",
    excerpt:
      "Une cote ne dit pas simplement combien un pari peut rapporter. Elle donne aussi une indication sur la probabilité estimée par le marché et doit être replacée dans son contexte.",
    image: "/images/home/paris-cotes.svg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Lire une cote est l’une des premières choses à apprendre lorsqu’on s’intéresse aux paris sportifs. Une cote permet de calculer le retour potentiel d’une mise, mais elle ne doit pas être considérée comme une garantie sur le résultat d’un match.",

      "Avec une cote décimale de 2,00, une mise de 1 000 FCFA produit un retour potentiel de 2 000 FCFA si la sélection est gagnante, mise comprise. Le bénéfice potentiel serait donc de 1 000 FCFA.",

      "On peut également convertir une cote décimale en probabilité implicite théorique avec la formule : 1 ÷ cote × 100. Une cote de 2,00 correspond ainsi à 50 % de probabilité implicite, avant de tenir compte de la marge de l’opérateur.",

      "Cette conversion permet surtout de comparer les cotes avec sa propre analyse. Par exemple, si une personne estime qu’une sélection possède une probabilité réelle supérieure à celle suggérée par la cote, elle peut considérer que la cote mérite une analyse plus approfondie. Cela ne signifie toutefois pas que le pari sera gagnant.",

      "Il faut aussi comparer les cotes proposées par plusieurs opérateurs lorsque cela est possible. Une même sélection peut être proposée à des valeurs différentes. Une différence de quelques centièmes peut sembler faible, mais elle pèse sur le retour potentiel lorsqu’elle se répète sur de nombreuses sélections.",

      "L’évolution d’une cote peut également attirer l’attention. Une cote qui passe par exemple de 2,20 à 1,90 indique que le marché a évolué, mais cela ne permet pas à lui seul de connaître la raison du changement. Une information sur un joueur, une composition d’équipe ou les montants misés peuvent intervenir.",

      "Il faut donc éviter de regarder uniquement une cote isolée. Pour analyser correctement une rencontre, il est préférable de la comparer aux statistiques, à la forme récente, aux absences, au calendrier et au contexte du match.",

      "Une cote élevée n’est pas automatiquement intéressante et une cote faible n’est pas automatiquement sûre. Les deux représentent simplement des niveaux de retour et des probabilités implicites différents.",

      "Enfin, les opérateurs construisent leurs cotes avec une marge intégrée. Les probabilités implicites de plusieurs issues peuvent donc dépasser 100 % lorsqu’on les additionne. Cette différence correspond notamment à la marge de l’opérateur.",
    ],
    sources: [
      {
        name: "GamCare – informations sur le fonctionnement des cotes et la marge des opérateurs",
        url: "https://www.gamcare.org.uk",
      },
    ],
  },
  {
    slug: "comment-construire-une-analyse-avant-un-pari-sportif",
    title: "Comment construire une analyse avant un pari sportif : la méthode en étapes",
    category: "Guide",
    excerpt:
      "Plutôt qu’une liste de critères, une démarche : collecter les faits, les comparer à la cote, reconnaître ce que l’on ignore, et savoir renoncer.",
    image: "/images/home/paris-analyse.svg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Les articles sur l’analyse d’une équipe et d’un match expliquent quoi regarder. Celui-ci porte sur la démarche : dans quel ordre travailler, et comment garder les pieds sur terre avant de considérer une sélection.",

      "Première étape : poser une question précise. « Qui va gagner ? » est trop vague. « Cette équipe peut-elle marquer deux buts à l’extérieur ? » est une question à laquelle on peut répondre avec des faits.",

      "Deuxième étape : collecter les faits pertinents pour cette question, et seulement ceux-là. Forme, absences, calendrier et statistiques sont utiles, mais chaque marché n’a pas besoin de tous les critères : un pari sur le nombre de buts s’appuie surtout sur les statistiques offensives et défensives.",

      "Troisième étape : séparer les faits des impressions. Une équipe peut paraître favorite sur le papier et pourtant rencontrer des difficultés le jour du match. Notez ce qui est mesurable, et ce qui relève de l’intuition.",

      "Quatrième étape : comparer l’analyse avec la cote. Si la cote est très basse, le marché estime déjà l’issue très probable. Si elle est élevée, il y voit un événement peu probable. L’idée n’est pas de suivre le marché, mais de vérifier si votre lecture est cohérente avec lui.",

      "Cinquième étape : identifier ce que l’on ne sait pas. Une composition officielle encore inconnue, une blessure récente ou une situation particulière rendent l’analyse moins fiable. Mieux vaut reconnaître cette incertitude que prétendre avoir une certitude.",

      "Sixième étape : accepter de renoncer. Si l’analyse reste floue, ne pas parier est une décision valable. Tenir un carnet de ses analyses, avec les raisons de chaque choix, aide aussi à comprendre ses erreurs sans se raconter d’histoires.",

      "Enfin, aucune analyse ne supprime le hasard. Le football comporte des événements imprévisibles et les paris peuvent entraîner une perte financière. Une mise ne devrait jamais dépasser ce que l’on peut se permettre de perdre.",
    ],
    sources: [
      {
        name: "GamCare – informations sur les risques liés aux paris et le jeu responsable",
        url: "https://www.gamcare.org.uk",
      },
    ],
  },

  /* =====================================================
     ACTUALITÉS (faits vérifiés le 19 octobre 2026)
  ===================================================== */
  {
    slug: "xavi-nouveau-selectionneur-pays-bas",
    title: "Xavi débute avec les Pays-Bas : un nul 1-1 contre l’Allemagne en Ligue des nations",
    category: "Football",
    excerpt:
      "Premier sélectionneur étranger des Pays-Bas depuis 1978, Xavi a dirigé son premier match contre l’Allemagne de Jürgen Klopp. Résultat : 1-1, avec une égalisation tardive de Cody Gakpo.",
    image: "/images/home/actualite.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Mise à jour : le premier match de Xavi à la tête des Pays-Bas a eu lieu le jeudi 24 septembre à Amsterdam, en Ligue des nations. Il s’est terminé sur un nul 1-1 face à l’Allemagne, dirigée elle aussi par un nouveau sélectionneur, Jürgen Klopp. Felix Nmecha avait ouvert le score pour l’Allemagne, avant que Cody Gakpo n’égalise en fin de match.",

      "Xavi Hernández a été nommé le 12 août par la Fédération néerlandaise (KNVB), avec un contrat qui court jusqu’au Mondial 2030. Il devient le premier sélectionneur étranger des Pays-Bas depuis l’Autrichien Ernst Happel, en 1978.",

      "Il succède à Ronald Koeman, qui avait quitté son poste après l’élimination des Pays-Bas en seizièmes de finale de la Coupe du monde 2026, aux tirs au but contre le Maroc.",

      "Le technicien espagnol souhaite installer une équipe qui contrôle davantage le ballon, presse haut et récupère vite le ballon après une perte. Il a évoqué un 4-3-3 ou un 3-4-3, des systèmes qui permettent selon lui de mieux dominer. Après le match, il a estimé que son équipe avait été la meilleure, surtout en seconde période.",

      "Pour sa première liste, il a fait des choix marquants, notamment en ne sélectionnant ni Memphis Depay ni Wout Weghorst au poste d’avant-centre. Virgil van Dijk, qui conserve le brassard de capitaine, fait toujours partie du groupe.",

      "Le match a aussi été marqué par des blessures : Brian Brobbey est sorti du côté néerlandais, Kai Havertz du côté allemand. Les prochaines rencontres montreront si les idées de Xavi s’installent dans la durée.",
    ],
    sources: [
      {
        name: "Eurosport – Pays-Bas–Allemagne (1-1), débuts mitigés pour Klopp et Xavi",
        url: "https://www.eurosport.fr/football/ligue-des-nations/2026-2027/ligue-des-nations-lallemagne-et-les-pays-bas-dos-a-dos-debuts-mitiges-pour-juergen-klopp-et-xavi_sto23340098/story.shtml",
      },
      {
        name: "Le Matin – Xavi nouveau sélectionneur des Oranje (AFP)",
        url: "https://lematin.ma/sports/pays-bas-xavi-nouveau-selectionneur-des-oranje/360713/amp",
      },
    ],
  },
  {
    slug: "les-principales-rumeurs-mercato-23-septembre-2026",
    title: "Mercato : les principales pistes qui circulaient fin septembre",
    category: "Mercato",
    excerpt:
      "Mitchell, Garnacho, Rice, Wirtz, Gibbs-White : les rumeurs de la presse européenne au 23 septembre 2026, avec ce qu’elles disent vraiment, et ce qu’elles ne disent pas.",
    image: "/images/home/mercato.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Ces informations datent du 23 septembre 2026 et reprennent des rumeurs rapportées par la presse. Elles ne signifient pas qu’un transfert est conclu, et la situation a pu évoluer depuis.",

      "Tyrick Mitchell, latéral gauche de 27 ans de Crystal Palace, attirerait l’intérêt de Manchester United et de Liverpool, selon TeamTalk. Il entre dans la dernière année de son contrat, qui se termine à l’été 2027, ce qui pourrait lui permettre de partir libre.",

      "Alejandro Garnacho, prêté cet été par Chelsea à Aston Villa, avec une option d’achat d’environ 50 millions d’euros, n’avait disputé que 31 minutes avec le club d’Unai Emery. Selon le Daily Mail, plusieurs clubs de Liga suivent sa situation.",

      "À Arsenal, Declan Rice pourrait bientôt prolonger. Selon la presse britannique, le club profiterait de la trêve internationale de septembre pour finaliser un nouveau contrat de longue durée, alors qu’il dispose déjà d’une option de prolongation d’un an sur le contrat actuel.",

      "Le Bayern Munich s’intéresserait à Morgan Gibbs-White, milieu offensif de Nottingham Forest, selon Talksport. Le club bavarois aurait aussi sondé l’entourage de Florian Wirtz, mais Liverpool reste très attaché à son joueur.",

      "Une rumeur n’est qu’une piste à un instant donné. Avant de croire un transfert acquis, attendez l’annonce officielle du club ou du joueur.",
    ],
    sources: [
      {
        name: "Eurosport – Les infos mercato du mercredi 23 septembre",
        url: "https://www.eurosport.fr/football/transferts/2026-2027/football-garnacho-rice-endrick-wirtz-mitchell-gibbs-white-les-6-infos-mercato-du-mercredi-23-septembre_sto23339616/story.shtml",
      },
      {
        name: "Yahoo Sports – Wednesday’s gossip (Mitchell, Garnacho, Rice, Wirtz)",
        url: "https://sports.yahoo.com/articles/man-utd-liverpool-eye-mitchell-212018202.html",
      },
    ],
  },
  {
    slug: "qualifications-can-2027-demarrent",
    title: "Qualifications CAN 2027 : la course vers l’Afrique de l’Est a commencé",
    category: "Compétitions",
    excerpt:
      "Depuis le 24 septembre, 48 sélections disputent les qualifications de la CAN 2027, organisée au Kenya, en Tanzanie et en Ouganda. Voici le calendrier et le contexte de la dernière finale.",
    image: "/images/home/competitions.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Les qualifications pour la Coupe d’Afrique des nations 2027 ont débuté le 24 septembre 2026. Quarante-huit sélections sont réparties en 12 groupes de quatre équipes, avec six journées prévues jusqu’en mars 2027.",

      "La phase finale, à 24 équipes, se tiendra au Kenya, en Tanzanie et en Ouganda du 19 juin au 17 juillet 2027. Les trois pays hôtes participent aussi aux qualifications, malgré leur place déjà assurée, ce qui modifie les règles de qualification dans les groupes où ils figurent.",

      "Le tirage a notamment placé le Maroc avec le Gabon, le Niger et le Lesotho (groupe A), l’Égypte avec l’Angola, le Malawi et le Soudan du Sud (groupe B), ou encore la Côte d’Ivoire avec le Ghana, la Gambie et la Somalie (groupe C). L’Égypte reste le pays le plus titré de l’histoire de la compétition, avec sept sacres.",

      "Ces qualifications arrivent alors que la dernière finale reste au cœur de l’actualité. Le 18 janvier 2026, le Sénégal avait remporté la finale de la CAN 2025 contre le Maroc, pays hôte. Après des incidents pendant le match, le jury d’appel de la CAF a pourtant déclaré le Sénégal forfait le 17 mars et attribué le titre au Maroc sur le score de 3-0.",

      "Le Sénégal a contesté cette décision devant le Tribunal arbitral du sport (TAS). L’audience s’est tenue le 8 octobre à Lausanne, et la décision finale est attendue.",

      "Pour les supporters, la période marque le début d’une nouvelle course vers la prochaine grande compétition continentale. Les premières journées permettent déjà de voir quelles équipes prennent une position favorable dans leur groupe.",
    ],
    sources: [
      {
        name: "CAF – Début des éliminatoires de la CAN 2027",
        url: "https://www.cafonline.com/fr/can2025/infos/en-route-vers-la-can-2027-debut-des-eliminatoires-de-la-totalenergies-caf-can-pamoja-2027/",
      },
      {
        name: "France 24 – Le jury d’appel de la CAF déclare le Maroc vainqueur de la finale",
        url: "https://www.france24.com/fr/sports/20260317-can-2025-le-jury-d-appel-de-la-caf-d%C3%A9clare-le-maroc-vainqueur-de-la-finale",
      },
      {
        name: "France 24 – Maroc-Sénégal devant le TAS",
        url: "https://www.france24.com/fr/sports/20261007-finale-can-2025-maroc-senegal-audience-tas",
      },
    ],
  },

  /* =====================================================
     FOOTBALL AFRICAIN
  ===================================================== */
  {
    slug: "joueurs-africains-a-suivre-cette-saison",
    title: "Les joueurs africains à suivre cette saison",
    category: "Football africain",
    excerpt:
      "La saison 2026/27 offre de nombreuses raisons de suivre les joueurs africains, entre cadres confirmés, jeunes talents et joueurs qui cherchent à franchir un nouveau cap.",
    image: "/images/home/afrique-1.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Le football africain continue de produire des joueurs capables de s’imposer dans les plus grands championnats européens comme dans les compétitions continentales. La saison 2026/27 permettra de suivre l’évolution de plusieurs profils déjà bien installés au plus haut niveau.",

      "Achraf Hakimi fait partie des joueurs africains les plus suivis. Le défenseur marocain s’est imposé parmi les références à son poste et son influence dépasse largement son rôle défensif : sa capacité à participer aux attaques et à créer des occasions en fait un joueur à observer cette saison.",

      "Victor Osimhen reste l’un des attaquants africains les plus attendus. Son profil de buteur, sa vitesse et son jeu dans la profondeur lui permettent de peser sur les défenses, même lorsqu’il dispose de peu d’espace.",

      "Derrière ces joueurs expérimentés, une nouvelle génération cherche à prendre davantage de place. Plusieurs jeunes Africains évoluant en Europe ou sur le continent pourraient profiter de la saison pour gagner du temps de jeu et attirer l’attention des grands clubs.",

      "Les compétitions africaines de clubs seront aussi à suivre. La Ligue des champions de la CAF et la Coupe de la Confédération permettent d’observer des joueurs qui évoluent encore sur le continent et qui peuvent ensuite franchir un cap dans leur carrière.",

      "La saison est aussi importante en vue de la CAN 2027, organisée conjointement par le Kenya, la Tanzanie et l’Ouganda du 19 juin au 17 juillet 2027. Les performances en club pourraient peser dans les choix des sélectionneurs.",

      "Au-delà des noms connus, l’intérêt sera de voir quels joueurs confirmeront leur niveau, lesquels progresseront et quels nouveaux talents réussiront à se faire une place parmi les références du football africain.",
    ],
    sources: [
      {
        name: "CAF – Calendrier et informations sur la CAN 2027",
        url: "https://www.cafonline.com/fr/can2025/infos/en-route-vers-la-can-2027-debut-des-eliminatoires-de-la-totalenergies-caf-can-pamoja-2027/",
      },
    ],
  },
  {
    slug: "grandes-competitions-africaines-expliquees",
    title: "Les grandes compétitions africaines expliquées",
    category: "Compétitions",
    excerpt:
      "CAN, Ligue des champions, Coupe de la Confédération et Supercoupe : comment fonctionnent les principales compétitions du football africain, et leur calendrier 2026/27.",
    image: "/images/home/afrique-2.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Le calendrier du football africain comprend plusieurs compétitions majeures, pour les sélections comme pour les clubs. Pour s’y retrouver, il faut distinguer les compétitions entre pays de celles réservées aux clubs.",

      "La Coupe d’Afrique des nations, ou CAN, est la principale compétition continentale entre sélections masculines. L’édition 2027 sera organisée par le Kenya, la Tanzanie et l’Ouganda, du 19 juin au 17 juillet 2027, avec 24 équipes. Les qualifications ont commencé le 24 septembre 2026 et se poursuivent jusqu’en mars 2027.",

      "Côté clubs, la Ligue des champions de la CAF est la principale compétition continentale. Elle réunit les meilleurs clubs des championnats africains. Pour 2026/27, les tours préliminaires ont eu lieu en septembre et octobre, la phase de groupes se déroule du 27 novembre 2026 au 23 janvier 2027, et la finale est prévue en mai 2027.",

      "La Coupe de la Confédération est l’autre grande compétition interclubs de la CAF. Elle suit un calendrier proche de celui de la Ligue des champions, et permet à d’autres clubs de viser un trophée continental. Des clubs issus de 56 fédérations membres de la CAF peuvent y participer.",

      "La Supercoupe de la CAF oppose les vainqueurs des deux compétitions de clubs. L’édition 2026 est prévue le 8 novembre à Tshwane, en Afrique du Sud : Mamelodi Sundowns, vainqueur de la Ligue des champions 2025/26, y affrontera l’USM Alger, vainqueur de la Coupe de la Confédération.",

      "Chaque compétition a son propre système de qualification. Les suivre séparément permet de mieux comprendre les enjeux et les parcours des clubs et des sélections.",

      "Pour les supporters, cette diversité fait aussi l’intérêt du football africain : une même saison peut réunir les qualifications de la CAN, les compétitions de clubs et plusieurs grands rendez-vous internationaux.",
    ],
    sources: [
      {
        name: "CAF – Calendrier de la Ligue des champions et de la Coupe de la Confédération 2026/27",
        url: "https://www.cafonline.com/fr/infos/la-caf-devoile-le-calendrier-de-la-totalenergies-caf-ligue-des-champions-et-de-la-totalenergies-caf-coupe-de-la-confederation-202627/",
      },
      {
        name: "CAF – Début des éliminatoires de la CAN 2027",
        url: "https://www.cafonline.com/fr/can2025/infos/en-route-vers-la-can-2027-debut-des-eliminatoires-de-la-totalenergies-caf-can-pamoja-2027/",
      },
      {
        name: "Ahram Online – Date et lieu de la Supercoupe de la CAF 2026",
        url: "https://english.ahram.org.eg/News/574339.aspx",
      },
    ],
  },
  {
    slug: "clubs-africains-et-leurs-performances",
    title: "Les clubs africains et leurs performances",
    category: "Football africain",
    excerpt:
      "Mamelodi Sundowns champion d’Afrique, l’AS FAR finaliste, l’USM Alger en Coupe de la Confédération : bilan de la saison 2025/26 et regard sur 2026/27.",
    image: "/images/home/afrique-3.jpg",
    date: "23 septembre 2026",
    updated: "19 octobre 2026",
    author: "Maffo Sport",
    content: [
      "Le football de clubs africain repose sur plusieurs équipes qui ont construit une vraie expérience des compétitions continentales. Chaque saison, la Ligue des champions de la CAF et la Coupe de la Confédération permettent de mesurer les forces en présence.",

      "Mamelodi Sundowns a remporté la Ligue des champions de la CAF 2025/26. En finale, le club sud-africain a battu l’AS FAR : 1-0 à l’aller à Tshwane, puis 1-1 au retour à Rabat, le 24 mai 2026, soit une victoire 2-1 sur l’ensemble des deux matchs. Teboho Mokoena a marqué le but décisif en fin de première période.",

      "Ce succès offre aux Sundowns leur deuxième titre dans la compétition, dix ans après celui de 2016. Il leur ouvre aussi la route vers la Coupe intercontinentale de la FIFA 2026 et la Coupe du monde des clubs 2029.",

      "L’AS FAR, club marocain, a confirmé sa place parmi les équipes importantes du continent en atteignant la finale de la compétition. Elle s’est inclinée de peu face à un adversaire très solide défensivement.",

      "En Coupe de la Confédération, l’USM Alger a remporté son deuxième titre en battant les Égyptiens de Zamalek aux tirs au but (8-7), après deux matchs gagnés 1-0 par chaque équipe à domicile.",

      "Les deux champions se retrouveront en Supercoupe de la CAF, le 8 novembre 2026 à Tshwane. D’autres clubs, comme Al Ahly, l’Espérance de Tunis ou les formations d’Afrique du Nord et d’Afrique australe, restent régulièrement présents dans les phases avancées.",

      "La saison 2026/27 a démarré par les tours préliminaires en septembre et octobre. La phase de groupes de la Ligue des champions et de la Coupe de la Confédération commence le 27 novembre.",

      "Pour suivre les performances d’un club, regardez plus que les résultats : le parcours dans la compétition, la régularité à domicile et à l’extérieur, la réussite dans les matchs à élimination directe et la profondeur de l’effectif disent beaucoup de sa solidité.",
    ],
    sources: [
      {
        name: "CAF – Sundowns remportent la Ligue des champions 2025/26",
        url: "https://www.cafonline.com/caf-champions-league/news/sundowns-hold-off-far-rabat-to-win-second-totalenergies-caf-champions-league-title/",
      },
      {
        name: "FIFA – Mamelodi Sundowns champions d’Afrique",
        url: "https://www.fifa.com/en/articles/mameldi-sundowns-caf-champions-league-winners",
      },
      {
        name: "Ahram Online – Supercoupe de la CAF 2026 et finale de la Coupe de la Confédération",
        url: "https://english.ahram.org.eg/News/574339.aspx",
      },
    ],
  },
];
