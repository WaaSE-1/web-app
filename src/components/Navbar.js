import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'
import jwt from 'jwt-decode'

const Navbar = () => {

  const {token} = useContext(UserContext)
  const customerNav = (
      <ul className="route">
                <Link to="/">
                    <li>Home</li>
                </Link> 
                <Link to="/cars">
                    <li>Cars</li>
                </Link>  
                <Link to="/products">
                    <li>Products</li>
                </Link>  
                <h1 className="header-title">Hellstern Cars</h1>
                <Link to="/user/services">
                    <li>Services</li>
                </Link>
                <Link to="/user/account">
                    <li>My Account</li>
                </Link>  
                <Link to="/user/garage">
                    <li>My Cars</li>
                </Link>     
                
            </ul>
            )
  const employeeNav = (
      <ul className="route">
                
                <Link to="/products/add">
                    <li>Add Product</li>
                </Link>
                <Link to="/products/add">
                    <li>----</li>
                </Link>
                <h1 className="header-title">Hellstern Cars</h1> 
                <Link to="/products/overview">
                    <li>Product overview</li>
                </Link>
                <Link to="/logout/">
                    <li>Logout</li>
                </Link> 
                
                
            </ul>
            )
    const managerNav = (
      <ul className="route">
                
                <Link to="/products/add">
                    <li>Add Product</li>
                </Link>
                <Link to="/products/overview">
                    <li>Product overview</li>
                </Link>
                <h1 className="header-title">Hellstern Cars</h1>
                <Link to="/employees/add">
                    <li>Add Employee</li>
                </Link>
                <Link to="/employees/">
                    <li>Employee Overview</li>
                </Link>  
                <Link to="/logout/">
                    <li>Logout</li>
                </Link> 
                
            </ul>
            )
      const loggedOutNav = (
      <ul className="route">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cars">
                    <li>Cars</li>
                </Link>    
                <h1 className="header-title">Hellstern Cars</h1>
                <Link to="/user/login">
                    <li>Login</li>
                </Link> 
                <Link to="/user/register">
                    <li>Register</li>
                </Link>
            </ul>
            )
  return (
    <>
        <img src={window.location.origin + "/header.png"} style={{width: "100%", height: 150}} alt="car" />
        <nav>
            {token ? (jwt(token)["position"] ? (jwt(token)["position"] === 1 ? managerNav : employeeNav) : customerNav) : loggedOutNav}
        </nav>
        
    </>
  );
}

export default Navbar;
