import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import Settings from './Settings'
import {UserContext} from '../contexts/UserContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [token, setToken] = useState(null)

  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <UserContext.Provider value={{token, setToken}}>
              <Route path="/user/register" component={token ? () => (<h1>Already Logged in!</h1>) : Register} />
              <Route path="/user/login" component={token ? () => (<h1>Already Logged in!</h1>) : Login} />
              <Route path="/user/account" component={token ? Settings : () => (<h1>Not Logged in!</h1>)} />
            </UserContext.Provider>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
