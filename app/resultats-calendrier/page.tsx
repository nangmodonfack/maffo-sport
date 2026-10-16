"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  RefreshCw,
  Radio,
  Trophy,
  AlertCircle,
} from "lucide-react";

type MatchStatus =
  | "À venir"
  | "Direct"
  | "Terminé"
  | "Statut à confirmer"
  | "Reporté"
  | "Annulé"
  | "Suspendu"
  | "Interrompu";

type Match = {
  id: number;
  league: string;
  country: string;
  home: string;
  away: string;
  date: string;
  time: string;
  status: MatchStatus;
  statusShort: string;
  statusLong: string;
  homeLogo?: string;
  awayLogo?: string;
  homeScore: number | null;
  awayScore: number | null;
};

type Fixture = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      long: string;
    };
  };
  league: {
    name: string;
    country?: string;
  };
  teams: {
    home: {
      name: string;
      logo?: string;
    };
    away: {
      name: string;
      logo?: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

type Tab = "calendrier" | "resultats";

type MatchFilter =
  | "À venir"
  | "Direct"
  | "Terminé"
  | "Statut à confirmer";

const LIVE_STATUSES = [
  "1H",
  "2H",
  "HT",
  "ET",
  "P",
  "BT",
  "LIVE",
  "INT",
];

const FINISHED_STATUSES = ["FT", "AET", "PEN"];
const POSTPONED_STATUSES = ["PST"];
const CANCELLED_STATUSES = ["CANC"];
const SUSPENDED_STATUSES = ["SUSP"];
const INTERRUPTED_STATUSES = ["ABD"];
const NOT_STARTED_STATUSES = ["NS", "TBD"];

const UNCERTAIN_STATUSES: MatchStatus[] = [
  "Statut à confirmer",
  "Reporté",
  "Annulé",
  "Suspendu",
  "Interrompu",
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Douala",
  }).format(new Date(date));
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Douala",
  }).format(new Date(date));
}

function getMatchStatus(
  short: string,
  date: string
): MatchStatus {
  const code = (short || "").toUpperCase();
  const kickoff = new Date(date).getTime();
  const now = Date.now();

  if (LIVE_STATUSES.includes(code)) {
    return "Direct";
  }

  if (FINISHED_STATUSES.includes(code)) {
    return "Terminé";
  }

  if (POSTPONED_STATUSES.includes(code)) {
    return "Reporté";
  }

  if (CANCELLED_STATUSES.includes(code)) {
    return "Annulé";
  }

  if (SUSPENDED_STATUSES.includes(code)) {
    return "Suspendu";
  }

  if (INTERRUPTED_STATUSES.includes(code)) {
    return "Interrompu";
  }

  if (NOT_STARTED_STATUSES.includes(code)) {
    if (Number.isNaN(kickoff)) {
      return "Statut à confirmer";
    }

    return kickoff > now ? "À venir" : "Statut à confirmer";
  }

  return "Statut à confirmer";
}

