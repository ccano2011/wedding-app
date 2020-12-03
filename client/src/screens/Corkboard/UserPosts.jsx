import React, { useEffect, useState } from 'react';
import { getAllPosts, updatePost } from '../../services/posts'
import { Route, useHistory } from 'react-router-dom';

function UserPosts(props) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        content: ''
    })
    const [isUpdated, setUpdated] = useState(false)
    const [userPosts, setUserPosts] = useState([])
    // const { id } = useParams();

    useEffect(() => {
        const fetchUserPosts = async () => {
            const posts = await getAllPosts();
            console.log(posts)
            const filteredPosts = posts.filter(post =>
                //make sure post.user_id needs to === props.currentUser.id
                // post.user_id === Number(props.currentUser.id)
                post.user_id === props.currentUser.id
            )
            console.log(filteredPosts)
            setUserPosts(filteredPosts)

        }
        fetchUserPosts();
    }, []);

    console.log(userPosts)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let { id } = props.match.params;
        const updated = await updatePost(id);
        setUpdated(updated);
        history.push('/posts')
    }

    return (
        <div>
            <h2>TESTING UPDATEPOST COMPONENT ROUTE</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <textarea
                    className="postBody"
                    rows={10}
                    placeholder='Your message to the bride & groom'
                    value={updatePost.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Your Name'
                    value={updatePost.name}
                    name='name'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </div>
    )
}
export default UserPosts;
// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom'
// import { getOnePost, updatePost } from '../../services/posts'
// import './EditPost.css'
// function EditPost(props) {
//     const [post, setPost] = useState({
//         name: '',
//         content: '',
//         id: ''
//     });
//     const history = useHistory();
//     const [isUpdated, setUpdated] = useState(false);
//     let { id } = useParams();
//     useEffect(() => {
//         const fetchPost = async () => {
//             const post = await getOnePost(id);
//             setPost(post);
//         }
//         fetchPost();
//     }, [id]);
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setPost({
//             ...post,
//             [name]: value
//         });
//     }
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         let { id } = props.match.params;
//         const updated = await updatePost(id, post);
//         setUpdated(updated);
//         history.push('/posts')
//     }
//     return (
//         <div id="edit-post-main-container">
//             <form onSubmit={handleSubmit}>
//                 <div id="edit-post-sub-container">
//                     <h3 id="edit-post-title">Edit Post</h3>
//                     <div id="edit-post-details-box">
//                         <div id="edit-title-box">
//                             <input
//                                 className="edit-post-input"
//                                 type='text'
//                                 name='name'
//                                 value={post.name}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div id="edit-content-box">
//                             <input
//                                 className="edit-post-input"
//                                 id="edit-content-input"
//                                 type='textarea'
//                                 name='content'
//                                 value={post.content}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <button type="submit" id="edit-post-submit-button">Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// export default EditPost;