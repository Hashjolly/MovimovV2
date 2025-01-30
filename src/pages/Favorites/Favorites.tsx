import { useFavoritesStore } from "app/store";
import MovieCard from "@components/molecules/MovieCard/MovieCard";
import "./Favorites.css";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavoritesStore();

  return (
    <div className="favorites-page">
      <h1>Mes Favoris</h1>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <div className="favorite-card-component">
            <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={true}
            toggleFavorite={() => removeFavorite(movie.id)} // ✅ On passe uniquement l'ID
            />
            </div>
            ))}
        </div>
      ) : (
        <p>Aucun film dans vos favoris.</p>
      )}
    </div>
  );
}
