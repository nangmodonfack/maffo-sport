"use client";

import { useEffect, useState } from "react";

type Team = {
  id?: string;
  name?: string;
  short_name?: string;
  logo_url?: string;
};

type Match = {
  id: string;
  league: string;
  kickoff_utc: string | null;
  status: string | null;
  home: Team;
  away: Team;
  score: {
    home: number | null;
    away: number | null;
  };
};

type ApiResponse = {
  success?: boolean;
  matches?: Match[];
  error?: string;
};

type CompetitionMatchesProps = {
  league: string;
  title?: string;
};

function formatDate(value: string | null) {
  if (!value) return "Date non disponible";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Date non disponible";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Douala",
  }).format(date);
}

function getStatusLabel(status: string | null) {
  if (!status) return "Statut indisponible";

  const value = status.toLowerCase();

  if (
    ["finished", "complete", "completed", "ft", "ended"].includes(value)
  ) {
    return "Terminé";
  }

  if (
    ["live", "in_progress", "in progress", "1h", "2h", "ht"].includes(value)
  ) {
    return "En direct";
  }

  if (
    ["scheduled", "upcoming", "not_started", "not started", "ns"].includes(value)
  ) {
    return "À venir";
  }

  // Ne pas inventer un statut lorsque le fournisseur renvoie
  // une valeur que nous ne reconnaissons pas.
  return status;
}

export default function CompetitionMatches({
  league,
  title = "Calendrier et résultats",
}: CompetitionMatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMatches() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/football-database/matches?league=${encodeURIComponent(league)}`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            "Les données des matchs sont temporairement indisponibles."
          );
        }

        const result = (await response.json()) as ApiResponse;

        if (!result.success || !Array.isArray(result.matches)) {
          throw new Error(
            "La réponse reçue ne contient pas de liste de matchs exploitable."
          );
        }

        setMatches(result.matches);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Impossible de charger les matchs."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMatches();

    return () => controller.abort();
  }, [league]);

  return (
    <section
      aria-labelledby="competition-matches-heading"
      className="my-8 rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-6"
    >
      <div className="mb-5">
        <p className="mb-1 text-sm font-medium uppercase tracking-wide text-emerald-400">
          Maffo Sport
        </p>

        <h2
          id="competition-matches-heading"
          className="text-xl font-bold text-white sm:text-2xl"
        >
          {title}
        </h2>

      </div>

      {loading && (
        <p className="rounded-xl bg-slate-800 p-4 text-slate-300">
          Chargement des rencontres…
        </p>
      )}

      {!loading && error && (
        <div
          role="status"
          className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
        >
          <p className="font-semibold text-amber-200">
            Données temporairement indisponibles
          </p>
          <p className="mt-1 text-sm text-slate-300">{error}</p>
        </div>
      )}

      {!loading && !error && matches.length === 0 && (
        <p className="rounded-xl bg-slate-800 p-4 text-slate-300">
          Aucun match n’est disponible dans les données actuellement
          enregistrées pour cette compétition. Consultez cette page
          ultérieurement pour les prochaines actualisations.
        </p>
      )}

      {!loading && !error && matches.length > 0 && (
        <div className="space-y-3">
          {matches.map((match) => (
            <article
              key={match.id}
              className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <time
                  dateTime={match.kickoff_utc ?? undefined}
                  className="text-xs text-slate-400 sm:text-sm"
                >
                  {formatDate(match.kickoff_utc)}
                </time>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {getStatusLabel(match.status)}
                </span>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  {match.home.logo_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={match.home.logo_url}
                      alt=""
                      className="h-7 w-7 shrink-0 object-contain"
                      loading="lazy"
                    />
                  )}

                  <span className="break-words text-sm font-semibold text-white sm:text-base">
                    {match.home.name ?? "Équipe non renseignée"}
                  </span>
                </div>

                <div className="min-w-[48px] text-center text-lg font-bold text-emerald-400">
                  {match.score.home !== null &&
                  match.score.away !== null
                    ? `${match.score.home} - ${match.score.away}`
                    : "—"}
                </div>

                <div className="flex min-w-0 items-center justify-end gap-2 text-right">
                  <span className="break-words text-sm font-semibold text-white sm:text-base">
                    {match.away.name ?? "Équipe non renseignée"}
                  </span>

                  {match.away.logo_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={match.away.logo_url}
                      alt=""
                      className="h-7 w-7 shrink-0 object-contain"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-slate-500">
        Les informations dépendent des données reçues du fournisseur.
        Vérifiez les mises à jour avant de vous fier à un horaire ou à un score.
      </p>
    </section>
  );
}
