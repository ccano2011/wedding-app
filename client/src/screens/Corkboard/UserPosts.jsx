import React, { useEffect, useState } from 'react';
import { getAllPosts, destroyPost } from '../../services/posts'
import { Link, useHistory } from 'react-router-dom';
import Nav from '../../shared/nav'
import './UserPost.css'


function UserPosts(props) {
    const [userPosts, setUserPosts] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const history = useHistory();
    useEffect(() => {
        const fetchUserPosts = async () => {
            const posts = await getAllPosts();
            console.log(posts)
            const filteredPosts = posts.filter(post =>
                //make sure post.user_id needs to === props.currentUser.id
                // post.user_id === Number(props.currentUser.id)
                post.user_id === props.currentUser?.id
            )
            console.log(filteredPosts)
            setUserPosts(filteredPosts)
        }
        fetchUserPosts();
        // for isLoaded to work to update the component, it must be part of the 
        // dependency array of my useEffect 
    }, [props.currentUser, isLoaded]);

    const handleClick = () => {
        history.push('/create-post')
    }

    if (!userPosts.length) {
        return <>
            {/* <Nav /> */}
            <h2 className="no-posts">You haven't made any posts yet!</h2>
            <div className='no-post-div'>
                <button onClick={handleClick} className="no-post-button">Click here to make one!</button>
            </div>
        </>
    }
    // if (props.currentUser === null) {
    //     return <Redirect to={'/corkboard'} />
    // } else 

    const handleDelete = async (id) => {
        await destroyPost(id)
        alert("Post Successfully Deleted")
        //The following updates the list of posts made by the user in the useEffect
        setLoaded(!isLoaded)
    };

    return (
        <>
            <Nav />
            <div className="map">
                {
                    userPosts.map(post => (
                        <div key={post.id} className="mappedContent">
                            <p className="postContent">{post.content}</p>
                            <p className='postName'> - {post.name}</p>
                            {/* <p>{post.id}</p> */}
                            <div className="buttons">
                                <button className='delete-button' onClick={() => handleDelete(post.id)}>Delete Post</button>
                                <Link to={`/edit-post/${post.id}`}><button className='edit-btn'>Edit Post</button></Link>
                            </div>
                        </div>
                    )).reverse()
                }
            </div >
        </>
    )
}
export default UserPosts;