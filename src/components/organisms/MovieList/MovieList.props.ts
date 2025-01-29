import { Movie } from "api";

export interface MovieListProps {
    movies: Movie[];
    total_pages: number;
    toggleFavorite: (movie: Movie) => void;
}