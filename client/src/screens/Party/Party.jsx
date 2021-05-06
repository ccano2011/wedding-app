import React from 'react';
import styled from 'styled-components'
import image from '../../Assets/placeholder_img1.jpg'
import image2 from '../../Assets/travelpic.jpg'
import image3 from '../../Assets/placeholder_img6.jpg'
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
    /* font-family: 'Fancy'; */
    /* font-family: 'Rouge Script', cursive; */
    font-family: 'Pinyon Script', cursive;
    font-size:60px;
    font-weight:100;
    line-height: 1.5;
    text-align:center;
    /* display:none; */
 @media screen and (max-width: 768px){
    display: block;
    padding-top: 0vh;
    font-size: 40px;

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
  }
  .projects-box{
    display: flex;
    grid-template-rows: min-content auto min-content;
    /* text-align: center; */
    justify-content: space-around;
    -webkit-overflow-scrolling: touch;
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
                                        <h2 className="projects-name">Happily Ever After v2.0</h2>
                                        <p className="projects-description">With a completely new frontend, this is more than just a regular wedding site, this application incorporates features found on many popular social media sites that allow for guests to sign up with full authentication and make posts on the site's 'Corkboard' component. </p>
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
                                        <h2 className="projects-name">e-Commerce</h2>
                                        <p className="projects-description">A multi-component single-page React application made as a template for any commerse/front-end project</p>
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
                                        <h2 className="projects-name">Another Netflix Clone</h2>
                                        <p className="projects-description">This single-page app was made to look and feel like the homepage of Netflix complete with pop-up trailers utilizing <a href="https://www.npmjs.com/package/react-youtube" target="_blank" rel="noreferrer" alt="link to npm youtube react">React-YouTube</a> to handle embedded videos.</p>
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
                                        <h2 className="projects-name">loopstudios</h2>
                                        <p className="projects-description">This project is a simple front-end landing site built as a coding challenge from <a href="https://www.frontendmentor.io/challenges" alt="link to frontend mentor .io" target="_blank" rel="noreferrer">Frontend Mentor</a> for the purpose of learning Styled Components & improve coding habits.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image2}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Movie Quest</h2>
                                        <p className="projects-description">Movie Quest is a web application that allows users to see what movies are popular right now, find a movie to watch by checking out what what's popular, and find recommendations based on genre & user rating. </p>
                                    </div>
                                </div>

                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image3}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Elections App</h2>
                                        <p className="projects-description">This proof-of-concept project was a collaborative effort involving several developers and a professional UX design team. The purpose of this Full-Stack app was to show how one could request an absentee ballot & check the delivery status of their ballot request for their home state during an election.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Pokedex</h2>
                                        <p className="projects-description">Pokedex leverages the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to let you search and find each and every Pokemon discovered thus far from every region to help you Catch 'em All!</p>
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
                                    <h2 className="projects-name">Happily Ever After v2.0</h2>
                                    <p className="projects-description">With a completely new frontend, this is more than just a regular wedding site, this application incorporates features found on many popular social media sites that allow for guests to sign up with full authentication and make posts on the site's 'Corkboard' component. </p>
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
                                    <h2 className="projects-name">e-Commerce</h2>
                                    <p className="projects-description">A multi-component single-page React application made as a template for any commerse/front-end project</p>
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
                                    <h2 className="projects-name">Another Netflix Clone</h2>
                                    <p className="projects-description">This single-page app was made to look and feel like the homepage of Netflix complete with pop-up trailers utilizing <a href="https://www.npmjs.com/package/react-youtube" target="_blank" rel="noreferrer" alt="link to npm youtube react">React-YouTube</a> to handle embedded videos.</p>
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
                                    <h2 className="projects-name">loopstudios</h2>
                                    <p className="projects-description">This project is a simple front-end landing site built as a coding challenge from <a href="https://www.frontendmentor.io/challenges" alt="link to frontend mentor .io" target="_blank" rel="noreferrer">Frontend Mentor</a> for the purpose of learning Styled Components & improve coding habits.</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image2}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Movie Quest</h2>
                                    <p className="projects-description">Movie Quest is a web application that allows users to see what movies are popular right now, find a movie to watch by checking out what what's popular, and find recommendations based on genre & user rating. </p>
                                </div>
                            </div>

                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image3}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Elections App</h2>
                                    <p className="projects-description">This proof-of-concept project was a collaborative effort involving several developers and a professional UX design team. The purpose of this Full-Stack app was to show how one could request an absentee ballot & check the delivery status of their ballot request for their home state during an election.</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Pokedex</h2>
                                    <p className="projects-description">Pokedex leverages the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to let you search and find each and every Pokemon discovered thus far from every region to help you Catch 'em All!</p>
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