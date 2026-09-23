"use client";

import NewsletterForm from "./components/NewsletterForm";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Flame,
  Trophy,
  Zap,
  RefreshCw,
  Radio,
  Send,
} from "lucide-react";

type MatchStatus = "À venir" | "Direct" | "Terminé";

type Match = {
  id: number;
  league: string;
  home: string;
  away: string;
  time: string;
  status: MatchStatus;
  homeLogo?: string;
  awayLogo?: string;
  homeScore?: number | null;
  awayScore?: number | null;
};

const leagueIds: Record<string, number> = {
  "Premier League": 39,
  "La Liga": 140,
  "Ligue 1": 61,
  "Serie A": 135,
  Bundesliga: 78,
  "Champions League": 2,
  "Europa League": 3,
  "Ligue des champions CAF": 12,
};

const demoMatches: Match[] = [
  {
    id: 1,
    league: "Premier League",
    home: "Arsenal",
    away: "Chelsea",
    time: "18:30",
    status: "À venir",
  },
  {
    id: 2,
    league: "La Liga",
    home: "Real Madrid",
    away: "Barcelona",
    time: "21:00",
    status: "À venir",
  },
  {
    id: 3,
    league: "Ligue 1",
    home: "PSG",
    away: "Marseille",
    time: "20:45",
    status: "À venir",
  },
];

const evergreenArticles = [
  {
    category: "Analyse",
    title: "Comment analyser une équipe avant un match de football ?",
    description:
      "Forme récente, absences, calendrier, statistiques et contexte : les éléments à regarder avant une rencontre.",
    image: "/images/home/analyse-1.jpg",
  },
  {
    category: "Guide football",
    title: "Comprendre les principales statistiques du football",
    description:
      "Possession, tirs cadrés, buts attendus, efficacité offensive et autres indicateurs utiles.",
    image: "/images/home/analyse-2.jpg",
  },
  {
    category: "Guide",
    title: "Comment lire les statistiques d'un match ?",
    description:
      "Les chiffres permettent de mieux comprendre le déroulement d'une rencontre et les performances des équipes.",
    image: "/images/home/analyse-3.jpg",
  },
];

const bettingArticles = [
  {
    category: "Types de paris",
    title: "1N2, double chance, Over/Under : comprendre les bases",
    description:
      "Les principaux marchés de paris sportifs expliqués simplement.",
  },
  {
    category: "Stratégie",
    title: "Comment analyser les cotes d'un match ?",
    description:
      "Comprendre ce que représentent les cotes et les informations qu'elles peuvent contenir.",
  },
  {
    category: "Guide",
    title: "Comment construire une analyse avant un pari sportif ?",
    description:
      "Forme, statistiques, contexte et informations disponibles avant de faire une sélection.",
  },
];

const news = [
  [
    "Football",
    "Les informations importantes à retenir avant les prochains grands rendez-vous",
    "Actualité",
    "/images/home/actualite.jpg",
  ],
  [
    "Mercato",
    "Les principaux mouvements et informations du marché des transferts",
    "Actualité",
    "/images/home/mercato.jpg",
  ],
  [
    "Compétitions",
    "Les affiches et enjeux à suivre cette semaine",
    "Actualité",
    "/images/home/competitions.jpg",
  ],
];

const africanFootball = [
  {
    title: "Les joueurs africains à suivre cette saison",
    image: "/images/home/afrique-1.jpg",
  },
  {
    title: "Les grandes compétitions africaines expliquées",
    image: "/images/home/afrique-2.jpg",
  },
  {
    title: "Les clubs africains et leurs performances",
    image: "/images/home/afrique-3.jpg",
  },
];

function todayDouala() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Douala",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Douala",
  }).format(new Date(date));
}

function statusOf(short: string): MatchStatus {
  if (
    ["1H", "2H", "HT", "ET", "P", "BT", "LIVE"].includes(short)
  ) {
    return "Direct";
  }

  if (
    ["FT", "AET", "PEN", "CANC", "PST", "ABD", "AWD", "WO"].includes(short)
  ) {
    return "Terminé";
  }

  return "À venir";
}

function ImagePlaceholder({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  );
}

