import React, { useState } from 'react';
import Nav from '../../shared/Nav'
import { createRSVP } from '../../services/rsvp'
// import { Redirect, Link, useHistory } from 'react-router-dom';




function RSVP(props) {
    const [isCreated, setCreated] = useState(false)

    const [newRSVP, setNewRSVP] = useState({
        firstname: '',
        lastname: '',
        entree: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const created = await createRSVP(newRSVP)
        setCreated({ created })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewRSVP({
            ...newRSVP,
            [name]: value
        })
    }

    if (isCreated) {
        alert('RSVP Created')
        // return <Redirect to={`/corkboard`} />
    }
    return (
        <>
            <div>
                <Nav />
            </div>
        </>
    );
}

export default RSVP;