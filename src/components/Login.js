import '../css/Login.css'

const handleLoginSubmit = (e) => {
  e.preventDefault();
  alert("Starting the login process")
}

const Login = () => {
  return (
      <form className="login-form">
        <label for="email">Email:</label><br />
        <input type="text" id="email" name="email" /><br />
        <label for="password">Password:</label><br />
        <input type="text" id="password"/><br />
        <input type="submit" value="Submit" onClick={handleLoginSubmit}></input>
      </form>
    );

}

export default Login;
