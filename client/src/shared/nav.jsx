import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
    return (
        <>
            <div className='nav-title'>
                <Link className='nav-title-link' to="/">William & Clarissa</Link>

            </div>
            <div className="mobile-nav-ul-div">
                <ul className='mobile-nav-ul'>
                    <Link className='mobile-nav-links' to='/our-story'><li>Our Story</li></Link>
                    <Link className='mobile-nav-links' to='/travel'><li>Travel</li></Link>
                    <Link className='mobile-nav-links' to='/pictures'><li>Pictures</li></Link>
                    <Link className='mobile-nav-links' to='/corkboard'><li>Cork Board</li></Link>
                    <Link className='mobile-nav-links' to='/registry'><li>Registry</li></Link>
                    <Link className='mobile-nav-links' to='/RSVP'><li>RSVP</li></Link>
                </ul>
            </div>
            <hr />
            <div className="nav-ul-div">
                <ul className='nav-ul'>
                    <Link className='nav-links' to='/our-story'><li>Our Story</li></Link>
                    <Link className='nav-links' to='/travel'><li>Travel</li></Link>
                    <Link className='nav-links' to='/pictures'><li>Pictures</li></Link>
                    <Link className='nav-links' to='/corkboard'><li>Cork Board</li></Link>
                    <Link className='nav-links' to='/registry'><li>Registry</li></Link>
                    <Link className='nav-links' to='/RSVP'><li>RSVP</li></Link>
                </ul>
            </div>

        </>
    );
}

export default Nav;