function TeamLogo({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) {
  if (logo) {
    return (
      <img
        src={logo}
        alt=""
        loading="lazy"
        className="h-11 w-11 object-contain"
      />
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-sm font-black">
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function StatusBadge({ status }: { status: MatchStatus }) {
  const styles: Record<MatchStatus, string> = {
    "À venir": "bg-green-500/10 text-green-400",
    Direct: "bg-red-500/10 text-red-400",
    Terminé: "bg-zinc-500/10 text-zinc-400",
    "Statut à confirmer": "bg-amber-500/10 text-amber-300",
    Reporté: "bg-amber-500/10 text-amber-300",
    Annulé: "bg-zinc-500/10 text-zinc-400",
    Suspendu: "bg-orange-500/10 text-orange-300",
    Interrompu: "bg-orange-500/10 text-orange-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${styles[status]}`}
    >
      {status === "Direct" && <span>●</span>}
      {status.toUpperCase()}
    </span>
  );
}

function MatchRow({ match }: { match: Match }) {
  const showScore =
    match.status === "Terminé" || match.status === "Direct";

  return (
    <article className="border-b border-white/5 px-4 py-5 last:border-b-0 sm:px-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-sm font-bold text-zinc-200">
            {match.league}
          </div>

          {match.country && (
            <div className="mt-1 text-xs text-zinc-500">
              {match.country}
            </div>
          )}
        </div>

        <StatusBadge status={match.status} />
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
        <div className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row sm:justify-end">
          <span className="order-2 text-sm font-semibold leading-5 sm:order-1 sm:text-right">
            {match.home}
          </span>

          <div className="order-1 flex h-12 w-12 shrink-0 items-center justify-center sm:order-2">
            <TeamLogo name={match.home} logo={match.homeLogo} />
          </div>
        </div>

        <div className="min-w-[76px] text-center">
          {showScore ? (
            <div className="text-xl font-black sm:text-2xl">
              {match.homeScore ?? "–"} - {match.awayScore ?? "–"}
            </div>
          ) : (
            <div className="text-xl font-black">{match.time}</div>
          )}

          <div className="mt-1 text-[10px] text-zinc-500">
            {match.status === "Direct"
              ? match.statusLong
              : match.status === "Terminé"
              ? "Score final"
              : match.status === "Statut à confirmer"
              ? "Information indisponible"
              : match.status === "Reporté"
              ? "Nouvelle date à vérifier"
              : match.status === "Annulé"
              ? "Rencontre annulée"
              : match.status === "Suspendu"
              ? "Rencontre suspendue"
              : match.status === "Interrompu"
              ? "Rencontre interrompue"
              : "Heure locale"}
          </div>
        </div>

        <div className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row sm:justify-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center">
            <TeamLogo name={match.away} logo={match.awayLogo} />
          </div>

          <span className="text-sm font-semibold leading-5 sm:text-left">
            {match.away}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
        <CalendarDays size={13} />
        {formatDate(match.date)}
        <span>•</span>
        <Clock3 size={13} />
        {match.time}
      </div>
    </article>
  );
}

export default function ResultatsCalendrierPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [tab, setTab] = useState<Tab>("calendrier");
  const [matchFilter, setMatchFilter] =
    useState<MatchFilter>("À venir");
  const [competition, setCompetition] = useState("Toutes");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/fixtures", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Impossible de récupérer les rencontres."
        );
      }

      const fixtures: Fixture[] = Array.isArray(data.fixtures)
        ? data.fixtures
        : [];

      const realMatches: Match[] = fixtures
        .filter(
          (fixture) =>
            fixture?.fixture?.id != null &&
            fixture?.fixture?.date &&
            fixture?.teams?.home?.name &&
            fixture?.teams?.away?.name
        )
        .map((fixture) => {
          const date = fixture.fixture.date;
          const statusShort = fixture.fixture.status.short;

          return {
            id: fixture.fixture.id,
            league: fixture.league?.name || "Compétition inconnue",
            country: fixture.league?.country || "",
            home: fixture.teams.home.name,
            away: fixture.teams.away.name,
            date,
            time: formatTime(date),
            status: getMatchStatus(statusShort, date),
            statusShort,
            statusLong:
              fixture.fixture.status.long || "Situation du match",
            homeLogo: fixture.teams.home.logo,
            awayLogo: fixture.teams.away.logo,
            homeScore: fixture.goals?.home ?? null,
            awayScore: fixture.goals?.away ?? null,
          };
        });

      setMatches(realMatches);
      setUpdatedAt(data.updated_at || "");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const competitions = useMemo(() => {
    return [
      "Toutes",
      ...Array.from(new Set(matches.map((match) => match.league))).sort(
        (a, b) => a.localeCompare(b, "fr")
      ),
    ];
  }, [matches]);

  const visibleMatches = useMemo(() => {
    return matches
      .filter((match) => {
        if (tab === "resultats") {
          return match.status === "Terminé";
        }

        if (matchFilter === "Statut à confirmer") {
          return UNCERTAIN_STATUSES.includes(match.status);
        }

        return match.status === matchFilter;
      })
      .filter(
        (match) =>
          competition === "Toutes" || match.league === competition
      )
      .sort((a, b) => {
        if (
          tab === "resultats" ||
          matchFilter === "Terminé" ||
          matchFilter === "Statut à confirmer"
        ) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }

        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  }, [matches, tab, matchFilter, competition]);

  const upcomingCount = matches.filter(
    (match) => match.status === "À venir"
  ).length;

  const liveCount = matches.filter(
    (match) => match.status === "Direct"
  ).length;

  const finishedCount = matches.filter(
    (match) => match.status === "Terminé"
  ).length;

  const uncertainCount = matches.filter((match) =>
    UNCERTAIN_STATUSES.includes(match.status)
  ).length;

  const isUncertainView =
    tab === "calendrier" &&
    matchFilter === "Statut à confirmer";

  return (
    <main className="min-h-screen bg-[#080b11] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-green-500/10 to-transparent">
        <div className="container-x py-8 md:py-12">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-green-400"
          >
            <ArrowLeft size={16} />
            Retour à l’accueil
          </a>

          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-green-400">
            <Trophy size={18} />
            Maffo Sport
          </div>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            Résultats & calendrier
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Retrouvez les rencontres à venir, les matchs en direct et les
            scores des matchs terminés à partir des données disponibles.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                setTab("calendrier");
                setMatchFilter("À venir");
              }}
              aria-pressed={
                tab === "calendrier" && matchFilter === "À venir"
              }
              className={`rounded-2xl border p-3 text-left transition sm:p-4 ${
                tab === "calendrier" && matchFilter === "À venir"
                  ? "border-green-400 bg-green-500/10 ring-1 ring-green-400/30"
                  : "border-white/10 bg-white/[0.03] hover:border-green-400/40"
              }`}
            >
              <div className="text-xs text-zinc-400">À venir</div>
              <div className="mt-2 text-2xl font-black">
                {upcomingCount}
              </div>
              <div className="mt-1 text-[10px] text-green-400">
                Voir les matchs →
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setTab("calendrier");
                setMatchFilter("Direct");
              }}
              aria-pressed={
                tab === "calendrier" && matchFilter === "Direct"
              }
              className={`rounded-2xl border p-3 text-left transition sm:p-4 ${
                tab === "calendrier" && matchFilter === "Direct"
                  ? "border-red-400 bg-red-500/10 ring-1 ring-red-400/30"
                  : "border-white/10 bg-white/[0.03] hover:border-red-400/40"
              }`}
            >
              <div className="text-xs text-red-300">En direct</div>
              <div className="mt-2 text-2xl font-black">
                {liveCount}
              </div>
              <div className="mt-1 text-[10px] text-red-300">
                Voir les matchs →
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTab("resultats")}
              aria-pressed={tab === "resultats"}
              className={`rounded-2xl border p-3 text-left transition sm:p-4 ${
                tab === "resultats"
                  ? "border-zinc-400 bg-white/10 ring-1 ring-white/20"
                  : "border-white/10 bg-white/[0.03] hover:border-white/30"
              }`}
            >
              <div className="text-xs text-zinc-400">Terminés</div>
              <div className="mt-2 text-2xl font-black">
                {finishedCount}
              </div>
              <div className="mt-1 text-[10px] text-zinc-400">
                Voir les scores →
              </div>
            </button>
          </div>

          {uncertainCount > 0 && (
            <button
              type="button"
              onClick={() => {
                setTab("calendrier");
                setMatchFilter("Statut à confirmer");
              }}
              aria-pressed={isUncertainView}
              className={`mt-4 flex w-full items-start gap-2 rounded-xl border p-3 text-left text-xs leading-5 transition ${
                isUncertainView
                  ? "border-amber-400/50 bg-amber-500/10 ring-1 ring-amber-400/20"
                  : "border-amber-400/20 bg-amber-500/5 hover:border-amber-400/50 hover:bg-amber-500/10"
              } text-amber-200`}
            >
              <AlertCircle size={16} className="mt-0.5 shrink-0" />

              <span className="flex-1">
                <span className="font-bold">
                  {uncertainCount} rencontre
                  {uncertainCount > 1 ? "s présentent" : " présente"} un
                  statut à vérifier.
                </span>{" "}
                Cliquez ici pour consulter la liste des matchs concernés.
              </span>

              <span className="shrink-0 font-bold" aria-hidden="true">
                →
              </span>
            </button>
          )}
        </div>
      </section>

      <section className="container-x py-8 md:py-10">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
            <button
              type="button"
              onClick={() => {
                setTab("calendrier");
                setMatchFilter("À venir");
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition sm:flex-none ${
                tab === "calendrier"
                  ? "bg-green-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <CalendarDays size={16} />
              Calendrier
            </button>

            <button
              type="button"
              onClick={() => setTab("resultats")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition sm:flex-none ${
                tab === "resultats"
                  ? "bg-green-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Trophy size={16} />
              Résultats
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={competition}
              onChange={(event) => setCompetition(event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#11151d] px-4 py-3 text-sm text-white outline-none focus:border-green-400 sm:flex-none"
              aria-label="Filtrer par compétition"
            >
              {competitions.map((name) => (
                <option key={name} value={name}>
                  {name === "Toutes" ? "Toutes les compétitions" : name}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => void loadData()}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/5 disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={loading ? "animate-spin" : ""}
              />
              Actualiser
            </button>
          </div>
        </div>

        {updatedAt && (
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <Radio size={14} className="text-green-400" />
            Dernière mise à jour du cache :
            <time dateTime={updatedAt}>
              {new Intl.DateTimeFormat("fr-FR", {
                dateStyle: "medium",
                timeStyle: "short",
                timeZone: "Africa/Douala",
              }).format(new Date(updatedAt))}
            </time>
          </div>
        )}

        {loading && matches.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <RefreshCw
              size={24}
              className="mx-auto animate-spin text-green-400"
            />
            <p className="mt-4 text-sm text-zinc-400">
              Chargement des rencontres disponibles...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/5 p-6">
            <h2 className="font-bold text-red-300">
              Impossible de charger les rencontres
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{error}</p>
            <button
              type="button"
              onClick={() => void loadData()}
              className="mt-4 rounded-xl bg-green-500 px-4 py-2 text-sm font-bold text-black"
            >
              Réessayer
            </button>
          </div>
        )}

        {!loading && !error && visibleMatches.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <CalendarDays
              size={28}
              className="mx-auto text-zinc-600"
            />

            <h2 className="mt-4 text-lg font-bold">
              {tab === "resultats"
                ? "Aucun résultat disponible"
                : matchFilter === "Direct"
                ? "Aucun match en direct"
                : matchFilter === "Statut à confirmer"
                ? "Aucun match à vérifier"
                : "Aucun match à venir"}
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-zinc-500">
              {competition !== "Toutes"
                ? "Aucune rencontre ne correspond à cette compétition et à cette catégorie."
                : isUncertainView
                ? "Aucune rencontre avec un statut incertain, reporté, annulé, suspendu ou interrompu n'est disponible dans le cache."
                : "Seules les rencontres présentes dans le cache sont affichées. Certains matchs peuvent avoir un statut à confirmer."}
            </p>

            {isUncertainView && (
              <button
                type="button"
                onClick={() => {
                  setTab("calendrier");
                  setMatchFilter("À venir");
                }}
                className="mt-5 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/5"
              >
                Retour aux matchs à venir
              </button>
            )}
          </div>
        )}

        {visibleMatches.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
              <h2 className="font-black">
                {tab === "resultats"
                  ? "Matchs terminés"
                  : matchFilter === "Direct"
                  ? "Matchs en direct"
                  : matchFilter === "Statut à confirmer"
                  ? "Matchs dont le statut est à vérifier"
                  : "Matchs à venir"}
              </h2>

              <span className="text-xs text-zinc-500">
                {visibleMatches.length} match
                {visibleMatches.length > 1 ? "s" : ""}
              </span>
            </div>

            {visibleMatches.map((match) => (
              <MatchRow key={match.id} match={match} />
            ))}
          </div>
        )}

        <p className="mt-6 text-xs leading-5 text-zinc-600">
          Les statuts et scores dépendent des informations disponibles
          dans le cache. Une rencontre dont le statut est incertain n'est
          pas présentée comme un match à venir ou un résultat confirmé.
        </p>
      </section>
    </main>
  );
}
