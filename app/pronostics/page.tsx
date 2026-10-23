import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Flame,
  Send,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import NewsletterForm from "../components/NewsletterForm";
import { supabase } from "@/lib/supabase";

type DailyPrediction = {
  fixture: {
    id: number | null;
    date: string | null;
    status: {
      short?: string | null;
      long?: string | null;
    } | null;
    venue: {
      id?: number | null;
      city?: string | null;
      name?: string | null;
    } | null;
  };
  league: {
    id: number | null;
    name: string | null;
    country: string | null;
    logo: string | null;
  };
  teams: {
    home: {
      id: number | null;
      name: string | null;
      logo?: string | null;
    };
    away: {
      id: number | null;
      name: string | null;
      logo?: string | null;
    };
  };
  prediction: {
    winner: {
      id: number | null;
      name: string | null;
      comment: string | null;
    } | null;
    win_or_draw: boolean | null;
    under_over: string | null;
    goals: {
      home: string | null;
      away: string | null;
    };
    advice: string | null;
    percent: {
      home: string | null;
      draw: string | null;
      away: string | null;
    };
  } | null;
};

function getDoualaDate() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Douala",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("year")}-${get("month")}-${get("day")}`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Africa/Douala",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date ? new Date(`${date}T12:00:00`) : new Date());
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Africa/Douala",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export const revalidate = 3600;

