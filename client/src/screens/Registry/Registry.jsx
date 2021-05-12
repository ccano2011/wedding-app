import React from 'react';
import styled from 'styled-components'
import image from "../../Assets/honeymoon.jpeg"
import photo1 from '../../Assets/amazon_wedding.jpg'
import photo2 from '../../Assets/potterybarn_wedding.png'

const RegistryStyle = styled.div`
.registry-div {
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    position: fixed;
    width: -webkit-fill-available;
    /* margin-top: 20px; */
 }

.reg {
    height: 200px;
    max-width: 290px;
    padding: 10px;
    flex: 1 auto;
    border:2px floralwhite solid;
    transition: all .2s ease-in-out;
    margin-right: 15px;
    margin-left: 15px;
 }

 .reg:hover {
    transform: scale(1.05);
 }
  
 .registry-container{
    display: flex;
    overflow: auto;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
 }

 #reg2 {
     max-width: fit-content;
 }

 @media screen and (max-width:45em) {
    .registry-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 120px;
     }
}`
const RegistryContent = styled.div`
 #RegistryImg{
     -o-object-fit: cover;
     object-fit: cover;
     width:100%;
     height: 100vh;
     /* @media screen and (max-width:768px) {
     height:93vh;

 } */
     @media only screen 
   and (min-device-width: 375px) 
   and (max-device-width: 900px) 
   and (-webkit-min-device-pixel-ratio: 3)
   and (orientation: landscape) { 
     height: 130vh;
 }
 }
 
`

function Registry() {
    return (
        <RegistryStyle>
            <div className="registry-div">
                <div className="registry-container" id='reg1'>
                    <a href='https://www.amazon.com/registry' alt='Link to Amazon' target="_blank" rel="noreferrer"><img className='reg' src={photo1} alt="Placeholder 1" /></a>
                </div>
                <div className="registry-container" id='reg2'>
                    <a href='https://www.potterybarn.com/registry' alt='Link to Pottery Barn' target="_blank" rel="noreferrer"><img className='reg' src={photo2} alt="Placeholder 2" /></a>
                </div>
            </div>
            <RegistryContent>
                <img id="RegistryImg" src={image} alt="backdrop" />
            </RegistryContent>
        </RegistryStyle>
    );
}

export default Registry;