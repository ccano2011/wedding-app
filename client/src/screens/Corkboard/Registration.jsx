import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Registration.css'


function Registration(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    if (props.currentUser) {
        return <Redirect to={`/corkboard`} />
        // console.log("Here's Johnny")
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            {/* <Layout /> */}
            <div className="registration-div">
                <form className="login-form-home">
                    <h3 className="login-text">Register to Post!</h3>
                    {/* <label>Name: */}
                    <input
                        className="username-home-input"
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                    <br />
                    {/* <label>Email: */}
                    <input
                        type='text'
                        name='email'
                        className="username-home-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                    <br />
                    {/* <label>Password: */}
                    <input
                        className="username-home-input"
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {/* </label> */}
                    <br />
                    <div className="buttons-home">
                        <button className='login-button' onClick={(e) => {
                            e.preventDefault();
                            props.handleRegister(formData);
                        }}>Submit</button>
                        <Link to="/corkboard"><button className='cancel-btn'>Cancel</button></Link>
                    </div>
                    <div>
                        <h5 className='registration-text'>Already registered? Click <Link to="/login">HERE</Link> to login </h5>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration;