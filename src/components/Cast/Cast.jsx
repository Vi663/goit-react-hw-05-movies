import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { FetchFilmsByID, FetchFilmsCast } from "../../servises/FetchAPI";

export function Cast() {
  const { movieId } = useParams()
  console.log(useParams())
  useEffect(() => {
    FetchFilmsCast(movieId)
  }, [movieId])

  return (
    <div>
      {/* <span>{useParams()}</span> */}
      <span>Hello</span>
      {/* {team.map(({ id, profile_path, name, character }) => (
        <ul>
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
            <span>{name}</span>
            <span>Character: {character}</span>
          </li>
        </ul>
      ))} */}
    </div>
  )
}