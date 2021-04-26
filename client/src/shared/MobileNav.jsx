import React from 'react';
import { Link as LinkScroll } from 'react-scroll' //This is an alias to workaround { Link } declarations
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled.aside` //aside is an HTML element that is meant to be an acutal aside to the text content
@media screen and (min-width:769px){
display:none;
}
position: fixed;
z-index:999;
width:100%;
height: 100vh;
background:#ffffff;
display:grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '1' : '-100%')};
`;
const CloseIcon = styled(FaTimes)`
color:#d8cbcb;
`;
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const SidebarWrapper = styled.div`
display: none;
@media screen and (max-width:768px){
    display: grid;
}
`;
const SidebarMenu = styled.ul`
display: grid;
grid-template-columns:1fr;
grid-template-rows: repeat(6, 100px);
padding-left:0;
text-align: center;
/* background:floralwhite; */
/* @media screen and (max-width:480px){
    grid-template-rows: repeat(6, 60px);
} */
`;
const SidebarLink = styled(LinkScroll)`
display:flex;
align-items:center;
justify-content:center;
font-size: 1.5rem;
text-decoration: none;
font-family: 'Josefin Sans', sans-serif;
font-weight:300;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration:none;
cursor: pointer;
&:hover{
    color: wheat;
    font-weight:700;
    transition: 0.2s ease-in-out;
}
&.active{
    font-weight:700;
}
`;

function MobileNav({ children, isOpen, toggle }) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon >
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="our-story" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            OUR STORY
                    </SidebarLink>
                        <SidebarLink to="travel" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            TRAVEL
                    </SidebarLink>
                        <SidebarLink to="RSVP" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            RSVP
                    </SidebarLink>
                        <SidebarLink to="registry" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            REGISTRY
                    </SidebarLink>
                        <SidebarLink to="pictures" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            PICTURES
                    </SidebarLink>
                        <SidebarLink to="cork-board" onClick={toggle} smooth={true} duration={500} spy={true} offset={-70}>
                            CORKBOARD
                    </SidebarLink>

                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            {children} </>

    );
}
export default MobileNav;