import { MovieCard } from './MovieCard';
import movies from './movies.json';
import styles from './MovieGrid.module.css';

export function MoviesGrid() {
  console.log(movies);
  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
