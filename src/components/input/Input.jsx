
function Input({labelText, name, handleChange, required, type, formStateValue}) {
    const labelInputLink = `book-${name}`;

    return(
        <>
            <label htmlFor={labelInputLink}>{labelText}</label>
            <input type={type}
                   id={labelInputLink}
                   name={name}
                   value={formStateValue}
                   onChange={handleChange}
                   required={required}
                   />
        </>
    );
}

export default Input;
