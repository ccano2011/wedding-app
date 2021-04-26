import React from 'react';
import photo1 from '../../Assets/placeholder_img1.jpg'
import photo2 from '../../Assets/placeholder_img2.jpg'
import photo3 from '../../Assets/placeholder_img3.jpg'
import photo4 from '../../Assets/placeholder_img4.jpg'
import photo5 from '../../Assets/placeholder_img5.jpg'
import photo6 from '../../Assets/placeholder_img6.jpg'
import photo7 from '../../Assets/placeholder_img7.jpg'
import styled from 'styled-components'

const PhotoGalleryStyling = styled.div`
/* https://medium.com/better-programming/how-to-use-css-grid-and-flexbox-to-create-an-image-gallery-924f7896d142 */
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
    /* border: 1px black solid */
 }
  
 .div-container{
    display: flex;
    overflow: auto;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-bottom: 10vh;
 }

 .photo-container{
    padding: 10px;
 }

 .photoTitle{
    padding-top: 8vh;
    font-family: 'Fancy';
    font-size:60px;
    line-height: 1.5;
    margin-top: -10px;
 }

 @media screen and (max-width:768px) {
   .div-container{
    display: inline-flex;
    flex-direction: column-reverse;
    height:100vh;
    margin-top: -40px;
   }
   .fit {
      height: auto;
      max-width: 260px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
 @media screen and (max-width:404px) {
   .div-container{
      display: flex;
      overflow: scroll;
      flex-direction: column;
      flex-flow: none;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 100vh;
   }
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
        </PhotoGalleryStyling>
    );
}

export default Photos;