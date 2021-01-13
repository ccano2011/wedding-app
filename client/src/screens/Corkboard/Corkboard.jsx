import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts'
import { Link } from 'react-router-dom';
import Nav from '../../shared/nav'
// import './Corkboard.css'
import Map from './styledCorkBoard'
import CountdownTimer from './CountDownTimer';

function Corkboard(props) {
    const [posts, setPosts] = useState([]);
    const initialVal = React.useRef();

    const [small, setSmall] = useState(() => {
        if (window.innerWidth <= 768) {
            initialVal.current = true
        } else {
            initialVal.current = false
        }
    });

    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getAllPosts();
            setPosts(postData);
        }
        fetchPosts();
    }, [])

    const compareDates = (date) => {
        let currentTime = new Date().getTime();
        let selectedTime = new Date(date).getTime();

        if (currentTime < selectedTime) {
            // if the currentTime is less than the selectedTime return -1
            return -1;
        } else if (currentTime > selectedTime) {
            // if the currentTime is greater than select time we're returning 1
            return 1;
        } else {
            // if the two values are equal return 0
            return 0;
        }
    };

    function handleResize() {
        let height = window?.innerHeight
        // // console.log(height)

        let width = window?.innerWidth
        console.log('resized to: ', width, 'x', height)
        if (width <= 768) {
            setSmall(true)
            console.log(small)
        } else {
            setSmall(false)
            console.log(small)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [])

    return (
        <div>
            <Nav />
            <h1 className="corkBoardTitle">Cork Board</h1>
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
            <div className='corkBoardButtons'>
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
            </div>
            <div className="map-wrapper">
                <CountdownTimer />
                <Map initialVal={initialVal} small={small} className="map">
                    {
                        posts.map(post => (
                            <div key={post.id} className="mappedContent">
                                <p className="postContent">{post.content}</p>
                                <p className='postName'> - {post.name}</p>
                            </div>
                        ))
                    }
                </Map>
            </div>
        </div>

    );
}

export default Corkboard;