function TeamBadge({
  logo,
  name,
}: {
  logo?: string;
  name: string;
}) {
  if (logo) {
    return (
      <img
        src={logo}
        alt=""
        className="w-10 h-10 object-contain mx-auto"
      />
    );
  }

  return (
    <div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center font-black">
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">
          {eyebrow}
        </div>

        <h2 className="text-2xl md:text-3xl font-black mt-1">
          {title}
        </h2>
      </div>

      {href && (
        <a
          href={href}
          className="hidden sm:flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
        >
          Tout voir <ArrowRight size={15} />
        </a>
      )}
    </div>
  );
}

function MatchCard({ m }: { m: Match }) {
  return (
    <div className="glass card-hover rounded-2xl p-4 min-w-[260px] snap-start">
      <div className="flex justify-between text-[11px] text-zinc-500 mb-4">
        <span>{m.league}</span>

        <span
          className={
            m.status === "Direct"
              ? "text-red-400"
              : "text-zinc-500"
          }
        >
          {m.status}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="text-center flex-1">
          <TeamBadge logo={m.homeLogo} name={m.home} />

          <div className="text-sm mt-2 font-semibold">
            {m.home}
          </div>
        </div>

        <div className="text-center min-w-14">
          <div className="font-black text-lg">
            {m.status === "À venir"
              ? m.time
              : `${m.homeScore ?? 0} - ${m.awayScore ?? 0}`}
          </div>

          <div className="text-[10px] text-zinc-500 mt-1">
            {m.status === "Direct"
              ? "En direct"
              : m.status === "Terminé"
              ? "Terminé"
              : "Aujourd’hui"}
          </div>
        </div>

        <div className="text-center flex-1">
          <TeamBadge logo={m.awayLogo} name={m.away} />

          <div className="text-sm mt-2 font-semibold">
            {m.away}
          </div>
        </div>
      </div>

      <a
        href="#analyses"
        className="mt-4 block text-center text-xs text-green-400 hover:text-green-300"
      >
        Voir l’analyse →
      </a>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] =
    useState<"Tous" | "À venir" | "Direct" | "Terminé">("Tous");

  const [matches, setMatches] =
    useState<Match[]>(demoMatches);

  const [apiOnline, setApiOnline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  async function loadData() {
    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(
        `/api/fixtures?date=${todayDouala()}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(
          "API-Football non configurée ou indisponible."
        );
      }

      const data = await response.json();

      const allowed = new Set(Object.keys(leagueIds));

      const realMatches: Match[] = (
        data.fixtures || []
      )
        .filter((fixture: any) =>
          allowed.has(fixture.league?.name)
        )
        .map((fixture: any) => ({
          id: fixture.fixture.id,
          league: fixture.league.name,
          home: fixture.teams.home.name,
          away: fixture.teams.away.name,
          time: formatTime(fixture.fixture.date),
          status: statusOf(fixture.fixture.status.short),
          homeLogo: fixture.teams.home.logo,
          awayLogo: fixture.teams.away.logo,
          homeScore: fixture.goals.home,
          awayScore: fixture.goals.away,
        }));

      setMatches(realMatches);
      setApiOnline(true);
    } catch (error) {
      setApiOnline(false);
      setApiError(
        error instanceof Error
          ? error.message
          : "Erreur API"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const filtered = useMemo(() => {
    if (filter === "Tous") return matches;

    return matches.filter(
      (match) => match.status === filter
    );
  }, [filter, matches]);

  const finishedMatches = matches.filter(
    (match) => match.status === "Terminé"
  );

  return (
    <div className="min-h-screen">
      <main>
        {/* =========================
            1. À LA UNE
        ========================== */}
        <section className="hero-grid border-b border-white/10">
          <div className="container-x py-10 md:py-16 grid lg:grid-cols-[1.35fr_.65fr] gap-5">
            <article className="relative overflow-hidden rounded-3xl min-h-[390px] border border-white/10">
              <ImagePlaceholder
                src="/images/home/hero.jpg"
                alt="Actualité sportive"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-6 md:p-9 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
                  <Flame size={15} />
                  À la une
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
                  Toute l’actualité sportive, les analyses et les rendez-vous à ne pas manquer
                </h1>

                <p className="text-zinc-300 mt-3 max-w-2xl">
                  Un regard clair sur le football, les grandes compétitions,
                  les statistiques et les paris sportifs.
                </p>

                <a
                  href="#actus"
                  className="inline-flex items-center mt-5 bg-green-500 text-black font-bold px-5 py-3 rounded-xl hover:bg-green-400 transition"
                >
                  Voir les actualités
                  <ArrowRight className="ml-1" size={17} />
                </a>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
             {[
  [
    "Analyse",
    "Les clés pour comprendre les grands matchs",
    "/images/home/analyse-match.jpg",
    "/articles/comment-analyser-un-match-de-football",
  ],
  [
    "Guide",
    "Les statistiques à connaître au football",
    "/images/home/statistiques.jpg",
    "#analyses",
  ],
  [
    "Paris sportifs",
    "Comprendre les principaux marchés de paris",
    "/images/home/paris-sportifs.jpg",
    "#analyses",
  ],
].map(([cat, title, image, link]) => (
  <a
    key={title}
    href={link}
    className="glass rounded-2xl overflow-hidden card-hover block"
  >
    <div className="h-28">
      <ImagePlaceholder
        src={image}
        alt={title}
      />
    </div>

    <div className="p-4">
      <div className="text-xs text-green-400 font-bold uppercase">
        {cat}
      </div>

      <h3 className="font-bold mt-1 leading-snug">
        {title}
      </h3>

      <span className="text-xs text-zinc-500 mt-2 inline-block">
        Lire →
      </span>
    </div>
  </a>
))}
            </div>
          </div>
        </section>

        {/* =========================
            2. MATCHS AUTOMATIQUES
        ========================== */}
        <section
          id="calendrier"
          className="container-x py-10"
        >
          <SectionTitle
            eyebrow="Aujourd’hui"
            title="Matchs à suivre"
            href="#resultats"
          />

          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {(
                ["Tous", "À venir", "Direct", "Terminé"] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border ${
                    filter === item
                      ? "bg-green-500 text-black border-green-500"
                      : "border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={loadData}
              className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
              title="Actualiser"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
            </button>
          </div>

          {!apiOnline && (
            <div className="mb-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3 text-xs text-yellow-200">
              Mode démonstration. Les données réelles apparaîtront
              lorsque l’API-Football sera disponible.
              {apiError && ` ${apiError}`}
            </div>
          )}

          {apiOnline && (
            <div className="mb-4 text-xs text-zinc-500 flex items-center gap-2">
              <Radio size={13} className="text-green-400" />
              Données fournies par API-Football • mises en cache côté serveur
            </div>
          )}

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x scrollbar-hide">
            {filtered.length > 0 ? (
              filtered.map((match) => (
                <MatchCard
                  key={match.id}
                  m={match}
                />
              ))
            ) : (
              <div className="glass rounded-2xl p-6 text-sm text-zinc-500">
                Aucun match correspondant pour aujourd’hui.
              </div>
            )}
          </div>
        </section>

        {/* =========================
            3. ANALYSES & GUIDES
        ========================== */}
        <section
          id="analyses"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="Evergreen"
              title="Analyses & guides"
            />

            <div className="grid md:grid-cols-3 gap-5">
              {evergreenArticles.map((article) => (
                <article
                  key={article.title}
                  className="glass rounded-2xl overflow-hidden card-hover"
                >
                  <div className="h-40">
                    <ImagePlaceholder
                      src={article.image}
                      alt={article.title}
                    />
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-green-400 font-bold uppercase">
                      {article.category}
                    </div>

                    <h3 className="font-black text-xl mt-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-2 leading-6">
                      {article.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-bold mt-5"
                    >
                      Lire la suite
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            4. PARIS SPORTIFS
        ========================== */}
        <section
          id="paris"
          className="container-x py-12"
        >
          <SectionTitle
            eyebrow="Guides & analyses"
            title="Paris sportifs"
          />

          <div className="grid md:grid-cols-3 gap-5">
            {bettingArticles.map((article) => (
              <article
                key={article.title}
                className="glass rounded-2xl p-5 card-hover"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs text-zinc-500">
                    {article.category}
                  </span>

                  <Zap
                    size={17}
                    className="text-green-400"
                  />
                </div>

                <h3 className="font-black text-lg mt-4">
                  {article.title}
                </h3>

                <p className="text-sm text-zinc-400 mt-3 leading-6">
                  {article.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-green-400"
                >
                  Lire le guide
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="text-[11px] text-zinc-600 mt-5">
            Accès strictement interdit aux mineurs • Jouez de manière
            responsable. Les pronostics ne garantissent aucun gain.
          </p>
        </section>

        {/* =========================
            5. ACTUALITÉS
        ========================== */}
        <section
          id="actus"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="À ne pas manquer"
              title="Dernières actualités"
            />

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {news.map(
                  ([category, title, label, image], index) => (
                    <article
                      key={title}
                      className={`glass rounded-2xl overflow-hidden card-hover ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div
                        className={
                          index === 0 ? "h-52" : "h-36"
                        }
                      >
                        <ImagePlaceholder
                          src={image}
                          alt={title}
                        />
                      </div>

                      <div className="p-5">
                        <div className="text-xs text-green-400 font-bold uppercase">
                          {category}
                        </div>

                        <h3 className="font-black text-lg mt-1">
                          {title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-zinc-500 mt-3">
                          <Clock3 size={13} />
                          {label}
                        </div>
                      </div>
                    </article>
                  )
                )}
              </div>

              <aside className="glass rounded-2xl p-5 h-fit">
                <div className="flex items-center gap-2 font-black">
                  <Trophy
                    size={18}
                    className="text-green-400"
                  />
                  À suivre
                </div>

                <div className="mt-4 space-y-1">
                  {Object.keys(leagueIds)
                    .slice(0, 6)
                    .map((league) => (
                      <a
                        href="#calendrier"
                        key={league}
                        className="flex justify-between p-3 rounded-xl hover:bg-white/5"
                      >
                        <span>{league}</span>

                        <ChevronRight
                          size={16}
                          className="text-zinc-600"
                        />
                      </a>
                    ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =========================
            6. FOOTBALL AFRICAIN
        ========================== */}
        <section
          id="football"
          className="container-x py-12"
        >
          <SectionTitle
            eyebrow="Focus"
            title="Football africain"
          />

          <div className="grid md:grid-cols-3 gap-5">
            {africanFootball.map((article) => (
              <article
                key={article.title}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-36">
                  <ImagePlaceholder
                    src={article.image}
                    alt={article.title}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-black">
                    {article.title}
                  </h3>

                  <a
                    href="#"
                    className="text-sm text-green-400 inline-block mt-3"
                  >
                    Découvrir →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            7. RÉSULTATS AUTOMATIQUES
        ========================== */}
        <section
          id="resultats"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="Scores"
              title="Résultats"
            />

            <div className="glass rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-white/10 font-black">
                Derniers résultats
              </div>

              {finishedMatches.length > 0 ? (
                finishedMatches
                  .slice(0, 8)
                  .map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between px-5 py-4 border-b border-white/5"
                    >
                      <div>
                        <div className="text-xs text-zinc-500">
                          {match.league}
                        </div>

                        <div className="font-semibold mt-1">
                          {match.home} — {match.away}
                        </div>
                      </div>

                      <div className="font-black">
                        {match.homeScore ?? 0} -{" "}
                        {match.awayScore ?? 0}
                      </div>
                    </div>
                  ))
              ) : (
                <div className="p-5 text-sm text-zinc-500">
                  Les résultats apparaîtront automatiquement
                  après les rencontres.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================
            8. TELEGRAM
        ========================== */}
        <section className="container-x py-12">
          <div className="rounded-3xl border border-green-400/20 bg-gradient-to-r from-green-500/10 to-transparent p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <Send size={16} />
                Maffo Sport
              </div>

              <h2 className="text-2xl md:text-3xl font-black mt-2">
                Les infos et analyses directement sur Telegram
              </h2>

              <p className="text-zinc-400 mt-2">
                Actualités, analyses et pronostics sélectionnés.
              </p>
            </div>

            <a
              href="https://t.me/maffoparissportifs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black font-black px-6 py-3 rounded-xl text-center hover:bg-green-400 transition"
            >
              Rejoindre Telegram
            </a>
          </div>
        </section>

        {/* =========================
            9. NEWSLETTER
        ========================== */}
        <section className="container-x pb-14">
          <div className="glass rounded-3xl p-7 md:p-9 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                Newsletter
              </div>

              <h2 className="text-2xl font-black mt-2">
                Recevez l’essentiel du sport
              </h2>

              <p className="text-zinc-400 mt-1">
                Un résumé des informations importantes, sans spam.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </section>
      </main>
    </div>
  );
}
