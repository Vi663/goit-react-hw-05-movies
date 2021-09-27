import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>Home</NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>Movies</NavLink>
    </nav>
  )
}