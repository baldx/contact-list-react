import { useState } from "react";

function Sorting({contacts, reloadContacts}) {
const [sortingStatus, setSortingStatus] = useState('Creation');

const sort = () => {
    if (sortingStatus === 'Creation') {
        const sortedContacts = [...contacts].sort((contact1, contact2) => {
            return contact1.firstName.localeCompare(contact2.firstName) //compares the strings and returns 1 or -1 depending on order or 0 if same
        }); //sorts list to ascending name order
        reloadContacts(sortedContacts);
        setSortingStatus('Name');
    }
    if (sortingStatus === 'Name') {
        const sortedContacts = [...contacts].sort((contact1, contact2) => {
            const age1 = contact1.age; // adjust this to match the age property in contact object
            const age2 = contact2.age;
            
            // sorting in ascending order
            if (age1 > age2) return 1;
            if (age1 < age2) return -1;
            return 0;
        });
        reloadContacts(sortedContacts);
        setSortingStatus('Age')
    }
    if (sortingStatus === 'Age') {
        const sortedContacts = [...contacts].sort((contact1, contact2) => {//iterates through contacts, compares first contact and second contact with each other, then 2nd contact with 3rd, etc
            if (contact1.daysLeft > contact2.daysLeft) return 1; //logic for comparing days left ascending order
            if (contact1.daysLeft < contact2.daysLeft) return -1;
            return 0;
        });
        reloadContacts(sortedContacts);
        setSortingStatus('Days left until birthday');
    }
    if (sortingStatus === 'Days left until birthday') {
        const sortedContacts = [...contacts].sort((contact1, contact2) => {
            if (contact1.creation > contact2.creation) return 1; //logic to check for creation order ascending order
            if (contact1.creation < contact2.creation) return -1;
            return 0;
        });
        reloadContacts(sortedContacts);
        setSortingStatus('Creation');
    }

}

    return (
        <>
            <button className="sorting" onClick={sort}>{"Currently sorted by " + sortingStatus}</button>
        </>
    )
}

export default Sorting;