import { useState } from "react";

function Sorting({contacts, reloadContacts}) {
const [sortingStatus, setSortingStatus] = useState('Creation');

const sort = () => {
    if (sortingStatus === 'Creation') {
        const sortedContacts = [...contacts].sort((name1, name2) => {
            return name1.firstName.localeCompare(name2.firstName)
        }); //sorts list to ascending name order
        reloadContacts(sortedContacts);
        setSortingStatus('Name')
    }
    if (sortingStatus === 'Name') {
        const sortedContacts = [...contacts].sort((age1, age2) => {
            if (age1 > age2 || age1 === age2) return 1;
            else if (age2 < age1) return -1;
            else return 0;
        }); //sorts lists age
        reloadContacts(sortedContacts);
    }
    if (sortingStatus === 'Age') {
        
    }

}

    return (
        <>
            <button className="sorting" onClick={sort}>{"Currently sorted by " + sortingStatus}</button>
        </>
    )
}

export default Sorting;