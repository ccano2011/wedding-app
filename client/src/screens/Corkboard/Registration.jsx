import React, { useState } from 'react';

function Registration(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
        }}>
            <h3>Register</h3>
            <label>Name:
            <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Email:
            <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Password:
            <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button>Submit</button>
        </form>)
}

export default Registration;