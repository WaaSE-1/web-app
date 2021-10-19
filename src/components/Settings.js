import Request from '../scripts/request' 
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'
import jwt from 'jwt-decode'
import RegisterForm from './RegisterForm'
const Settings = () => {

  const {token, setToken} = useContext(UserContext)

  const handleDelete = (e) => {
      e.preventDefault();
      Request("DELETE", "/users", {"email": jwt(token).email}, 'Bearer ' + token).then(data => {
            if (data.success) {
              localStorage.removeItem('token')
              setToken(null)
            }
        })
    }

  const handleUpdate = (e) => {
      e.preventDefault();
      let formData = Object.fromEntries(new FormData(document.querySelector("form")))
      let infoBar = document.getElementsByClassName("info-message")[0]
      if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
            infoBar.style.visibility = "visible"
            infoBar.textContent = "Please fill out all of the fields!"
            return
        }
      Request("PUT", '/users', {"password":"", ...Object.fromEntries(new FormData(document.querySelector("form")))}, 'Bearer ' + token).then(data => {
        infoBar.style.visibility = "visible"
        infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
        infoBar.textContent = data.success ? data.success : data.error
        
        console.log(data)
            if (data.success) {
              localStorage.setItem('token', data.token.access_token)
              setToken( data.token.access_token)
            }
        
        })
    }

  return ( // When refactoring just make it a component, same as register, and value depends on if JWT token is set
      <div className='register-form'>
        <div className='row'>
          <div className='column'>
            <h1 className="header-title">Account details</h1>
            <RegisterForm />
            <button className = "button input-group" type="button" onClick={e => handleUpdate(e)}>Update</button>

          </div>
          <div className='column'>
            <h1 className="header-title">Actions</h1>
            <div className='green-column register-form'>
              <input className="button register" type="submit" value="Delete my account!" onClick={handleDelete}></input><br />
              <input className="button" type="submit" value="Logout" onClick={() => {setToken(null); localStorage.removeItem('token')}}></input>
            </div>
          </div>
        </div>
      </div>
      
    );

}

export default Settings;
