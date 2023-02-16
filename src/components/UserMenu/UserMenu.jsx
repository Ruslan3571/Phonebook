import { logout } from 'components/redux/operations';
import { selectUserName } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { VscAccount } from 'react-icons/vsc';
import s from '../../components/pages/Contacts/ContactList/ContactList.module.css';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', margin: '0px', alignItems: 'center' }}>
      <p style={{ margin: '0', marginRight: '10px' }}>
        <VscAccount /> {name}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Sign Out
      </button>
    </div>
  );
};
