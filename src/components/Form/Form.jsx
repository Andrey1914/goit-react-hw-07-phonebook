import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsAPI';
import Loader from 'components/Loader/Loader';
import { Input, Label } from './FormStyled';
import { Box } from 'components/Box';
import { StyledButton } from 'components/Button/ButtonStyled';
import { IoMdPersonAdd } from 'react-icons/io';

export default function Form() {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setContactName(value);
    }
    if (name === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      data?.some(({ name }) => name.toLowerCase() === contactName.toLowerCase())
    ) {
      reset();
      return alert(`${contactName} is already in contacts`);
    }
    addContact({ name: contactName, phone });
    reset();
  };

  const reset = () => {
    setContactName('');
    setPhone('');
  };

  return (
    <>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
      >
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={contactName}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Box
          display="flex"
          justifyContent="center"
          pb={4}
          borderBottom="normal"
        >
          <StyledButton type="submit">
            Add contact
            <IoMdPersonAdd size={20} />
          </StyledButton>
        </Box>
      </Box>
      {isLoading && <Loader />}
    </>
  );
}
