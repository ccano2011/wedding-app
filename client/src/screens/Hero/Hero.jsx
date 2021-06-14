import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../Assets/home.jpeg';
import Rellax from "rellax";

const HeroStyle = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:100vh;
perspective:1px;
transform-style: preserve-3d;
:before{
        content:'';
        top:0;
        left:0;
        height:90vh;
        overflow:hidden;
        position: absolute;
        transform:translateZ(-1px) scale(2);
        z-index: -1;
    }

.HeroText{
    display:flex;
    flex-direction:column;
    text-align: center;
    background:none;
    z-index:2;
    position:relative;
    @media screen and (max-height: 594px){
    padding-top: 10vh;
    font-size:40px;
}    
}
@media screen and (max-width: 768px){
height: 100vh;
}

`
const HeroBackground = styled.div`
    :before{
        content:'';
        overflow:hidden;
        position: absolute;
    z-index: -1;
    }
`
const ImgBg = styled.img`
        width:100%;
        height:100%;
        -o-object-fit: cover;
        object-fit: cover;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        filter: brightness(80%);
`
const HeroTitle = styled.h1`
/* font-family: 'Fancy'; */
/* font-family: 'Pinyon Script', cursive; */
font-family: 'Rouge Script', cursive;
font-weight:100;
color: white;
text-shadow: 2px 2px 3px #807777;
/* position: relative; */
background:none;
/* margin-top:-100px; */
font-size:70px;
text-align: center;
transform: translateZ(0);
/* @media screen and (max-width:820px) {
    font-size:100px;
} */
@media screen and (max-width:475px) {
    /* display:none; */
text-align: center;
/* font-size:40px; */

}
@media screen and (max-height: 594px){
    padding-top: 7vh;
    font-size:60px;
}    
`
// const MobileHeroTitle = styled.h1`
// display:none;
// @media screen and (max-width:475px) {
//     display:flex;
//     text-align:center;
//     justify-content:center;
//     /* font-family: 'Fancy'; */
//     font-family: 'Rouge Script', cursive;
//     font-weight:100;
//     color: white;
//     text-shadow: 2px 2px 3px #807777;
//     position: relative;
//     background:none;
//     margin-top:-80px;
//     font-size:80px;
//     line-height:0.9;
//     transform: translateZ(0);
//     @media only screen 
//   and (min-device-width: 375px) 
//   and (max-device-width: 900px) 
//   and (-webkit-min-device-pixel-ratio: 3)
//   and (orientation: landscape) { 
//     font-size: 60px;
//     margin-top:-20vh;
//     transform-style:none;
// }  }
// `
const HeroSubtitle = styled.p`
/* font-family: 'Josefin Sans', sans-serif; */
font-family: 'Rouge Script', cursive;
font-weight: 100;
text-align: center;
font-size:36px;
letter-spacing: 2px;
color: white;
text-shadow: 2px 2px 3px #807777;
position: relative;
background:none;
z-index: 3px;
padding-top: 3vh;
max-width: 550px;
@media screen and (max-width:768px) {
    margin-top:0px;
}
@media screen and (max-height: 594px){
    font-size:18px;
}    
#location{
    text-decoration: none;
    color: inherit;
}
`

function Hero() {
    const rellaxRef = useRef();
    useEffect(() => {
        new Rellax(rellaxRef.current, { // <---- Via useRef element
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])
    return (
        <HeroStyle>
            <HeroBackground>
                <ImgBg src={backgroundImg} alt='scenic view' />
            </HeroBackground>
            <div className='Hero
        Text' ref={rellaxRef}>
                <HeroTitle>
                    William & Clarissa
                </HeroTitle>
                {/* <MobileHeroTitle>
                    William<br />&<br /> Clarissa
                </MobileHeroTitle> */}
                <HeroSubtitle>
                    {/* We're getting married! <br /> <br /> */}
                    When: 03/05/2022 at 01:00 <br /> <br />
                    Where: <a href='https://www.google.com/maps/place/Corpus+Christi+Catholic+Church/@28.3124578,-81.5501206,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd78cdfd8a686d:0x9ae3bc1506df9708!8m2!3d28.3124578!4d-81.5479319' target="_blank" rel="noopener noreferrer" id="location">1050 Celebration Ave, Celebration, FL 34747</a>
                </HeroSubtitle>
            </div>
        </HeroStyle >
    );
}

export default Hero;