
import '../css/Register.css'
import Request from '../scripts/request'
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'


const Register = () => {

  const {token, setToken} = useContext(UserContext)

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(document.querySelector("form")))
    let infoBar = document.getElementsByClassName("info-message")[0]
    if (Object.values(formData).some(e => e === '')) {
      infoBar.style.visibility = "visible"
      infoBar.textContent = "Please fill out all of the fields!"
      return
    }
    Request("POST", "/users/register", formData).then(data => {
          infoBar.style.visibility = "visible"
          infoBar.style.color = data.access_token ? "#5ffd5f" : "#ff9999"
          infoBar.textContent = data.access_token ? data.access_token : data.error
          if (data.access_token) {
            setToken(data.access_token)
            localStorage.setItem('token', data.access_token)
          }
      })
  }

  return (
    <div>
      <form className="register-form">
        <h3>Create an account{token}</h3>
        <div className="input-group">
          <label htmlFor="firstname">First Name:</label><br/>
          <input type="text" id="firstname" name="firstname"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label><br/>
          <input type="text" id="lastname" name="lastname"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="phonenumber">Phone Number:</label><br/>
          <input type="number" id="phone_number" name="phone_number" max="8"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Street Address:</label><br/>
          <input type="text" id="address" name="address"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="postcode">Post Code:</label><br/>
          <input type="number" max="4" id="postcode" name="postcode"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" name="password"/><br/>
        </div>
        <p className="info-message">Hey</p>
        <input className = "button" type="submit" value="Submit" onClick={handleRegisterSubmit}></input>
      </form>
    </div>
    );
}

export default Register;
