import { selectIsAuth } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const Contacts = () => {
  const isAuth = useSelector(selectIsAuth);
  if (isAuth) {
    return (
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  } else {
    return (
      <h3 style={{ paddingBottom: '10px', color: 'green' }}>
        Please log in or register
      </h3>
    );
  }
};
