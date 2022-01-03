import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import styles from "./MovieGrid.module.css";
import { useQuery } from "./hooks/useQuery";

export function MoviesGrid() {
  // console.log(movies);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "discover/movie";

    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
      // console.log(movies)
    });
  }, [search]);

  if (isLoading) {
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
