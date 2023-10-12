import { useDispatch, useSelector } from "react-redux";
import { Button, ContactItem, Text } from "./ContactList.styled"
import { deleteContact, getContacts } from "redux/contactsSlice";
import { getFilter } from "redux/filterSlice";

export const ContactList = () => {
    const contactList = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();
    const filterContacts = contactList.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase()));

    return (
        <ul>
            {filterContacts.map(({ id, name, number }) =>
                <ContactItem key={id}>
                    <p>{name}: {number}</p>
                    <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                </ContactItem>)}
            { filterContacts.length <= 0 && <Text>You don't have contacts</Text>}
      </ul>
    )
}

