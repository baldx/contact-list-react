function Contacts({contacts}) {

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
    

    return (
        <>
            <ul>
                {contacts.map((contact, index) => {
                    return <li>
                        <div className="firstName" key={contact.firstName + index}>Name: {contact.firstName}</div>
                        <div className="lastName" key={contact.lastName + index}>Last name: {contact.lastName}</div> {/* display different contact info */}
                        <div className="birthDate" key={contact.birthDate + index}>Birthday: {contact.birthDate}</div>
                        <div className="age" key={"daysLeft" + index}>{"Age: " + calculateAge(contact.birthDate)}</div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Contacts;