import { Movie } from "api";

export interface MovieListProps {
    movies: Movie[];
    total_pages: number;
    favoritesList: Movie[];
    toggleFavorite: (movie: Movie) => void;
}