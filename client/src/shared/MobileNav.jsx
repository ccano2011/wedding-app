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
            <li className="mobile-nav-links"><Link className='mobile-nav-links' to='/our-story'>Our Story</Link></li>
            <li className="mobile-nav-links"><Link className='mobile-nav-links' to='/travel'>Travel</Link></li>
            <li className="mobile-nav-links"><Link className='mobile-nav-links' to='/pictures'>Pictures</Link></li>
            <li className="mobile-nav-links"><Link className='mobile-nav-links' to='/corkboard'>Cork Board</Link></li>
            <li className="mobile-nav-links" id="bottom-link"><Link className='mobile-nav-links' to='/registry'>Registry</Link></li>
        </Ul>
    );
}

export default MobileNav
