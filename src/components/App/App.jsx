import { Route, Switch } from "react-router-dom"
import { useState } from 'react'
import { Navigation } from "../Navigation/Navigation"
import { HomePage } from '../HomePage/HomePage'
import { MovieDetailsPage } from '../MovieDetailsPage/MovieDetailsPage'
import { MoviesPage } from "../MoviesPage/MoviesPage"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [serchInput, setSerchInput] = useState('')

  const onSubmit = (data) => {
    setSerchInput(data)
  }

  return (
    <div>
      <Navigation />
      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>
      
        <Route exact path="/movies">
          <MoviesPage onSubmit={onSubmit} />
        </Route>
        
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      
        <Route>
          <HomePage />
        </Route>
        
      </Switch>
      <ToastContainer />
    </div>
  )
}
