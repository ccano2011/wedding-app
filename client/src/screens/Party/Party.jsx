// import React, { useRef, useEffect } from 'react';
// import image2 from "../../Assets/party.jpg"
// import styled from 'styled-components';

// const PartyWrapper = styled.div`
// #Party{
// transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
//     transition: opacity 250ms ease-in, transform 400ms ease-in;
//     transition: opacity 250ms ease-in, transform 400ms ease-in,
//     -webkit-transform 400ms ease-in;
//     opacity: 0;
//     height:100vh;
// }
// #Party.appear{
//     opacity: 1;
// }
// `
// const PartyTitle = styled.div`
// font-family: 'Fancy';
// font-size:60px;
// padding-top:25vh;
// z-index:3;
// position:absolute;
// align-items: center;
// color: white;
// margin-left:65%;

// @media screen and (max-width:768px) {
//     font-size:40px;
//     padding-top:20vh;
//     margin-left: 0%;
//     width: 100%;
//     margin-left:3vw;


// }
// @media screen and (max-height: 790px){
//     padding-top: 15vh;
//     font-size:40px;
//     width:auto;
// }

// .PartyDescription{
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 20px;
//     line-height: 1.6;
//     max-width: 550px;

//     @media screen and (max-width:768px) {
//         line-height: 1.6;
//         padding-right:3vw;
//         font-size:15px;
// }
// @media screen and (max-height: 594px){
//     padding-top: 1vh;
//     font-size: 15px;
// }
// }
// `
// const PartyContent = styled.div`
// #PartyImg{
//     -o-object-fit: cover;
//     object-fit: cover;
//     width:100%;
//     height: 100vh;
//     @media screen and (max-width:768px) {
//     height:93vh;
//     filter: brightness(0.5);
// }
//     @media only screen 
//   and (min-device-width: 375px) 
//   and (max-device-width: 900px) 
//   and (-webkit-min-device-pixel-ratio: 3)
//   and (orientation: landscape) { 
//     height: 130vh;
// }
// }
// `
// const Button = styled.div`
//     display: flex;
//     padding-top: 30px;
//   .ls-buttons:hover {
//     background-color:#DCDCDC;
//   }

// a:hover{
//     transform: scale(1.09);
// }
//   .ls-buttons {
//     height: 30px;
//     font-family: 'Jost', sans-serif;
//     width: 100px;
//     border: 2px solid wheat;
//     border-radius: 2px;
//     font-weight: bold;
//     font-size: 15px;
//     outline: none;
//     background-color: aliceblue; 
//   }
// `
// function Party() {
//     const elemRef = useRef();
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("appear");
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: "0px",
//                 threshold: 0.2
//             }
//         );
//         if (elemRef.current) {
//             observer.observe(elemRef.current);
//         }
//     }, [elemRef]);
//     return (
//         <PartyWrapper ref={elemRef} id='Party'>
//             <PartyTitle>
//                 Party...
//             <div className='PartyDescription'>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     <Button>
//                         <a href="https://youtu.be/oHg5SJYRHA0" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Visit Site</button></a>
//                     </Button>
//                 </div>
//             </PartyTitle>
//             <PartyContent>
//                 <img id="PartyImg" src={image2} alt="backdrop" />
//             </PartyContent>
//         </PartyWrapper>
//     );
// }

// export default Party;

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
margin-top:90px;
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
  }
  
  .projects-description {
    font-size: 12px;
    line-height: 1.6;
  }

  .built-with{
    font-size:9px;
  }
  
  .project-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items:flex-end;
  }

  .gh-buttons:hover {
    background-color:#DCDCDC;
  }
  .ls-buttons:hover{
    background-color:#DCDCDC;
}
a:hover{
    transform: scale(1.09);
}
  .ls-buttons {
    height: 30px;
    font-family: 'Jost', sans-serif;
    width: 100px;
    border: 2px solid #96f5e8;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    background-color: aliceblue; 
  }
  
  .gh-buttons {
    height: 30px;
    width: 90px;
    font-family: 'Jost', sans-serif;
    border: 2px solid #96f5e8;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    background-color: aliceblue; 
  }


  /* .container{
      overflow-x:auto;
    transform: translateX(50%);
    transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in;
    transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
    opacity: 0;
  } */

  /* .container.appear {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  } */
