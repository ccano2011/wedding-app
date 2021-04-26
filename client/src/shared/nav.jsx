import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll' //This is an alias to workaround { Link } declarations
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'

const NavComponent = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#ffffff' : 'transparent')};
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0 2px 4px 0 rgb(0 0 0 / 7%)' : 'none')};
    /* margin-top: -80px; */
    /* height:80px; */
    padding-bottom:0px;
    position:fixed;
    top: 0;
    width: 100%;
    font-size:1rem;
    top:0;
    z-index:10;
    transition:0.8s all ease;
    @media screen and (max-width:768px) {
        height: 70px;
        /* width: 100vw; */
    }
`;
const NavbarContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-around;
    z-index:1;
    padding-top: 0px;

`;
const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:black;
}
`;
const NavMenu = styled.ul`
    display: contents;
    list-style: none;
    @media screen and (max-width:768px){
    display:none;
}
`;

const NavItem = styled.li`
    text-decoration: none;
    transition: all .1s ease-in-out;
    color: inherit;
    font-family: 'Josefin Sans', sans-serif;
    height:80px;
`;
const NavLinks = styled(LinkScroll)`
font-weight:300;
display: flex;
justify-content: space-around;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height:100%;
cursor: pointer;
&.active{
    font-weight:700;
}
`;
function Layout({ children, toggle }) {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <NavComponent className="layout" scrollNav={scrollNav} onClick={toggle}>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks to='/'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                        </NavItem>*/}
                        <NavItem>
                            <NavLinks to='our-story' smooth={true} duration={500} spy={true} exact='true' offset={-80}>OUR STORY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='travel' smooth={true} duration={500} spy={true} exact='true' offset={-80}>TRAVEL</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='RSVP' smooth={true} duration={500} spy={true} exact='true' offset={-80}>RSVP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='registry' smooth={true} duration={500} spy={true} exact='true' offset={-80}>REGISTRY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='pictures' smooth={true} duration={500} spy={true} exact='true' offset={-80}>PICTURES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='cork-board' smooth={true} duration={500} spy={true} exact='true' offset={-80}>CORKBOARD</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </NavComponent>
            {children} </>

    );
}

export default Layout;
