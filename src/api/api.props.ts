export interface Video {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    genres: Genre[];
    runtime: number;
    budget: number;
    revenue: number;
    videos?: { results: Video[] };
  }
  
  export interface SearchResponse {
    results: Movie[];
    total_pages: number;
  }
  