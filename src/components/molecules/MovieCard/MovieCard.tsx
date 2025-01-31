import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/atoms/Button/Button";
import { MovieCardProps } from "./MovieCard.props";
import './MovieCard.css';

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="movie-card">
      <Link to={`/MovimovV2/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <Button
        width="90%"
        height="50px"
        theme="colored"
        label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        onClick={() => toggleFavorite(movie)}
      />
    </div>
  );
};

export default MovieCard;
