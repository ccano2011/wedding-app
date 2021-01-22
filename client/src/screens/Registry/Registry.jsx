import React from 'react';
import Nav from '../../shared/nav'
import './Registry.css'
import photo1 from '../../Assets/amazon_wedding.jpg'
import photo2 from '../../Assets/potterybarn_wedding.png'


function Registry() {
    return (
        <div>
            <Nav />
            <div className="registry-div">
                <div className="registry-container" id='reg1'>
                    <img className='reg' src={photo1} alt="Placeholder 1" />
                </div>
                <div className="registry-container" id='reg2'>
                    <img className='reg' src={photo2} alt="Placeholder 2" />
                </div>
            </div>
        </div>
    );
}

export default Registry;