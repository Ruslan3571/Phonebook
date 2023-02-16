import { selectIsAuth } from 'components/redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import s from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <header>
      <ul className={s.list}>
        <li className={s.items}>
          <Link to="/">Home</Link>
        </li>

        {!isAuth && (
          <li className={s.items}>
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
        {isAuth && (
          <li className={s.items}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
        {!isAuth && (
          <li className={s.items}>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {isAuth && <UserMenu />}
      </ul>
    </header>
  );
};
