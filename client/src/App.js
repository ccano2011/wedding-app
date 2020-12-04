import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Corkboard from './screens/Corkboard/Corkboard';
// import Layout from './layouts/Layout';
import CreatePost from './screens/Corkboard/CreatePost'
import UserPost from './screens/Corkboard/UserPosts'
import Login from './screens/Corkboard/Login';
import Registration from './screens/Corkboard/Registration';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import EditPost from './screens/Corkboard/EditPost';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [updatePost, setPosts] = useState()
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])
  console.log(currentUser)

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  // const handleUpdate = async (id, formData) => {
  //   const updatedPost = await setPosts(id, formData);
  //   setPosts(prevState => prevState.map(post => {
  //     return post.id === Number(id) ? updatedPost : post
  //   }))
  //   history.push('/corkboard');
  // }

  return (
    // <Layout
    // currentUser={currentUser}
    // handleLogout={handleLogout}
    // >
    <Switch>

      <Route path='/login'>
        {/* login */}
        <Login handleLogin={handleLogin} />
      </Route>

      <Route path='/registration'>
        {/* register */}
        <Registration handleRegister={handleRegister} />
      </Route>

      <Route path='/create-post'>
        <CreatePost currentUser={currentUser} />
      </Route>

      <Route path='/user-post'>
        <UserPost
          currentUser={currentUser}
        // handleUpdate={handleUpdate}
        />
      </Route>

      <Route path='/edit-post/:id'>
        <EditPost />
      </Route>

      <Route path='/'>
        {/* container */}
        <Corkboard currentUser={currentUser} handleLogout={handleLogout} />
      </Route>

    </Switch>
    // </Layout>
  );
}

export default App;
