import React, { useRef, useEffect } from 'react';
import image from '../../Assets/travelpic.jpg'
import styled from 'styled-components';

const TravelWrapper = styled.div`
height: 100vh;
display:flex;
flex-direction: row;
justify-content: space-around;
max-width:1672px;
margin:auto;
background-color: #d9c8b9;
/* margin-bottom:40px; */
@media screen and (max-width: 844px){
flex-direction: column;
width:100vw;

}
`

const TravelInfo = styled.div`
/* font-family: 'Fancy'; */
/* font-family: 'Rouge Script', cursive; */
font-family: 'Pinyon Script', cursive;
font-size:60px;
padding-top:30vh;
/* margin-left: 3vw; */
background-color: #d9c8b9;
@media screen and (max-width: 844px){
    padding-top:0vh;
    font-size:40px;
width:100vw;

}
@media screen and (max-height: 656px){
    font-size:40px;
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
    background-color: #d9c8b9;
    @media screen and (max-width:844px) {
    font-size:15px;
    padding-bottom: 0vh;
    padding-left: 1vw;
    padding-right: 1vw;
    }
    @media screen and (max-height: 656px){
    font-size:15px;
}
}
.travelTitle{
background-color: #d9c8b9;
padding-bottom: 30px;
margin-left: 10px;
@media screen and (max-width: 844px){
    margin-top: -150px;
    text-align: center;
}
@media screen and (max-height: 656px){
    font-size:40px;
}
}
`
const TravelPicture = styled.div`
background-color: #d9c8b9;
@media screen and (max-width: 844px){
width:100vw;
}
#travelImg{
    height: 70vh;
    margin: auto;
    margin-top:20vh;
    margin-bottom: 10vh;
    max-height: 761px;
    transition: opacity 550ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    opacity: 0;
    @media screen and (max-width: 844px){
    top:0;
    height: 48vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
    width: auto;
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