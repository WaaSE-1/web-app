import '../css/Login.css'
import Request from '../scripts/request'
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'


const Login = () => {

  const {setToken} = useContext(UserContext)


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(document.querySelector("form")))
    let infoBar = document.getElementsByClassName("info-message")[0]
    if (Object.values(formData).some(e => e === '')) {
      infoBar.style.visibility = "visible"
      infoBar.textContent = "Please fill out all of the fields!"
      return
    }
    Request("POST", "/employees/login", formData).then(data => {
          
          infoBar.style.visibility = "visible"
          infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
          infoBar.textContent = data.success ? data.success : data.error
          if (data.success) {
            setToken(data.token.access_token)
            localStorage.setItem('token', data.token.access_token)
          } 
      })
  }

  return ( 
      <form className="register-form">
        <h1 className="header-title">Employee Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" name="email" placeholder="name@email.com" required/><br />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" placeholder="********" required/><br />
        </div>
        <p className="info-message">Hey</p>
        <input className="button" type="submit" value="Login" onClick={handleLoginSubmit}></input>
      </form>
    );

}

export default Login;
