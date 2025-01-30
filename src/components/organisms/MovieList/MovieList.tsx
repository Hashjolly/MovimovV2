import { Link } from "react-router-dom";
import { MovieListProps } from "./MovieList.props";
import { Button } from "@components/atoms/Button";
import "./MovieList.css";

const MovieList: React.FC<MovieListProps> = ({ movies, favoritesList, toggleFavorite }) => {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card-component">
          <Link className="movie-card" to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <Button
              width="90%"
              height="50px"
              theme="colored"
              label={favoritesList.find((fav) => fav.id === movie.id)
                ? "Retirer des favoris"
                : "Ajouter aux favoris"}
              disabled={false}
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(movie);
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
