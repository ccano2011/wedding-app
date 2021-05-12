import React from 'react';
import styled from 'styled-components'
import image4 from '../../Assets/placeholder_img4.jpg'
import image5 from '../../Assets/placeholder_img3.jpg'
import image6 from '../../Assets/placeholder_img2.jpg'
import image7 from '../../Assets/party.jpg'

const ProjectsStyling = styled.div`
height:fit-content;
background-color:rgba(255,250,240, 0.9);
padding-top:90px;
@media screen and (max-width: 768px){
    padding-top :1vh;
    height: fit-content;
}
h1{
    padding-top: 4vh;
    font-family: 'Pinyon Script', cursive;
    font-size:60px;
    font-weight:100;
    line-height: 1.5;
    text-align:center;
 @media screen and (max-width: 768px){
    display: block;
    padding-top: 0vh;
    font-size: 40px;
    margin-top:60px;
}
}
.section-title{
    text-align: center;
    padding: 2vh;
    font-family: 'Pinyon Script';
    font-weight: 100;
    font-size: 40px;
}

.projects {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  max-width: 40vw;
  margin-right: 0 ;
  margin-left:0;
  @media screen and (max-width:980px) {
    max-width: 80vw;
  }
  }
  .projects-box{
    display: flex;
    grid-template-rows: min-content auto min-content;
    /* text-align: center; */
    justify-content: space-around;
    -webkit-overflow-scrolling: touch;
  @media screen and (max-width:980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  }
  .projects-box {
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width:768px) {
   .div-container{
    display: inline-flex;
    flex-direction: column-reverse;
    height:80vh;
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
      height: 80vh;
   }
   .fit {
      height: auto;
      max-width: 290px;
      padding: 10px;
      flex: 1 auto;
      border: 2px solid wheat;
}
 }
}

a{
    text-decoration: none;
    color: inherit;
    font-weight:bolder;
    transition: all .2s ease-in-out; 
}

.project-imgs {
    height: 250px;
    max-width: 300px;
    /* padding: 10px; */
    flex: 1 auto;
    border: 2px solid wheat;
  }
  
  .project-content {
    text-align: center;
    padding-bottom: 5vh;
    max-width: fit-content;
    display:flex;
  }

  .card-content {
    /* border: 1px solid black; */
    display:flex;
    width: 40vw;
  @media screen and (max-width:980px) {
    width: 80vw;
  }
  @media screen and (max-width:497px) {
    display:block;
  }
  }
  .text-content {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    max-width:fit-content;
  }
  
  .projects-name {
    font-family: 'Jost', sans-serif;
    font-weight:200;
    text-align: left;
    padding-top: 30px;
  }
  
  .projects-description {
      padding-top: 10px;
    text-align: start;
    font-size: 12px;
    line-height: 2.1;
  }

`

function Party() {
    return (
        <ProjectsStyling>
            <div id='Party'>
                <h1 className="section-title">Meet the Wedding Party</h1>
                <div className="projects-box">
                    {/* <div ref={elemRef} className="container"> */}
                    <div className="container">
                        <div className="projects">
                            <h3 className="section-title">On the Bride's side...</h3>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image4}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Bob</h2>
                                        <p className="projects-description">A cool guy </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image7}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Tom</h2>
                                        <p className="projects-description">Not as cool as Bob</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image6}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Kristi</h2>
                                        <p className="projects-description">Cooler than both Bob & Tom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image5}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Chick</h2>
                                        <p className="projects-description">Very into sports</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects">
                        <h3 className="section-title">On the Groom's side...</h3>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image4}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Bob</h2>
                                    <p className="projects-description">A cool guy </p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image7}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Tom</h2>
                                    <p className="projects-description">Not as cool as Bob</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image6}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Kristi</h2>
                                    <p className="projects-description">Cooler than both Bob & Tom</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image5}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Chick</h2>
                                    <p className="projects-description">Very into sports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </ProjectsStyling >
    );
}

export default Party;