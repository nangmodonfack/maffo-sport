Import { notFound } from "next/navigation";
import { articles } from "../../data/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container-x py-12">
      <article className="max-w-4xl mx-auto">
        {/* CATÉGORIE */}
        <div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">
          {article.category}
        </div>

        {/* TITRE */}
        <h1 className="text-3xl md:text-5xl font-black mt-3 leading-tight">
          {article.title}
        </h1>

        {/* INFOS */}
        <div className="text-sm text-zinc-500 mt-4">
          {article.date} · {article.author}
        </div>

        {/* RÉSUMÉ */}
        <p className="text-lg md:text-xl text-zinc-300 mt-6 leading-relaxed">
          {article.excerpt}
        </p>

        {/* IMAGE */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-2xl mt-8"
        />

        {/* CONTENU */}
        <div className="mt-10 space-y-6 text-zinc-300 leading-8 text-base md:text-lg">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
