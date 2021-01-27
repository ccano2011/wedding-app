import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Ul = styled.ul`
.mobile-nav-links {
        display:none;
    }
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
      display:flex;
      text-align:left;
      color: black;
      text-decoration:none;
      font-family: 'Pinyon Script', cursive;
      font-size: 40px;
      margin-left: 10px;
      margin-top: 35px;
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
            <Link className='mobile-nav-links' to='/our-story'><li className="mobile-nav-links">Our Story</li></Link>
            <Link className='mobile-nav-links' to='/travel'><li className="mobile-nav-links">Travel</li></Link>
            <Link className='mobile-nav-links' to='/pictures'><li className="mobile-nav-links">Pictures</li></Link>
            <Link className='mobile-nav-links' to='/corkboard'><li className="mobile-nav-links">Cork Board</li></Link>
            <Link className='mobile-nav-links' to='/registry'><li className="mobile-nav-links" id="bottom-link">Registry</li></Link>
        </Ul>
    );
}

export default MobileNav
