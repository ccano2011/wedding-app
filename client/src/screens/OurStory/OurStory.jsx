import React, { useRef, useEffect } from 'react';
import image from "../../Assets/jordanandrewourstory.jpg"
import styled from 'styled-components';

const OurStoryWrapper = styled.div`
/* max-height: auto; */
display:flex;
flex-direction: row-reverse;
justify-content: space-around;
max-width:1672px;
height:100vh;
margin:auto;
@media (max-aspect-ratio: 0.79/1){
    flex-direction: column;
    height: auto;
}
@media screen and (max-width: 768px){
flex-direction: column;
height: auto;
}
`
const OurStoryTitle = styled.div`
/* font-family: 'Fancy'; */
/* font-family: 'Rouge Script', cursive; */
font-family: 'Pinyon Script', cursive;

font-size:60px;
padding-top:30vh;
margin-left: 3vw;
@media screen and (max-width: 768px){
    padding-top:0vh;
    font-size:40px;
}
@media screen and (max-height: 594px){
    font-size:40px;
}

.ourStoryTitle{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
    padding-bottom: 5vh;
    padding-right:3vw;
    @media screen and (max-width: 828px){
    font-size:16px;
    }
    @media screen and (max-height: 594px){
    /* padding-top: 10vh; */
    font-size:15px;
}}
.title{
    /* padding-left:3vw; */
    padding-bottom: 30px;
    @media screen and (max-width: 768px){
        text-align:center;
        margin:auto;
        font-size:40px;
        margin-top: -70px;
}}
`
const OurStoryContent = styled.div`
#ourStoryImg{
    margin-bottom: 10vh;
    height: 70vh;
    margin-top:20vh;
    max-height: 698px;
    transition: opacity 550ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    opacity: 0;
    margin-right: 2vw; 
    padding: 10px;
    border: 2px solid #000;
    @media screen and (max-width: 768px){
    margin-top: 5vh;
    height: auto;
    width: 55vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
}}
#ourStoryImg.appear{
    opacity: 1;
}
`
function OurStory() {
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
        <OurStoryWrapper id='our-story'>
            <OurStoryContent>
                <img id="ourStoryImg" src={image} alt="Bride & Groom" ref={elemRef} />
            </OurStoryContent>
            <OurStoryTitle>
                <p className='title'>Our Story...</p>
                <p className='ourStoryTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </OurStoryTitle>
        </OurStoryWrapper>
    );
}

export default OurStory;