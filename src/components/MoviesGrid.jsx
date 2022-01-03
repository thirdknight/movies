import { MovieCard } from './MovieCard';  
import styles from './MovieGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './Spinner';

export function MoviesGrid() {
  // console.log(movies);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    get('discover/movie')
    .then((data) => {
      setMovies(data.results);
      setIsLoading(false);
      // console.log(movies)
    });
  }, []);
  
  if(isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
