import Link from "next/link";
import { articles, generateExcerpt } from "../data/articles";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

export default function AnalysesGuidesPage() {
  const analysisArticles = articles.filter(
    (article) =>
      article.category === "Analyse" ||
      article.category === "Analyse & guides" ||
      article.category === "Guide" ||
      article.category === "Guide football"
  );

  const featuredArticle = analysisArticles[0];
  const otherArticles = analysisArticles.slice(1);

  return (
    <main className="container-x py-12 md:py-16">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
          <BookOpen size={15} />
          Analyses & Guides
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
          Analyses & Guides
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed">
          Analyses de matchs, statistiques, méthodes et guides pratiques
          pour mieux comprendre le football et les paris sportifs.
        </p>
      </div>

      {/* ARTICLE LE PLUS RÉCENT */}
      {featuredArticle && (
        <Link
          href={"/articles/" + featuredArticle.slug}
          className="glass rounded-2xl overflow-hidden card-hover block mb-10"
        >
          <div className="relative h-[360px] md:h-[500px]">
            {featuredArticle.image && (
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            )}

            {!featuredArticle.image && (
              <div className="w-full h-full bg-zinc-900" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                {featuredArticle.category}
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mt-3 leading-tight max-w-4xl">
                {featuredArticle.title}
              </h2>

              <p className="text-sm md:text-base text-zinc-300 mt-4 leading-relaxed max-w-3xl">
                {generateExcerpt(featuredArticle.content)}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Clock3 size={13} />
                  {featuredArticle.date}
                </div>

                <span className="inline-flex items-center gap-1 text-sm font-bold text-green-400">
                  Lire l'article
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* ARTICLES PRÉCÉDENTS */}
      {otherArticles.length > 0 && (
        <>
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            À lire aussi
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                href={"/articles/" + article.slug}
                className="glass rounded-2xl overflow-hidden card-hover block"
              >
                {article.image && (
                  <div className="h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-black mt-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {generateExcerpt(article.content)}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-500 mt-4">
                    <Clock3 size={13} />
                    {article.date}
                  </div>

                  <span className="inline-flex items-center gap-1 text-sm font-bold text-green-400 mt-4">
                    Lire l'article
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
