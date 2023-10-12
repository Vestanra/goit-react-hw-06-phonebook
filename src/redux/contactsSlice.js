import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsInitialState = {
    contacts: [],
};

const contactsSlise = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare({name, number}) {
                return {
                    payload: {
                    name,
                    number,
                    id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            return { contacts: state.contacts.filter(el => el.id !== action.payload)}
        }
    }
});

export const getContacts = state => state.contacts.contacts;

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;