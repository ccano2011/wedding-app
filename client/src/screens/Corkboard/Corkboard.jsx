import React, { /*useEffect, useState */ } from 'react';
// import { getAllPosts } from '../../services/posts'
// import { Link as LinkRouter } from 'react-router-dom';
// import Button from '@material-ui/core/Button'
// import Create from '@material-ui/icons/Create'
// import Assignment from '@material-ui/icons/Assignment'
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import imageblog from '../../Assets/under-construction.png'
import styled from 'styled-components';


// const CorkboardStyling = styled.div`
// background-color: #d0c5b3;
// max-width: 1672px;
// margin: auto;
// min-height:100vh;
// max-height: fit-content;
// padding-top:5vh;
// @media screen and (max-height: 868px){
//     padding-top:10vh;
// }
// @media screen and (max-width: 768px){
//     padding-top :1vh;
// }
// .map {
//     display: flex;
//     overflow: auto;
//     max-width:100vw;   
// }
//   .corkBoardTitle{
//     font-family: 'Pinyon Script', cursive;
//     font-size: 2em;
//     margin-bottom: 5px;
//     text-align: center;
//     position: relative;
//   }

//   .currentUserDiv{
//     display: flex;
//     justify-content: center;
//     position: relative;
//   }

//   .mappedContent {
//     justify-content: space-evenly;
//     padding: 25px;
//     margin: 30px;
//     border-radius: 15px;
//     width: fit-content;
//     overflow: unset;
//     max-width: 420px;
//     height: -moz-fit-content;
//     height: fit-content;
//     -webkit-backdrop-filter: blur(8px);
//     backdrop-filter: blur(8px);
//     background-color: rgb(189, 204, 174);
//     border: 1px solid rgb(129, 129, 129);
// }

//   .currentUserGreeting {
//     font-family: 'Fancy';
//     font-size: 40px;
//     padding-top:5vh;
//     margin-bottom: 25px;
//     text-align: center;
//     @media screen and (max-height: 568px){
//     font-size: 30px;
//     padding-top:10vh;
// }
// @media screen and (max-height: 386px){
//     padding-top:15vh;
// }
//     /* margin-left: 100px; */
//   }

//   .corkboardButtons{
//     font-family: 'Pinyon Script', cursive;
//     display: flex;
//     padding-top:3vh;
//     justify-content: space-evenly;
//     position: relative;
//     z-index: 1;
//   }

//   .postName{
//     font-family: 'Rouge Script', cursive;
//     font-size: x-large;
//     padding-left: 3px;
//     margin-left: 10px;
//   }

//   .postContent {
//     overflow: auto;
//     min-width: 100px;
//     font-family: 'Dosis', sans-serif !important;
//     font-size: large;
//     padding-left: 3px;
// }

// `
const Placeholder = styled.div`
    font-family: 'Rouge Script', cursive;
    font-size: 60px;
    margin-top:40vh;
    text-align:center;
    `
function Corkboard(props) {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const postData = await getAllPosts();
    //         setPosts(postData);
    //     }
    //     fetchPosts();
    // }, [])

    return (
        <Placeholder id='blog'>
            <p className="blog">Coming Soon...</p>
            {/* <img className='imageblog' src={imageblog} alt="coming soon"></img> */}
        </Placeholder>
        // <CorkboardStyling id='cork-board'>
        //     <div className="currentUserDiv">
        //         {
        //             props.currentUser
        //                 ? (
        //                     <p className="currentUserGreeting">Greetings, {props.currentUser.name}</p>
        //                 ) : (
        //                     <p className="currentUserGreeting">Corkboard </p>
        //                 )
        //         }
        //     </div>

        //     <div className='corkboardButtons'>
        //         <LinkRouter to="/create-post">
        //             <Button
        //                 variant="outlined"
        //                 size="large"
        //                 startIcon={<Create />}
        //             ></Button>
        //         </LinkRouter>
        //         {
        //             props.currentUser
        //                 ? (
        //                     <LinkRouter to="/user-post">
        //                         <Button
        //                             variant="outlined"
        //                             size="large"
        //                             startIcon={<Assignment />}
        //                         ></Button>
        //                     </LinkRouter>
        //                 ) : (
        //                     null
        //                 )
        //         }
        //         {
        //             props.currentUser
        //                 ? (
        //                     <Button
        //                         variant="outlined"
        //                         size="large"
        //                         startIcon={<ExitToAppIcon />}
        //                         onClick={props.handleLogout}
        //                     ></Button>
        //                 ) : (
        //                     null
        //                 )
        //         }
        //     </div>
        //     <div className="map">
        //         {
        //             posts.map(post => (
        //                 <div key={post.id} className="mappedContent">
        //                     <p className="postContent">{post.content}</p>
        //                     <p className='postName'> - {post.name}</p>
        //                 </div>
        //             )).reverse()
        //         }
        //     </div>
        // </CorkboardStyling >

    );
}

export default Corkboard;