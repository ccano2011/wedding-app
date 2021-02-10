import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  .mobile-nav-links {
        display:none;
    }
.link-class {
    text-decoration: none;
    color: black;
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
      margin-left: 25px;
      margin-top: 35px;
    }

    #bottom-link{
        margin-bottom: 20vh;
    }

}
`;
const MobileNav = ({ open, setOpen, isBurgerClick }) => {
    const routes = [
        {
            title: "Our Story",
            path: "/our-story"
        },
        {
            title: "Travel",
            path: "/travel"
        },
        {
            title: "Pictures",
            path: '/pictures'
        },
        {
            title: "Cork Board",
            path: "/corkboard",

        },
        {
            title: "Registry",
            path: "/registry",
            id: "bottom-link"
        }
    ]
    return (
        <Ul className='mobile-menu' open={open} >
            <div></div>
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
    );
}

export default MobileNav;