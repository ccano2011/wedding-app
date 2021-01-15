import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav from '../../shared/nav'
// import "./Login.css"


export default function Login(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    if (props.currentUser) {
        return <Redirect to={`/corkboard`} />
    }
    // console.log(props.currentUser)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <div className="login-page-home">
            <Nav />
            <form className="login-form-home" onSubmit={(e) => {
                e.preventDefault();
                props.handleLogin(formData);
            }}>
                <div className='input-div'>
                    <label htmlFor='username'><p className='login-label'>Email:</p></label>
                </div>

                <input
                    className="username-home-input"
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <div className='input-div'>
                    <label htmlFor="password"><p className='login-label'>Password:</p></label>
                </div>
                <input
                    className="username-home-input"
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />

                <div className="buttons-home">
                    <button className='login-button' type="submit">Log In</button>

                    <Link to='/registration' className='signup-btn'><button className='signup-btn'>Register</button></Link>
                </div>
            </form>
        </div>
    )
}
