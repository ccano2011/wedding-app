import React, { useEffect, useState } from 'react';
import { getOnePost, updatePost } from '../../services/posts'
import { Redirect, useHistory, useParams } from 'react-router-dom';

function EditPost(props) {
    // refer to Tasteville's useParams example
    // const history = useHistory()
    const [updateUserPost, setUpdatePost] = useState({
        content: '',
        name: '',
        id: ''
    })
    const [isCreated, setCreated] = useState(false)
    // const [isUpdated, setUpdated] = useState(false)
    // const [userPost, setUserPost] = useState([])
    const { id } = useParams();

    console.log(useParams())
    console.log(id)
    console.log(updateUserPost)
    useEffect(() => {
        const fetchUserPost = async () => {
            const posts = await getOnePost(id);
            if (posts) {
                setUpdatePost(posts);
            }
        }
        fetchUserPost()
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatePost(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (id, updateUserPost) => {
        const created = await updatePost(id, updateUserPost)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/corkboard`} />
    }

    return (
        <div>
            <h2>TESTING UPDATEPOST COMPONENT ROUTE</h2>
            <form className="create-form" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(id, updateUserPost)
            }}>
                <textarea
                    className="postBody"
                    rows={10}
                    placeholder='Your message to the bride & groom'
                    value={updateUserPost.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Your Name'
                    value={updateUserPost.name}
                    name='name'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </div>
    )
}
export default EditPost;