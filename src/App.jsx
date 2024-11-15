import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState([ //default state
    {firstName: "John", lastName: "Doe", birthDate: "2001-04-16"},
    {firstName: "Boe", lastName: "Jiden", birthDate: "1899-03-21"}
  ]);

  function addContact(newContact) { //appends new contacts to contacts array
    setContacts(prevContact => [...prevContact, newContact]); //use spread operator to add previous contacts + new ones
  };
  
  function reLoadContacts() {
    setContacts(prevContact => [...prevContact]);
  }

  function removeContact(e) {
    contacts.splice(contacts.indexOf(e), 1);
    reLoadContacts();
    console.log(contacts);
    
  }

  return (
    <>
      <Form addContact={addContact}/>
      <Contacts contacts={contacts} removeContact={removeContact}/>
    </>
  )
}

export default App
