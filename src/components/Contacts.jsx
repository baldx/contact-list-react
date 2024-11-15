function Contacts({contacts, removeContact}) {

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
    
    function calulcateDaysTillBirthday(birthdate) {
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

    return (
        <>
            <ul>
                {contacts.map((contact, index) => {
                    return <li>
                        <div className="firstName" key={contact.firstName + index}>Name: {contact.firstName}</div>
                        <div className="lastName" key={contact.lastName + index}>Last name: {contact.lastName}</div> {/* display different contact info */}
                        <div className="birthDate" key={contact.birthDate + index}>Birthday: {contact.birthDate}</div>
                        <div className="age" key={"daysLeft" + index}>{"Age: " + calculateAge(contact.birthDate)}</div>
                        <div className="daysLeft" key={calulcateDaysTillBirthday(contact.birthDate) + index}>{"Days left: " + calulcateDaysTillBirthday(contact.birthDate)}</div>
                        <button className="removeContact" onClick={removeContact}>Remove contact</button>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Contacts;