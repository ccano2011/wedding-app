import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

function CreatePost(props) {
    const history = useHistory()
    console.log(props.currentUser)
    setTimeout(() => {
        if (props.currentUser === null) {
            history.push('/register')
        }
    }, 1)


    return (
        <div>
            <h2>TESTING CREATPOST COMPONENT ROUTE</h2>
        </div>
    );
}

export default CreatePost;