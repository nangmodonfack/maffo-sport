import { articles } from "../data/articles";

export default function ActualitesPage() {
  return (
    <main className="container-x py-12">
      <h1 className="text-4xl font-black">
        Actualités
      </h1>

      <p className="mt-4 text-zinc-400">
        Nombre d'articles : {articles.length}
      </p>
    </main>
  );
}
