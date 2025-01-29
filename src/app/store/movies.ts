import create from 'zustand';

interface MoviesStore {
  currentPage: number;
  setPage: (page: number) => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  currentPage: 1,
  setPage: (page: number) => set({ currentPage: page }),
}));
