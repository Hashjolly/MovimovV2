import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Movie } from 'api';

interface FavoriteStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void; 
}

export const useFavoritesStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (movie: Movie) =>
        set((state) => ({ favorites: [...state.favorites, movie] })),
      removeFavorite: (movieId: number) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== movieId),
        })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
