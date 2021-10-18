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
import Particles from 'react-particles-js';
import jwt from 'jwt-decode'

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
        <Particles params={{
                     "particles": {
                    "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 1803.4120608655228
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 2,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.4008530152163807,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 10,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 0,
                        "color": "#ffffff",
                        "opacity": 0.3687847739990702,
                        "width": 0.6413648243462091
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "bottom",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
                }}
                style={{position:"fixed", zIndex : -1, width: "100%"}} />
        <div className="App">
          <Switch>
            <UserContext.Provider value={{token, setToken}}>
              <Navbar />
              <Route path="/" exact render={() => <Homepage />}/>
              <Route path="/logout" exact render={() => <Logout setToken={setToken}/>}/>
              <Route path="/products" exact render={() => <Products parts={parts}/>}/>
              <Route path="/products/overview" exact render={() => jwt(token)["position"] ? <ProductsOverview products={parts} setProducts={setParts}/> : "You shall not pass"}/>
              <Route path="/products/add" exact render={() => jwt(token)["position"] ? <ProductCreateForm/> : "You shall not pass!"}/>
              <Route path="/employees/" exact render={() => jwt(token)["position"] === 1 ? <EmployeeDashboard employees={employees} setEmployees={setEmployees}/> : "You shall not pass!"}/>
              <Route path="/employees/login" exact render={() => token ? <Redirect to="/" /> : <EmployeeLogin />}/>
              <Route path="/employees/add" exact render={() => jwt(token)["position"] === 1 ? <EmployeeCreateForm setEmployees={setEmployees}/> : "You shall not pass!"}/>
              <Switch>
                <Route path="/cars/add" exact render={() => jwt(token)["position"] ? <CarCreateForm token={token}/> : "You shall not pass"}/>
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
