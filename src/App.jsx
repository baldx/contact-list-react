import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState([
    {firstName: "John", lastName: "Doe", birthDate: "2001-04-16"},
    {firstName: "Boe", lastName: "Jiden", birthDate: "1899-03-21"}
  ]);

  function addContact(newContact) { //appends new contacts to contacts array
    setContacts(prevContact => [...prevContact, newContact]); //use spread operator to add previous contacts + new ones
  }

  return (
    <>
      <Form addContact={addContact}/>
      <Contacts contacts={contacts}/>
    </>
  )
}

export default App
