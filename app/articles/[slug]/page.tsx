import { notFound } from "next/navigation";
import { articles } from "../../data/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderParagraph(paragraph: string, index: number) {
  // Afficher les sous-titres
  if (
    paragraph ===
      "POURQUOI LE REAL MADRID RÉCLAME-T-IL LA DÉMISSION DE TEBAS ?" ||
    paragraph === "L'AFFAIRE NEGREIRA REVIENT DANS LE DÉBAT" ||
    paragraph === "ARBITRAGE ESPAGNOL : LE REAL MADRID VEUT DES RÉFORMES" ||
    paragraph === "JAVIER TEBAS VA-T-IL DÉMISSIONNER ?" ||
    paragraph === "CONCLUSION"
  ) {
    return (
      <h2
        key={index}
        className="text-2xl md:text-3xl font-black text-white pt-6"
      >
        {paragraph}
      </h2>
    );
  }

  // Afficher les photos intégrées dans l'article
  if (paragraph.startsWith("IMAGE 1")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=85"
          alt="Illustration du football espagnol dans le contexte de la polémique entre le Real Madrid et Javier Tebas"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Le conflit entre le Real Madrid et la direction de LaLiga.
          Photo d'illustration.
        </figcaption>
      </figure>
    );
  }

  if (paragraph.startsWith("IMAGE 2")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
          alt="Stade de football illustrant l'actualité du Real Madrid"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Le Real Madrid au centre de l'actualité du football espagnol.
          Photo d'illustration.
        </figcaption>
      </figure>
    );
  }

  if (paragraph.startsWith("IMAGE 3")) {
    return (
      <figure key={index} className="my-8">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
          alt="Terrain de football illustrant les débats sur l'arbitrage espagnol"
          className="w-full rounded-2xl object-cover max-h-[500px]"
          loading="lazy"
        />
        <figcaption className="text-sm text-zinc-500 mt-3">
          Les questions d'arbitrage alimentent les débats dans le football
          espagnol. Photo d'illustration.
        </figcaption>
      </figure>
    );
  }

  // Ne pas afficher les mentions techniques comme des paragraphes
  if (
    paragraph.startsWith("IMAGE ") ||
    paragraph === "ACTUALITÉ FOOTBALL — ESPAGNE"
  ) {
    return null;
  }

  // Afficher les sources avec un style distinct
  if (paragraph.startsWith("Sources :")) {
    return (
      <div
        key={index}
        className="border-t border-white/10 pt-6 mt-10 text-sm text-zinc-400"
      >
        <strong className="text-white">Sources :</strong>{" "}
        {paragraph.replace("Sources :", "").trim()}
      </div>
    );
  }

  // Paragraphes normaux
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

        {/* INFOS */}
        <div className="text-sm text-zinc-500 mt-4">
          {article.date} · {article.author}
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
              Illustration de l'actualité.
            </figcaption>
          </figure>
        )}

        {/* CONTENU COMPLET */}
        <div className="mt-10 space-y-6 text-zinc-300 leading-8 text-base md:text-lg">
          {article.content.map((paragraph, index) =>
            renderParagraph(paragraph, index)
          )}
        </div>

        {/* RETOUR AUX ACTUALITÉS */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <a
            href="/actualites"
            className="inline-flex items-center text-green-400 font-bold hover:text-green-300 transition"
          >
            ← Retour aux actualités
          </a>
        </div>
      </article>
    </main>
  );
}
