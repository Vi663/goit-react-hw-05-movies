import { useState, useEffect } from 'react'
import { fetchFilmsReviews } from "../../servises/fetchAPI";
import s from './MovieReviews.module.css'

export default function MovieReviews({movieId}) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
      fetchFilmsReviews(movieId).then(setReviews)
      console.log(reviews)
   }, [])
  
  return (
    <div>
      {reviews.results && reviews.results.map(({ id, author, content }) => (
        <ul className={s.reviewsList}>
          <li className={s.reviewsListItem} key={id}>
            <h1>Author: {author}</h1>
            <span>{content}</span>
          </li>
        </ul>
      ))}
      {reviews.results <= 0 &&
        <span>No reviews for this movie</span>}
    </div>
  )
}