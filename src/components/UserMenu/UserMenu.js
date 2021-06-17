import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import './UserMenu.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className="UserMenuContainer">
      <img src={avatar} alt="avatar" width="32" className="avatar" />
      <p className="UserMenuName">Hallo, {name}</p>
      <button
        type="button"
        className="USerMenuBtn"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
