import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './nav.css'
import styled from 'styled-components'

const Navi = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Pinyon+Script&family=Rouge+Script&family=Tangerine:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
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
    /* letter-spacing: 1px; */
    background: none;
    transition: all 0.1s ease 0s;
}

.nav-title{
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    padding-top: 70px;
    font-size: calc(50px + 1vw);
    font-family: 'Rouge Script', cursive;
}
.nav-title-link{
    text-decoration: none;
    color: inherit;
    transition: all .3s ease-in-out; 
}

.nav-title-link:hover{
    transform: scale(1.1);
}

.mobile-nav-ul-div{
    display: none;
}

.mobile-nav-ul {
    display: none;
  }

  .story {
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
  
  .corkboard {
      /* text-shadow: ${(props) => props.pathname.match(/^\/corkboard/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/corkboard/) ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/registration/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/registration/) ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/login/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/login/) ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/create-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/create-post/) ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/edit-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/edit-post/) ? "bold" : "none"};
      /* text-shadow: ${(props) => props.pathname.match(/^\/user-post/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/user-post/) ? "bold" : "none"};
  }
  
  .registery {
      /* text-shadow: ${(props) => props.pathname.match(/^\/registry/) ? "9px 9px 9px #ccc7c7" : "none"}; */
      font-weight: ${(props) => props.pathname.match(/^\/registry/) ? "bold" : "none"};
  }
/* 
  .RSVP {
      text-shadow: ${(props) => props.pathname.match(/^\/RSVP/) ? "2px 2px 2px #999" : "none"}
      font-weight: ${(props) => props.pathname.match(/^\/our-story/) ? "600" : "none"};

  } */

  @media screen and (min-width:1440px) {
    .nav-links{
        text-decoration: none;
        transition: all .1s ease-in-out; 
        color: inherit;
        font-family: 'Pinyon Script', cursive;
    }
}


@media screen and (max-width:45em) {
    /* The following CSS was inspired by the CSS-Tricks.com site */
    Link {
        text-decoration: none;

    }
    .nav-ul-div{
        display: none;
    }
    .mobile-nav-ul {
        display: flex;
        flex-flow: row wrap;
      }
    .mobile-nav-ul-div{
        display:flex;
        text-decoration: none;
        justify-content: center;
        color: inherit;
        font-family: 'Pinyon Script', cursive;
        font-size: 24px;

    }
    .mobile-nav-links {
        text-decoration: none;
        font-size: 25px;
        display: flex;
        color: inherit;
        margin: 0 15px 15px 15px;
    }
  
  }
  `
function Nav(props) {

    const { pathname } = useLocation()

    return (

        <Navi pathname={pathname}>
            <div className='nav-title'>
                <Link className='nav-title-link' to="/">William & Clarissa</Link>
            </div>
            <div className="mobile-nav-ul-div">
                <ul className='mobile-nav-ul'>
                    <Link className='mobile-nav-links story' to='/our-story'><li>Our Story</li></Link>
                    <Link className='mobile-nav-links travel' to='/travel'><li>Travel</li></Link>
                    <Link className='mobile-nav-links pictures' to='/pictures'><li>Pictures</li></Link>
                    <Link className='mobile-nav-links corkboard' to='/corkboard'><li>Cork Board</li></Link>
                    <Link className='mobile-nav-links registery' to='/registry'><li>Registry</li></Link>
                    {/* <Link className='mobile-nav-links RSVP' to='/RSVP'><li>RSVP</li></Link> */}
                </ul>
            </div>
            <hr />
            <div className="nav-ul-div">
                <ul className='nav-ul'>
                    <Link className='nav-links story' to='/our-story'><li>Our Story</li></Link>
                    <Link className='nav-links travel' to='/travel'><li>Travel</li></Link>
                    <Link className='nav-links pictures' to='/pictures'><li>Pictures</li></Link>
                    <Link className='nav-links corkboard' to='/corkboard'><li>Cork Board</li></Link>
                    <Link className='nav-links registery' to='/registry'><li>Registry</li></Link>
                    {/* <Link className='nav-links RSVP' to='/RSVP'><li>RSVP</li></Link> */}
                </ul>
            </div>

        </Navi>
    );
}

export default Nav;