import React, { useRef, useEffect } from 'react';
import pic1 from "../../Assets/slidepic1.PNG"
import pic2 from "../../Assets/slidepic2.jpg"
import pic3 from "../../Assets/slidepic4.JPG"
import pic4 from "../../Assets/slidepic5.JPG"
import styled from 'styled-components';

const OurStoryWrapper = styled.div`
    display: flex;
    height: 100vh;
    width:fit-content;
    flex-direction: row-reverse;
    justify-content: flex-end;
    background-color: rgba(255,250,240,0.9);
`
const OurStoryTitle = styled.div`
    padding-left: 5vw;
    width: 100%;
    padding-right: 40vw;
    font-family: 'Pinyon Script', cursive;
    font-size:60px;
    padding-top:30vh;
    @media screen and (min-width: 1400px){
        padding-right: 35vw;
    }
    @media screen and (min-width: 1650px){
        padding-left: 8vw;

    }
    @media screen and (min-width: 1800px){
        padding-left: 10vw;

    }
    @media screen and (max-width: 814px){
        text-align: center;
        padding-left: 5vw;
        padding-right: 5vw;
        padding-top: 660px;
        padding-top: 660px;
    }
@media screen and (max-width: 767px){
    padding-top: 520px;
    background-color: rgba(255,250,240,0.9);
}
.ourStoryTitle{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin: auto;
    line-height: 1.6;
    padding-right: 10vw;
    padding-bottom: 5vh;
    @media screen and (max-width: 998px){
    font-size:16px;
    padding-right: 14vw;
    }
    @media screen and (max-height: 760px){
    font-size:15px;
}   
@media screen and (max-width: 814px){
        padding-right:0;
        padding-left:0;
        text-align: start;
    }
}

.title{
    padding-bottom: 30px;
@media screen and (max-width: 313px){
font-size:40px;
}}
`

const OurStoryContent = styled.div`
.photos{
    height: 70vh;
    max-height: 550px;
    transition: opacity 550ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    transition: opacity 550ms ease-in, transform 400ms ease-in;
    opacity: 0;
    margin-right: 2vw; 
    padding: 10px;
    border: 2px solid #000;
}
#stage {
    @media screen and (max-width: 814px){
    position: relative;
    }
}
  
  #stage img {
    padding: 5px;
    border: 1px solid #ccc;
    animation-name: fade; 
    animation-duration: 40s; 
    animation-iteration-count: infinite; 
    display: flex;
    position: fixed;
    top: 0;
    right: 2%;
    margin-right:6vw;
    margin-top:23vh;
    opacity:0; 
    @media screen and (min-width: 1500px){
    margin-right:10vw;
    }
    @media screen and (min-width: 1650px){
    margin-right:12vw;
    }
    @media screen and (min-width: 1800px){
    margin-right:14vw;
    }
    @media screen and (max-width: 814px){
        display: flex;
        position: absolute;
        left: 50%;
        margin-left: -179.422px;
        top: 50%;
        margin-top:90px;
    }
    @media screen and (max-width: 767px){
    top: 50%;
    height: 392px;
    left: 50%;
    margin-left:-131.7265px;;
    }
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
                    <img className="photos" src={pic1} alt='' />
                    <img className="photos" src={pic2} alt='' />
                    <img className="photos" src={pic3} alt='' />
                    <img className="photos" src={pic4} alt='' />
                </div>
                <OurStoryTitle>
                    <p className='title'>Our Story...</p>
                    <p className='ourStoryTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </OurStoryTitle>
            </OurStoryContent>
        </OurStoryWrapper>
    );
}

export default OurStory;