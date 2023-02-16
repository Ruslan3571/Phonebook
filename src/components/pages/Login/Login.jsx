import { login } from 'components/redux/operations';
import { selectIsAuth } from 'components/redux/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import s from '../Contacts/ContactForm/ContactForm.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <form className={s.contactForm} onSubmit={handleSubmit}>
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
          Log in
        </button>
      </form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
