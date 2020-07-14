import React, {useState} from "react";

const Form = () => {
    const [Crendtials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setCredentials({
            ...CredentialsContainer,
            [e.target.name]: e.target.value
        })
    };

    const login = (event) => {
        event.preventDefault();
        // put auth here with POST request
    }


    return (
        <div>
        <form>
        <label>
        Username:
        <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        <label>
        Password:
        <input type="text" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        </label>
        </form>
        </div>
    )
}

export default Form;
