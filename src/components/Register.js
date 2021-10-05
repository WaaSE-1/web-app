
import '../css/Register.css'
import Request from '../scripts/request'
import { UserContext } from '../contexts/UserContext.js'
import { useContext, useState } from 'react'


const Register = () => {

  const {token, setToken} = useContext(UserContext)
  const [postcode, setPostCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const updatePostCode = (e) => {
    if (e.target.value <= 9999) {
      setPostCode(e.target.value.replace('/[^a-zA-Zd]/ig', ""))
    }
  }

  const updatePhoneNumber = (e) => {
    if (e.target.value <= 99999999) {
      setPhoneNumber(e.target.value.replace('/[^a-zA-Zd]/ig', ""))
    }
  }

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
          <input type="text" id="firstname" placeholder="John" name="firstname" maxLength="15"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label><br/>
          <input type="text" id="lastname" placeholder="Doe" name="lastname" maxLength="15" /><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" placeholder="name@email.com" name="email" maxLength="40"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="phonenumber">Phone Number:</label><br/>
          <input type="text" id="phone_number" maxLength="8" name="phone_number" value={phoneNumber} onChange={(e) => updatePhoneNumber(e)} placeholder="99887766"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Street Address:</label><br/>
          <input type="text" id="address" name="address" placeholder="Street name 23"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="postcode">Post Code:</label><br/>
          <input type="text" maxLength="4" id="postcode" name="postcode" placeholder="2200" value={postcode} onChange={(e) => updatePostCode(e)} /><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" name="password" placeholder="******"/><br/>
        </div>
        <p className="info-message">Hey</p>
        <input className = "button" type="submit" value="Submit" onClick={handleRegisterSubmit}></input>
      </form>
    </div>
    );
}

export default Register;
