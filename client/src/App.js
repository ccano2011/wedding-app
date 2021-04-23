import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Corkboard from './screens/Corkboard/Corkboard';
import CreatePost from './screens/Corkboard/CreatePost'
import UserPost from './screens/Corkboard/UserPosts'
import Login from './screens/Corkboard/Login';
import Home from './screens/Home/Home';
import Registration from './screens/Corkboard/Registration';
import EditPost from './screens/Corkboard/EditPost';
import OurStory from './screens/OurStory/OurStory';
import Travel from './screens/Travel/Travel';
import Photos from './screens/Photos/Photos';
import Registry from './screens/Registry/Registry';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Background from "./Assets/SiteBackdrop.jpeg"
import Layout from './shared/nav';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

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
    history.push('/corkboard');
  }

  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/corkboard'>
          <Corkboard currentUser={currentUser} handleLogout={handleLogout} />
        </Route>

        <Route path='/our-story'>
          <OurStory />
        </Route>

        <Route path='/travel'>
          <Travel />
        </Route>

        <Route path='/pictures'>
          <Photos />
        </Route>

        <Route path='/registry'>
          <Registry />
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
    </Layout>
  );
}

export default App;
