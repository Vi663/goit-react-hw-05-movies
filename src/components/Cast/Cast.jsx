import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { FetchFilmsByID, FetchFilmsCast } from "../../servises/FetchAPI";

export function Cast() {
  const [film, setFilm] = useState({})
  const [team, setTeam] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    FetchFilmsByID(movieId).then(setFilm)
    FetchFilmsCast(movieId).then(setTeam)
  }, [movieId])

  return (
    <div>
      {team.map(({ id, profile_path, name, character }) => (
        <ul>
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
            <span>{name}</span>
            <span>Character: {character}</span>
          </li>
        </ul>
      ))}
    </div>
  )
}