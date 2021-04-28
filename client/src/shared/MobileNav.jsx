// import React from 'react';
// import { Link as LinkScroll } from 'react-router-dom' //This is an alias to workaround { Link } declarations
// import styled from 'styled-components';
// import { FaTimes } from 'react-icons/fa';

// const SidebarContainer = styled.aside` //aside is an HTML element that is meant to be an acutal aside to the text content
// @media screen and (min-width:769px){
// display:none;
// }
// position: fixed;
// z-index:999;
// width:100%;
// height: 100vh;
// background:#ffffff;
// display:grid;
// align-items: center;
// top:0;
// left:0;
// transition: 0.3s ease-in-out;
// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
// top:${({ isOpen }) => (isOpen ? '1' : '-100%')};
// `;
// const CloseIcon = styled(FaTimes)`
// color:#d8cbcb;
// `;
// const Icon = styled.div`
// position: absolute;
// top: 1.2rem;
// right: 1.5rem;
// background:transparent;
// font-size:2rem;
// cursor:pointer;
// outline:none;
// `;
// const SidebarWrapper = styled.div`
// display: none;
// @media screen and (max-width:768px){
//     display: grid;
// }
// `;
// const SidebarMenu = styled.ul`
// display: grid;
// grid-template-columns:1fr;
// grid-template-rows: repeat(6, 100px);
// padding-left:0;
// text-align: center;
// /* background:floralwhite; */
// /* @media screen and (max-width:480px){
//     grid-template-rows: repeat(6, 60px);
// } */
// `;
// const SidebarLink = styled(LinkScroll)`
// display:flex;
// align-items:center;
// justify-content:center;
// font-size: 1.5rem;
// text-decoration: none;
// font-family: 'Josefin Sans', sans-serif;
// font-weight:300;
// list-style: none;
// transition: 0.2s ease-in-out;
// text-decoration:none;
// cursor: pointer;
// &:hover{
//     color: wheat;
//     font-weight:700;
//     transition: 0.2s ease-in-out;
// }
// &.active{
//     font-weight:700;
// }
// `;

// function MobileNav({ children, isOpen, toggle }) {
//     return (
//         <>
//             <SidebarContainer isOpen={isOpen} onClick={toggle}>
//                 <Icon >
//                     <CloseIcon />
//                 </Icon>
//                 <SidebarWrapper>
//                     <SidebarMenu>
//                         <SidebarLink to="/ourstory" onClick={toggle}>
//                             OUR STORY
//                     </SidebarLink>
//                         <SidebarLink to="/travel" onClick={toggle}>
//                             TRAVEL
//                     </SidebarLink>
//                         <SidebarLink to="/RSVP" onClick={toggle}>
//                             RSVP
//                     </SidebarLink>
//                         <SidebarLink to="/registry" onClick={toggle}>
//                             REGISTRY
//                     </SidebarLink>
//                         <SidebarLink to="/pictures" onClick={toggle}>
//                             PICTURES
//                     </SidebarLink>
//                         <SidebarLink to="/corkboard" onClick={toggle}>
//                             CORKBOARD
//                     </SidebarLink>

//                     </SidebarMenu>
//                 </SidebarWrapper>
//             </SidebarContainer>
//             {children} </>

//     );
// }
// export default MobileNav;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
display:none;
.link-class {
    text-decoration: none;
    color: black;
}
  @media (max-width: 625px) {
    display:flex;
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
  }
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
    #title{
        font-size:50px;
        letter-spacing:0.8;
        font-family: 'Rouge Script', cursive;
    }
    .empty-div{
        margin-top:80px;
    }
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
            title: "Pictures",
            path: '/photos'
        },
        {
            title: "Corkboard",
            path: "/corkboard",

        },
        {
            title: "Registry",
            path: "/registry",
            id: "bottom-link"
        }
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