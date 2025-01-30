import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMoviesStore } from 'app/store';
import { useFavoritesStore } from 'app/store';
import { useMoviesQuery } from 'api';
import { MovieList } from '@components/organisms';
import { Pagination } from '@components/molecules';
import { Movie } from 'api';
import "./Movies.css"

export default function Movies() {
  const currentPage = useMoviesStore((state) => state.currentPage);
  const setPage = useMoviesStore((state) => state.setPage);

  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') ?? '';
  const urlPage = parseInt(searchParams.get('page') ?? '1', 10) || 1;

  useEffect(() => {
    if (currentPage !== urlPage) {
      setPage(urlPage);
    }
  }, [urlPage, currentPage, setPage]);

  const { data, isLoading, isError } = useMoviesQuery(searchQuery || 'populaires', currentPage);

  const totalPages = data?.total_pages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    navigate(`?page=${newPage}${searchQuery ? `&search=${searchQuery}` : ''}`);
  };

  const toggleFavorite = (movie: Movie) => {
    favorites.find((fav) => fav.id === movie.id)
      ? removeFavorite(movie)
      : addFavorite(movie);
  };

  if (isLoading) return <p>Chargement des films...</p>;
  if (isError) return <p>Erreur lors de la récupération des films...</p>;

  return (
    <div className="movies-page">
      <h1>{searchQuery ? `Résultats de recherche : "${searchQuery}"` : 'Films Populaires'}</h1>
      <MovieList movies={data?.results ?? []} total_pages={totalPages} toggleFavorite={toggleFavorite} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
