import { logout } from 'components/redux/operations';
import { selectUserName } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { VscAccount } from 'react-icons/vsc';
import s from '../../components/pages/Contacts/ContactList/ContactList.module.css';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', margin: '0px', alignItems: 'center' }}>
      <p style={{ margin: '0', marginRight: '10px' }}>
        <VscAccount /> {name}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(logout());
          navigate('/');
          Notify.warning('Please login or register');
        }}
      >
        Sign Out
      </button>
    </div>
  );
};
