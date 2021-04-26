import React, { useRef, useEffect } from 'react';
import image from '../../Assets/travelpic.jpg'
import styled from 'styled-components';

const TravelWrapper = styled.div`
max-height: auto;
display:flex;
flex-direction: row;
justify-content: space-around;
max-width:1672px;
margin:auto;
background-color: #d0c5b3;
margin-bottom:40px;
@media screen and (max-width: 844px){
flex-direction: column;
height: auto;
}
`

const TravelInfo = styled.div`
font-family: 'Fancy';
padding-top:15vh;
font-size:60px;
background-color: #d0c5b3;
@media screen and (max-width: 844px){
    padding-top:0vh;
}
@media screen and (max-height: 594px){
    padding-top: 1vh;
}
.travelDetails{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
    padding-bottom: 5vh;
    padding-left:1vw;
    padding-right:3vw;
    background-color: #d0c5b3;
    @media screen and (max-width:768px) {
    font-size:15px;
    }
    @media screen and (max-height: 594px){
    padding-top: 1vh;
    font-size:15px;
}
}
.travelTitle{
background-color: #d0c5b3;
@media screen and (max-width: 844px){
    margin-top: -70px;
    text-align: center;
}
@media screen and (max-height: 594px){
    padding-top: 15vh;
    font-size:40px;
}
}
`
const TravelPicture = styled.div`
background-color: #d0c5b3;
#travelImg{
    height: 55vh;
    margin: auto;
    margin-top:10vh;
    margin-bottom: 10vh;
    max-height: 761px;
    transition: opacity 550ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    opacity: 0;
    @media screen and (max-width: 844px){
    top:0;
    margin-top: 5vh;
    height: auto;
    max-width: 100vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
}}
#travelImg.appear{
    opacity: 1;
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
        <TravelWrapper id='travel'>
            <TravelPicture>
                <img id="travelImg" ref={elemRef} src={image} alt="Venue and travel" />
            </TravelPicture>
            <TravelInfo>
                <p className='travelTitle'>Travel</p>
                <p className='travelDetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </TravelInfo>
        </TravelWrapper>
    );
}

export default Travel;