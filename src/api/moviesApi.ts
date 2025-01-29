import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'fr-FR',
  },
});

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

interface SearchResponse {
  results: Movie[];
  total_pages: number;
}

const fetchMovies = async (query: string, page: number): Promise<SearchResponse> => {
  const { data } = await api.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const useMoviesQuery = (query: string, page: number) => {
  return useQuery<SearchResponse>({
    queryKey: ['movies', query, page], 
    queryFn: () => fetchMovies(query, page), 
  });
};
