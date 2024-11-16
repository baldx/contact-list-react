import { useState } from "react";
import Field from "./Fields";


function Form({addContact, calculateAge, calculateDaysTillBirthday}) {
    const [creationOrder, setCreationOrder] = useState(1);

    function increaseCreationID() {
        setCreationOrder(e => e + 1);
        return creationOrder + 1; //avoids async func
      }  

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const firstName = e.target.elements.FirstName.value; //get the values
        const lastName = e.target.elements.LastName.value;
        const birthDate = e.target.elements.BirthDate.value;

        const newContact = { firstName, lastName, birthDate, creation: increaseCreationID(), age: calculateAge(birthDate), daysLeft: calculateDaysTillBirthday(birthDate)}; //add them to a new contact
        console.log(newContact);
        

        addContact(newContact); //update contact state

        e.target.reset(); //resets the form
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <Field label="First name" inputType="text" value=""/> {/*create input fields in form */}
            <Field label="Last name" inputType="text" value=""/>
            <Field label="Birth date" inputType="date" value=""/>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;