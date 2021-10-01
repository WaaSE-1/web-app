import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <img src={window.location.origin + "/header.png"} style={{width: "100%", height: 150}} alt="car" />
        <nav>
            <ul className="route">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/user/login">
                    <li>Login</li>
                </Link>    
                <h1 className="header-title">Hellstern Cars</h1>
                <Link to="/user/register">
                    <li>Register</li>
                </Link>
                <Link to="/user/account">
                    <li>My Account</li>
                </Link>    
                
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
