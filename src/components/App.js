import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyle";
import {Layout} from "./Layout.styled"

export const App = () => {
  return (<Layout>
      <h1>Phonebook</h1>
      <ContactForm/>
      <Filter/>
      <h2>Contacts</h2>
      <ContactList/>
      <GlobalStyle/>
    </Layout>)
};
