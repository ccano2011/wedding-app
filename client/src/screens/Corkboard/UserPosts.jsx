import React, { useEffect, useState } from 'react';
import { getAllPosts, destroyPost } from '../../services/posts'
import { Redirect, Link } from 'react-router-dom';
import Nav from '../../shared/nav'


function UserPosts(props) {
    const [userPosts, setUserPosts] = useState([])
    const [isLoaded, setLoaded] = useState(false)
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

    if (props.currentUser === null) {
        return <Redirect to={'/registration'} />
    } else if (!userPosts.length) {
        return <h4>You haven't made any posts yet! Click <Link to="/create-post">HERE</Link> to make one!</h4>
    }

    const handleDelete = async (id) => {
        await destroyPost(id)
        alert("Post Successfully Deleted")
        //The following updates the list of posts made by the user in the useEffect
        setLoaded(!isLoaded)
    };

    return (
        <>
            <Nav />
            <div>
                <h2>TESTING USERPOST COMPONENT ROUTE</h2>
                {
                    userPosts.map(post => (
                        <div key={post.id}>
                            <p>{post.content}</p>
                            <p> - {post.name}</p>
                            {/* <p>{post.id}</p> */}
                            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                            <Link to={`/edit-post/${post.id}`}><button>Edit Post</button></Link>
                        </div>
                    ))
                }
            </div >
        </>
    )
}
export default UserPosts;