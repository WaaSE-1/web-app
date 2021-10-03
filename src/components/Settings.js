import Request from '../scripts/request' 
import { UserContext } from '../contexts/UserContext.js'
import { useContext } from 'react'
import jwt from 'jwt-decode'

const Settings = () => {

  const {token, setToken} = useContext(UserContext)
  console.log(jwt(token))
  const handleDeleteSubmit = (e) => {
      
      e.preventDefault();
      Request("DELETE", "/users/delete", {"email": jwt(token).email}, 'Bearer ' + token).then(data => {
            if (data.success) {
              setToken(null)
            }
        })
    }

  return ( // When refactoring just make it a component, same as register, and value depends on if JWT token is set
      <div class='register-form'>
        <div class='row'>
          <div class='column'>
            <form className="">
            <div className="input-group">
              <label htmlFor="firstname">First Name:</label><br/>
              <input type="text" id="firstname" value={jwt(token).firstname} name="firstname"/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="lastname">Last Name:</label><br/>
              <input type="text" id="lastname" value={jwt(token).lastname} name="lastname"/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label><br/>
              <input type="text" id="email" value={jwt(token).email} name="email"/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="phonenumber">Phone Number:</label><br/>
              <input type="text" id="phonenumber" value={jwt(token).phone_number} name="phonenumber"/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="address">Street Address:</label><br/>
              <input type="text" id="address" name="address" value={jwt(token).address}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="loc_id">Post Code:</label><br/>
              <input type="text" id="loc_id" name="loc_id" value={jwt(token).location_id}/><br/><br/>
            </div>
            <input className="button" type="submit" value="Update details" onClick={(e) => {e.preventDefault(); alert("Not implemented")}}></input>
          </form>
          </div>
          <div class='column'>
            <div class='green-column register-form'>
              <input className="button register" type="submit" value="Delete my account!" onClick={handleDeleteSubmit}></input><br />
              <input className="button" type="submit" value="Logout" onClick={() => setToken(null)}></input>
            </div>
          </div>
        </div>
      </div>
      
    );

}

export default Settings;
