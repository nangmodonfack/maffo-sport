import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Types de paris sportifs : guide complet pour comprendre les marchés",
  description:
    "Comprenez les principaux types de paris sportifs : victoire ou nul, double chance, Over/Under, les deux équipes marquent et handicap. Exemples, différences et limites.",
  alternates: {
    canonical: "https://sport.maffohub.com/types-de-paris-sportifs",
  },
  openGraph: {
    title: "Types de paris sportifs : le guide complet | Maffo Sport",
    description:
      "Un guide pratique pour comprendre les marchés de paris sur le football, lire les sélections et connaître leurs limites.",
    url: "https://sport.maffohub.com/types-de-paris-sportifs",
    type: "article",
    siteName: "Maffo Sport",
  },
};

const sections = [
  { id: "fonctionnement", label: "Comprendre les marchés" },
  { id: "victoire-nul", label: "Victoire ou nul" },
  { id: "double-chance", label: "Double chance" },
  { id: "over-under", label: "Over/Under" },
  { id: "btts", label: "Les deux équipes marquent" },
  { id: "handicap", label: "Handicap" },
  { id: "comparatif", label: "Tableau comparatif" },
  { id: "erreurs", label: "Erreurs à éviter" },
  { id: "faq", label: "FAQ" },
];

function ScreenshotSlot({
  number,
  title,
  description,
  src,
  alt,
}: {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1017]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-contain"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <figcaption className="border-t border-white/10 px-4 py-3">
        <p className="text-sm font-bold text-white">
          Illustration {number} — {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-zinc-400">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

function MarketCard({
  title,
  badge,
  children,
}: {
  title: string;
  badge: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:p-6">
      <div className="mb-3 inline-flex rounded-lg bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
        {badge}
      </div>
      <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
      <div className="text-sm leading-7 text-zinc-400">{children}</div>
    </article>
  );
}

const faqs = [
  {
    q: "Quels sont les principaux types de paris sportifs ?",
    a: "Parmi les marchés courants du football, on trouve le résultat du match, la double chance, le total de buts Over/Under, les deux équipes marquent et le handicap. Leur disponibilité dépend du match et du bookmaker.",
  },
  {
    q: "Quelle est la différence entre victoire ou nul et double chance ?",
    a: "Le résultat du match propose généralement trois issues : victoire à domicile, match nul ou victoire à l'extérieur. La double chance regroupe deux de ces issues dans une seule sélection, par exemple victoire à domicile ou nul.",
  },
  {
    q: "Que signifie Over 2,5 buts ?",
    a: "Over 2,5 signifie que le total des buts inscrits par les deux équipes doit être supérieur à 2,5. Il faut donc au moins trois buts pour que cette sélection soit gagnante.",
  },
  {
    q: "Que signifie Under 2,5 buts ?",
    a: "Under 2,5 signifie que le total des buts doit être inférieur à 2,5. La sélection est généralement gagnante si le match se termine avec zéro, un ou deux buts.",
  },
  {
    q: "Que signifie BTTS ou les deux équipes marquent ?",
    a: "BTTS signifie « Both Teams To Score ». La sélection Oui gagne lorsque chaque équipe marque au moins un but. La sélection Non gagne si au moins une équipe ne marque aucun but, selon les règles du marché.",
  },
  {
    q: "Comment fonctionne le handicap au football ?",
    a: "Le handicap ajoute un avantage ou un désavantage fictif à une équipe pour le règlement du pari. Il faut vérifier s'il s'agit d'un handicap européen ou asiatique, car les règles et possibilités de remboursement peuvent différer.",
  },
  {
    q: "La double chance est-elle un pari sûr ?",
    a: "Non. Elle couvre deux issues possibles sur trois dans le marché classique du résultat, mais elle peut perdre. Aucune sélection ne garantit un gain.",
  },
  {
    q: "Peut-on gagner à coup sûr avec un type de pari ?",
    a: "Non. Aucun marché ne garantit un gain. Un pari sportif comporte toujours un risque de perte, même lorsque la sélection semble plausible ou que la cote est faible.",
  },
];

export default function TypesDeParisSportifsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Types de paris sportifs : guide complet pour comprendre les marchés",
    description: metadata.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sport.maffohub.com/types-de-paris-sportifs",
    },
    publisher: {
      "@type": "Organization",
      name: "Maffo Sport",
      url: "https://sport.maffohub.com",
    },
    inLanguage: "fr",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="border-b border-white/10 bg-[#0b0e14]">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
          <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-zinc-500">
            <Link href="/" className="hover:text-green-300">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/analyses-guides" className="hover:text-green-300">
              Analyses et guides
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Types de paris sportifs</span>
          </nav>

          <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-green-400">
            Guide pratique • Football
          </div>

          <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Types de paris sportifs : comprendre les principaux marchés du
            football
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            Victoire ou nul, double chance, Over/Under, les deux équipes
            marquent et handicap : les intitulés des marchés peuvent sembler
            techniques au premier abord. Ce guide explique leur fonctionnement,
            les différences entre les sélections et les points à vérifier avant
            de lire un ticket de pari.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-2">
              Définitions simples
            </span>
            <span className="rounded-full border border-white/10 px-3 py-2">
              Exemples de scores
            </span>
            <span className="rounded-full border border-white/10 px-3 py-2">
              Tableau comparatif
            </span>
          </div>

          <p className="mt-5 text-xs leading-6 text-zinc-500">
            Les exemples de cette page sont pédagogiques. Ils ne constituent
            ni des pronostics ni une promesse de gain.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:px-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-5 lg:sticky lg:top-24">
          <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-green-300">
            Dans ce guide
          </h2>
          <nav className="space-y-3 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block leading-5 text-zinc-400 transition hover:text-green-300"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs leading-6 text-zinc-500">
              Pour approfondir l’analyse d’une rencontre, consultez également
              nos autres guides.
            </p>
            <Link
              href="/analyses-guides"
              className="mt-3 inline-flex text-sm font-bold text-green-300 hover:text-green-200"
            >
              Voir les guides →
            </Link>
          </div>
        </aside>

        <article className="min-w-0">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Quels sont les principaux types de paris sportifs ?
            </h2>
            <p className="leading-8 text-zinc-300">
              Un type de pari, aussi appelé marché, définit ce sur quoi porte
              une sélection. Certains marchés concernent l’issue du match,
              d’autres le nombre total de buts, la capacité des deux équipes à
              marquer ou un écart de score ajusté par un handicap.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              Deux sélections peuvent porter sur la même rencontre sans poser
              exactement la même question. Pour comprendre un ticket, il faut
              identifier le marché, la sélection choisie et les règles de
              règlement qui s’y appliquent.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MarketCard title="Résultat du match" badge="Issue">
                La sélection porte sur la victoire à domicile, le match nul ou
                la victoire à l’extérieur.
              </MarketCard>
              <MarketCard title="Double chance" badge="Deux issues">
                Deux résultats possibles sont regroupés dans une même
                sélection, par exemple domicile ou nul.
              </MarketCard>
              <MarketCard title="Over/Under" badge="Nombre de buts">
                Le pari porte sur un total supérieur ou inférieur à une ligne
                donnée.
              </MarketCard>
              <MarketCard title="Les deux équipes marquent" badge="BTTS">
                Le marché porte sur le fait que chaque équipe marque au moins
                un but.
              </MarketCard>
              <MarketCard title="Handicap" badge="Écart ajusté">
                Un avantage ou un désavantage fictif est appliqué au score pour
                le règlement du pari.
              </MarketCard>
            </div>
          </section>

          <section id="fonctionnement" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Comment fonctionne un marché de paris ?
            </h2>
            <p className="leading-8 text-zinc-300">
              Avant de choisir une sélection, lisez le libellé exact du marché
              et vérifiez les règles du bookmaker. Les termes peuvent se
              ressembler, mais ne portent pas toujours sur le même événement.
            </p>
            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-zinc-400 marker:font-bold marker:text-green-300">
              <li>
                <strong className="text-white">Identifier le marché :</strong>{" "}
                résultat, buts, BTTS ou handicap.
              </li>
              <li>
                <strong className="text-white">Lire la sélection :</strong>{" "}
                domicile, nul, extérieur, Over 2,5, BTTS Oui, etc.
              </li>
              <li>
                <strong className="text-white">Vérifier la ligne :</strong>{" "}
                Over 1,5 n’a pas la même condition que Over 2,5.
              </li>
              <li>
                <strong className="text-white">Lire le règlement :</strong>{" "}
                certains marchés peuvent avoir des règles particulières en cas
                de nul, de prolongation ou de match interrompu.
              </li>
            </ol>

            <ScreenshotSlot
              number="1"
              title="Les marchés disponibles sur un match"
              description="Présentation des principales catégories de marchés de paris football."
              src="/images/types-de-paris/resultat-1n2.png"
              alt="Exemple des marchés de paris sur un match de football"
            />
          </section>

          <section id="victoire-nul" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              1. Victoire ou nul : comprendre le marché du résultat
            </h2>
            <p className="leading-8 text-zinc-300">
              Le marché classique du résultat du match est souvent désigné par
              « 1N2 ». Le chiffre 1 correspond à la victoire de l’équipe à
              domicile, N au match nul et 2 à la victoire de l’équipe à
              l’extérieur. Dans ce marché, les trois issues sont séparées.
            </p>

            <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[450px] text-left text-sm">
                <thead className="bg-white/5 text-zinc-300">
                  <tr>
                    <th className="p-4">Code</th>
                    <th className="p-4">Signification</th>
                    <th className="p-4">Exemple</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-400">
                  <tr>
                    <td className="p-4 font-bold text-green-300">1</td>
                    <td className="p-4">Victoire à domicile</td>
                    <td className="p-4">L’équipe qui reçoit gagne 2–0</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-green-300">N</td>
                    <td className="p-4">Match nul</td>
                    <td className="p-4">La rencontre se termine 1–1</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-green-300">2</td>
                    <td className="p-4">Victoire à l’extérieur</td>
                    <td className="p-4">L’équipe visiteuse gagne 0–1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-8 text-zinc-400">
              Une sélection « victoire à domicile » perd normalement si le
              match se termine par un nul. Une sélection « victoire ou nul à
              domicile » couvre deux issues et relève de la double chance.
            </p>

            <ScreenshotSlot
              number="2"
              title="Le marché 1N2"
              description="Les trois issues possibles du résultat du match."
              src="/images/types-de-paris/cotes-1n2.png"
              alt="Exemple du marché 1N2 avec domicile, nul et extérieur"
            />
          </section>

          <section id="double-chance" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              2. La double chance : 1X, X2 et 12
            </h2>
            <p className="leading-8 text-zinc-300">
              La double chance regroupe deux des trois issues possibles du
              marché du résultat. Elle ne signifie pas que le pari est certain :
              une des issues non couvertes peut toujours se produire.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <MarketCard title="1X" badge="Domicile ou nul">
                La sélection est gagnante si l’équipe à domicile gagne ou si la
                rencontre se termine par un nul.
              </MarketCard>
              <MarketCard title="X2" badge="Nul ou extérieur">
                La sélection est gagnante si le match est nul ou si l’équipe à
                l’extérieur gagne.
              </MarketCard>
              <MarketCard title="12" badge="Une équipe gagne">
                La sélection est gagnante si l’une des deux équipes remporte le
                match. Elle perd si le résultat est un nul.
              </MarketCard>
            </div>

            <h3 className="mt-7 text-xl font-bold">Exemple simple</h3>
            <p className="mt-3 leading-8 text-zinc-400">
              Imaginons un match entre Club A et Club B. Une sélection 1X couvre
              la victoire du Club A et le nul. Si Club B gagne, la sélection
              échoue. La double chance couvre plusieurs issues, mais pas toutes.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              La cote proposée dépend notamment de l’évaluation du risque par
              le bookmaker. Couvrir deux issues ne permet pas de conclure qu’une
              sélection est rentable ou adaptée à chaque rencontre.
            </p>

            <ScreenshotSlot
              number="3"
              title="Les options de double chance"
              description="Présentation des sélections 1X, X2 et 12."
              src="/images/types-de-paris/double-chance.png"
              alt="Exemple du marché de double chance 1X, X2 et 12"
            />
          </section>

          <section id="over-under" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              3. Over/Under : parier sur le total de buts
            </h2>
            <p className="leading-8 text-zinc-300">
              Over/Under est un marché portant sur le total d’un événement
              pendant une rencontre. Au football, il concerne souvent le nombre
              total de buts inscrits par les deux équipes. « Over » signifie
              au-dessus de la ligne ; « Under » signifie en dessous.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              Une ligne de 2,5 buts permet de comprendre facilement la
              différence : il faut au moins trois buts pour dépasser cette
              ligne.
            </p>

            <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-white/5 text-zinc-300">
                  <tr>
                    <th className="p-4">Sélection</th>
                    <th className="p-4">Condition habituelle</th>
                    <th className="p-4">Scores illustratifs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-400">
                  <tr>
                    <td className="p-4 font-bold text-green-300">Over 1,5</td>
                    <td className="p-4">Au moins 2 buts</td>
                    <td className="p-4">1–1, 2–0, 2–1</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-green-300">Under 1,5</td>
                    <td className="p-4">0 ou 1 but</td>
                    <td className="p-4">0–0, 1–0, 0–1</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-green-300">Over 2,5</td>
                    <td className="p-4">Au moins 3 buts</td>
                    <td className="p-4">2–1, 3–0, 2–2</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-green-300">Under 2,5</td>
                    <td className="p-4">0, 1 ou 2 buts</td>
                    <td className="p-4">0–0, 1–0, 1–1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-7 text-xl font-bold">
              Pourquoi la ligne compte-t-elle autant ?
            </h3>
            <p className="mt-3 leading-8 text-zinc-400">
              Over 1,5 et Over 2,5 n’ont pas la même condition. Un score de 1–1
              atteint le seuil d’Over 1,5, mais pas celui d’Over 2,5. Il faut
              donc lire le chiffre qui accompagne Over ou Under.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              Certains bookmakers proposent également des totaux pour une
              équipe, une mi-temps, les corners ou les cartons. Les règles
              diffèrent selon le marché : vérifiez toujours l’intitulé exact.
            </p>

            <ScreenshotSlot
              number="4"
              title="Le marché Over/Under"
              description="Exemple des lignes de total de buts."
              src="/images/types-de-paris/over-under.png"
              alt="Exemple du marché Over/Under sur le total de buts"
            />
          </section>

          <section id="btts" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              4. Les deux équipes marquent : BTTS Oui ou Non
            </h2>
            <p className="leading-8 text-zinc-300">
              BTTS vient de l’expression anglaise « Both Teams To Score ». Ce
              marché porte sur le fait que les deux équipes inscrivent ou non
              au moins un but, pas directement sur le vainqueur du match.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MarketCard title="BTTS — Oui" badge="Chaque équipe marque">
                Un score de 1–1, 2–1 ou 2–2 répond à la condition, puisque les
                deux équipes ont inscrit au moins un but.
              </MarketCard>
              <MarketCard title="BTTS — Non" badge="Au moins une équipe muette">
                Un score de 0–0, 1–0 ou 0–2 répond à la condition, car au moins
                une équipe n’a pas marqué.
              </MarketCard>
            </div>

            <p className="mt-5 leading-8 text-zinc-400">
              Une sélection BTTS Oui peut être gagnante même si une équipe
              perd. Un résultat de 2–1 répond à cette condition, alors que le
              marché du résultat pose une question différente.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              Les buts marqués et encaissés, les performances à domicile et à
              l’extérieur ainsi que les absences connues donnent du contexte.
              Ces informations ne permettent toutefois pas de prédire avec
              certitude le prochain score.
            </p>

            <ScreenshotSlot
              number="5"
              title="Les deux équipes marquent"
              description="Présentation des options Oui et Non."
              src="/images/types-de-paris/btts.png"
              alt="Exemple du marché BTTS Oui ou Non au football"
            />
          </section>

          <section id="handicap" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              5. Le handicap : européen et asiatique
            </h2>
            <p className="leading-8 text-zinc-300">
              Le handicap ajuste fictivement le score d’une équipe pour le
              règlement du pari. Il permet de proposer des sélections autour
              d’un écart de buts, mais ne désigne pas une seule règle universelle.
            </p>

            <h3 className="mt-6 text-xl font-bold">Le handicap européen</h3>
            <p className="mt-3 leading-8 text-zinc-400">
              Le handicap européen ajoute un avantage ou un désavantage
              déterminé au score retenu pour le marché. Il propose généralement
              trois issues qui tiennent compte du score ajusté, y compris une
              possibilité de nul selon la ligne proposée.
            </p>

            <h3 className="mt-6 text-xl font-bold">Le handicap asiatique</h3>
            <p className="mt-3 leading-8 text-zinc-400">
              Le handicap asiatique utilise des lignes qui peuvent supprimer
              l’issue du nul ou prévoir un remboursement dans certaines
              situations. Les handicaps entiers et les quarts de but peuvent
              avoir des règles de règlement différentes.
            </p>

            <div className="my-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <h3 className="font-bold text-yellow-200">Point de vigilance</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Vérifiez le type de handicap, la ligne, le score pris en compte
                et les règles de remboursement ou de demi-gain et demi-perte
                lorsqu’elles existent.
              </p>
            </div>

            <ScreenshotSlot
              number="6"
              title="Le marché handicap"
              description="Exemple d’un marché handicap européen ou asiatique."
              src="/images/types-de-paris/handicap.png"
              alt="Exemple d’un marché de handicap au football"
            />
          </section>

          <section id="comparatif" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Tableau comparatif des types de paris
            </h2>
            <p className="mb-5 leading-8 text-zinc-400">
              Ce tableau résume la question à laquelle répond chaque marché.
              Il sert à comprendre le vocabulaire, pas à déterminer le pari qui
              serait le plus rentable.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-white/5 text-zinc-300">
                  <tr>
                    <th className="p-4">Marché</th>
                    <th className="p-4">Question posée</th>
                    <th className="p-4">Exemple de sélection</th>
                    <th className="p-4">À vérifier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-400">
                  <tr>
                    <td className="p-4 font-bold text-white">Résultat 1N2</td>
                    <td className="p-4">Qui gagne, ou le match est-il nul ?</td>
                    <td className="p-4">1, N ou 2</td>
                    <td className="p-4">Issue du match retenue</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Double chance</td>
                    <td className="p-4">Quelles deux issues sont couvertes ?</td>
                    <td className="p-4">1X, X2 ou 12</td>
                    <td className="p-4">Issue exclue</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Over/Under</td>
                    <td className="p-4">Le total dépasse-t-il la ligne ?</td>
                    <td className="p-4">Over 2,5</td>
                    <td className="p-4">Ligne et période concernée</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">BTTS</td>
                    <td className="p-4">Les deux équipes marquent-elles ?</td>
                    <td className="p-4">Oui ou Non</td>
                    <td className="p-4">But de chaque équipe</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Handicap</td>
                    <td className="p-4">Quel résultat après ajustement ?</td>
                    <td className="p-4">Handicap -1</td>
                    <td className="p-4">Type de handicap et règlement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="erreurs" className="mb-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Les erreurs à éviter lorsqu’on découvre les marchés
            </h2>

            <div className="space-y-4">
              {[
                [
                  "Confondre résultat et double chance",
                  "Une victoire simple ne couvre pas le nul. Une double chance peut le couvrir selon la sélection choisie.",
                ],
                [
                  "Oublier la ligne Over/Under",
                  "Over 1,5 et Over 2,5 n’ont pas la même condition. Il faut lire le chiffre avant de valider.",
                ],
                [
                  "Penser que BTTS Oui désigne un vainqueur",
                  "Ce marché concerne les buts des deux équipes, pas directement le vainqueur de la rencontre.",
                ],
                [
                  "Mélanger handicap européen et asiatique",
                  "Le règlement peut différer, notamment concernant le nul, le remboursement et les quarts de but.",
                ],
                [
                  "Considérer une sélection comme garantie",
                  "Une cote faible, une série récente ou un favori ne suppriment jamais le risque de perte.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-2xl border border-green-400/20 bg-green-400/[0.05] p-6 md:p-8">
            <h2 className="text-2xl font-black">
              Continuer avec les guides Maffo Sport
            </h2>
            <p className="mt-3 leading-8 text-zinc-400">
              Comprendre un marché n’est qu’une partie de l’analyse d’un match.
              Les statistiques, la forme récente, les absences et le contexte
              doivent être interprétés avec prudence. Aucun indicateur ne
              garantit le résultat d’une rencontre.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/analyses-guides"
                className="rounded-xl bg-green-400 px-5 py-3 text-center text-sm font-black text-black transition hover:bg-green-300"
              >
                Lire les analyses et guides
              </Link>
              <Link
                href="/bookmakers"
                className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/5"
              >
                Consulter la page bookmakers
              </Link>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="mb-6 text-2xl font-black md:text-3xl">
              FAQ : les types de paris sportifs
            </h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <summary className="cursor-pointer list-none pr-6 font-bold leading-7 text-white marker:hidden">
                    {item.q}
                    <span className="float-right text-green-300 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-white/10 pt-6">
            <h2 className="text-lg font-black">Jeu responsable</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Les paris sportifs comportent un risque de perte financière.
              Aucun marché ne garantit un gain. Réservez-les aux personnes
              majeures, respectez les lois applicables dans votre pays et ne
              misez jamais de l’argent nécessaire à vos dépenses essentielles.
              En cas de perte de contrôle, faites une pause et recherchez une
              aide adaptée.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
