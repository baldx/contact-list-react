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

        if (!formValidation(firstName, lastName, birthDate)) {
            alert('Fill in the form, with no numbers')
            return; //if formValidation is not true, return, which exits the function
        }
        
        const newContact = { firstName, lastName, birthDate, creation: increaseCreationID(), age: calculateAge(birthDate), daysLeft: calculateDaysTillBirthday(birthDate)}; //add them to a new contact

        addContact(newContact); //update contact state

        e.target.reset(); //resets the form
        return false;
    }

    function formValidation(firstName, lastName, birthDate) {

        function checkNumbers(string) {
            let containsNumbers = false;

            string.split(' ').forEach(element => { //takes string into array then compares each element (each letter) if its a number. 
                if (typeof element === 'number') containsNumbers = true;
            });
            return containsNumbers;
        }

        const isFirstNameValid = firstName.trim() !== '' && !checkNumbers(firstName); //.trim() - removes whitespace in string
        const isLastNameValid = lastName.trim() !== '' && !checkNumbers(lastName);
        const isBirthDateValid = !isNaN(Date.parse(birthDate)); // check if the date is valid

        return isFirstNameValid && isLastNameValid && isBirthDateValid;
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