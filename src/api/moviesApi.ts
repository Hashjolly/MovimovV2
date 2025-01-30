import axios from 'axios';
import { Movie, SearchResponse } from './api.props'; 

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'fr-FR',
  },
});


export const fetchMovies = async (query: string, page: number): Promise<SearchResponse> => {
  const { data } = await api.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};


export const fetchMovieDetails = async (id: number): Promise<Movie> => {
  const { data } = await api.get(`/movie/${id}`, {
    params: { append_to_response: 'videos' },
  });
  return data;
};
