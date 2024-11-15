function Field({label, inputType}) {

    function capitalizeLetter(string) { //function to capitalize letters 
        return string.charAt(0).toUpperCase() + string.slice(1); //* takes first character of string and sets to uppercase, then pastes the rest of the string 
    }

    function removeSpace(string) { //removes spaces between words. used for name & id attribute
        const newString = camelCasing(string);
        return newString.split(' ').join('');
    }

    function camelCasing(string) { //camelCasing for attributes
        return string.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    }

    return (
        <>
            <label htmlFor={removeSpace(label)}> {/*create label */}
                {capitalizeLetter(label) + ":"}
                <input type={inputType} name={removeSpace(label)} id={removeSpace(label)} /> {/* create input */}
            </label>
        </>
    )
}

export default Field;