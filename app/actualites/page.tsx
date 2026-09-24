import Link from "next/link";
import { articles } from "../data/articles";
import { ArrowRight, Clock3, Flame } from "lucide-react";

export default function ActualitesPage() {
  const newsArticles = articles.filter(
    (article) =>
      article.category === "Football" ||
      article.category === "Mercato" ||
      article.category === "Compétitions" ||
      article.category === "Football africain"
  );

  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <main className="container-x py-12 md:py-16">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
          <Flame size={15} />
          Actualités
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
          Dernières actualités sportives
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed">
          Retrouvez les dernières informations, les nouvelles importantes,
          les compétitions et les mouvements qui font l'actualité du football.
        </p>
      </div>

      {featuredArticle && (
        <Link
          href={/articles/${featuredArticle.slug}}
          className="glass rounded-3xl overflow-hidden card-hover block mb-10"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-full min-h-[320px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest font-bold text-green-400">
                {featuredArticle.category}
              </div>

              <h2 className="text-2xl md:text-4xl font-black leading-tight mt-3">
                {featuredArticle.title}
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-5">
                <Clock3 size={13} />
                {featuredArticle.date}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-green-400 mt-6">
                Lire l'article
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      )}

      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
            À découvrir
          </div>

          <h2 className="text-2xl md:text-3xl font-black mt-1">
            Toutes les actualités
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherArticles.map((article) => (
          <Link
            key={article.slug}
            href={/articles/${article.slug}}
            className="glass rounded-2xl overflow-hidden card-hover block"
          >
            <div className="h-48">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                {article.category}
              </div>

              <h3 className="text-lg font-black mt-2 leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                {article.excerpt}
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
    </main>
  );
}
