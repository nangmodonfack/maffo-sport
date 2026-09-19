# Maffo Sport — Next.js + API-Football

Projet Next.js prêt pour GitHub + Vercel avec intégration serveur d'API-Football.

## 1. Clé API

Crée un compte gratuit sur API-Football puis récupère la clé dans le dashboard. Le plan gratuit donne actuellement 100 requêtes/jour et 10 requêtes/minute. Les données sont appelées côté serveur pour ne pas exposer la clé dans le navigateur.

Ajoute dans Vercel :

`API_FOOTBALL_KEY=ta_cle_api`

Tu peux aussi créer un fichier `.env.local` en développement à partir de `.env.example`.

## 2. Ce qui est connecté

- `/api/fixtures?date=YYYY-MM-DD` : matchs du jour, heure Afrique/Douala, logos, scores et statut.
- `/api/standings?league=39&season=2026` : classement Premier League.
- La page d'accueil charge automatiquement les matchs et le classement.
- Les réponses sont mises en cache côté serveur (fixtures 5 min, classement 1 h) pour limiter la consommation de quota.
- Si la clé n'est pas encore configurée, la page reste fonctionnelle en mode démonstration.

## 3. Déploiement Vercel

1. Mets le projet sur GitHub.
2. Importe le dépôt dans Vercel.
3. Dans **Project Settings → Environment Variables**, ajoute `API_FOOTBALL_KEY`.
4. Redéploie.

## 4. Important sur le plan gratuit

API-Football limite le plan Free à 100 requêtes par jour et 10 par minute. Il ne faut donc pas faire une requête API par visiteur ni interroger l'API toutes les quelques secondes depuis le navigateur. Pour un vrai live score à grande échelle, il faudra centraliser le polling côté serveur et/ou passer à un plan supérieur.

## 5. À personnaliser ensuite

- vraies URLs d'articles
- images et photos
- liens Telegram
- liens affiliés bookmakers
- autres classements/compétitions
- pages équipe, match, joueur et compétition
- actualités réelles
