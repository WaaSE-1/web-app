import Request from '../scripts/request'
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'
import RegisterForm from './RegisterForm'
import '../css/Register.css'

// Const keyword is used to define a new function here called Register.
const Register = () => {
    const {setToken} = useContext(UserContext)
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        let formData = Object.fromEntries(new FormData(document.querySelector("form")))
        let infoBar = document.getElementsByClassName("info-message")[0]
        if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
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

  // Register or Submit button for the register page.
  return (<div className="register-form">
      <RegisterForm/>
      <button className = "register-form button input-group" type="button" value="Register" onClick={e => handleRegisterSubmit(e)}>Submit</button>

  </div>)
}

export default Register