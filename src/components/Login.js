import '../css/Login.css'
import Request from '../scripts/request'

const handleLoginSubmit = (e) => {
  e.preventDefault();
  
  Request("POST", "/users/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }).then(data => {
      if (data.success) {
        alert(`Successfully logged in! \nToken: ${data.token.access_token}`)
      } else {
        alert(data.error)
      }
    })


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