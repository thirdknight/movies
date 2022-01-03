const API = 'https://api.themoviedb.org/3/'

export function get(path)  {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTYxMGU3MmI3NjE0MjJlNjM4ODc4NjU1M2JhMGE5MSIsInN1YiI6IjYxZDJiZDdjNTU0MWZhMDA0MTI0Y2Q5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4htKFPthUOsoERFXva9GHGQlA-jhpdUGAZ7c8zJ1Ek",
      "Content-Type":
      "application/json;charset=utf-8" 
    },
  })
  .then((result) => result.json())
}