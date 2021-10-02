import '../css/App.css';
import Navbar from './Navbar'
import Register from "./Register"
import Login from './Login'
import Settings from './Settings'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
   
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/user/register" component={Register} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/account" component={Settings} />

          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
