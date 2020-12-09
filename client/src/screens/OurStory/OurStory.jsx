import React from 'react';
import Nav from '../../shared/nav'
import image from "../../Assets/placeholder_img1.jpg"
import "./OurStory.css"


function OurStory(props) {
    return (
        <div>
            <Nav />
            <h1 className="ourStory">Our Story...</h1>
            <div id="home2">
                <div className="ourStoryBio">
                    <img id="ourStoryImg" src={image} alt="Bride & Groom" />
                    <p className='ourStoryTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default OurStory;