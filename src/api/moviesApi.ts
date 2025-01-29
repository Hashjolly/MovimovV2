import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "fr-FR",
  },
});

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
}

interface SearchResponse {
  results: Movie[];
}

export const searchMovies = (query: string): Promise<AxiosResponse<SearchResponse>> => {
  return api
    .get("/search/movie", { params: { query } })
    .catch((error) => {
      console.error("Erreur de recherche : ", error);

      return {
          data: { results: [] },
          status: 500,
          statusText: "Internal Server Error",
          headers: {},
          config: {},
      } as unknown as AxiosResponse<SearchResponse>;
    });
};

export default api;
