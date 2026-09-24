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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {analysisArticles.map((article) => (
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

              <h2 className="text-lg font-black mt-2 leading-snug">
                {article.title}
              </h2>

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
    </main>
  );
}
