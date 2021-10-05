import { useState, useEffect } from 'react'
import { fetchFilmsCast } from "../../servises/fetchAPI";
import s from './Cast.module.css'

export default function Cast({movieId}) {
  const [team, setTeam] = useState([])

  useEffect(() => {
      fetchFilmsCast(movieId).then(setTeam)
      console.log(movieId)
   }, [movieId])
  
  return (
    <div>
      <ul className={s.castList}>
        {team.cast && team.cast.map(({ id, profile_path, name, character }) => (
          <li className={s.castListItem} key={id}>
            {profile_path && <img className={s.castListImage} src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />}
            {!profile_path && <h1>no image avaliable</h1>}
            <h2>{name}</h2>
            <span>Character: {character}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}