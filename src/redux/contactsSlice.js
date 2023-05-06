import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/Contacts';

const initialContactsState = {
  contactsList: initialContacts,
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contactsList.push(action.payload);
      },
      // prepare: ({ id, name, number }) => {
      //     return {
      //         payload: {
      //             id,
      //             name,
      //             number,
      //         },
      //     };
      // },
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsList.splice(index, 1);
    },
  },
});

export const getContacts = state => state.contacts.contactsList;
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReduser = contactsSlise.reducer;
