import React from 'react';
import Layout from '../../shared/nav';
import photo1 from '../../Assets/placeholder_img1.jpg'
import photo2 from '../../Assets/placeholder_img2.jpg'
import photo3 from '../../Assets/placeholder_img3.jpg'
import photo4 from '../../Assets/placeholder_img4.jpg'
import photo5 from '../../Assets/placeholder_img5.jpg'
import photo6 from '../../Assets/placeholder_img6.jpg'
import photo7 from '../../Assets/placeholder_img7.jpg'
import './Photos.css'

function Photos(props) {
    return (
        <div className='body'>
            {/* <Layout /> */}
            <div className="div-container">
                <div className="photo-container" id='photo1'>
                    <img className='fit' src={photo1} alt="Placeholder 1" />
                </div>
                <div className="photo-container" id='photo2'>
                    <img className='fit' src={photo2} alt="Placeholder 2" />
                </div>
                <div className="photo-container" id='photo3'>
                    <img className='fit' src={photo3} alt="Placeholder 3" />
                </div>
                <div className="photo-container" id='photo4'>
                    <img className='fit' src={photo4} alt="Placeholder 4" />
                </div>
                <div className="photo-container" id='photo5'>
                    <img className='fit' src={photo5} alt="Placeholder 5" />
                </div>
                <div className="photo-container" id='photo6'>
                    <img className='fit' src={photo6} alt="Placeholder 6" />
                </div>
                <div className="photo-container" id='photo7'>
                    <img className='fit' src={photo7} alt="Placeholder 7" />
                </div>
            </div>
        </div>
    );
}

export default Photos;