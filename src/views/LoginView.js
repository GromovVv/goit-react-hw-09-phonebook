import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../redux/auth/auth-operations';

import '../Styles/LoginView.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="LoginSection">
      <h1 className="LoginTitle">Login</h1>

      <form onSubmit={handleSubmit} className="LoginForm" autoComplete="on">
        <label className="LoginLabel">
          E-mail
          <input
            className="LoginInput"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="LoginLabel">
          Password
          <input
            className="LoginInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <div className="btnContainer">
          <button type="submit" className="LoginBtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
