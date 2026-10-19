import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../data/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderParagraph(paragraph: string, index: number) {
  // Sous-titres de l'article Real Madrid
  const headings = [
    "POURQUOI LE REAL MADRID RÉCLAME-T-IL LA DÉMISSION DE TEBAS ?",
    "L'AFFAIRE NEGREIRA REVIENT DANS LE DÉBAT",
    "ARBITRAGE ESPAGNOL : LE REAL MADRID VEUT DES RÉFORMES",
    "JAVIER TEBAS VA-T-IL DÉMISSIONNER ?",
    "CE QU'IL FAUT RETENIR",
  ];

  if (headings.includes(paragraph)) {
    return (
      <h2
        key={index}
        className="text-2xl md:text-3xl font-black text-white pt-6"
      >
        {paragraph}
      </h2>
    );
  }

  // Première photo intégrée
  if (paragraph.startsWith("IMAGE 1")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=85"
          alt="Illustration du football espagnol"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Le football espagnol au cœur de l'actualité. Photo d'illustration.
        </figcaption>
      </figure>
    );
  }

  // Deuxième photo intégrée
  if (paragraph.startsWith("IMAGE 2")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
          alt="Stade de football"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Le Real Madrid au centre des débats du football espagnol. Photo
          d'illustration.
        </figcaption>
      </figure>
    );
  }

  // Troisième photo intégrée
  if (paragraph.startsWith("IMAGE 3")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
          alt="Terrain de football"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Les débats autour de l'arbitrage dans le football. Photo
          d'illustration.
        </figcaption>
      </figure>
    );
  }

  // Masquer les marqueurs techniques et le surtitre
  if (
    paragraph.startsWith("IMAGE ") ||
    paragraph === "ACTUALITÉ FOOTBALL — ESPAGNE"
  ) {
    return null;
  }

  // Les paragraphes ordinaires sont affichés normalement
  return <p key={index}>{paragraph}</p>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container-x py-12 md:py-16">
      <article className="max-w-4xl mx-auto">
        {/* CATÉGORIE */}
        <div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">
          {article.category}
        </div>

        {/* TITRE */}
        <h1 className="text-3xl md:text-5xl font-black mt-3 leading-tight">
          {article.title}
        </h1>

        {/* DATE DE PUBLICATION ET DERNIÈRE MISE À JOUR */}
        <div className="text-sm text-zinc-500 mt-4">
          Publié le {article.date}
          {article.updated && (
            <span> · Mis à jour le {article.updated}</span>
          )}
          {" · "}
          {article.author}
        </div>

        {/* IMAGE PRINCIPALE */}
        {article.image && (
          <figure className="mt-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-2xl object-cover max-h-[520px]"
              fetchPriority="high"
            />
            <figcaption className="text-sm text-zinc-500 mt-3">
              Illustration : {article.title}
            </figcaption>
          </figure>
        )}

        {/* CONTENU COMPLET */}
        <div className="mt-10 space-y-6 text-zinc-300 leading-8 text-base md:text-lg">
          {article.content.map((paragraph, index) =>
            renderParagraph(paragraph, index)
          )}
        </div>

        {/* SOURCES CLIQUABLES */}
        {article.sources && article.sources.length > 0 && (
          <section className="mt-10 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white mb-4">Sources</h2>

            <ul className="space-y-3">
              {article.sources.map((source, index) => (
                <li key={`${source.url}-${index}`}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline underline-offset-4"
                  >
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* RETOUR AUX ACTUALITÉS */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href="/actualites"
            className="inline-flex items-center text-green-400 font-bold hover:text-green-300 transition"
          >
            ← Retour aux actualités
          </Link>
        </div>
      </article>
    </main>
  );
}
