import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};
