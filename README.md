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

- **Page d'accueil** : Recherchez des films ou séries en utilisant la barre de recherche.
- **Page des films** : Affichez les résultats de recherche et naviguez entre les pages.
- **Page des détails** : Cliquez sur un film pour voir ses détails.
- **Page des favoris** : Consultez vos films favoris.
- **Thème** : Utilisez le bouton de bascule pour changer entre le thème clair et sombre.

## Structure du projet

Le projet est structuré selon le pattern Atomic Design.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **TypeScript** : Superset de JavaScript qui ajoute des types statiques.
- **Zustand** : Gestion de l'état global.
- **TanStack Query** : Gestion des requêtes HTTP.
- **React Router** : Gestion de la navigation entre les pages.
- **Styled Components** : Styles CSS dans les composants.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité :
  ```bash
  git checkout -b feature/ma-fonctionnalité
  ```
3. Commitez vos modifications :
  ```bash
  git commit -m 'Ajout de ma fonctionnalité'
  ```
4. Pushez votre branche :
  ```bash
  git push origin feature/ma-fonctionnalité
  ```
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Auteurs

- **Votre Nom** - Développeur principal - [Votre Profil GitHub](https://github.com/votre-utilisateur)

## Remerciements

Merci à tous ceux qui ont contribué à ce projet et à l'équipe de formation pour leur soutien et leurs conseils.

## Déploiement

Pour déployer l'application sur GitHub Pages :

1. Ajoutez le script de déploiement dans `package.json` :
  ```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  ```
2. Installez `gh-pages` :
  ```bash
  npm install --save-dev gh-pages
  ```
3. Déployez l'application :
  ```bash
  npm run deploy
  ```

L'application sera disponible à l'adresse `https://votre-utilisateur.github.io/movimov`.

## Conclusion

Ce projet démontre l'utilisation de React, TypeScript, Zustand, et TanStack Query pour construire une application web complète et maintenable. Amusez-vous à explorer et améliorer Movimov !

Bon coding !