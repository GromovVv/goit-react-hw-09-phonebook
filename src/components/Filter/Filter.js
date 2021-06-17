import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import * as actions from '../../redux/phonebook-actions';
import s from './Filter.module.css';

const styles = {
  text: {
    fontSize: 20,
  },
};

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const change = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <label>
      <p style={styles.text}>Find contact:</p>
      <input className={s.input} type="text" value={value} onChange={change} />
    </label>
  );
}

export default Filter;
