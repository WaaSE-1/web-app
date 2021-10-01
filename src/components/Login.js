import '../css/Login.css'

const handleLoginSubmit = (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value  
  let password = document.getElementById("password").value
  alert(email + " " + password)
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