import { useHistory } from 'react-router';

import '../Styles/HomeView.css';

const HomeView = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contacts');
  };
  return (
    <div className="HomeContainer">
      <h1>Welcome</h1>
      <div className="btnContainer">
        <button className="HomeBtn" onClick={handleClick}>
          Go to Phonebook
        </button>
      </div>
    </div>
  );
};

export default HomeView;
