import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'

const Navbar = () => {

  const {token} = useContext(UserContext)
  const loggedInNav = (
      <ul className="route">
                <Link to="/cars">
                    <li>Cars</li>
                </Link>  
                <Link to="/products">
                    <li>Products</li>
                </Link>  
                <h1 className="header-title">Hellstern Cars</h1>
                <Link to="/">
                    <li>Services</li>
                </Link>
                <Link to="/user/account">
                    <li>My Account</li>
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
            {token ? loggedInNav : loggedOutNav}
        </nav>
        
    </>
  );
}

export default Navbar;
