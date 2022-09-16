import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsAPI';

export default function Contacts() {
  const [contacts, setContacts] = useState();
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: loading }] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    data && setContacts(data);
  }, [data]);

  const getVisibleContacts = () =>
    contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      {isLoading && <Loader />}
      {loading && <Loader />}
      <ul>
        {getVisibleContacts()?.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <p>
                {name}&#32;:&#32;{phone}
              </p>
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
