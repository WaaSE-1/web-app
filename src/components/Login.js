import '../css/Login.css'
import Request from '../scripts/request'

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'))
  console.log(formData.entries())
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
      <form className="register-form">
        <div className="input-group">
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" name="email" placeholder="name@email.com" required/><br />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" placeholder="********" required/><br />
        </div>
        <input className="button" type="submit" value="Login" onClick={handleLoginSubmit}></input>
      </form>
    );

}

export default Login;