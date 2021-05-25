import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-router-dom' //This is an alias to workaround { Link } declarations in case there's multiple
import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa'
import Burger from './Burger'
import { useLocation } from 'react-router-dom';


const NavComponent = styled.nav`
    /* background: #ffff; */
    /* box-shadow: ${({ scrollNav }) => (scrollNav ? '0 2px 4px 0 rgb(0 0 0 / 7%)' : 'none')}; */
    background-image: ${(props) => props.pathname.match(/^\/home/) ? 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);' : 'transparent'};
    color: ${(props) => props.pathname.match(/^\/home/) ? '#ffff' : '#000'};
    padding-bottom:0px;
    position:fixed;
    top: 0;
    width: 100%;
    font-size:1rem;
    top:0;
    z-index:10;
    transition:0.1s all ease;
    @media screen and (max-width:768px) {
        height: 70px;
        /* width: 100vw; */
    }

`;
const NavbarContainer = styled.div`
    background: ${(props) => props.pathname.match(/^\/party/) ? 'rgba(255,250,240, 0.9)' : 'transparent'};
    height:90px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    z-index:1;
    padding-top: 0px;
    margin-left: -1vw;
    transition:0.4s all ease;
    @media screen and (max-width:768px){
        background-image:none;
    }
`;
const NavMenu = styled.ul`
    display: contents;
    list-style: none;
    @media screen and (max-width:768px){
    display:none;
}
`;
const SecondaryContainer = styled.div`
   display: flex;
    background: ${(props) => props.pathname.match(/^\/photos/) ? 'rgba(255,250,240, 0.9)' : 'transparent'};
    width: 100vw;
    justify-content: space-around;
    @media screen and (max-width:768px){
    display:none;
}
`
const NavItem = styled.li`
    text-decoration: none;
    transition: all .1s ease-in-out;
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
height:100%;
cursor: pointer;
color: inherit;

&:hover{
transition: transform 150ms ease-in-out;
    transform: scale(1.1);
}
#home{
    font-size: 60px;
    font-family: 'Rouge Script', cursive;
    padding-top: 18px;
    @media screen and (max-width:1072px){
    font-size: 40px;
}
}
`;
function Layout({ children, toggle }) {
    const [scrollNav, setScrollNav] = useState(false)
    const [open, setOpen] = useState(false);
    const [isBurgerClick] = useState(false);
    const { pathname } = useLocation()

    const handleClick = () => {
        setOpen(!open)
    }
    console.log(pathname)
    const handleBodyClickClose = () => {
        open && setOpen(false)
    }
    const changeNav = () => {
        if (window.scrollY >= 60) {
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
            <NavComponent className="layout" onClick={toggle} pathname={pathname}>
                <NavbarContainer scrollNav={scrollNav} pathname={pathname}>
                    <Burger handleClick={handleClick} open={open}
                        setOpen={setOpen}
                        isBurgerClick={isBurgerClick} />
                    <SecondaryContainer pathname={pathname}>
                        <NavMenu >
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
                    </SecondaryContainer>
                </NavbarContainer>
            </NavComponent>
            <div onClick={handleBodyClickClose}
            > {children} </div>
        </>

    );
}

export default Layout;