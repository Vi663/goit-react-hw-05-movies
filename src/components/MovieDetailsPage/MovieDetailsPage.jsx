import { useState, useEffect, lazy} from 'react'
import { Route, NavLink, useParams, useLocation} from "react-router-dom";
import { fetchFilmsByID } from "../../servises/fetchAPI";
import s from "./MovieDetailsPage.module.css"

const Cast = lazy(() => import('../Cast/Cast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export default function MovieDetailsPage () {
  
  const [film, setFilm] = useState({})
  const {poster_path, title, popularity, overview, genres} = film
  const { movieId } = useParams()
  const location = useLocation()

  useEffect(() => {
    fetchFilmsByID(movieId).then(setFilm)
  }, [movieId])

  return (
    <div className={s.movieContainer}>
      <NavLink className={s.btnBack} to='/'><button>Go back</button></NavLink>
      <img className={s.moviePoster} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2 className={s.movieDitailsTitle}>{title}</h2>
      <span className={s.movieDitails}>User Score: {popularity}</span>
      <span className={s.movieDitalsTitle}>Overview</span>
      <span className={s.movieDitals}>{overview}</span>
      {genres && <span className={s.movieDitalsTitle}>Genres</span>}
      {genres && genres.map(genre => (<span className={s.movieDitals}>{genre.name}</span>))}
      <hr />
      <span className={s.movieDitalsTitle}>Additional information</span>
      <hr />
      <ul className={s.additionalInfoList}>
        <li key='Cast'>
          <NavLink className={s.additionalInfoListItem} activeClassName={s.additionalInfoListItemActive} to={{
            pathname: `/movies/${movieId}/cast`,
            state: {from: location},
          }}>Cast</NavLink>
        </li>
        <li key='Reviews'>
          <NavLink className={s.additionalInfoListItem} activeClassName={s.additionalInfoListItemActive} to={{
            pathname: `/movies/${movieId}/reviews`,
            state: {from: location},
          }}>Reviews</NavLink>
        </li>
      </ul>
      <Route path={`/movies/:movieId/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route exact path={`/movies/:movieId/reviews`}>
        <MovieReviews movieId={movieId} />
      </Route>
    </div>
  )
}