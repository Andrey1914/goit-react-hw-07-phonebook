import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsAPI';
import { MdDelete } from 'react-icons/md';

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
      <Box as="ul" display="flex" flexDirection="column">
        {getVisibleContacts()?.map(({ id, name, phone }) => {
          return (
            <Box
              key={id}
              as="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <p>
                {name}&#32;:&#32;{phone}
              </p>
              <Button onClick={() => deleteContact(id)}>
                Delete <MdDelete size={20} />
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