export default async function PronosticsPage() {
  const date = getDoualaDate();

  let pronostics: DailyPrediction[] = [];

  try {
    const { data, error } = await supabase
      .from("football_cache")
      .select("data, updated_at")
      .eq("cache_key", "predictions_today")
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    if (data?.data && Array.isArray(data.data)) {
      pronostics = data.data as DailyPrediction[];
    }
  } catch (error) {
    console.error("Erreur pronostics Supabase:", error);
  }

  return (
    <main className="container-x py-12 md:py-16">
      {/* EN-TÊTE */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
          <TrendingUp size={15} />
          Analyses & Pronostics Foot
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
          Pronostics du jour : analyses et tendances
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed">
          Retrouvez les rencontres décryptées par la rédaction de Maffo Sport. 
          Forme du moment, statistiques avancées, dynamiques à domicile ou à l&apos;extérieur : 
          tout est passé au crible pour vous aider à y voir plus clair avant les matchs.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mt-5">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span className="capitalize">{formatDate(date)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            <span>Actualisé en continu</span>
          </div>
        </div>
      </div>

      {/* PRONOSTICS */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">
              Sélections du jour
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Les affiches majeures de la journée analysées pour vous.
            </p>
          </div>

          {/* PETIT LIEN NATUREL VERS LES BOOKMAKERS */}
          <div className="text-xs text-zinc-400 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
            Vous cherchez où parier ? Consultez notre comparatif des{" "}
            <Link href="/bookmakers" className="text-green-400 font-bold hover:underline">
              meilleurs bookmakers disponibles
            </Link>{" "}
            en toute sécurité.
          </div>
        </div>

        {pronostics.length === 0 ? (
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-green-400/10 flex items-center justify-center shrink-0">
                <Flame className="text-green-400" size={20} />
              </div>

              <div>
                <h3 className="font-black text-lg">
                  Aucun match disponible pour le moment
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-6">
                  Les rencontres du jour s&apos;afficheront ici automatiquement dès que les 
                  données de notre cache seront actualisées. Revenez un peu plus tard !
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-5">
            {pronostics.map((pronostic) => (
              <article
                key={pronostic.fixture.id}
                className="glass rounded-2xl p-5 md:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                      {pronostic.league.name}
                    </div>

                    <div className="text-xs text-zinc-500 mt-1">
                      {pronostic.league.country}
                    </div>
                  </div>

                  {pronostic.fixture.date && (
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Clock3 size={14} />
                      {formatTime(pronostic.fixture.date)}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-5 mt-6">
                  <div className="flex items-center gap-3">
                    {pronostic.teams.home.logo && (
                      <img
                        src={pronostic.teams.home.logo}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    )}

                    <span className="font-bold">
                      {pronostic.teams.home.name}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-xs text-zinc-600 uppercase font-bold">
                      VS
                    </span>
                  </div>

                  <div className="flex items-center gap-3 md:justify-end">
                    <span className="font-bold">
                      {pronostic.teams.away.name}
                    </span>

                    {pronostic.teams.away.logo && (
                      <img
                        src={pronostic.teams.away.logo}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/5 pt-5">
                  <div className="text-xs uppercase tracking-widest text-zinc-500">
                    Analyse & Tendance
                  </div>

                  {pronostic.prediction ? (
                    <div className="mt-3">
                      {pronostic.prediction.advice && (
                        <div className="text-lg font-black text-green-300">
                          {pronostic.prediction.advice}
                        </div>
                      )}

                      {pronostic.prediction.winner?.name && (
                        <p className="text-sm text-zinc-400 mt-2">
                          Scénario privilégié :{" "}
                          <span className="font-bold text-zinc-200">
                            {pronostic.prediction.winner.name}
                          </span>
                        </p>
                      )}

                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400 mt-4">
                        {pronostic.prediction.percent.home && (
                          <span>
                            1N2 Domicile{" "}
                            <strong className="text-zinc-200">
                              {pronostic.prediction.percent.home}
                            </strong>
                          </span>
                        )}

                        {pronostic.prediction.percent.draw && (
                          <span>
                            Nul{" "}
                            <strong className="text-zinc-200">
                              {pronostic.prediction.percent.draw}
                            </strong>
                          </span>
                        )}

                        {pronostic.prediction.percent.away && (
                          <span>
                            1N2 Extérieur{" "}
                            <strong className="text-zinc-200">
                              {pronostic.prediction.percent.away}
                            </strong>
                          </span>
                        )}
                      </div>

                      {(pronostic.prediction.goals.home ||
                        pronostic.prediction.goals.away) && (
                        <div className="text-sm text-zinc-400 mt-3">
                          Projection buts :{" "}
                          <span className="text-zinc-200">
                            {pronostic.prediction.goals.home ?? "—"} -{" "}
                            {pronostic.prediction.goals.away ?? "—"}
                          </span>
                        </div>
                      )}

                      {pronostic.prediction.under_over && (
                        <div className="text-sm text-zinc-400 mt-2">
                          Tendance buts :{" "}
                          <span className="text-zinc-200">
                            {pronostic.prediction.under_over}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-3">
                      <div className="text-lg font-black">
                        Tendances en cours d&apos;analyse
                      </div>

                      <p className="text-sm text-zinc-400 mt-2 leading-6">
                        Les indicateurs statistiques de cette rencontre sont en train d&apos;être consolidés.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* BLOC SEO RÉDACTIONNEL EN BAS DE PAGE (EXCELLENT POUR GOOGLE) */}
      <section className="mt-14">
        <div className="glass rounded-2xl p-6 md:p-10 space-y-4 text-zinc-300 leading-7 text-sm md:text-base">
          <h2 className="text-xl md:text-2xl font-black text-white">
            Comment bien utiliser nos pronostics football ?
          </h2>
          <p>
            Le pari sportif ne repose pas uniquement sur la chance, mais sur une lecture rigoureuse 
            des chiffres, des dynamiques d&apos;effectifs et des contextes de match. Sur Maffo Sport, 
            chaque pronostic s&apos;appuie sur des données objectives (historique des confrontations, 
            nombre de buts marqués/encaissés, forme récente à domicile et à l&apos;extérieur) pour 
            mettre en lumière de potentiels value bets.
          </p>
          <p>
            Que vous suiviez les grands championnats européens (Premier League, Liga, Serie A, Ligue 1, 
            Bundesliga) ou les compétitions continentales comme la Ligue des Champions, l&apos;objectif 
            reste de croiser nos tendances avec votre propre analyse. 
          </p>
          <p className="pt-2 text-zinc-400 text-xs md:text-sm">
            💡 <strong className="text-zinc-200">Conseil parieur :</strong> Avant de valider vos tickets, 
            prenez le temps de comparer les cotes proposées sur le marché. N&apos;hésitez pas à jeter un 
            œil à notre guide et comparatif des <Link href="/bookmakers" className="text-green-400 underline font-semibold">meilleurs opérateurs de paris sportifs</Link> pour maximiser vos gains potentiels.
          </p>
        </div>
      </section>

      {/* TELEGRAM */}
      <section className="mt-12">
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center shrink-0">
                <Send className="text-sky-400" size={21} />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-black">
                  Rejoignez la communauté sur Telegram
                </h2>

                <p className="text-sm text-zinc-400 mt-2 leading-6 max-w-xl">
                  Ne ratez aucune alerte de dernière minute. Retrouvez nos sélections 
                  du jour et les analyses partagées en direct sur notre canal Telegram.
                </p>
              </div>
            </div>

            <a
              href="https://t.me/maffoparissportifs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 text-black font-bold px-5 py-3 hover:bg-green-300 transition-colors whitespace-nowrap"
            >
              Rejoindre le canal
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mt-8">
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-green-400 uppercase tracking-widest">
              Newsletter Maffo Sport
            </div>

            <h2 className="text-2xl md:text-3xl font-black mt-2">
              Recevez nos meilleures analyses par email
            </h2>

            <p className="text-sm md:text-base text-zinc-400 mt-3 leading-6">
              Chaque semaine, recevez un récapitulatif des tendances fortes et des matchs 
              à ne pas manquer directement dans votre boîte de réception.
            </p>

            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* JEU RESPONSABLE */}
      <section className="mt-10">
        <div className="border border-white/10 rounded-2xl p-5 text-sm text-zinc-500 leading-6 flex items-start gap-3">
          <ShieldCheck size={20} className="text-zinc-400 shrink-0 mt-0.5" />
          <div>
            <Link
              href="/jouer-responsable"
              className="text-zinc-300 hover:text-white underline font-semibold"
            >
              Jouez de manière responsable.
            </Link>{" "}
            Les paris sportifs sont strictement réservés aux personnes majeures (18+ / 21+ selon la législation de votre pays). 
            Le jeu comporte des risques : endettement, dépendance, isolement. Fixez-vous des limites et ne pariez que ce que vous pouvez vous permettre de perdre.
          </div>
        </div>
      </section>
    </main>
  );
}
