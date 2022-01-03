import { MovieCard } from './MovieCard';  
import styles from './MovieGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';

export function MoviesGrid() {
  // console.log(movies);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get('discover/movie')
    .then((data) => {
      setMovies(data.results)
      // console.log(movies)
    });
  }, []);

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
