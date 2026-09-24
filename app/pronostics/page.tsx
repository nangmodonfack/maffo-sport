import Link from "next/link"; 
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Flame,
  Send,
  TrendingUp,
} from "lucide-react";
import NewsletterForm from "../components/NewsletterForm";
import { getFixtures } from "@/lib/api-football";
import { generatePronostics } from "@/lib/pronostics";

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
  }).format(new Date(`${date}T12:00:00`));
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

  let pronostics = [];

  try {
    const fixtures = await getFixtures(date);
    pronostics = generatePronostics(fixtures);
  } catch (error) {
    console.error("Erreur pronostics:", error);
  }

  return (
    <main className="container-x py-12 md:py-16">
      {/* EN-TÊTE */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
          <TrendingUp size={15} />
          Pronostics
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
          Pronostics du jour
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed">
          Retrouvez les rencontres sélectionnées et analysées par Maffo Sport
          pour la journée. Les statistiques, la forme des équipes et les
          différents marchés sont pris en compte avant chaque sélection.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mt-5">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span className="capitalize">{formatDate(date)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            <span>Mise à jour quotidienne</span>
          </div>
        </div>
      </div>

      {/* PRONOSTICS */}
      <section>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">
              Sélections du jour
            </h2>

            <p className="text-sm text-zinc-500 mt-2">
              Les rencontres sont regroupées sur cette seule page.
            </p>
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
                  Les rencontres disponibles aujourd'hui apparaîtront ici
                  automatiquement dès que les données seront disponibles.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-5">
            {pronostics.map((pronostic) => (
              <article
                key={pronostic.fixture.fixture.id}
                className="glass rounded-2xl p-5 md:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                      {pronostic.fixture.league.name}
                    </div>

                    <div className="text-xs text-zinc-500 mt-1">
                      {pronostic.fixture.league.country}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock3 size={14} />
                    {formatTime(pronostic.fixture.fixture.date)}
                  </div>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-5 mt-6">
                  <div className="flex items-center gap-3">
                    {pronostic.fixture.teams.home.logo && (
                      <img
                        src={pronostic.fixture.teams.home.logo}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    )}

                    <span className="font-bold">
                      {pronostic.fixture.teams.home.name}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-xs text-zinc-600 uppercase">
                      VS
                    </span>
                  </div>

                  <div className="flex items-center gap-3 md:justify-end">
                    <span className="font-bold">
                      {pronostic.fixture.teams.away.name}
                    </span>

                    {pronostic.fixture.teams.away.logo && (
                      <img
                        src={pronostic.fixture.teams.away.logo}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/5 pt-5">
                  <div className="text-xs uppercase tracking-widest text-zinc-500">
                    Pronostic
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-lg font-black">
                        {pronostic.prediction}
                      </div>

                      <p className="text-sm text-zinc-400 mt-2 leading-6">
                        {pronostic.reason}
                      </p>
                    </div>

                    {pronostic.confidence > 0 && (
                      <div className="text-sm text-zinc-400">
                        Confiance{" "}
                        <span className="font-bold text-green-400">
                          {pronostic.confidence}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
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
                  Recevez les pronostics sur Telegram
                </h2>

                <p className="text-sm text-zinc-400 mt-2 leading-6 max-w-xl">
                  Retrouvez les nouvelles sélections et les mises à jour de
                  Maffo Sport directement sur notre canal Telegram.
                </p>
              </div>
            </div>

            <a
              href="https://t.me/maffoparissportifs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 text-black font-bold px-5 py-3 hover:bg-green-300 transition-colors whitespace-nowrap"
            >
              Rejoindre Telegram
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
              Newsletter
            </div>

            <h2 className="text-2xl md:text-3xl font-black mt-2">
              Ne manquez pas les prochains pronostics
            </h2>

            <p className="text-sm md:text-base text-zinc-400 mt-3 leading-6">
              Inscrivez-vous pour recevoir les nouvelles analyses et
              sélections de Maffo Sport directement par email.
            </p>

            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* JEU RESPONSABLE */}
      <section className="mt-10">
        <div className="border border-white/10 rounded-2xl p-5 text-sm text-zinc-500 leading-6">
          <Link
            href="/jouer-responsable"
            className="text-zinc-300 hover:text-white underline"
          >
            Jouez responsablement.
          </Link>{" "}
          Réservé aux personnes majeures selon la législation en vigueur dans
          votre pays de résidence (18+ / 21+). Jouer comporte des risques :
          endettement, isolement, dépendance.
        </div>
      </section>
    </main>
  );
}
