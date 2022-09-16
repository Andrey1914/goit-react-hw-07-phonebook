import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsActions';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
}
