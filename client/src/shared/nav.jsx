import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <>
            <div>
                <Link to="/">William & Clarissa</Link>
            </div>
            <div>
                <ul>
                    <Link to='/our-story'><li>Our Story</li></Link>
                    <Link to='/travel'><li>Travel</li></Link>
                    <Link to='/pictures'><li>Pictures</li></Link>
                    <Link to='/corkboard'><li>Cork Board</li></Link>
                    <Link to='/registry'><li>Registry</li></Link>
                    <Link to='/RSVP'><li>RSVP</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Nav;