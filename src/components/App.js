import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
   
      <Router>
        <div className="App">
          <h2>Hellstern auto!</h2>
          <Navbar />
          <Switch>
            <Route path="/user/register" component={Register} />
            <Route path="/user/login" component={Login} />
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
