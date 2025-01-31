# Movimov

Movimov est une application web permettant de rechercher, explorer et gérer vos films et séries préférés. Cette application utilise React, TypeScript, Zustand pour la gestion de l'état global, et TanStack Query pour les requêtes HTTP.

## Fonctionnalités

- **Recherche de films et séries** : Recherchez des films et séries par titre.
- **Détails des films** : Affichez les détails d'un film, y compris la bande-annonce, les genres, la note, etc.
- **Favoris** : Ajoutez des films à vos favoris pour les retrouver facilement.
- **Pagination** : Naviguez entre les pages de résultats de recherche.
- **Thème clair/sombre** : Changez le thème de l'application entre clair et sombre.

## Installation

1. Clonez le dépôt GitHub :
  ```bash
  git clone https://github.com/Hashjolly/MovimovV2.git
  ```
2. Installez les dépendances :
  ```bash
  cd movimovv2
  npm install
  ```
3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :
  ```
  REACT_APP_API_KEY=your_api_key
  VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
  VITE_MAIN_COLOR='#EEEEEE'
  VITE_SECOND_COLOR='#111111'
  VITE_THIRD_COLOR='#bd0000'
  VITE_FOURTH_COLOR='#D4AA7D'
  ```
4. Démarrez l'application en mode développement :
  ```bash
  npm run dev
  ```

## Utilisation

- **Page d'accueil** : Recherchez des films ou séries en utilisant la barre de recherche présente sur la page d'accueil ou dans le header.
- **Page des films** : Affichez les résultats de recherche et naviguez entre les pages.
- **Page des détails** : Cliquez sur un film pour voir ses détails.
- **Page des favoris** : Consultez vos films favoris.
- **Thème** : Utilisez le bouton de bascule pour changer entre le thème clair et sombre.

## Structure du projet

Le projet est structuré selon le pattern Atomic Design.

## Arborescence du projet

Voici l'arborescence du projet Movimov :

```
movimovv2/
├── public/
│   ├── logo.png
│   └── popcorn.png
├── src/
│   ├── api/
|   ├── app/
│       └── store/
│   ├── assets/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **TypeScript** : Superset de JavaScript qui ajoute des types statiques.
- **Zustand** : Gestion de l'état global.
- **TanStack Query** : Gestion des requêtes HTTP.
- **React Router** : Gestion de la navigation entre les pages.
- **Styled Components** : Styles CSS dans les composants.

## Auteurs

- **Matthias**
- **Hugo**



L'application sera disponible à l'adresse `https://hashjolly.github.io/MovimovV2/`.