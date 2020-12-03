// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function EditPost(props) {
//     const [formData, setFormData] = useState({
//         name: ''
//     })
//     const [isUpdated, setUpdated] =useState(false)
//     const { id } = useParams();

//     useEffect(() => {
//         const prefillForm = () => {
//             const thePost = props.posts.find(post => post.id === Number(id));
//             setFormData({
//                 name: thePost.name
//             })
//         }
//         if (props.posts.length) {
//             prefillForm();
//         }
//     }, [props.posts])

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }))
//     }

//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             props.handleUpdate(id, formData);
//         }}>
//             <h3>Edit Post</h3>
//             <label>Name:
//         <input
//                     type='text'
//                     name='name'
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//             </label>
//             <button>Submit</button>
//         </form>
//     )
// }
// export default EditPost;
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { getOnePost, updatePost } from '../../services/posts'
import './EditPost.css'
function EditPost(props) {
    const [post, setPost] = useState({
        name: '',
        content: '',
        id: ''
    });
    const history = useHistory();
    const [isUpdated, setUpdated] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        const fetchPost = async () => {
            const post = await getOnePost(id);
            setPost(post);
        }
        fetchPost();
    }, [id]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let { id } = props.match.params;
        const updated = await updatePost(id, post);
        setUpdated(updated);
        history.push('/posts')
    }
    return (
        <div id="edit-post-main-container">
            <form onSubmit={handleSubmit}>
                <div id="edit-post-sub-container">
                    <h3 id="edit-post-title">Edit Post</h3>
                    <div id="edit-post-details-box">
                        <div id="edit-title-box">
                            <input
                                className="edit-post-input"
                                type='text'
                                name='name'
                                value={post.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div id="edit-content-box">
                            <input
                                className="edit-post-input"
                                id="edit-content-input"
                                type='textarea'
                                name='content'
                                value={post.content}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" id="edit-post-submit-button">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EditPost;