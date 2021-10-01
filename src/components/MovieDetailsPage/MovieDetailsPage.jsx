import { useState, useEffect } from 'react'
import { Route, NavLink, useRouteMatch, useParams} from "react-router-dom";
import { fetchFilmsByID, fetchFilmsReviews } from "../../servises/FetchAPI";
import { Cast } from '../Cast/Cast'
import { MovieReviews } from "../MovieReviews/MovieReviews";
import s from "./MovieDetailsPage.module.css"

export function MovieDetailsPage () {
  
  const [film, setFilm] = useState({})
  const [reviews, setReviews] = useState([])
  const {poster_path, title, popularity, overview, genres} = film
  const { movieId } = useParams()
  const { url } = useRouteMatch()
  console.log(movieId)

  useEffect(() => {
    fetchFilmsByID(movieId).then(setFilm)
    fetchFilmsReviews(movieId).then(setReviews)
    console.log(reviews)
  }, [])
  return (
    <div>
      <NavLink to='/'><button>Go back</button></NavLink>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <span className={s.movieDitals}>User Score: {popularity}</span>
      <span className={s.movieDitalsTitle}>Overview</span>
      <span className={s.movieDitals}>{overview}</span>
      {genres && <span className={s.movieDitalsTitle}>Genres</span>}
      {genres && genres.map(genre => (<span className={s.movieDitals}>{genre.name}</span>))}
      <hr />
      <span className={s.movieDitalsTitle}>Additional information</span>
      <hr />
      <ul>
        <li key='Cast'>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li key='Reviews'>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Route path={`${url}/cast`}>
        <Cast cast={movieId} />
      </Route>

      <Route exact path={`${url}/reviews`}>
        <MovieReviews reviews={movieId} />
      </Route>
    </div>
  )
}