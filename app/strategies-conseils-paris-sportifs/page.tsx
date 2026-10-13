import type { Metadata } from "next";
import Link from "next/link";

const pageTitle =
  "Stratégies et conseils pour les paris sportifs : guide pratique";

const pageDescription =
  "Apprenez à analyser les statistiques, comparer les cotes, évaluer les risques et éviter les erreurs fréquentes dans les paris sportifs. Guide pratique et jeu responsable.";

const pageUrl =
  "https://sport.maffohub.com/strategies-conseils-paris-sportifs";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Maffo Sport",
    type: "article",
    locale: "fr_FR",
  },
};

const faqItems = [
  {
    question: "Comment analyser un match avant de parier ?",
    answer:
      "Il faut examiner plusieurs éléments : les résultats récents, le niveau des adversaires rencontrés, les performances à domicile et à l'extérieur, les absences, le calendrier et les statistiques adaptées au marché envisagé. Aucun de ces éléments ne garantit le résultat.",
  },
  {
    question: "Une cote élevée signifie-t-elle un meilleur pari ?",
    answer:
      "Non. Une cote élevée correspond généralement à une probabilité implicite plus faible selon l'évaluation du bookmaker. Elle ne signifie pas automatiquement que le pari est intéressant ou rentable.",
  },
  {
    question: "Pourquoi comparer les cotes de plusieurs bookmakers ?",
    answer:
      "La comparaison permet de repérer les différences de prix proposées pour un même marché et des conditions identiques. Il faut vérifier les règles, les limites, les frais éventuels et les conditions applicables avant de choisir.",
  },
  {
    question: "Les statistiques permettent-elles de prédire avec certitude un résultat ?",
    answer:
      "Non. Les statistiques aident à mieux comprendre une rencontre, mais elles ne suppriment pas l'incertitude. Une blessure, une expulsion, une erreur ou un événement imprévu peut modifier le déroulement d'un match.",
  },
  {
    question: "Est-il préférable de faire un pari simple ou un combiné ?",
    answer:
      "Un pari simple porte sur une sélection. Un combiné associe plusieurs sélections et exige qu'elles soient toutes gagnantes pour que le ticket soit généralement gagnant. Chaque sélection ajoutée augmente les conditions nécessaires à la réussite du combiné.",
  },
  {
    question: "Comment pratiquer les paris sportifs de manière responsable ?",
    answer:
      "Il est recommandé de fixer à l'avance une limite de dépenses et de temps, de ne jamais utiliser l'argent nécessaire aux dépenses essentielles, de ne pas emprunter pour parier et de ne pas chercher à récupérer ses pertes. Il faut pouvoir arrêter à tout moment.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  author: {
    "@type": "Organization",
    name: "Maffo Sport",
  },
  publisher: {
    "@type": "Organization",
    name: "Maffo Sport",
    url: "https://sport.maffohub.com",
  },
  inLanguage: "fr-FR",
  articleSection: "Stratégies et conseils",
  about: [
    "Analyse des statistiques sportives",
    "Comparaison des cotes",
    "Gestion des risques",
    "Jeu responsable",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 mt-12 text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {children}
    </h2>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
      <h3 className="mb-2 font-semibold text-emerald-300">{title}</h3>
      <div className="text-sm leading-7 text-gray-200">{children}</div>
    </div>
  );
}

