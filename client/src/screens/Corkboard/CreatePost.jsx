import React, { useState } from 'react';
import { createPost } from '../../services/posts'
import { Redirect, Link, useHistory } from 'react-router-dom';
import nav from '../../shared/nav'


function CreatePost(props) {
    const history = useHistory()
    console.log(props.currentUser)
    setTimeout(() => {
        if (props.currentUser === null) {
            history.push('/registration')
        }
    }, 1)

    const [isCreated, setCreated] = useState(false)

    const [newPost, setNewPost] = useState({
        content: '',
        name: '',
        id: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const created = await createPost(newPost)
        setCreated({ created })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewPost({
            ...newPost,
            [name]: value
        })
    }

    if (isCreated) {
        return <Redirect to={`/corkboard`} />
    }

    return (
        <div>
            <nav />
            <h2>TESTING CREATPOST COMPONENT ROUTE</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <textarea
                    className="postBody"
                    rows={10}
                    placeholder='Your message to the bride & groom'
                    value={newPost.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Your Name'
                    value={newPost.name}
                    name='name'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
            <Link to="/corkboard"><button>Cancel</button></Link>
        </div>
    );
}

export default CreatePost;