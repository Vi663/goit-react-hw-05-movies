import { Route, Switch } from "react-router-dom"
import { lazy, Suspense, useState } from 'react'
// import Navigation from "../Navigation/Navigation"
// import HomePage from '../HomePage/HomePage'
// import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage'
// import MoviesPage from "../MoviesPage/MoviesPage"
import { ToastContainer } from 'react-toastify';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import('../Navigation/Navigation' /*webpackChunkName; 'navigation'*/));
const HomePage = lazy(() => import('../HomePage/HomePage' /*webpackChunkName; 'home-page'*/));
const MovieDetailsPage = lazy(() => import('../MovieDetailsPage/MovieDetailsPage' /*webpackChunkName; 'movie-details-page'*/));
const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage' /*webpackChunkName; 'movies-page'*/))

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loader
        type="Rings"
        color="#00BFFF"
        height={70}
        width={70}
        timeout={2000} />}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={HomePage}/>
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  )
}
