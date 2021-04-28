import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
display:none;
.link-class {
    text-decoration: none;
    margin-left: 2vw;
    color: black;
}
  @media (max-width: 768px) {
    display:flex;
    flex-flow: column nowrap;
    background-color: rgba(255,250,240, 0.9);
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
  }
    .mobile-nav-links {
      display:flex;
      text-align:left;
      color: black;
      text-decoration:none;
      font-family: 'Pinyon Script', cursive;
      font-size: 40px;
      height: -webkit-fill-available;
    }
    #bottom-link{
        margin-bottom: 20vh;
    }
    #title{
        font-size:55px;
        letter-spacing:0.8;
        font-family: 'Rouge Script', cursive;
        margin-left: 70px;
        margin-top: 13px;
    }
    .empty-div{
        margin-top:80px;
    }
`;
const MobileNav = ({ children, open, setOpen, isBurgerClick }) => {
    const routes = [
        {
            title: "W & C",
            path: "/",
            id: 'title'
        },
        {
            title: "Our Story",
            path: "/ourstory"
        },
        {
            title: "Travel",
            path: "/travel"
        },
        {
            title: "Meet the Party",
            path: "/party"
        },
        {
            title: "Pictures",
            path: '/photos'
        },
        {
            title: "Registry",
            path: "/registry"
        },
        {
            title: "Corkboard",
            path: "/corkboard",
            id: "bottom-link"

        },
    ]
    return (
        <>
            <Ul className='mobile-menu' open={open} >
                {/* <div className="empty-div"></div> */}
                {routes.map((route, idx) => (
                    <li
                        aria-label={`mobile-link ${idx}`}
                        key={idx}
                        className={`mobile-nav-links  ${route.title.toLowerCase().replace(" ", "-")}`}
                    >
                        <Link
                            to={route.path}
                            id={route?.id} //<- Similar to a guard operator; called optional chaining
                            className="link-class" onClick={() => setOpen(!open)}>{route.title}</Link>
                    </li>
                )
                )}
            </Ul >
            { children}
        </>
    );
}

export default MobileNav;