import React from 'react';
import './Registry.css'
import photo1 from '../../Assets/amazon_wedding.jpg'
import photo2 from '../../Assets/potterybarn_wedding.png'


function Registry() {
    return (
        <div>
            <div className="registry-div">
                <div className="registry-container" id='reg1'>
                    <a href='https://www.amazon.com/registry' alt='Link to Amazon' target="_blank" rel="noreferrer"><img className='reg' src={photo1} alt="Placeholder 1" /></a>
                </div>
                <div className="registry-container" id='reg2'>
                    <a href='https://www.potterybarn.com/registry' alt='Link to Pottery Barn' target="_blank" rel="noreferrer"><img className='reg' src={photo2} alt="Placeholder 2" /></a>
                </div>
            </div>
        </div >
    );
}

export default Registry;