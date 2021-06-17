import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../redux/auth/auth-operations';

import '../Styles/RegisterView.css';

// const styles = {
//   form: {
//     width: 445,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//     fontSize: 20,
//   },
//   section: {
//     color: 'white',
//     border: '2px solid white',
//     padding: 20,
//     borderRadius: 10,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   btnContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   button: {
//     fontSize: 18,
//     fontWeight: 700,
//     borderRadius: 10,
//     border: ' 2px solid white',
//     color: '#5d8aa8',
//     padding: 10,
//     background: 'white',
//     cursor: 'pointer',
//   },
//   input: {
//     color: '#171718',
//     font: 'inherit',
//     padding: 10,
//     borderRadius: 4,
//     border: '1px solid #bdbdbd',
//     width: 422,
//     outline: 0,
//     fontSize: 20,
//   },
// };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="RegisterSection">
      <h1 className="RegisterTitle">Register</h1>

      <form onSubmit={handleSubmit} className="RegisterForm" autoComplete="on">
        <label className="RegisterLabel">
          Name
          <input
            className="RegisterInput"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="RegisterLabel">
          E-mail
          <input
            className="RegisterInput"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="RegisterLabel">
          Password
          <input
            className="RegisterInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className="btnContainer">
          <button type="submit" className="RegisterBtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
