import React from 'react';
import photo1 from '../../Assets/placeholder_img1.jpg'
import photo2 from '../../Assets/placeholder_img2.jpg'
import photo3 from '../../Assets/placeholder_img3.jpg'
import photo4 from '../../Assets/placeholder_img4.jpg'
import photo5 from '../../Assets/placeholder_img5.jpg'
import photo6 from '../../Assets/placeholder_img6.jpg'
import photo7 from '../../Assets/placeholder_img7.jpg'
import photo8 from '../../Assets/photo8.jpg'
import photo9 from '../../Assets/photo9.jpg'
import photo10 from '../../Assets/photo10.jpg'
import photo11 from '../../Assets/photo11.jpg'
import photo12 from '../../Assets/photo12.jpg'
import photo13 from '../../Assets/photo13.jpg'
import photo14 from '../../Assets/photo14.jpg'
import photo15 from '../../Assets/photo15.jpg'
import photo16 from '../../Assets/photo16.jpg'
import styled from 'styled-components'

const PhotoGalleryStyling = styled.div`
/* https://medium.com/better-programming/how-to-use-css-grid-and-flexbox-to-create-an-image-gallery-924f7896d142 */
height:100vh;
/* margin-top:90px; */
background-color: rgba(255,250,240, 0.9);

@media screen and (max-width: 768px){
    height: fit-content;
    padding-top: 25px;
}
.body {
    display: grid;
    grid-template-rows: min-content auto min-content;
    text-align: center;
 }
.fit {
    height: 300px;
    max-width: 450px;
    padding: 10px;
    flex: 1 auto;
    border: 2px solid wheat;
 }
 .div-container{
    display: flex;
    overflow: auto;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding-top: 90px;
    @media screen and (max-width: 768px){
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: auto;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

    }
 }

 .photo-container{
    padding: 10px;
 }

 .photoTitle{
    padding-top: 8vh;
    font-family: 'Rouge Script', cursive;
    font-size:60px;
    line-height: 1.5;
    display:none;
 @media screen and (max-width: 768px){
    display: block;
    padding-top: 0vh;
    font-size: 40px;
}
 }
 @media screen and (max-width:768px) {
   .fit {
      height: auto;
      max-width: 260px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
 @media screen and (max-width:404px) {
   .fit {
      height: auto;
      max-width: 290px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
`

function Photos() {
    return (
        <PhotoGalleryStyling id='pictures'>
            <div className='body'>
                <p className="photoTitle">Photos</p>
                <div className="div-container">
                    <div className="photo-container" id='photo7'>
                        <img className='fit' src={photo7} alt="Placeholder 7" />
                    </div>
                    <div className="photo-container" id='photo2'>
                        <img className='fit' src={photo2} alt="Placeholder 2" />
                    </div>
                    <div className="photo-container" id='photo1'>
                        <img className='fit' src={photo1} alt="Placeholder 1" />
                    </div>
                    <div className="photo-container" id='photo6'>
                        <img className='fit' src={photo6} alt="Placeholder 6" />
                    </div>
                    <div className="photo-container" id='photo4'>
                        <img className='fit' src={photo4} alt="Placeholder 4" />
                    </div>
                    <div className="photo-container" id='photo5'>
                        <img className='fit' src={photo5} alt="Placeholder 5" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo3} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo8} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo9} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo10} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo11} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo12} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo13} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo14} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo15} alt="Placeholder 3" />
                    </div>
                    <div className="photo-container" id='photo3'>
                        <img className='fit' src={photo16} alt="Placeholder 3" />
                    </div>
                </div>
            </div>
        </PhotoGalleryStyling>
    );
}

export default Photos;