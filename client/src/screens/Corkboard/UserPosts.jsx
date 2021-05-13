import React, { useEffect, useState } from 'react';
import { getAllPosts, destroyPost } from '../../services/posts'
import { Link, useHistory } from 'react-router-dom';
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
                post.user_id === props.currentUser?.id
            )
            if (props.currentUser.admin === true) {
                setUserPosts(posts)
            } else {
                console.log(filteredPosts)
                setUserPosts(filteredPosts)
            }
        }
        fetchUserPosts();
    }, [props.currentUser, isLoaded]);

    const handleClick = () => {
        history.push('/create-post')
    }

    if (!userPosts.length) {
        return <>
            <h2 className="no-posts">You haven't made any posts yet!</h2>
            <div className='no-post-div'>
                <button onClick={handleClick} className="no-post-button">Click here to make one!</button>
            </div>
        </>
    }

    const handleDelete = async (id) => {
        await destroyPost(id)
        alert("Post Successfully Deleted")
        setLoaded(!isLoaded)
    };

    return (
        <>
            <div className="map">
                {
                    userPosts.map(post => (
                        <div key={post.id} className="mappedContent">
                            <p className="postContent">{post.content}</p>
                            <p className='postName'> - {post.name}</p>
                            <div className="buttons">
                                <button className='delete-button' onClick={() => handleDelete(post.id)}>Delete Post</button>
                                <Link to={`/edit-post/${post.id}`}><button className='edit-btn'>Edit Post</button></Link>
                            </div>
                        </div>
                    )).reverse()
                }
            </div >
            <Link to={`/`}><button className='edit-btn'>Head Back</button></Link>
        </>
    )
}
export default UserPosts;