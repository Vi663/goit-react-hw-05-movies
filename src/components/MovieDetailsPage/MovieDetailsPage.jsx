import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { FetchFilmsByID, FetchFilmsCast } from "../../servises/FetchAPI";
import s from "./MovieDetailsPage.module.css"

export function MovieDetailsPage () {

  const [film, setFilm] = useState({})
  const {poster_path, title, popularity, overview, genres} = film
  const { movieId } = useParams()
  const { url } = useRouteMatch()

  useEffect(() => {
    FetchFilmsByID(movieId).then(setFilm)
  }, [movieId])
  console.log(film)
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <span className={s.movieDitals}>User Score: {popularity}</span>
      <span className={s.movieDitalsTitle}>Overview</span>
      <span className={s.movieDitals}>{overview}</span>
      {genres && <span className={s.movieDitalsTitle}>Genres</span>}
      {genres && genres.map(genre => (<span className={s.movieDitals}>{genre.name}</span>))}
      <span className={s.movieDitalsTitle}>Additional information</span>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  )
}