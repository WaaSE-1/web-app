import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import Settings from './Settings'
import {UserContext} from '../contexts/UserContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Request from '../scripts/request'

const App = () => {
  const storedJwt = localStorage.getItem('token')
  const [token, setToken] = useState(storedJwt || null)
  const [cars, setCars] = useState([])

  useEffect(() => {
    Request("GET", "/cars").then(data => {
      setCars(data[0])
    })
  }, [])

  return (
      <Router>
        <div className="App">
          <Switch>
            <UserContext.Provider value={{token, setToken}}>
              <Navbar />
              <Route path="/" exact render={() => <Home cars={cars}/>}/>
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
