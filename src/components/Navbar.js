import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul className="route">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/user/login">
                <li>Login</li>
            </Link>    
            <Link to="/user/register">
                <li>Register</li>
            </Link>  
            
        </ul>
    </nav>
  );
}

export default Navbar;
