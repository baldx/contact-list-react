import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Contacts from './components/Contacts';
import Sorting from './Sorting';

function App() {

  const calculateAge = (birthdate) => {
    const today = new Date(); //get todays date
    const birthDate = new Date(birthdate); //get bithdays date

    let age = today.getFullYear() - birthDate.getFullYear(); //calulcate age diff
    const monthDiff = today.getMonth() - birthDate.getMonth(); //calculate month diff

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) { //logic to check when birthday is in same month
        age--;
    }

    return age;
}

function calculateDaysTillBirthday(birthdate) {
    const today = new Date(); //get todays date
    const birthDate = new Date(birthdate); //get bithdays date

    birthDate.setFullYear(today.getFullYear()); //sets the years to be the same

    if (today > birthDate) {
        birthDate.setFullYear(today.getFullYear() + 1); //sets birthDate a year forward if birthday already passed
    }

    const diffInMilliseconds = birthDate - today; //calculate time

    const daysLeft = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)); //calculate daysleft

    return daysLeft;
}
  const [contacts, setContacts] = useState([ //default state
    {firstName: "John", lastName: "Doe", birthDate: "2001-04-16", creation: 0, age: calculateAge("2001-04-16"), daysLeft: calculateDaysTillBirthday("2001-04-16")},
    {firstName: "Boe", lastName: "Jiden", birthDate: "2006-03-21", creation: 1, age: calculateAge("2006-03-21"), daysLeft: calculateDaysTillBirthday("2006-03-21")}
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
      <Form addContact={addContact} calculateAge={calculateAge} calculateDaysTillBirthday={calculateDaysTillBirthday}/>
      <Sorting contacts={contacts} reloadContacts={reloadContacts} />
      <Contacts contacts={contacts} removeContact={removeContact} calculateAge={calculateAge} calculateDaysTillBirthday={calculateDaysTillBirthday} />
    </>
  )
}

export default App
