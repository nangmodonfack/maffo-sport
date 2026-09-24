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

export default function PronosticsPage() {
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

        <div className="flex items-center gap-2 text-sm text-zinc-500 mt-5">
          <CalendarDays size={16} />
          <span>Pronostics de la journée</span>
        </div>
      </div>

      {/* PRONOSTICS DU JOUR */}
      <section>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">
              Sélections du jour
            </h2>

            <p className="text-sm text-zinc-500 mt-2">
              Les rencontres seront affichées ici dès que les données du jour
              seront disponibles.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
            <Clock3 size={14} />
            Mise à jour quotidienne
          </div>
        </div>

        {/* ÉTAT TEMPORAIRE AVANT BRANCHEMENT API */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-green-400/10 flex items-center justify-center shrink-0">
              <Flame className="text-green-400" size={20} />
            </div>

            <div>
              <h3 className="font-black text-lg">
                Les pronostics du jour arrivent
              </h3>

              <p className="text-sm text-zinc-400 mt-2 leading-6 max-w-2xl">
                Cette page regroupera les principales sélections de la journée
                dans un seul espace. Les rencontres seront accompagnées de
                leurs statistiques, du marché sélectionné et d'une analyse
                synthétique.
              </p>
            </div>
          </div>
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
