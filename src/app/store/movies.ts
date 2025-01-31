import { create } from 'zustand';
import { Movie } from 'api';
import { fetchMovieDetails } from 'api';


interface MoviesStore {
  currentPage: number;
  setPage: (page: number) => void;
  syncPageWithURL: (urlPage: number) => void;

  selectedMovie: Movie | null;
  fetchMovie: (id: number) => Promise<void>;
}

export const useMoviesStore = create<MoviesStore>((set, get) => ({
  currentPage: 1,
  setPage: (page) => set({ currentPage: page }),
  syncPageWithURL: (urlPage) => {
    if (get().currentPage !== urlPage) {
      set({ currentPage: urlPage });
    }
  },

  selectedMovie: null,
  fetchMovie: async (id: number) => {
    try {
      const movieDetails = await fetchMovieDetails(id);
      set({ selectedMovie: movieDetails });
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du film :", error);
    }
  },
}));