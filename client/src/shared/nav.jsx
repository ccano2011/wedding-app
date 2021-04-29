import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-router-dom' //This is an alias to workaround { Link } declarations in case there's multiple
import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa'
import Burger from './Burger'
// import { useLocation } from 'react-router-dom';


const NavComponent = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#ffffff' : 'transparent')};
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0 2px 4px 0 rgb(0 0 0 / 7%)' : 'none')};
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
    margin-left: -1vw;
`;
// const MobileIcon = styled.div`
// display:none;
// @media screen and (max-width:768px){
//     display:block;
//     position:absolute;
//     top:0;
//     right:0;
//     transform: translate(-100%,60%);
//     font-size: 1.8rem;
//     cursor:pointer;
//     color:black;
// }
// `;
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
    /* color: inherit; */
    /* font-family: 'Josefin Sans', sans-serif; */
    font-family: 'Pinyon Script', cursive;
    font-size: x-large;
    height:80px;
    @media screen and (max-width:1072px){
    font-size: 20px;
}
`;
const NavLinks = styled(LinkScroll)`
font-weight:300;
display: flex;
justify-content: space-evenly;
align-items: center;
text-decoration: none;
/* padding: 0 1rem; */
height:100%;
cursor: pointer;
color: inherit;
/* transition: transform 330ms ease-in-out; */
&:hover{
transition: transform 150ms ease-in-out;
    transform: scale(1.1);
    /* background-color:hotpink; */
    /* font-weight:700; */
}
#home{
    font-size: 60px;
    font-family: 'Rouge Script', cursive;
    padding-top: 18px;
    @media screen and (max-width:1072px){
    font-size: 40px;
}
    /* background-color:pink; */
}
`;
function Layout({ children, toggle }) {
    const [scrollNav, setScrollNav] = useState(false)
    const [open, setOpen] = useState(false);
    const [isBurgerClick] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const handleBodyClickClose = () => {
        open && setOpen(false)
    }
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
                <NavbarContainer >
                    {/* <MobileIcon>
                        <FaBars />
                    </MobileIcon> */}
                    <Burger handleClick={handleClick} open={open}
                        setOpen={setOpen}
                        isBurgerClick={isBurgerClick} />
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/ourstory' >Our Story</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/travel' >Travel</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/party' >Meet the Party</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/' ><p id="home">W & C</p></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/photos' >Pictures</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/registry' >Registry</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/corkboard' >Corkboard</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </NavComponent>
            <div onClick={handleBodyClickClose}
            > {children} </div>
        </>

    );
}

export default Layout;
