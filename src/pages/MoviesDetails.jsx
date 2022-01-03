import { useParams } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MoviesDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  // console.log(movieId)
  useEffect(() => {
    setIsLoading(true);

    get('/movie/' + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false); 
    });
  }, [movieId]);

  if(isLoading) {
    return <Spinner />;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  // const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return(
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} 
           src={imageUrl} 
           alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}> 
        <p className={styles.firstItem}><strong>Title: {movie.title}</strong></p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p><strong>Description: {movie.overview}</strong></p>
      </div>
    </div>
  )
   
}