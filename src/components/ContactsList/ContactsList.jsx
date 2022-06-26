import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { Rings } from 'react-loader-spinner';

import { ContactsListItem } from './ContactsListItem';
import s from './ContactsList.module.css';

export const ContactsList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const items = getVisibleContacts();
  return (
    <ul className={s.container}>
      {isLoading && (
        <div className={s.loader}>
          <Rings height="200" width="200" color="#0031f9" ariaLabel="loading" />
        </div>
      )}
      {isSuccess &&
        items.map(({ id, name, number }) => (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        ))}
      {items && items.length === 0 && (
        <span className={s.text}> No contacts </span>
      )}
    </ul>
  );
};
