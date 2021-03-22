import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger'

const Navi = styled.div`
//This is functionally the same as a Layout.jsx
ul {
    display:flex;
    text-decoration: none;
    list-style: none;
    padding: 0;
    justify-content: space-around;
    color: inherit;
}

li{
    font-size: 35px;
} 

.nav-links{
    text-decoration: none;
    transition: all .1s ease-in-out; 
    color: inherit;
    font-family: 'Pinyon Script', cursive;
    font-size: 20px;
}

.nav-links:hover{
    transform: scale(1.05); 
    color: #404040 !important;
    font-weight: 700 ;
    background: none;
    transition: all 0.1s ease 0s;
}

.nav-title{
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    font-size: calc(50px + 1vw);
    font-family: 'Rouge Script', cursive;
}

.nav-bar{
    position: fixed;
    width: 100vw;
    top: 0;
    padding-top: 70px;
    /* background-color: floralwhite; */
    z-index: 10;
}

.nav-title-link{
    text-decoration: none;
    color: inherit;
    transition: all .3s ease-in-out; 
}

.nav-title-link:hover{
    transform: scale(1.1);
}
  .our-story {
      /* text-shadow: ${(props) => props.pathname.match(/^\/our-story/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/our-story/) ? "bold" : "none"};
  }
  
  .travel {
      /* text-shadow: ${(props) => props.pathname.match(/^\/travel/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/travel/) ? "bold" : "none"};
  }
  
  .pictures {
      /* text-shadow: ${(props) => props.pathname.match(/^\/pictures/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/pictures/) ? "bold" : "none"};
  }
  
  .cork-board {
      /* text-shadow: ${(props) => props.pathname.match(/^\/corkboard/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('corkboard') ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/registration/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('registration') ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/login/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('login') ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/create-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('create-post') ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/edit-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('edit-post') ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/user-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.includes('user-post') ? "bold" : "none"};
  }
  
  .registry {
      /* text-shadow: ${(props) => props.pathname.match(/^\/registry/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/registry/) ? "bold" : "none"};
  }
  
  .short-nav-title{
      display:none;
  }

  .layout-children {
    margin-top: 260px;
    @media screen and (max-width: 625px) {
    margin-top: 120px;
    min-height: 98vh;
  }
}

@media screen and (max-width:625px) {
    /* The following CSS was inspired by the CSS-Tricks.com site */
    .mobile-nav-links {
        display:flex;
        justify-content:left;
    }
    
    .nav-ul-div{
        display:none;
        text-decoration: none;
        color: inherit;
        font-family: 'Pinyon Script', cursive;
        font-size: 13px;
        flex-flow: row wrap;
        margin: 5px 15px 1px 15px;
    }

    .nav-title {
        margin-top: -50px;
    }
  }

@media screen and (max-width:475px) {
    .nav-title{
        display:none;
    }
    .short-nav-title{
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: inherit;
        padding-top: 20px;
        font-size: calc(50px + 1vw);
        font-family: 'Rouge Script', cursive;
        margin-top: -70px;
    }
    
}
`
function Layout({ children }) {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false);
    const [isBurgerClick] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const handleBodyClickClose = () => {
        open && setOpen(false)
    }

    return (
        <div className="layout">
            <Navi pathname={pathname}>
                <div className='nav-bar'>
                    <span className='nav-title'><Link to="/" className='nav-title-link'>William & Clarissa</Link></span>
                    <span className='short-nav-title'><Link to="/" className='nav-title-link'>W & C</Link></span>
                    <Burger handleClick={handleClick} open={open}
                        setOpen={setOpen}
                        isBurgerClick={isBurgerClick} />
                    <hr />

                    <div className="nav-ul-div">
                        <ul className='nav-ul'>
                            <Link className='nav-links our-story' to='/our-story'><li>Our Story</li></Link>
                            <Link className='nav-links travel' to='/travel'><li>Travel</li></Link>
                            <Link className='nav-links pictures' to='/pictures'><li>Pictures</li></Link>
                            <Link className='nav-links cork-board' to='/corkboard'><li>Cork Board</li></Link>
                            <Link className='nav-links registery' to='/registry'><li>Registry</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="layout-children"
                    onClick={handleBodyClickClose}
                >
                    {children}
                </div>

            </Navi >
        </div>
    );
}

export default Layout;