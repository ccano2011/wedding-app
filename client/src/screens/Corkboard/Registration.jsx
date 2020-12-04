import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <form >
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
                <button onClick={(e) => {
                    e.preventDefault();
                    props.handleRegister(formData);
                }}>Submit</button>
                <Link to="/corkboard"><button>Cancel</button></Link>
                <div>
                    <h5>Already registered? Click <Link to="/login">HERE</Link> to login </h5>
                </div>
            </form>
        </div>
    )
}

export default Registration;