import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './contactsActions';

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default filter;
