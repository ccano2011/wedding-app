import React, { useEffect, useState } from 'react';
import { getOnePost, updatePost } from '../../services/posts'
import { Link, Redirect, useParams } from 'react-router-dom';
import './CreatePost.css'


function EditPost(props) {


    const [updateUserPost, setUpdatePost] = useState({
        content: '',
        name: '',
        id: ''
    })
    const [isCreated, setCreated] = useState(false)
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
        return <Redirect to={`/`} />
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
            </form>
            <div className='buttons-create'>
                <button type='submit' onClick={(e) => {
                    e.preventDefault()
                    handleSubmit(id, updateUserPost)
                }} className="submit-button">Submit</button>
                <Link to="/"><button className="cancel-button">Cancel</button></Link>
            </div>
        </div>
    )
}
export default EditPost;