export default function StrategiesConseilsPage() {
  return (
    <main className="min-h-screen bg-[#07110d] text-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <nav
          aria-label="Fil d’Ariane"
          className="mb-6 text-sm text-gray-400"
        >
          <Link href="/" className="transition hover:text-emerald-400">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Stratégies et conseils</span>
        </nav>

        <header className="border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Guides pratiques
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Stratégies et conseils pour les paris sportifs : analyser avant de
            décider
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Comprendre les statistiques, lire les cotes, comparer les marchés
            et reconnaître les erreurs fréquentes : voici les bases pour
            examiner un pari sportif avec davantage de méthode, sans confondre
            analyse et certitude.
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Les paris sportifs comportent un risque de perte financière.
            Aucune stratégie, statistique ou analyse ne garantit un gain.
          </p>
        </header>

        <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <h2 className="mb-3 text-lg font-bold text-white">
            Dans ce guide
          </h2>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <a className="hover:text-emerald-400" href="#methode">
                1. Construire une méthode d’analyse
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#statistiques">
                2. Lire les statistiques d’un match
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#cotes">
                3. Comprendre et comparer les cotes
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#marches">
                4. Choisir un marché adapté à l’analyse
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#erreurs">
                5. Les erreurs à éviter
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#risques">
                6. Limiter les risques et jouer responsable
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#checklist">
                7. La checklist avant un pari
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-400" href="#pour-aller-plus-loin">
                8. Pronostics et bookmakers
              </a>
            </li>
          </ul>
        </div>

        <section>
          <SectionTitle>
            Pourquoi avoir une méthode d’analyse ?
          </SectionTitle>

          <p className="leading-8">
            Un match de football ne se résume pas au classement de deux équipes
            ou au nom du favori. Une formation peut afficher de bons résultats
            tout en ayant rencontré des adversaires moins forts. Une autre peut
            perdre plusieurs matchs serrés malgré des occasions nombreuses.
            Pour comprendre une rencontre, il faut replacer les chiffres dans
            leur contexte.
          </p>

          <p className="mt-4 leading-8">
            Une méthode consiste à rassembler des informations pertinentes,
            définir ce qu’elles suggèrent, puis reconnaître ce qu’elles ne
            permettent pas de savoir. Elle évite notamment de sélectionner un
            pari uniquement parce qu’une équipe est populaire, parce qu’une
            cote semble attractive ou parce qu’un résultat paraît évident.
          </p>

          <p className="mt-4 leading-8">
            L’objectif de l’analyse n’est pas de supprimer le hasard. Il est de
            mieux comprendre les hypothèses derrière un marché et d’éviter les
            décisions impulsives. Même une analyse sérieuse peut aboutir à un
            résultat perdant.
          </p>
        </section>

        <section id="methode">
          <SectionTitle>
            1. Construire une méthode avant chaque analyse
          </SectionTitle>

          <p className="leading-8">
            Avant d’examiner les cotes, commence par étudier la rencontre
            elle-même. Le contexte sportif aide à comprendre les motivations
            possibles des équipes, leur état de forme et les difficultés
            qu’elles pourraient rencontrer.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Examiner les informations essentielles
          </h3>

          <ul className="list-disc space-y-3 pl-6 leading-7 marker:text-emerald-400">
            <li>
              <strong className="text-white">La forme récente :</strong>{" "}
              observe plusieurs matchs plutôt qu’un seul résultat isolé.
            </li>
            <li>
              <strong className="text-white">Le niveau des adversaires :</strong>{" "}
              cinq victoires contre des équipes en difficulté ne racontent pas
              nécessairement la même histoire que cinq victoires contre des
              équipes de haut niveau.
            </li>
            <li>
              <strong className="text-white">Le lieu de la rencontre :</strong>{" "}
              compare les performances à domicile et à l’extérieur.
            </li>
            <li>
              <strong className="text-white">Les absences :</strong> vérifie
              les blessures, les suspensions et les éventuels changements dans
              le onze de départ.
            </li>
            <li>
              <strong className="text-white">Le calendrier :</strong> un
              enchaînement de rencontres ou un déplacement difficile peut
              influencer la préparation et la disponibilité des joueurs.
            </li>
            <li>
              <strong className="text-white">L’enjeu :</strong> une lutte pour
              le maintien, une qualification ou une compétition européenne
              peut modifier les choix tactiques, sans garantir une réaction
              particulière.
            </li>
          </ul>

          <InfoBox title="Une information doit être vérifiée">
            Ne traite pas une rumeur de blessure, une composition probable ou
            une statistique ancienne comme un fait confirmé. Consulte des
            sources fiables et vérifie la date de mise à jour avant de tirer
            une conclusion.
          </InfoBox>

          <p className="leading-8">
            Une fois ces éléments examinés, formule une hypothèse claire :
            par exemple, une équipe pourrait créer plusieurs occasions, ou
            les deux formations pourraient adopter un rythme prudent. Ensuite,
            demande-toi si les statistiques et le marché choisi correspondent
            réellement à cette hypothèse.
          </p>
        </section>

        <section id="statistiques">
          <SectionTitle>
            2. Comment lire les statistiques d’un match de football
          </SectionTitle>

          <p className="leading-8">
            Les statistiques donnent des indications sur la manière dont une
            équipe joue. Elles deviennent plus utiles lorsqu’on les compare
            sur une période cohérente et face à des adversaires comparables.
            Une donnée isolée ne suffit généralement pas à évaluer une
            rencontre.
          </p>

          <h3 className="mb-3 mt-6 text-xl font-semibold text-white">
            Les indicateurs à examiner
          </h3>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.06] text-white">
                <tr>
                  <th className="p-3">Indicateur</th>
                  <th className="p-3">Ce qu’il indique</th>
                  <th className="p-3">Sa limite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Buts marqués
                  </td>
                  <td className="p-3">
                    La production offensive observée.
                  </td>
                  <td className="p-3">
                    Dépend aussi de l’efficacité devant le but.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Buts encaissés
                  </td>
                  <td className="p-3">
                    Les difficultés défensives observées.
                  </td>
                  <td className="p-3">
                    Ne reflète pas toujours la qualité des occasions concédées.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Tirs cadrés
                  </td>
                  <td className="p-3">
                    Les tentatives qui atteignent le cadre.
                  </td>
                  <td className="p-3">
                    Leur dangerosité varie selon la situation.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Expected goals (xG)
                  </td>
                  <td className="p-3">
                    La qualité estimée des occasions créées ou concédées.
                  </td>
                  <td className="p-3">
                    Le modèle utilisé et les données disponibles comptent.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Possession
                  </td>
                  <td className="p-3">
                    La part du temps pendant laquelle l’équipe contrôle le
                    ballon.
                  </td>
                  <td className="p-3">
                    Une forte possession ne garantit pas des occasions
                    dangereuses.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-emerald-300">
                    Corners
                  </td>
                  <td className="p-3">
                    Certaines situations de pression offensive.
                  </td>
                  <td className="p-3">
                    Leur nombre dépend du style et du déroulement du match.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-2 mt-7 text-xl font-semibold text-white">
            Comparer les équipes dans le bon contexte
          </h3>

          <p className="leading-8">
            Une moyenne de buts doit être interprétée avec prudence. Si une
            équipe marque en moyenne deux buts par match, cela ne signifie pas
            qu’elle en marquera deux lors de sa prochaine rencontre. Le nombre
            d’adversaires rencontrés, leur niveau, le lieu des matchs et les
            absences peuvent modifier la lecture.
          </p>

          <p className="mt-4 leading-8">
            Les expected goals, ou xG, estiment la probabilité qu’une occasion
            se transforme en but à partir de caractéristiques comme sa
            position et son type. Ils peuvent aider à distinguer le volume
            d’occasions de l’efficacité réelle. Ils ne constituent toutefois
            ni une prédiction certaine du score ni une garantie pour un marché
            de buts.
          </p>

          <InfoBox title="Exemple d’interprétation">
            Si une équipe a davantage de tirs cadrés et un total de xG
            supérieur à son adversaire sur plusieurs matchs, cela peut
            suggérer une production offensive plus importante. Il reste
            nécessaire de vérifier la qualité des adversaires, la période
            étudiée et les changements d’effectif. Cette observation ne
            suffit pas à déterminer le vainqueur.
          </InfoBox>
        </section>

        <section id="cotes">
          <SectionTitle>
            3. Comprendre et comparer les cotes des bookmakers
          </SectionTitle>

          <p className="leading-8">
            Une cote décimale indique le montant total théorique retourné pour
            une mise gagnante, mise initiale comprise. Pour une mise de
            1 000 FCFA à une cote de 2,00, le retour brut serait de
            2 000 FCFA si le pari est gagnant. Le gain net serait alors de
            1 000 FCFA, avant toute condition ou retenue applicable.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            La probabilité implicite
          </h3>

          <p className="leading-8">
            Pour une cote décimale, on peut calculer une probabilité implicite
            simple en divisant 1 par la cote, puis en multipliant par 100.
            Cette valeur ne représente pas nécessairement la probabilité réelle
            de l’événement : les marges du bookmaker et les conditions du
            marché doivent aussi être prises en compte.
          </p>

          <div className="my-5 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-gray-400">
              Formule de calcul
            </p>
            <p className="mt-2 text-xl font-bold text-white">
              Probabilité implicite (%) = 100 ÷ cote décimale
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white/[0.04] p-3">
                <p className="text-sm text-gray-400">Cote 1,50</p>
                <p className="mt-1 font-semibold text-emerald-300">66,67 %</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-3">
                <p className="text-sm text-gray-400">Cote 2,00</p>
                <p className="mt-1 font-semibold text-emerald-300">50 %</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-3">
                <p className="text-sm text-gray-400">Cote 3,00</p>
                <p className="mt-1 font-semibold text-emerald-300">33,33 %</p>
              </div>
            </div>
          </div>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Pourquoi comparer plusieurs cotes ?
          </h3>

          <p className="leading-8">
            Deux bookmakers peuvent proposer des cotes différentes pour un
            même événement. Comparer les offres permet de comprendre ces
            écarts et d’éviter de choisir automatiquement la première cote
            affichée.
          </p>

          <p className="mt-4 leading-8">
            Pour que la comparaison soit valable, vérifie que les marchés
            portent sur le même événement, la même période et les mêmes
            conditions. Une cote sur le résultat à la fin du temps
            réglementaire n’est pas nécessairement comparable à un marché
            incluant les prolongations. Vérifie également les règles de
            règlement, les limites de mise et les conditions applicables.
          </p>

          <InfoBox title="Une cote plus élevée ne garantit pas un meilleur pari">
            Une cote élevée peut refléter une probabilité estimée plus faible.
            La comparaison des prix ne permet pas, à elle seule, de savoir si
            un pari est rentable ou si l’événement se produira.
          </InfoBox>
        </section>

        <section id="marches">
          <SectionTitle>
            4. Choisir un marché cohérent avec son analyse
          </SectionTitle>

          <p className="leading-8">
            Le choix du marché doit découler de la question que l’on cherche
            à étudier. Une analyse portant sur le nombre de buts n’est pas
            identique à une analyse portant sur le vainqueur. Comprendre cette
            différence permet d’éviter de sélectionner un marché uniquement
            parce que son nom ou sa cote paraît intéressant.
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="text-lg font-bold text-white">
                Le résultat 1N2
              </h3>
              <p className="mt-2 leading-7">
                Ce marché concerne la victoire de l’équipe à domicile (1), le
                match nul (N) ou la victoire de l’équipe à l’extérieur (2),
                généralement à la fin du temps réglementaire. Vérifie toujours
                les règles du marché concerné.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="text-lg font-bold text-white">
                La double chance
              </h3>
              <p className="mt-2 leading-7">
                Elle regroupe deux issues possibles, par exemple 1N, N2 ou
                12. Le nombre d’issues couvertes est plus large, mais la cote
                est souvent plus basse. Il faut comprendre précisément ce que
                le marché couvre.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="text-lg font-bold text-white">
                Over / Under : le total de buts
              </h3>
              <p className="mt-2 leading-7">
                Ce marché porte sur un total de buts supérieur ou inférieur à
                une ligne donnée. Par exemple, une ligne de 2,5 buts distingue
                les matchs avec au moins trois buts de ceux qui en comptent
                deux ou moins. La ligne exacte et les règles de règlement
                doivent être vérifiées.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="text-lg font-bold text-white">
                BTTS : les deux équipes marquent
              </h3>
              <p className="mt-2 leading-7">
                Le marché BTTS Oui / Non porte sur le fait que les deux équipes
                marquent au moins un but. Il faut examiner les performances
                offensives et défensives des deux formations, sans se limiter
                au nombre total de buts lors de leurs dernières rencontres.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="text-lg font-bold text-white">
                Le handicap
              </h3>
              <p className="mt-2 leading-7">
                Le handicap ajoute un avantage ou un désavantage théorique à
                une équipe selon les règles du marché. Les handicaps
                européens et asiatiques peuvent fonctionner différemment :
                vérifie la ligne, les possibilités de remboursement et les
                conditions de règlement avant toute décision.
              </p>
            </div>
          </div>

          <p className="mt-5 leading-8">
            Pour approfondir ces différences, consulte notre guide dédié :
            {" "}
            <Link
              href="/types-de-paris-sportifs"
              className="font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            >
              comprendre les différents types de paris sportifs
            </Link>
            .
          </p>
        </section>

        <section id="erreurs">
          <SectionTitle>
            5. Les erreurs fréquentes à éviter
          </SectionTitle>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Se fier uniquement au classement
          </h3>
          <p className="leading-8">
            Le classement donne une vue d’ensemble, mais il ne décrit pas
            toute la situation d’une équipe. Les matchs disputés, la difficulté
            du calendrier, les absences et la forme récente peuvent apporter
            des informations complémentaires.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Penser qu’une série doit forcément continuer ou s’arrêter
          </h3>
          <p className="leading-8">
            Une équipe qui a gagné plusieurs matchs peut perdre le suivant.
            Une équipe en difficulté peut aussi retrouver de meilleures
            performances. Les séries passées ne créent aucune obligation pour
            le prochain résultat.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Choisir un favori uniquement parce que sa cote est basse
          </h3>
          <p className="leading-8">
            Une cote basse indique généralement une probabilité implicite
            plus élevée, pas une certitude. Un favori peut perdre, faire match
            nul ou rencontrer des difficultés imprévues.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Multiplier les sélections dans un combiné
          </h3>
          <p className="leading-8">
            Dans un combiné classique, toutes les sélections doivent
            généralement être gagnantes pour obtenir un ticket gagnant. Même
            si chaque événement semble plausible individuellement, le risque
            que l’ensemble échoue augmente avec le nombre de conditions à
            remplir.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Parier pour récupérer une perte
          </h3>
          <p className="leading-8">
            Augmenter ses mises après une perte peut conduire à dépenser
            davantage que prévu. Une perte passée ne rend pas le prochain
            pari plus susceptible d’être gagnant. Il est préférable de
            s’arrêter plutôt que de chercher à se refaire.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold text-white">
            Ignorer les conditions du bookmaker
          </h3>
          <p className="leading-8">
            Les marchés, les règles de règlement, les limites de mise et les
            conditions de compte peuvent varier. Lire les conditions avant
            d’utiliser un service permet de mieux comprendre ses droits et
            ses obligations.
          </p>
        </section>

        <section id="risques">
          <SectionTitle>
            6. Gestion des risques et jeu responsable
          </SectionTitle>

          <p className="leading-8">
            La gestion des risques ne garantit pas un bénéfice. Elle consiste
            avant tout à éviter que les paris sportifs ne prennent une place
            excessive dans le budget ou dans la vie quotidienne. Le résultat
            d’un pari reste incertain, même lorsqu’une analyse semble solide.
          </p>

          <ul className="list-disc space-y-3 pl-6 leading-7 marker:text-emerald-400">
            <li>
              Fixe une limite de dépenses à l’avance et ne la dépasse pas.
            </li>
            <li>
              N’utilise jamais l’argent prévu pour le logement, l’alimentation,
              les factures, les études ou les dépenses essentielles.
            </li>
            <li>
              Ne contracte pas de dette pour financer des paris.
            </li>
            <li>
              Ne considère pas les paris comme un revenu régulier ou une
              solution financière.
            </li>
            <li>
              Évite de prendre des décisions lorsque tu es en colère, stressé
              ou sous l’influence de l’alcool.
            </li>
            <li>
              Fais des pauses et arrête si les paris affectent ton sommeil,
              tes relations, ton travail ou tes finances.
            </li>
            <li>
              Si tu n’arrives plus à respecter tes limites, utilise les outils
              de limitation ou d’auto-exclusion disponibles et cherche de
              l’aide auprès d’un service adapté.
            </li>
          </ul>

          <InfoBox title="Une règle simple">
            Ne mise que de l’argent que tu peux te permettre de perdre
            entièrement. Si tu ne peux pas accepter cette perte, ne fais pas
            le pari.
          </InfoBox>
        </section>

        <section id="checklist">
          <SectionTitle>
            7. Checklist : que vérifier avant un pari sportif ?
          </SectionTitle>

          <p className="leading-8">
            Avant de prendre une décision, passe en revue ces questions. Si
            plusieurs réponses restent incertaines, mieux vaut reconnaître
            que tu ne disposes pas de suffisamment d’informations plutôt que
            de forcer une sélection.
          </p>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <ul className="space-y-4">
              {[
                "Ai-je vérifié la date, l'heure et la compétition du match ?",
                "Mes statistiques sont-elles récentes et comparables ?",
                "Ai-je vérifié les absences et les informations importantes ?",
                "Est-ce que je comprends exactement le marché sélectionné ?",
                "Ai-je comparé les cotes dans des conditions équivalentes ?",
                "Ai-je pris en compte l'incertitude et la possibilité de perdre ?",
                "La dépense respecte-t-elle la limite que je me suis fixée ?",
                "Suis-je prêt à ne pas parier si les informations sont insuffisantes ?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 leading-7">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500/60 text-xs text-emerald-300"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pour-aller-plus-loin">
          <SectionTitle>
            Pour aller plus loin avec Maffo Sport
          </SectionTitle>

          <p className="leading-8">
            Une bonne compréhension des marchés et des statistiques aide à
            lire les informations sportives avec davantage de recul. Pour
            continuer, retrouve nos ressources consacrées aux pronostics et
            aux bookmakers. Elles doivent servir à t’informer, pas à te
            promettre un résultat.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Link
              href="/pronostics"
              className="group rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 transition hover:border-emerald-400 hover:bg-emerald-500/15"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Analyses de matchs
              </p>
              <h3 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-300">
                Consulter nos pronostics
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Découvre nos contenus consacrés aux rencontres et aux
                éléments à examiner avant un match. Une analyse ne garantit
                jamais le résultat.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-300">
                Voir les pronostics →
              </span>
            </Link>

            <Link
              href="/bookmakers"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-500/40 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Informations pratiques
              </p>
              <h3 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-300">
                Comparer les bookmakers
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Consulte les informations disponibles sur les opérateurs,
                leurs conditions et les éléments à vérifier avant d’utiliser
                un service.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-300">
                Voir les bookmakers →
              </span>
            </Link>
          </div>

          <p className="mt-6 leading-8">
            Tu peux également consulter notre guide sur les{" "}
            <Link
              href="/types-de-paris-sportifs"
              className="font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            >
              types de paris sportifs
            </Link>{" "}
            pour mieux comprendre les marchés 1N2, double chance, Over/Under,
            BTTS et handicap.
          </p>
        </section>

        <section id="faq">
          <SectionTitle>
            Questions fréquentes sur les stratégies de paris sportifs
          </SectionTitle>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-emerald-400 transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-gray-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/[0.07] p-5 sm:p-6">
          <h2 className="text-xl font-bold text-white">
            Les paris sportifs comportent des risques
          </h2>
          <p className="mt-3 leading-7 text-gray-300">
            Les analyses et contenus de Maffo Sport sont fournis à titre
            informatif. Ils ne constituent pas une garantie de résultat ni
            une promesse de gain. Les pertes sont possibles, y compris lorsque
            les informations semblent favorables. Respecte la législation
            applicable dans ton pays et les conditions d’âge des opérateurs.
            Ne joue pas si tu es mineur et ne mise jamais l’argent nécessaire
            à tes besoins essentiels.
          </p>
        </footer>
      </article>
    </main>
  );
}
