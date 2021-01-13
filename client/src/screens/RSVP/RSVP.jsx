// import React, { useState } from 'react';
// import Nav from '../../shared/nav'
// import { createRSVP } from '../../services/rsvp'
// // import { Redirect, Link, useHistory } from 'react-router-dom';
// import './RSVP.css'

// function RSVP(props) {
//     const [isCreated, setCreated] = useState(false)
//     const [newRSVP, setNewRSVP] = useState({
//         firstname: '',
//         lastname: '',
//         entree: ''
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const created = await createRSVP(newRSVP)
//         setCreated({ created })
//         if (isCreated) {
//             alert('RSVP Confirmed')
//             // return <Redirect to={`/corkboard`} />
//         }
//     }

//     const handleChange = (event) => {
//         const { name, value } = event.target
//         setNewRSVP({
//             ...newRSVP,
//             [name]: value
//         })
//     }

//     return (
//         <>
//             <div>
//                 <Nav />
//             </div>
//             <div className="rsvp-parent-div">
//                 <div className="rsvp">
//                     <form className="rsvp-form" onSubmit={handleSubmit}>
//                         <input
//                             className="rsvp-name"
//                             placeholder='First Name'
//                             value={newRSVP.firstname}
//                             name='firstname'
//                             required
//                             onChange={handleChange}
//                         />
//                         <input
//                             className="rsvp-name"
//                             placeholder='Last Name'
//                             value={newRSVP.lastname}
//                             name='lastname'
//                             required
//                             onChange={handleChange}
//                         />
//                         {/* This onChange function was inspired by 2 solutions on stack overflow */}
//                         <select className="rsvp-name" id="rsvp-entree"
//                             // My previous handlechange knew how to update, but we had to wrap the prev state so it wouldn't lose the other values.
//                             onChange={(e) => setNewRSVP(prevState => (
//                                 {
//                                     ...prevState, entree: e.target.value
//                                 })
//                             )}
//                             value={newRSVP.entree}
//                             required >
//                             <option>Select an Entree</option>
//                             <option value="Steak Option">Steak Option</option>
//                             <option value="Seafood Option">Seafood Option</option>
//                             <option value="Vegan Option">Vegan Option</option>
//                         </select>
//                         <input type="submit" value="Confirm" />
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default RSVP;