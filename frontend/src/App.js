
import './App.css';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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
          <Route path="/" exact >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  
  </>
  );

}

export default App;
