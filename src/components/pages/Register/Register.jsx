import { register } from 'components/redux/operations';
import { selectIsAuth } from 'components/redux/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import s from '../Contacts/ContactForm/ContactForm.module.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  if (!isAuth) {
    return (
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <label className={s.contactLabel}>
          Username
          <input
            className={s.contactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.contactLabel}>
          Email
          <input
            className={s.contactInput}
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.contactLabel}>
          Password
          <input
            className={s.contactInput}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Register
        </button>
      </form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
