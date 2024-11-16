import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Contacts from './components/Contacts';
import Sorting from './Sorting';

function App() {
  const [contacts, setContacts] = useState([ //default state
    {firstName: "John", lastName: "Doe", birthDate: "2001-04-16"},
    {firstName: "Boe", lastName: "Jiden", birthDate: "1899-03-21"}
  ]);

  function addContact(newContact) { //appends new contacts to contacts array
    setContacts(prevContact => [...prevContact, newContact]); //use spread operator to add previous contacts + new ones
  };
  
  function reloadContacts(newContacts) {
    setContacts([...newContacts]);
  }

  function removeContact(contact) {
    const updatedContacts = contacts.filter((item) => item !== contact);
    reloadContacts(updatedContacts);
  }

  return (
    <>
      <Form addContact={addContact}/>
      <Sorting contacts={contacts} reloadContacts={reloadContacts}/>
      <Contacts contacts={contacts} removeContact={removeContact}/>
    </>
  )
}

export default App
