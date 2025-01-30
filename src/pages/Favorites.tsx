import { useFavoritesStore } from "app/store";
import { Link } from "react-router-dom";
import { Movie } from "api/api.props";
import { useEffect } from "react";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavoritesStore();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites: Movie[] = JSON.parse(storedFavorites);
      console.log("Favoris récupérés du localStorage :", parsedFavorites);
    }
  }, []);

  return (
    <div className="favorites-page">
      <h1>Mes Favoris</h1>
      <div className="favorites-grid">
        {favorites.length > 0 ? (
          favorites.map((movie: Movie, index: number) => (
            <div className="movie-card" key={`${movie.id}-${index}`}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <h3>{movie.title}</h3>
              <button onClick={() => removeFavorite(movie)}>
                Retirer des favoris
              </button>
            </div>
          ))
        ) : (
          <p>Aucun film dans vos favoris.</p>
        )}
      </div>
    </div>
  );
}
