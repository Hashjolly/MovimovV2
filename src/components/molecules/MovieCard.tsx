import React from "react";
import { Link } from "react-router-dom";
import Button from "@components/atoms/Button/Button";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
  isFavorite: boolean;
  toggleFavorite: (movie: { id: number; title: string; poster_path: string }) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <Button
        width="150px"
        height="40px"
        theme="neutral"
        label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        onClick={() => toggleFavorite(movie)}
      />
    </div>
  );
};

export default MovieCard;
