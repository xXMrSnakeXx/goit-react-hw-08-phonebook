import { NavLink } from 'react-router-dom';
import s from './AuthenticationNav.module.css';

export default function AuthenticationNav() {
  return (
    <div className={s.container}>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive ? [s.link, s.active].join(' ') : s.link;
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive ? [s.link, s.active].join(' ') : s.link;
        }}
      >
        Registration
      </NavLink>
    </div>
  );
}
