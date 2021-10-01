import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { fetchFilmsByID, fetchFilmsReviews } from "../../servises/FetchAPI";

export function MovieReviews({movieId}) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
      // fetchFilmsReviews(movieId).then(setReviews)
      // console.log(reviews)
   }, [])
  
  return (
    <div>
      {reviews.results && reviews.results.map(({ id, author, content }) => (
        <ul>
          <li key={id}>
            <h1>Author: {author}</h1>
            <span>{content}</span>
          </li>
        </ul>
      ))}
    </div>
  )
}