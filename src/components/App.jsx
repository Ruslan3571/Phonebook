import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/operations';
import s from './Loader/Loader.module.css';
import { AppBar } from './pages/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Contacts } from './pages/Contacts/Contacts';
import { Loader } from './Loader/Loader';
import {
  selectIsLoadingAuth,
  selectIsLoadingContacts,
} from './redux/selectors';
import { NotFound } from './pages/NotFound';

export function App() {
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {(isLoadingContacts || isLoadingAuth) && <Loader />}
      <AppBar />
      <Routes>
        <Route path="/" element={<h1 className={s.phonebook}>Phonebook</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
