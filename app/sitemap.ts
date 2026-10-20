import type { MetadataRoute } from "next";
import { articles } from "./data/articles";

const BASE_URL = "https://sport.maffohub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages principales du site
  const staticRoutes = [
    // Accueil
    "",

    // Informations générales
    "/a-propos",
    "/contact",

    // Actualités et contenus éditoriaux
    "/actualites",
    "/analyses-guides",
    "/articles",
    "/recherche",

    // Football
    "/competitions",
    "/equipes-joueurs",
    "/football-africain",
    "/histoire-football",
    "/resultats-calendrier",

    // Pronostics et paris sportifs
    "/pronostics",
    "/bookmakers",
    "/strategies-conseils-paris-sportifs",
    "/types-de-paris-sportifs",
    "/jouer-responsable",

    // Informations légales
    "/mentions-legales",
    "/politique-confidentialite",
    "/politique-cookies",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Pages individuelles des compétitions
  const competitionSlugs = [
    "premier-league",
    "liga",
    "ligue-1",
    "serie-a",
    "bundesliga",
    "ligue-des-champions",
    "ligue-europa",
    "ligue-des-champions-caf",
  ];

  const competitionPages: MetadataRoute.Sitemap =
    competitionSlugs.map((slug) => ({
      url: `${BASE_URL}/competitions/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  // Articles publiés dans app/data/articles.ts
  const articlePages: MetadataRoute.Sitemap = articles.map(
    (article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Retourne toutes les URL répertoriées
  return [
    ...staticPages,
    ...competitionPages,
    ...articlePages,
  ];
}
