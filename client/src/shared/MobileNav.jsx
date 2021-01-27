import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Ul = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Pinyon+Script&family=Rouge+Script&family=Tangerine:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
    @media (max-width: 625px) {
    
    flex-flow: column nowrap;
    background-color: floralwhite;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 240px;
    padding-top: 10px;
    margin-top: 0px;
    transition: transform 0.3s ease-in-out;
    z-index:10;

    .mobile-nav-links {
      color: black;
      text-decoration:none;
      font-family: 'Pinyon Script', cursive;
      font-size: 40px;
      margin-left: 10px;
      margin-top: 0px;
    }

    #bottom-link{
        padding-bottom: 20vh;
    }

}
`;

const MobileNav = ({ open }) => {
    return (
        <Ul open={open} >
            <div></div>
            {/* <Link className='mobile-nav-links home' to='/'><li className="mobile-nav-links">Home</li></Link> */}
            <Link className='mobile-nav-links story' to='/our-story'><li className="mobile-nav-links">Our Story</li></Link>
            <Link className='mobile-nav-links travel' to='/travel'><li className="mobile-nav-links">Travel</li></Link>
            <Link className='mobile-nav-links pictures' to='/pictures'><li className="mobile-nav-links">Pictures</li></Link>
            <Link className='mobile-nav-links corkboard' to='/corkboard'><li className="mobile-nav-links">Cork Board</li></Link>
            <Link className='mobile-nav-links registery' to='/registry'><li className="mobile-nav-links" id="bottom-link">Registry</li></Link>
        </Ul>
    );
}

export default MobileNav
