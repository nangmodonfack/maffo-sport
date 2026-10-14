import Link from "next/link";
import type { Metadata } from "next";
import { Search, Clock3, ArrowRight } from "lucide-react";
import { articles, generateExcerpt } from "../data/articles";

export const metadata: Metadata = {
  title: "Recherche | Maffo Sport",
  description:
    "Recherchez des actualités, des analyses, des guides et des articles sur le football avec Maffo Sport.",
  robots: {
    index: false,
    follow: true,
  },
};

type RecherchePageProps = {
  searchParams: Promise<{
    q?: string | string[];
  }>;
};

/**
 * Normalise le texte pour faciliter la recherche :
 * - ignore les majuscules ;
 * - ignore les accents ;
 * - supprime les espaces superflus.
 */
function normaliserTexte(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default async function RecherchePage({
  searchParams,
}: RecherchePageProps) {
  const params = await searchParams;

  const rawQuery = Array.isArray(params.q)
    ? params.q[0] ?? ""
    : params.q ?? "";

  const query = rawQuery.trim();
  const normalizedQuery = normaliserTexte(query);

  const searchTerms = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  const results = query
    ? articles.filter((article) => {
        const searchableText = normaliserTexte(
          [
            article.title,
            article.category,
            article.excerpt ?? "",
            article.author,
            article.content.join(" "),
          ].join(" ")
        );

        // Chaque mot recherché doit apparaître dans l'article.
        return searchTerms.every((term) =>
          searchableText.includes(term)
        );
      })
    : [];

  return (
    <main className="container-x min-h-screen py-12 md:py-16">
      {/* EN-TÊTE */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
          <Search size={15} />
          Recherche
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
          Rechercher sur Maffo Sport
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed">
          Retrouvez des actualités, des analyses, des guides et des
          informations sur le football.
        </p>
      </div>

      {/* FORMULAIRE DE RECHERCHE */}
      <form
        action="/recherche"
        method="GET"
        className="max-w-3xl flex gap-2 mb-10"
      >
        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Ex. : Real Madrid, mercato, CAN..."
            aria-label="Rechercher un article"
            className="w-full rounded-xl bg-white/5 border border-white/10 py-3 pl-11 pr-4 text-white outline-none focus:border-green-400/50 transition"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-green-500 px-4 md:px-6 py-3 font-bold text-black hover:bg-green-400 transition"
        >
          Rechercher
        </button>
      </form>

      {/* AUCUNE RECHERCHE */}
      {!query && (
        <div className="glass rounded-2xl p-6 md:p-8 max-w-3xl">
          <h2 className="text-xl font-bold">
            Que recherchez-vous ?
          </h2>

          <p className="text-zinc-400 mt-3 leading-relaxed">
            Saisissez le nom d'une équipe, d'une compétition, d'un
            joueur ou un sujet comme le mercato, les statistiques ou
            les paris sportifs.
          </p>
        </div>
      )}

      {/* RÉSULTATS */}
      {query && (
        <section>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-black">
              {results.length === 0
                ? "Aucun résultat trouvé"
                : `${results.length} résultat${results.length > 1 ? "s" : ""}`}
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Recherche : « {query} »
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((article) => {
                const excerpt =
                  article.excerpt?.trim() ||
                  generateExcerpt(article.content);

                return (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="glass rounded-2xl overflow-hidden card-hover block group"
                  >
                    {/* IMAGE */}
                    {article.image ? (
                      <div className="h-48 overflow-hidden bg-white/5">
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-32 bg-white/5 flex items-center justify-center">
                        <Search
                          size={30}
                          className="text-zinc-600"
                        />
                      </div>
                    )}

                    {/* INFORMATIONS */}
                    <div className="p-5">
                      <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                        {article.category}
                      </div>

                      <h3 className="text-lg font-black mt-2 leading-snug group-hover:text-green-400 transition">
                        {article.title}
                      </h3>

                      <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                        {excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-4">
                        <Clock3 size={13} />
                        {article.date}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-bold text-green-400 mt-5">
                        Lire l'article
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="glass rounded-2xl p-6 md:p-8 max-w-3xl">
              <p className="text-zinc-300 leading-relaxed">
                Aucun article ne correspond à votre recherche pour le
                moment. Essayez un autre mot-clé ou une formulation
                plus courte.
              </p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
