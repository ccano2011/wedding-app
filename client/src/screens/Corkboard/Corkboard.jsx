import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts'
import { Link } from 'react-router-dom';
import Nav from '../../shared/nav'
import Button from '@material-ui/core/Button'
import Create from '@material-ui/icons/Create'
import Assignment from '@material-ui/icons/Assignment'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Corkboard.css'

function Corkboard(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getAllPosts();
            setPosts(postData);
        }
        fetchPosts();
    }, [])



    return (
        <div>
            <Nav />
            {/* <h1 className="corkBoardTitle">Cork Board</h1> */}
            <div className="currentUserDiv">
                {
                    props.currentUser
                        ? (
                            <p className="currentUserGreeting">Greetings, {props.currentUser.name}</p>
                        ) : (
                            <p> </p>
                        )
                }
            </div>
            <div className='corkboardButtons'>
                <Link to="/create-post">
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<Create />}
                    ></Button>
                </Link>
                {
                    props.currentUser
                        ? (
                            <Link to="/user-post">
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<Assignment />}
                                ></Button>
                            </Link>
                        ) : (
                            null
                        )
                }

                {/* Following ternary was from https://stackoverflow.com/questions/60575870/how-to-change-login-Button-to-logout-Button-in-react */}
                {
                    props.currentUser
                        ? (
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<ExitToAppIcon />}
                                onClick={props.handleLogout}
                            ></Button>
                        ) : (
                            null
                        )
                }
            </div>

            <div className="map">
                {
                    posts.map(post => (
                        <div key={post.id} className="mappedContent">
                            <p className="postContent">{post.content}</p>
                            <p className='postName'> - {post.name}</p>
                        </div>
                    )).reverse()
                }
            </div>
        </div>

    );
}

export default Corkboard;