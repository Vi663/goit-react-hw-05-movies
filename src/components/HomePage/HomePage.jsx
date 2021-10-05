import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrendings } from "../../servises/fetchAPI";
import { toast } from 'react-toastify';

export default function HomePage() {
  const [films, setFilms] = useState([])
  const { url } = useRouteMatch()

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { results } = await fetchTrendings();
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