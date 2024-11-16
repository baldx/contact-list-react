function Contacts({contacts, removeContact, calculateAge, calculateDaysTillBirthday}) {

    return (
        <>
            <ul>
                {contacts.map((contact, index) => {
                    return <li>
                        <div className="firstName" key={contact.firstName + index}>Name: {contact.firstName}</div>
                        <div className="lastName" key={contact.lastName + index}>Last name: {contact.lastName}</div> {/* display different contact info */}
                        <div className="birthDate" key={contact.birthDate + index}>Birthday: {contact.birthDate}</div>
                        <div className="age" key={"daysLeft" + index}>{"Age: " + calculateAge(contact.birthDate)}</div>
                        <div className="daysLeft" key={calculateDaysTillBirthday(contact.birthDate) + index}>{"Days left: " + calculateDaysTillBirthday(contact.birthDate)}</div>
                        <button className="removeContact" onClick={() => removeContact(contact)}>Remove contact</button>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Contacts;