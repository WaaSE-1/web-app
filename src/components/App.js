import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import Settings from './Settings'
import {UserContext} from '../contexts/UserContext.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Request from '../scripts/request'
import Cars from './Cars'
import ProductCreateForm from './ProductCreateForm';
import EmployeeCreateForm from './EmployeeCreateForm'

const App = () => {
  const storedJwt = localStorage.getItem('token')
  const [token, setToken] = useState(storedJwt || null)
  const [cars, setCars] = useState([])
  const [parts, setParts] = useState([])
  const [car, setCar] = useState([])

  useEffect(() => {
    Request("GET", "/cars").then(data => {
      setCars(data[0])
    })
    Request("GET", "/products").then(data => {
      setParts(data)
    })
  }, [])

  return (
      <Router>
        <div className="App">
          <Switch>
            <UserContext.Provider value={{token, setToken}}>
              <Navbar />
              <Route path="/" exact render={() => <h1>Welcome to Hellstern auto home page!</h1>}/>
              <Route path="/products" exact render={() => <Home parts={parts}/>}/>
              <Route path="/products/add" exact render={() => <ProductCreateForm/>}/>
              <Route path="/employees/add" exact render={() => <EmployeeCreateForm/>}/>
              <Route path="/cars/:id" render={() => <Cars cars={cars} car={car} setCar={setCar}/>}/>
              <Route path="/cars" exact render={() => <Cars cars={cars} car={car} setCar={setCar}/>}/>
              <Route path="/user/register" component={token ? () => <Redirect to="/" /> : Register} />
              <Route path="/user/login" component={token ? () => <Redirect to="/" /> : Login} />
              <Route path="/user/account" component={token ? Settings : () => (<Redirect to="/user/login" />)} />
            </UserContext.Provider>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
