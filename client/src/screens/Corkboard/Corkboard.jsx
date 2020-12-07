import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts'
import { Link } from 'react-router-dom';
import Nav from '../../shared/Nav'
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
            <h2>Cork Board</h2>
            <Link to="/create-post">
                <button>Create Post</button>
            </Link>
            <Link to="/user-post">
                <button>Your Posts</button>
            </Link>
            {/* Following ternary was from https://stackoverflow.com/questions/60575870/how-to-change-login-button-to-logout-button-in-react */}
            {
                props.currentUser
                    ? (
                        <button onClick={props.handleLogout}>Logout</button>
                    ) : (
                        <Link to="/registration">
                            <button>Login/Register</button>
                        </Link>
                    )
            }
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
            <div className="map">
                {
                    posts.map(post => (
                        <div key={post.id} className="mappedContent">
                            <p className="postContent">{post.content}</p>
                            <p className='postName'> - {post.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default Corkboard;