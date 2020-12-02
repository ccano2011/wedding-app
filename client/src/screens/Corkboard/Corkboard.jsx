import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts'
import { Switch, Route, Link } from 'react-router-dom';


function Corkboard() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getAllPosts();
            setPosts(postData);
        }
        // const fetchFoods = async () => {
        //     const foodData = await getAllFoods();
        //     setFoods(foodData);
        // }
        fetchPosts();
        // fetchFoods();
    }, [])
    console.log(posts)
    return (
        <div>
            <h2>Cork Board</h2>
            <Link to="/create-post">
                <button>Create Post</button>
            </Link>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <p>{post.content}</p>
                        <p> - {post.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Corkboard;