import React, { useEffect, useState } from 'react';
import { getAllPosts, destroyPost } from '../../services/posts'
import { Link } from 'react-router-dom';

function UserPosts(props) {
    const [userPosts, setUserPosts] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    // const { id } = useParams();
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

    if (!userPosts.length) {
        return <h4>You haven't made any posts yet! Click <Link to="/create-post">HERE</Link> to make one!</h4>
    }

    // console.log(userPosts[0].id)
    const handleDelete = async (id) => {
        await destroyPost(id)
        alert("Post Successfully Deleted")
        setLoaded(!isLoaded)
    };

    // const handleDelete = async (id) => {
    //     await destroyPost(userPosts.id);
    //     // userPosts.filter(post => post.id !== id)
    // }

    return (
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
    )
}
export default UserPosts;