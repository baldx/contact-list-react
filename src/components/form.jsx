import Field from "./fields";

function Form({}) {

    return (
        <>
            <form>
            <Field label="First name" inputType="text" />
            <Field label="Last name" inputType="text" />
            <Field label="Birth date" inputType="date" />
            <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
            </form>
        </>
    )
}

export default Form;