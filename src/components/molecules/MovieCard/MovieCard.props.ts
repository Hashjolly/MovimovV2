export interface MovieCardProps {
    movie: {
      id: number;
      title: string;
      poster_path: string;
    };
    isFavorite: boolean;
    toggleFavorite: (movie: { id: number; title: string; poster_path: string }) => void;
}