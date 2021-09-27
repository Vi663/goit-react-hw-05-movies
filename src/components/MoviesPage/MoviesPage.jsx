import { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams} from "react-router-dom";
import { fetchFilmWithQuery } from "../../servises/FetchAPI";
import { toast } from 'react-toastify';

export function MoviesPage({onSubmit}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [films, setFilms] = useState([])

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
    const fetchFilms = async () => {
      try {
        const { results } = await fetchFilmWithQuery(searchQuery);
        if (results.length === 0) {
          toast.error('Not found!')
        } else {
        setFilms(results)
      }
      } catch (err) {
        toast.error('Not found!:', err.toString())
      }
    }
    fetchFilms()
    console.log(searchQuery)
  }, [searchQuery])

  const handleInputChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase())

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === "") {
      toast.error("Please, fulfill the search form")
    } else {
      onSubmit(searchQuery);
      clearInput();
    }
  }

  const clearInput = () => {
    setSearchQuery('')
  }

  const { url } = useRouteMatch()
  const params = useParams();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
      {films &&
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      }
    </>
  )
}