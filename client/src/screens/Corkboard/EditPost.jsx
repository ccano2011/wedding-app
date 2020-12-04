import React, { useEffect, useState } from 'react';
import { updatePost } from '../../services/posts'
import { Route, useHistory, useParams } from 'react-router-dom';

function EditPost(props) {
    // const { id } = useParams()
    // Number(id)
    // refer to Tasteville's useParams example

    // const history = useHistory()
    // const [formData, setFormData] = useState({
    //     name: '',
    //     content: ''
    // })
    // const [isUpdated, setUpdated] = useState(false)
    // const [userPosts, setUserPosts] = useState([])
    // const { id } = useParams();

    // useEffect(() => {
    //     const prefillForm = () => {
    //         //Number(id) is the integer equivalent of stringify & JSON.parse/stringify
    //         const postItem = props.posts.filter(post => post.id === Number(id));
    //         setFormData({
    //             name: postItem.name
    //         })
    //     }
    //     if (props.posts) {
    //         prefillForm();
    //     }
    // }, [props.posts])
    // useEffect(() => {
    //     const fetchUserPosts = async () => {
    //         // const posts = await getAllPosts();
    //         // console.log(posts)
    //         const filteredPosts = posts.filter(post =>
    //             //make sure post.user_id needs to === props.currentUser.id
    //             // post.user_id === Number(props.currentUser.id)
    //             post.user_id === props.currentUser.id
    //         )
    //         if (props.posts.length) {
    //             fetchUserPosts();
    //         }
    //         console.log(filteredPosts)
    //         setUserPosts(filteredPosts)
    //     }
    // }, [props.posts]);

    // console.log(userPosts)

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    return (
        <div>
            <h2>TESTING UPDATEPOST COMPONENT ROUTE</h2>
            {/* <form className="create-form" onSubmit={(e) => {
                e.preventDefault();
                props.handleUpdate(id, formData)
            }}>
                <textarea
                    className="postBody"
                    rows={10}
                    placeholder='Your message to the bride & groom'
                    value={formData.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Your Name'
                    value={formData.name}
                    name='name'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form> */}
        </div>
    )
}
export default EditPost;