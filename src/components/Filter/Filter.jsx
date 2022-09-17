import { Input } from 'components/Form/FormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsActions';
import { Label } from './FilterStyled';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </Label>
  );
}
