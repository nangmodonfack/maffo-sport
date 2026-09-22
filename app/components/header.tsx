"use client";
import NewsletterForm from "./components/NewsletterForm";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  ChevronRight,
  Clock3,
  Flame,
  Menu,
  Search,
  Trophy,
  X,
  Zap,
  RefreshCw,
  Radio,
  Facebook,
  Youtube,
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
  },
  {
    category: "Guide football",
    title: "Comprendre les principales statistiques du football",
    description:
      "Possession, tirs cadrés, buts attendus, efficacité offensive et autres indicateurs utiles.",
  },
  {
    category: "Guide",
    title: "Comment lire les statistiques d'un match ?",
    description:
      "Les chiffres permettent de mieux comprendre le déroulement d'une rencontre et les performances des équipes.",
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
  ],
  [
    "Mercato",
    "Les principaux mouvements et informations du marché des transferts",
    "Actualité",
  ],
  [
    "Compétitions",
    "Les affiches et enjeux à suivre cette semaine",
    "Actualité",
  ],
];

const africanFootball = [
  "Les joueurs africains à suivre cette saison",
  "Les grandes compétitions africaines expliquées",
  "Les clubs africains et leurs performances",
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
  label = "Votre photo",
}: {
  label?: string;
}) {
  return (
    <div className="h-full min-h-32 w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center text-zinc-500 text-sm">
      {label}
    </div>
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

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#07090d]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-x h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-black text-xl tracking-tight"
        >
          MAFFO <span className="text-green-400">SPORT</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <a href="/" className="text-green-400">
            Accueil
          </a>

          <a href="#actus">Actualités</a>

          {/* FOOTBALL - MENU DÉROULANT */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              Football <ChevronDown size={14} />
            </button>

            <div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-56">
              {[
                "Actualités football",
                "Guides football",
                "Compétitions",
                "Équipes & joueurs",
                "Records & histoire",
                "Football africain",
              ].map((item) => (
                <a
                  key={item}
                  href="#football"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* PARIS SPORTIFS - MENU DÉROULANT */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              Paris sportifs <ChevronDown size={14} />
            </button>

            <div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-56">
              {[
                "Pronostics",
                "Guides paris sportifs",
                "Types de paris",
                "Stratégies & conseils",
                "Bookmakers",
                "Comparatifs",
              ].map((item) => (
                <a
                  key={item}
                  href="#paris"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a href="#analyses">Analyses</a>
          <a href="#resultats">Résultats</a>
          <a href="#calendrier">Calendrier</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearch(!search)}
            aria-label="Recherche"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <Search size={19} />
          </button>

          <button
            className="p-2 rounded-lg hover:bg-white/10 hidden sm:block"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-white/10 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-white/10">
          <div className="container-x py-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-zinc-500"
                size={18}
              />

              <input
                autoFocus
                placeholder="Rechercher une actualité, une équipe..."
                className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 outline-none focus:border-green-400/50"
              />
            </div>
          </div>
        </div>
      )}

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-[#090c12] px-4 py-4 space-y-1">
          {[
            ["Actualités", "#actus"],
            ["Football", "#football"],
            ["Paris sportifs", "#paris"],
            ["Analyses", "#analyses"],
            ["Résultats", "#resultats"],
            ["Calendrier", "#calendrier"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-white/5"
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
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
      <Header />
