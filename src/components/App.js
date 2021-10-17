import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import Settings from './Settings'
import {UserContext} from '../contexts/UserContext.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from './Products';
import Request from '../scripts/request'
import Cars from './Cars'
import ProductCreateForm from './ProductCreateForm';
import EmployeeCreateForm from './EmployeeCreateForm'
import EmployeeDashboard from './EmployeeDashboard'
import ProductsOverview from './ProductsAdminOverview';
import { Services } from './Services';
import Garage from './Garage'
import { Homepage } from './Homepage';
import EmployeeLogin from './EmployeeLogin'
import Logout from './Logout'
import CarCreateForm from './CarCreateForm'

const App = () => {
  const storedJwt = localStorage.getItem('token')
  const [token, setToken] = useState(storedJwt || null)
  const [cars, setCars] = useState([])
  const [parts, setParts] = useState([])
  const [employees, setEmployees] = useState([])
  const [car, setCar] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    Request("GET", "/cars").then(data => {
      setCars(data[0])
    })
    Request("GET", "/products").then(data => {
      setParts(data)
    })
    Request("GET", "/employees").then(data => {
      setEmployees(data)
    })
    Request("GET", "/services/requests").then(data => {
      setServices(data)
    })
  }, [])

  return (
      <Router>
        <div className="App">
          <Switch>
            <UserContext.Provider value={{token, setToken}}>
              <Navbar />
              <Route path="/" exact render={() => <Homepage />}/>
              <Route path="/logout" exact render={() => <Logout setToken={setToken}/>}/>
              <Route path="/products" exact render={() => <Products parts={parts}/>}/>
              <Route path="/products/overview" exact render={() => <ProductsOverview products={parts} setProducts={setParts}/>}/>
              <Route path="/products/add" exact render={() => <ProductCreateForm/>}/>
              <Route path="/employees/" exact render={() => <EmployeeDashboard employees={employees} setEmployees={setEmployees}/>}/>
              <Route path="/employees/login" exact render={() => token ? <Redirect to="/" /> : <EmployeeLogin />}/>
              <Route path="/employees/add" exact render={() => <EmployeeCreateForm setEmployees={setEmployees}/>}/>
              <Switch>
                <Route path="/cars/add" exact render={() => <CarCreateForm token={token}/>}/>
                <Route path="/cars/:id" exact render={() => <Cars cars={cars} car={car} setCar={setCar}/>}/>
                <Route path="/cars" exact render={() => <Cars cars={cars} car={car} setCar={setCar}/>}/>
              </Switch>
              <Route path="/user/register" component={token ? () => <Redirect to="/" /> : Register} />
              <Route path="/user/login" component={token ? () => <Redirect to="/" /> : Login} />
              <Route path="/user/account" component={token ? Settings : () => (<Redirect to="/user/login" />)} />
              <Route path="/user/services" render={token ? () => <Services services={services} token={token}/> : () => (<Redirect to="/user/login" />)} />
              <Route path="/user/garage" render={token ? () => <Garage token={token}/> : () => (<Redirect to="/user/login" />)} />
              </UserContext.Provider>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
