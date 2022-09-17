import Filter from './Filter/Filter';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Container from './Container/Container';
import Section from './Section/Section';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';

export default function App() {
  return (
    <Container>
      <Global styles={GlobalStyles} />
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Container>
  );
}
