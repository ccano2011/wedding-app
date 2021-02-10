import React from 'react';
import image from '../../Assets/placeholder_img2.jpg'


function Travel() {
    return (
        <div>
            <div id="home2">
                <div className="ourStoryBio">
                    <img id="ourStoryImg" src={image} alt="Bride & Groom" />
                    <p className='ourStoryTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div >
    );
}

export default Travel;