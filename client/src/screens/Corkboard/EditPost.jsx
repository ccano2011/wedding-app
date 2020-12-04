import React, { useEffect, useState } from 'react';
import { getOnePost, updatePost } from '../../services/posts'
import { Redirect, useParams } from 'react-router-dom';
import Nav from '../../shared/Nav'

function EditPost(props) {


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
    }, [id]);

    if (props.currentUser === null) {
        return <Redirect to={'/registration'} />
    } else if (isCreated) {
        return <Redirect to={`/corkboard`} />
    }

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

    return (
        <div>
            <Nav />
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