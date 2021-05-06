import React, { useRef, useEffect } from 'react';
import pic1 from "../../Assets/slidepic1.PNG"
import pic2 from "../../Assets/slidepic2.jpg"
import pic3 from "../../Assets/slidepic4.JPG"
import pic4 from "../../Assets/slidepic5.JPG"
import styled from 'styled-components';

const OurStoryWrapper = styled.div`
/* max-height: auto; */
/* background-color:rgba(255,250,240, 0.9);
display:flex;
flex-direction: row-reverse;
justify-content: space-around;
max-width:1672px;
height:100vh;
margin:auto; */
background-color: rgba(255,250,240,0.9);
    display: flex;
    /* flex-direction: row-reverse; */
    /* -webkit-justify-content: space-around; */
    /* justify-content: space-around; */
    /* max-width: 1672px; */
    height: 100vh;
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
.photos{
    margin-bottom: 10vh;
    height: 70vh;
    margin-top: 40vh;
    max-height: 698px;
    /* margin-left: -108px; */
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
#stage {
    margin-left: 9.5%;
    margin-top: -180px;
    width: 300px;
    height:400px;
  }
  #stage img {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5%;
    background: whitesmoke;
    animation-name: fade; 
    animation-duration: 40s; 
    animation-iteration-count: infinite; 
    position:absolute;
    opacity:0; 
  }
#stage img:nth-of-type(1) {
    animation-delay: 0s;
  }
  #stage img:nth-of-type(2) {
    animation-delay: 10s;
  }
  #stage img:nth-of-type(3) {
    animation-delay: 20s;
  }
  #stage img:nth-of-type(4) {
    animation-delay: 30s;
  }
  @keyframes fade {
    0%   { opacity: 0; }
    11.11%   { opacity: 1; }
    33.33%  { opacity: 1; }
    44.44%  { opacity: 0; }
    100% { opacity: 0; }
  }
.photos.appear{
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
            <OurStoryContent ref={elemRef} >
                <div id="stage">
                    {/* <img id="photos" src={image} alt="Bride & Groom" ref={elemRef} /> */}
                    <img className="photos" src={pic1} alt='' />
                    <img className="photos" src={pic2} alt='' />
                    <img className="photos" src={pic3} alt='' />
                    <img className="photos" src={pic4} alt='' />
                </div>
            </OurStoryContent>
            <OurStoryTitle>
                <p className='title'>Our Story...</p>
                <p className='ourStoryTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </OurStoryTitle>
        </OurStoryWrapper>
    );
}

export default OurStory;