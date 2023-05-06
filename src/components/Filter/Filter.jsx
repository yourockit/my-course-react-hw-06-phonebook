import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          onChange={e => dispatch(setContactsFilter(e.target.value))}
        />
      </label>
    </div>
  );
};
