import type { Metadata } from "next";
import EditorialHubPage from "../components/EditorialHubPage";

const title = "Histoire du football : légendes, records et grandes équipes";
const description =
  "Découvrez l'histoire du football, ses grandes légendes, les clubs mythiques, les records, les finales mémorables et les moments qui ont marqué le football africain et mondial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://sport.maffohub.com/histoire-football",
  },
  openGraph: {
    title,
    description,
    url: "https://sport.maffohub.com/histoire-football",
    siteName: "Maffo Sport",
    type: "article",
    locale: "fr_FR",
  },
};

const themes = [
  {
    title: "Les records du football",
    label: "Statistiques",
    description:
      "Buts, titres, performances individuelles et records collectifs : découvrez les chiffres qui ont marqué l'histoire du football.",
    href: "/competitions",
  },
  {
    title: "Les grandes équipes",
    label: "Clubs et sélections",
    description:
      "Du Real Madrid au FC Barcelone, en passant par les grandes sélections nationales, retour sur les équipes qui ont marqué leur époque.",
    href: "/competitions",
  },
  {
    title: "Les légendes du football",
    label: "Joueurs",
    description:
      "Pelé, Diego Maradona, Lionel Messi, Cristiano Ronaldo et les grandes figures africaines : découvrez les parcours qui ont marqué le jeu.",
    href: "/equipes-joueurs",
  },
  {
    title: "Les finales mémorables",
    label: "Grands matchs",
    description:
      "Revivez les finales, les remontées spectaculaires et les rencontres qui ont changé l'histoire des grandes compétitions.",
    href: "/competitions",
  },
  {
    title: "L'histoire du football africain",
    label: "Afrique",
    description:
      "De la première Coupe d'Afrique des nations aux grandes épopées continentales, explorez les moments forts du football africain.",
    href: "/football-africain",
  },
  {
    title: "L'évolution du football",
    label: "Tactique et règles",
    description:
      "Comprenez comment les règles, les formations tactiques et les méthodes de jeu ont transformé le football au fil des décennies.",
    href: "/competitions",
  },
];

