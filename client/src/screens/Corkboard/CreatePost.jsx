import React, { useState } from 'react';
import { createPost } from '../../services/posts'
import { Redirect, Link, useHistory } from 'react-router-dom';
import Nav from '../../shared/nav'
import './CreatePost.css'


function CreatePost(props) {
    const history = useHistory()
    console.log(props.currentUser)
    setTimeout(() => {
        if (props.currentUser === null) {
            history.push('/login')
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
            <Nav />
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
            </form>
            <div className='buttons-create'>
                <button type='submit' onClick={handleSubmit} className="submit-button">Submit</button>
                <Link to="/corkboard"><button className="cancel-button">Cancel</button></Link>
            </div>
        </div>
    );
}

export default CreatePost;