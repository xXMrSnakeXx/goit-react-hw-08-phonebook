import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';

import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div className={s.container}>
      <h2>Find contacts by name</h2>
      <input className={s.input} onChange={filterChange} value={filter}></input>
    </div>
  );
};
