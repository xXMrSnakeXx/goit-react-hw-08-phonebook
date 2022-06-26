import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <p className={s.text}>Welcome: {name}</p>
      <p className={s.text}>your email: {email}</p>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
