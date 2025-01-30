import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from 'api/moviesApi';
import { SearchResponse } from 'api/moviesApi';

export const useMoviesQuery = (query: string, page: number) => {
    return useQuery<SearchResponse>({
      queryKey: ['movies', query, page], 
      queryFn: () => fetchMovies(query, page), 
    });
  };
