import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink, Navigate } from 'react-router-dom';

import s from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <div className={s.container}>
          <h1>
            Welcome to the phonebook to take advantage of all the features,
            register or login.
          </h1>
          <NavLink to="/register" className={s.link}>
            <button type="button" className={s.btn}>
              Register
            </button>
          </NavLink>
          <NavLink to="/login" className={s.link}>
            <button type="button" className={s.btn}>
              Login In
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}
