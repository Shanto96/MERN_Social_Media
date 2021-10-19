import {useContext} from 'react'
import './App.css';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/login'
import RegisterPage from './pages/Register/RegisterPage'
import Messenger from './pages/Mesenger/messenger'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {AuthContext} from './Context/AuthContext'

function App() {

  const {user} = useContext(AuthContext);


  return (

    <>
    <Router>
      <div>
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile/:userName">
            <Profile />
          </Route> 
          <Route path="/Register">
            <RegisterPage />
          </Route> 
                <Route path="/Register">
            <RegisterPage />
          </Route>
          <Route path="/" exact >
            { user?  <Home />:<Login />}
          </Route>
           <Route path="/messenger" exact >
           { user? <Messenger />:<Login />}
            
          </Route>
        </Switch>
      </div>
    </Router>
  
  </>
  );

}

export default App;
