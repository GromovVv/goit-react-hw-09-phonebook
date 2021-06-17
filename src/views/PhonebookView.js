import { useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Container from '../components/Container';

import { getVisibleContacts } from '../redux/phonebook-selectors';

const styles = {
  section: {
    color: 'white',
    border: ' 2px solid white',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(108, 108, 108, 0.3)',
    boxShadow: '0px 0px 20px 10px rgba(33, 60, 80, 0.28) inset',
  },
  text: {
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
  },
};

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div style={styles.section}>
        <h2 style={styles.title}>Contacts :</h2>
        <p style={styles.text}>Total numbers: {totalContactsCount}</p>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
