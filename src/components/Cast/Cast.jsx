import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { fetchFilmsByID, fetchFilmsCast } from "../../servises/FetchAPI";

export function Cast({movieId}) {
  const [team, setTeam] = useState([])
  const [film, setFilm] = useState({})

  useEffect(() => {
      fetchFilmsByID(movieId).then(setFilm)
      fetchFilmsCast(movieId).then(setTeam)
      console.log(movieId)
   }, [movieId])
  
  return (
    <div>
      {team.cast && team.cast.map(({ id, profile_path, name, character }) => (
        <ul>
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
            <h1>{name}</h1>
            <span>Character: {character}</span>
          </li>
        </ul>
      ))}
    </div>
  )
}