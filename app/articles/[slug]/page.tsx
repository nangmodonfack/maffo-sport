type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="container-x py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">
          Article
        </div>

        <h1 className="text-3xl md:text-5xl font-black mt-3">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="text-zinc-400 mt-4">
          Cette page est prête à recevoir le contenu de l'article.
        </p>
      </div>
    </main>
  );
}