export default function HistoireFootballPage() {
  return (
    <EditorialHubPage
      eyebrow="Football · Histoire et légendes"
      title="Histoire du football : légendes, records et grandes équipes"
      intro="Comment le football est-il devenu le sport populaire que l'on connaît aujourd'hui ? Quels joueurs ont marqué son histoire ? Quels clubs ont dominé les compétitions européennes et quelles sélections ont écrit les plus belles pages du football mondial ? Des origines du football moderne aux grandes finales internationales, découvrez les dates, les personnages et les exploits qui ont façonné ce sport."
      notice="Les records et les statistiques historiques peuvent varier selon les compétitions et les critères de comptage. Les chiffres présentés doivent être rapprochés des archives des fédérations et des organisateurs concernés."
      cardsHeading="Explorer l'histoire du football"
      cards={themes}
      sections={[
        {
          heading: "Les origines du football moderne",
          paragraphs: [
            "Le football possède des racines anciennes, mais le jeu moderne s'est progressivement structuré au XIXe siècle en Angleterre. À cette époque, les établissements scolaires et les clubs pratiquaient différentes variantes du jeu, avec des règles qui n'étaient pas toujours compatibles.",
            "Une étape décisive intervient le 26 octobre 1863, avec la création de la Football Association en Angleterre. Cette organisation contribue à établir des règles communes et à distinguer le football association d'autres formes de football pratiquées à l'époque.",
            "Au cours des décennies suivantes, le sport se diffuse dans de nombreux pays. Les clubs se multiplient, les compétitions nationales se développent et les rencontres internationales prennent une place croissante. Le football devient progressivement un phénomène populaire, porté par les rivalités locales, les grandes équipes et l'essor des médias.",
          ],
          bullets: [
            "1863 : création de la Football Association en Angleterre.",
            "1904 : fondation de la FIFA à Paris.",
            "1930 : première Coupe du monde masculine, organisée en Uruguay.",
            "1955-1956 : première édition de la Coupe des clubs champions européens, ancêtre de la Ligue des champions.",
          ],
        },
        {
          heading: "La Coupe du monde et les grandes compétitions internationales",
          paragraphs: [
            "La première Coupe du monde masculine de la FIFA se déroule en Uruguay en 1930. Le pays organisateur remporte cette édition inaugurale en battant l'Argentine en finale. Depuis, la compétition est devenue l'un des rendez-vous majeurs du football international.",
            "Au fil des éditions, plusieurs sélections ont marqué l'histoire du tournoi. Le Brésil s'est illustré par ses générations de joueurs talentueux, tandis que l'Italie, l'Allemagne, l'Argentine et la France ont également construit des palmarès importants. Chaque génération apporte ses héros, ses surprises et ses matchs mémorables.",
            "Les compétitions continentales occupent elles aussi une place essentielle. Le Championnat d'Europe rassemble les meilleures sélections européennes, tandis que la Coupe d'Afrique des nations met en valeur les équipes nationales du continent africain. Ces tournois donnent naissance à des rivalités, révèlent des joueurs et contribuent à l'identité footballistique des pays participants.",
          ],
        },
        {
          heading: "Pelé, Maradona, Messi et Cristiano Ronaldo : des légendes du jeu",
          paragraphs: [
            "Pelé reste l'une des figures les plus emblématiques de l'histoire du football. Avec le Brésil, il remporte trois Coupes du monde en 1958, 1962 et 1970. Son talent technique, son sens du but et son influence internationale ont contribué à faire de lui une référence mondiale.",
            "Diego Maradona marque profondément le football par sa créativité, sa conduite de balle et ses performances lors de la Coupe du monde 1986. Capitaine de l'Argentine, il joue un rôle majeur dans le parcours qui conduit son équipe au titre mondial au Mexique.",
            "Des décennies plus tard, Lionel Messi et Cristiano Ronaldo dominent une grande partie du football mondial. Leurs performances en club et en sélection, leurs records de buts et leurs nombreux trophées alimentent une rivalité sportive qui a marqué toute une génération de supporters.",
            "L'histoire du football ne se résume toutefois pas à quelques noms. De Johan Cruyff à Zinedine Zidane, en passant par Ronaldo Nazário, Marta et de nombreuses autres figures, les grandes carrières racontent aussi l'évolution des techniques, des tactiques et de la place des joueurs dans le sport.",
          ],
        },
        {
          heading: "Les clubs qui ont marqué l'histoire du football",
          paragraphs: [
            "Certains clubs ont construit une réputation mondiale grâce à leurs titres, à leurs joueurs et à leur influence sur le jeu. Le Real Madrid occupe une place particulière dans l'histoire de la Coupe d'Europe et de la Ligue des champions. Le club a remporté les cinq premières éditions de la Coupe des clubs champions européens, de 1956 à 1960, une série historique.",
            "Le FC Barcelone, l'AC Milan, Liverpool, le Bayern Munich, l'Ajax Amsterdam et Manchester United ont également marqué différentes périodes du football européen. Leurs succès sont associés à des générations de joueurs, à des entraîneurs influents et à des styles de jeu qui ont parfois inspiré d'autres équipes.",
            "Le football de clubs ne se limite pas à l'Europe. En Amérique du Sud, des formations comme Boca Juniors, River Plate, Santos et Flamengo occupent une place importante dans la culture footballistique. En Afrique, Al Ahly, le TP Mazembe et l'Espérance de Tunis figurent parmi les clubs qui ont marqué les compétitions continentales.",
            "Comparer les clubs demande de préciser les critères utilisés : nombre de titres, compétitions prises en compte, période étudiée ou performances nationales et internationales. Un palmarès européen ne mesure pas exactement la même chose qu'un palmarès continental africain ou sud-américain.",
          ],
        },
        {
          heading: "Le football africain : des exploits et des figures inoubliables",
          paragraphs: [
            "La Confédération africaine de football (CAF) est officiellement créée en février 1957. Quelques jours plus tard, la première Coupe d'Afrique des nations est organisée au Soudan et remportée par l'Égypte. Cette compétition devient progressivement un événement majeur du calendrier sportif africain.",
            "Au fil des éditions, plusieurs sélections s'illustrent par leurs titres et leurs parcours. Le Cameroun, le Nigeria, le Ghana, la Côte d'Ivoire, l'Égypte et le Sénégal comptent parmi les nations qui ont marqué l'histoire de la CAN. Leurs succès ont donné naissance à des générations de joueurs admirés bien au-delà de leurs frontières.",
            "Des figures comme Roger Milla, George Weah, Samuel Eto'o, Didier Drogba et Jay-Jay Okocha ont également contribué à la renommée du football africain. Leurs carrières illustrent la diversité des parcours, entre compétitions continentales, grands championnats et rencontres internationales.",
            "Les clubs africains possèdent eux aussi une histoire riche, construite autour des championnats nationaux, de la Ligue des champions de la CAF et des rivalités régionales. Pour comprendre cette histoire, il faut s'intéresser autant aux titres qu'aux supporters, aux villes et aux traditions qui entourent les équipes.",
          ],
        },
        {
          heading: "Les records et les matchs qui ont marqué les mémoires",
          paragraphs: [
            "Les records donnent une mesure des performances exceptionnelles réalisées au cours d'une carrière ou d'une saison. Ils peuvent concerner le nombre de buts, les titres remportés, les matchs disputés, les séries de victoires ou les performances d'une équipe dans une compétition.",
            "Le classement des meilleurs buteurs dépend cependant du périmètre retenu. Les buts inscrits en club ne doivent pas être confondus avec ceux marqués en sélection, et les statistiques d'une compétition particulière ne correspondent pas nécessairement au total d'une carrière. Pour comparer deux joueurs, il faut donc vérifier que les chiffres reposent sur les mêmes critères.",
            "Certaines rencontres restent célèbres pour leur scénario. La finale de la Coupe du monde 2022 entre l'Argentine et la France se termine sur un score de 3-3 après prolongation. L'Argentine remporte ensuite la séance de tirs au but 4-2. Lionel Messi inscrit deux buts, tandis que Kylian Mbappé réalise un triplé : un scénario exceptionnel pour une finale mondiale.",
            "Les grandes soirées européennes, les remontées au score et les surprises en coupe font également partie de la mémoire collective. Au-delà du résultat, ces matchs deviennent historiques par les émotions qu'ils suscitent, les performances individuelles et les conséquences sur les équipes ou les compétitions.",
          ],
        },
        {
          heading: "Comment le football a-t-il évolué tactiquement ?",
          paragraphs: [
            "Les systèmes de jeu ont beaucoup changé depuis les premières décennies du football organisé. Les formations anciennes accordaient souvent une place importante aux attaquants, tandis que le développement des règles et l'évolution des méthodes d'entraînement ont progressivement transformé l'équilibre entre défense, milieu de terrain et attaque.",
            "Au XXe siècle, différentes écoles tactiques ont influencé le jeu : organisation défensive, pressing, contre-attaque, jeu de possession et transitions rapides. Des entraîneurs et des équipes ont popularisé certaines approches, qui ont ensuite été adaptées par leurs adversaires.",
            "Le football contemporain repose sur des principes variés. Certaines équipes cherchent à contrôler le ballon et à construire depuis l'arrière ; d'autres privilégient la récupération haute, les attaques rapides ou la solidité défensive. Le système affiché sur une feuille de match ne suffit pas toujours à décrire le fonctionnement réel d'une équipe, car les positions changent selon les phases de jeu.",
            "Les outils d'analyse vidéo, les données statistiques et les nouvelles méthodes de préparation physique ont également transformé la préparation des rencontres. Malgré ces évolutions, la qualité technique, la prise de décision et la coordination collective restent des éléments essentiels de la performance.",
          ],
        },
        {
          heading: "Sources et références historiques",
          paragraphs: [
            "Pour approfondir l'histoire du football, les archives des fédérations et des organisateurs de compétitions constituent des références utiles. La Fédération anglaise de football retrace la création de la Football Association en 1863. La FIFA propose des archives et des rétrospectives sur la Coupe du monde, notamment sur la finale Argentine-France de 2022.",
            "L'UEFA publie l'histoire de ses compétitions européennes, les palmarès et les statistiques de la Ligue des champions. La CAF documente de son côté l'histoire de la confédération et de la Coupe d'Afrique des nations.",
            "Sources officielles à consulter : The Football Association — https://www.thefa.com/about-football-association/who-we-are/history ; FIFA — https://www.fifa.com/ ; UEFA — https://www.uefa.com/uefachampionsleague/history/ ; Confédération africaine de football — https://www.cafonline.com/fr/a-propos-de-la-caf/a-propos-de-nous/caf-history/.",
          ],
        },
      ]}
      relatedHeading="À découvrir également"
      relatedLinks={[
        {
          title: "Football africain",
          description:
            "Découvrez les sélections, les clubs et les grandes compétitions du continent africain.",
          href: "/football-africain",
        },
        {
          title: "Équipes et joueurs",
          description:
            "Explorez les équipes, les profils de joueurs et les statistiques disponibles.",
          href: "/equipes-joueurs",
        },
        {
          title: "Compétitions de football",
          description:
            "Retrouvez les principales compétitions européennes et africaines couvertes par Maffo Sport.",
          href: "/competitions",
        },
        {
          title: "Actualités football",
          description:
            "Suivez les nouvelles et les événements récents du monde du football.",
          href: "/actualites",
        },
      ]}
      faq={[
        {
          question: "Quand le football moderne a-t-il été créé ?",
          answer:
            "Le football moderne s'est structuré au XIXe siècle. La création de la Football Association en Angleterre, le 26 octobre 1863, constitue une étape majeure dans l'établissement de règles communes.",
        },
        {
          question: "Quand a eu lieu la première Coupe du monde de football ?",
          answer:
            "La première Coupe du monde masculine de la FIFA a été organisée en Uruguay en 1930. Le pays hôte a remporté la finale contre l'Argentine.",
        },
        {
          question: "Qui sont les grandes légendes de l'histoire du football ?",
          answer:
            "Pelé, Diego Maradona, Johan Cruyff, Zinedine Zidane, Lionel Messi et Cristiano Ronaldo comptent parmi les figures les plus célèbres. Le football africain possède également des légendes comme Roger Milla, Samuel Eto'o, Didier Drogba et George Weah.",
        },
        {
          question: "Quel club a remporté le plus de Coupes d'Europe et de Ligues des champions ?",
          answer:
            "Le Real Madrid détient le record historique de titres dans la compétition européenne majeure des clubs. Pour obtenir le total le plus récent, il faut consulter les statistiques officielles de l'UEFA et préciser si l'on compte toute l'histoire de la compétition ou uniquement l'ère de la Ligue des champions.",
        },
        {
          question: "Quand la Coupe d'Afrique des nations a-t-elle été créée ?",
          answer:
            "La première édition de la Coupe d'Afrique des nations s'est déroulée en 1957 au Soudan. L'Égypte a remporté ce premier tournoi.",
        },
        {
          question: "Pourquoi les records de football varient-ils selon les sources ?",
          answer:
            "Les différences viennent notamment des compétitions prises en compte, de la distinction entre matchs officiels et amicaux, des archives disponibles et des méthodes de comptage. Il est donc important de consulter les définitions et les sources utilisées.",
        },
      ]}
      footerNote="Maffo Sport s'appuie sur des références historiques et des sources officielles pour présenter les grandes dates, les compétitions et les performances du football. Les palmarès et statistiques susceptibles d'évoluer doivent être vérifiés auprès des organisateurs concernés."
    />
  );
}
