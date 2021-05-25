import React, { useRef, useEffect } from 'react';
import image from "../../Assets/honeymoon.jpeg"
import styled from 'styled-components';


const TravelWrapper = styled.div`
#Travel{
transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
    opacity: 0;
    height:100vh;
/* padding-top:10vh; */
}
#Travel.appear{
    opacity: 1;
}
`
const TextWrapper = styled.div`
    position: relative;
    z-index:2;
`
const TravelDiv = styled.div`
border: 8px solid #c5b18c;
    padding: 3vh;
    backdrop-filter: brightness(0.5);
`
const TravelTitle = styled.div`
font-family: 'Fancy';
font-size:60px;
padding-top:25vh;
z-index:3;
position:absolute;
align-items: center;
color: white;
margin-left:25%;

@media screen and (max-width:768px) {
    font-size:45px;
    padding-top:20vh;
    margin-left: 5%;
}
@media screen and (max-height: 594px){
    padding-top: 15vh;
    font-size:40px;
}
.TravelDescription{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1.6;
    max-width: 550px;

    @media screen and (max-width:768px) {
        line-height: 1.6;
        margin-left:auto;
        margin-right:auto;
        font-size:15px;

}
@media screen and (max-height: 594px){
    font-size:15px;
}
}

`
const TravelContent = styled.div`
#TravelImg{
    -o-object-fit: cover;
    object-fit: cover;
    width:100%;
    height: 100vh;
    @media screen and (max-width:768px) {
    /* height:93vh; */

}
    @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 900px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    height: 130vh;
}
}
`
const Button = styled.div`
    display: flex;
    padding-top: 30px;
  .ls-buttons:hover {
    background-color:#DCDCDC;
  }

a:hover{
    transform: scale(1.09);
}
  .ls-buttons {
    height: 30px;
    font-family: 'Jost', sans-serif;
    width: 100px;
    border: 2px solid wheat;
    border-radius: 2px;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    background-color: aliceblue; 
  }
`
function Travel() {
    const elemRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.2
            }
        );
        if (elemRef.current) {
            observer.observe(elemRef.current);
        }
    }, [elemRef]);
    return (
        <TravelWrapper ref={elemRef} id='Travel'>
            <TextWrapper>
                <TravelTitle>
                    <TravelDiv>
                        Travel...
                        <div className='TravelDescription'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <Button>
                                <a href="https://youtu.be/oHg5SJYRHA0" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Visit Site</button></a>
                            </Button>
                        </div>
                    </TravelDiv>
                </TravelTitle>
            </TextWrapper>
            <TravelContent>
                <img id="TravelImg" src={image} alt="backdrop" />
            </TravelContent>
        </TravelWrapper>
    );
}

export default Travel;