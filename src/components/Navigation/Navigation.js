import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return isActive ? [s.link, s.active].join(' ') : s.link;
          }}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? [s.link, s.active].join(' ') : s.link;
          }}
        >
          Home page
        </NavLink>
      )}
    </nav>
  );
}
