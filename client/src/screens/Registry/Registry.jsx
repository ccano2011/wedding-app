import React, { useRef, useEffect } from 'react';
import image from "../../Assets/registrybackground.jpeg"
import image2 from "../../Assets/mobileregistrybackground.jpeg"
import styled from 'styled-components';


const RegistryWrapper = styled.div`
#registry{
transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
    opacity: 0;
    height:100vh;
/* padding-top:10vh; */
}
#registry.appear{
    opacity: 1;
}
`
const TextWrapper = styled.div`
    position: relative;
    z-index:2;
`
const RegistryDiv = styled.div`
border: 8px solid floralwhite;
    padding: 3vh;
    backdrop-filter: brightness(0.5);
`
const RegistryTitle = styled.div`
/* font-family: 'Fancy'; */
font-family: 'Pinyon Script', cursive;
font-size:60px;
padding-top:25vh;
padding-left:50vw;
z-index:3;
position:absolute;
align-items: center;
color: white;

@media screen and (max-width:684px) {
    padding-left:30vw;

}
@media screen and (max-width:525px) {
    font-size: 45px;
    padding-top: 20vh;
    padding-left: 0;
    margin-left: 0%;
}
@media screen and (max-height: 594px){
    padding-top: 15vh;
    font-size:40px;
}
.RegistryDescription{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1.6;
    /* max-width: 550px; */

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
.button-div{
    display:flex;
    justify-content:space-around;
}
`
const RegistryContent = styled.div`
#RegistryImg{
    -o-object-fit: cover;
    object-fit: cover;
    width:100%;
    height: 100vh;
    @media screen and (max-width:660px) {
    height:100vh;
    display: none;
}
    @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 900px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    height: 130vh;
}
}
#MobileRegistryImg{
display:none;
@media screen and (max-width:660px) {
    display:flex;
    -o-object-fit: cover;
    object-fit: cover;
    width:100%;
    height: 100vh;
}
}
`
const Button = styled.div`
    display: flex;
    padding-top: 30px;
  .ls-buttons:hover {
    background-color:#fbf3e9;
  }

a:hover{
    transform: scale(1.09);
}
  .ls-buttons {
    height: 35px;
    font-family: 'Jost', sans-serif;
    width: 130px;
    border: 2px solid wheat;
    border-radius: 2px;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    background-color:floral white; 
  }
`
function Registry() {
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
        <RegistryWrapper ref={elemRef} id='registry'>
            <TextWrapper>
                <RegistryTitle>
                    <RegistryDiv>
                        Registry...
                        <div className='RegistryDescription'>
                            Celebrating with you on our special day is the only gift we require. However, for your convenience, we have registered at Amazon for the items we’d find the most useful as we prepare for married life!
                            <div className="button-div">
                                <Button>
                                    <a href="https://www.amazon.com/wedding/clarissa-cano-william-seefeldt-orlando-march-2022/registry/38ODWC5G9PG1V" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">View Registry</button></a>
                                </Button>
                                {/* <Button>
                                    <a href="https://youtu.be/oHg5SJYRHA0" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Visit Site</button></a>
                                </Button> */}
                            </div>
                        </div>
                    </RegistryDiv>
                </RegistryTitle>
            </TextWrapper>
            <RegistryContent>
                <img id="RegistryImg" src={image} alt="backdrop" />
                <img id="MobileRegistryImg" src={image2} alt="backdrop" />
            </RegistryContent>
        </RegistryWrapper>
    );
}

export default Registry;
