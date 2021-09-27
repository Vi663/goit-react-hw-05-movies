import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom";
import { FetchTrendings } from "../../servises/FetchAPI";
import { toast } from 'react-toastify';

export function HomePage() {
  const [films, setFilms] = useState([])
  const { url } = useRouteMatch()

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { results } = await FetchTrendings();
        setFilms(results)
      } catch (err) {
        toast.error('Not found!:', err.toString())
      }
    }
    fetchFilms()
  }, [])

  return (
    <div>
      <h2>Treandings Today</h2>
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`${url}movies/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </ul>
    </div>
  )
  
}