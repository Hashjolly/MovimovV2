import { MovieListProps } from "./MovieList.props";
import MovieCard from "@components/molecules/MovieCard/MovieCard";
import "./MovieList.css";

const MovieList: React.FC<MovieListProps> = ({ movies, favoritesList, toggleFavorite }) => {
  const isFavorite = (movieId: number) => {
    return favoritesList.some(favorite => favorite.id === movieId);
  };

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card-component">
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={isFavorite(movie.id)}
            toggleFavorite={() => toggleFavorite(movie)}
            />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
