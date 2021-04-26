import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./Login.css"


export default function Login(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    if (props.currentUser) {
        return <Redirect to={`/`} />
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <div className="login-page-home">
            <form className="login-form-home" onSubmit={(e) => {
                e.preventDefault();
                props.handleLogin(formData);
            }}>
                <h3 className="login-text">Login to Post</h3>

                <input
                    className="username-home-input"
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="username-home-input"
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />

                <div className="buttons-home">
                    <button className='login-button' type="submit">Log In</button>
                    <h3 className="registration-text">First-Time User? Register Below!</h3>
                    <Link to='/registration' className='signup-btn'><button className='signup-btn'>Register</button></Link>
                </div>
            </form>
        </div>
    )
}
