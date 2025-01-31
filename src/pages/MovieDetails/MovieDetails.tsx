import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesStore } from 'app/store';
import "./MovieDetails.css"

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { selectedMovie, fetchMovie } = useMoviesStore();

  useEffect(() => {
    if (id) fetchMovie(Number(id));
  }, [id, fetchMovie]);

  if (!selectedMovie) return <p>Chargement...</p>;

  const trailer = selectedMovie.videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="movie-details">
      <h1>{selectedMovie.title}</h1>
      <div className="movie-header">
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <p>{selectedMovie.overview}</p>
          <p><strong>Note :</strong> {selectedMovie.vote_average} / 10</p>
          <p><strong>Genres :</strong> {selectedMovie.genres.map((genre) => genre.name).join(", ")}</p>
          <p><strong>Durée :</strong> {selectedMovie.runtime} minutes</p>
          <p><strong>Date de sortie :</strong> {selectedMovie.release_date}</p>
          <p><strong>Budget :</strong> ${selectedMovie.budget.toLocaleString()}</p>
          <p><strong>Revenus :</strong> ${selectedMovie.revenue.toLocaleString()}</p>
        </div>
      </div>

      {trailer && (
        <div className="movie-trailer">
          <h2>Bande-annonce</h2>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Bande-annonce"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;