import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
}

interface FavoriteStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movie: Movie) => void;
}

export const useFavoritesStore = create<FavoriteStore>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  addFavorite: (movie: Movie) =>
    set((state) => {
      const updatedFavorites = [...state.favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),
  removeFavorite: (movie: Movie) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    }),
}));
