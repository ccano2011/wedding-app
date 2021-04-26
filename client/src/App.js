import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Home from './screens/Home/Home.jsx'
import Login from './screens/Corkboard/Login';
import Registration from './screens/Corkboard/Registration';
import EditPost from './screens/Corkboard/EditPost';
import CreatePost from './screens/Corkboard/CreatePost'
import UserPost from './screens/Corkboard/UserPosts'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Layout from './shared/nav.jsx';
import MobileNav from './shared/MobileNav';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  isOpen ? console.log('its open') : console.log('its closed');
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])
  console.log(currentUser)

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }
  return (
    <MobileNav isOpen={isOpen} toggle={toggle}>
      <Layout toggle={toggle}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            </Route>
            <Route path='/login'>
              <Login
                currentUser={currentUser}
                handleLogin={handleLogin}
              />
            </Route>
            <Route path='/registration'>
              <Registration
                handleRegister={handleRegister}
                currentUser={currentUser}
              />
            </Route>
            <Route path='/create-post'>
              <CreatePost currentUser={currentUser} />
            </Route>
            <Route path='/user-post'>
              <UserPost
                currentUser={currentUser}
              />
            </Route>
            <Route path='/edit-post/:id'>
              <EditPost currentUser={currentUser} />
            </Route>
          </Switch>
        </Router >
      </Layout>
    </MobileNav>
  );
}

export default App;