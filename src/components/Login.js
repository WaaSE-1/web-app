import '../css/Login.css'
//import Request from '../scripts/request'

const handleLoginSubmit = (e) => {
  e.preventDefault();


  // let request = Request("POST", "/users/login", {
  //       email: document.getElementById("email").value,
  //       password: document.getElementById("password").value
  //   })

}

const Login = () => {
  return ( 
      <form className="login-form">
        <label for="email">Email:</label><br />
        <input type="text" id="email" name="email" placeholder="johndoe@geemail.com"/><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" placeholder="VerySecure123!"/><br />
        <input type="submit" value="Submit" onClick={handleLoginSubmit}></input>
      </form>
    );

}

export default Login;