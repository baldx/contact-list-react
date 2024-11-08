function Contacts({contacts}) {
console.log(contacts);

    return (
        <>
            <ul>
                {contacts.map((contact, index) => {
                    return <li>
                        <div className="firstName">{contact.firstName}</div>
                        <div className="lastName">{contact.lastName}</div>
                        <div className="birthDate">{contact.birthDate}</div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Contacts;