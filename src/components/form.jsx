import Field from "./Fields";

function Form({addContact}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const firstName = e.target.elements.FirstName.value; //get the values
        const lastName = e.target.elements.LastName.value;
        const birthDate = e.target.elements.BirthDate.value;

        const newContact = { firstName, lastName, birthDate }; //add them to a new contact

        addContact(newContact); //update contact state

        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <Field label="First name" inputType="text" value=""/>
            <Field label="Last name" inputType="text" value=""/>
            <Field label="Birth date" inputType="date" value=""/>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;