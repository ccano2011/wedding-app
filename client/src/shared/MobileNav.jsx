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
    // The following was my original code to close the mobile menu when tapping outside the component
    // const ref = useRef(null);
    // useEffect((event) => {
    //     !isBurgerClick && document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // });

    // const handleClickOutside = (event) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //         setOpen(false);
    //     }
    // };


    // The following object was inspired by a YouTube tutorial
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
    /* const { pathname } = useLocation()*/
    return (
        <Ul className='mobile-menu' open={open} >
            <div></div>
            {/* The following is old code */}
            {/* <li className="mobile-nav-links"><Link className="link-class" onClick={() => setOpen(!open)} to='/our-story'>Our Story</Link></li> */}
            {/* <li className="mobile-nav-links"><Link className="link-class" onClick={() => setOpen(!open)} to='/travel'>Travel</Link></li>
            <li className="mobile-nav-links"><Link className="link-class" onClick={() => setOpen(!open)} to='/pictures'>Pictures</Link></li>
            <li className="mobile-nav-links"><Link className="link-class" onClick={() => setOpen(!open)} to='/corkboard'>Cork Board</Link></li>
            <li className="mobile-nav-links" id="bottom-link"><Link className="link-class" onClick={() => setOpen(!open)} to='/registry'>Registry</Link></li> */}
            {/* The following was shown to me courtesy of Daniel. */}
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