`

function Party() {
    // const elemRef = useRef();
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             // console.log(entry);
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("appear");
    //             }
    //         },
    //         {
    //             root: null,
    //             rootMargin: "0px",
    //             threshold: 0.2
    //         }
    //     );
    //     if (elemRef.current) {
    //         observer.observe(elemRef.current);
    //     }
    // }, [elemRef]);
    return (
        <ProjectsStyling>
            <div id='Party'>
                <h1 className="section-title">Meet the Wedding Party</h1>
                <div className="projects-box">
                    {/* <div ref={elemRef} className="container"> */}
                    <div className="container">
                        <div className="projects">
                            <h3 className="section-title">Bridesmaids</h3>
                            <div className="project-content">
                                <div className="card-content">
                                    <img
                                        className="project-imgs"
                                        src={image4}
                                        alt="project png"
                                    />
                                    <div className="text-content">
                                        <h2 className="projects-name">Happily Ever After v2.0</h2>
                                        <p className="projects-description">With a completely new frontend, this is more than just a regular wedding site, this application incorporates features found on many popular social media sites that allow for guests to sign up with full authentication and make posts on the site's 'Corkboard' component. </p><p className="built-with">Built using Ruby on Rails, PostgreSQL, & React.js</p>
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
                                        <p className="projects-description">A multi-component single-page React application made as a template for any commerse/front-end project</p><p className="built-with">Built using React.js, React-Scroll, & Styled Components</p>
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
                                        <p className="projects-description">This single-page app was made to look and feel like the homepage of Netflix complete with pop-up trailers utilizing <a href="https://www.npmjs.com/package/react-youtube" target="_blank" rel="noreferrer" alt="link to npm youtube react">React-YouTube</a> to handle embedded videos.</p><p className="built-with">Built using React.js, React-YouTube, & Styled Components</p>
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
                                        <p className="projects-description">This project is a simple front-end landing site built as a coding challenge from <a href="https://www.frontendmentor.io/challenges" alt="link to frontend mentor .io" target="_blank" rel="noreferrer">Frontend Mentor</a> for the purpose of learning Styled Components & improve coding habits.</p><p className="built-with">Built using React.js & Styled Components</p>
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
                                        <p className="projects-description">Movie Quest is a web application that allows users to see what movies are popular right now, find a movie to watch by checking out what what's popular, and find recommendations based on genre & user rating. </p><p className="built-with">This was built with React.js & uses Airtable to save movies to a list</p>
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
                                        <p className="projects-description">This proof-of-concept project was a collaborative effort involving several developers and a professional UX design team. The purpose of this Full-Stack app was to show how one could request an absentee ballot & check the delivery status of their ballot request for their home state during an election.</p><p className="built-with">Built using React, Express, & MongoDB </p>
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
                                        <p className="projects-description">Pokedex leverages the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to let you search and find each and every Pokemon discovered thus far from every region to help you Catch 'em All!</p><p className="built-with"> Built using JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects">
                        <h3 className="section-title">Groomsmen</h3>
                        <div className="project-content">
                            <div className="card-content">
                                <img
                                    className="project-imgs"
                                    src={image4}
                                    alt="project png"
                                />
                                <div className="text-content">
                                    <h2 className="projects-name">Happily Ever After v2.0</h2>
                                    <p className="projects-description">With a completely new frontend, this is more than just a regular wedding site, this application incorporates features found on many popular social media sites that allow for guests to sign up with full authentication and make posts on the site's 'Corkboard' component. </p><p className="built-with">Built using Ruby on Rails, PostgreSQL, & React.js</p>
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
                                    <p className="projects-description">A multi-component single-page React application made as a template for any commerse/front-end project</p><p className="built-with">Built using React.js, React-Scroll, & Styled Components</p>
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
                                    <p className="projects-description">This single-page app was made to look and feel like the homepage of Netflix complete with pop-up trailers utilizing <a href="https://www.npmjs.com/package/react-youtube" target="_blank" rel="noreferrer" alt="link to npm youtube react">React-YouTube</a> to handle embedded videos.</p><p className="built-with">Built using React.js, React-YouTube, & Styled Components</p>
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
                                    <p className="projects-description">This project is a simple front-end landing site built as a coding challenge from <a href="https://www.frontendmentor.io/challenges" alt="link to frontend mentor .io" target="_blank" rel="noreferrer">Frontend Mentor</a> for the purpose of learning Styled Components & improve coding habits.</p><p className="built-with">Built using React.js & Styled Components</p>
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
                                    <p className="projects-description">Movie Quest is a web application that allows users to see what movies are popular right now, find a movie to watch by checking out what what's popular, and find recommendations based on genre & user rating. </p><p className="built-with">This was built with React.js & uses Airtable to save movies to a list</p>
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
                                    <p className="projects-description">This proof-of-concept project was a collaborative effort involving several developers and a professional UX design team. The purpose of this Full-Stack app was to show how one could request an absentee ballot & check the delivery status of their ballot request for their home state during an election.</p><p className="built-with">Built using React, Express, & MongoDB </p>
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
                                    <p className="projects-description">Pokedex leverages the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to let you search and find each and every Pokemon discovered thus far from every region to help you Catch 'em All!</p><p className="built-with"> Built using JavaScript</p>
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