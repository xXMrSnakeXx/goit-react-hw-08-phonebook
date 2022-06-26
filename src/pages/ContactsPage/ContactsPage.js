import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
}
