import Request from '../scripts/request' 
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'
import jwt from 'jwt-decode'

const Settings = () => {

  const {token, setToken} = useContext(UserContext)

  const handleDeleteSubmit = (e) => {
      
      e.preventDefault();
      Request("DELETE", "/users/delete", {"email": jwt(token).email}, 'Bearer ' + token).then(data => {
            if (data.success) {
              setToken(null)
            }
        })
    }

  return ( 
      <form className="register-form">
        <input className="button" type="submit" value="Delete my account!" onClick={handleDeleteSubmit}></input>
      </form>
    );

}

export default Settings;
