import { Movie } from "api/moviesApi";

export interface MovieListProps {
    movies: Movie[];
    total_pages: number;
    toggleFavorite: (movie: Movie) => void;
}