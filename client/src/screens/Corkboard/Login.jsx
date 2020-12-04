import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav from '../../shared/Nav'


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
        <>
            <Nav />
            <form onSubmit={(e) => {
                e.preventDefault();
                props.handleLogin(formData);
            }}>
                <h3>Login</h3>
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
                <Link to='/register'>Register</Link>
                <button>Submit</button>
            </form>
        </>
    )
}
