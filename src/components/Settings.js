import Request from '../scripts/request' 
import { UserContext } from '../contexts/UserContext.js'
import { useContext, useState } from 'react'
import jwt from 'jwt-decode'

const Settings = () => {

  const {token, setToken} = useContext(UserContext)
  const [firstname, setFirstName] = useState(jwt(token).firstname)
  const [lastname, setLastName] = useState(jwt(token).lastname)
  const [email, setEmail] = useState(jwt(token).email)
  const [phone_number, setPhoneNumber] = useState(jwt(token).phone_number)
  const [address, setAddress] = useState(jwt(token).address)
  const [postcode, setPostcode] = useState(jwt(token).postcode)

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
      Request("PUT", '/users', Object.fromEntries(new FormData(document.querySelector("form"))), 'Bearer ' + token).then(data => {
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
            <form className="">
            <div className="input-group">
              <label htmlFor="firstname">First Name:</label><br/>
              <input type="text" id="firstname" value={firstname} name="firstname" onChange={e => setFirstName(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="lastname">Last Name:</label><br/>
              <input type="text" id="lastname" value={lastname} name="lastname" onChange={e => setLastName(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label><br/>
              <input type="text" id="email" value={email} name="email" onChange={e => setEmail(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="phonenumber">Phone Number:</label><br/>
              <input type="text" id="phone_number" value={phone_number} name="phone_number" onChange={e => setPhoneNumber(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="address">Street Address:</label><br/>
              <input type="text" id="address" name="address" value={address} onChange={e => setAddress(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="postcode">Post Code:</label><br/>
              <input type="text" id="postcode" name="postcode" value={postcode} onChange={e => setPostcode(e.target.value)}/><br/><br/>
            </div>
            <div className="input-group">
              <label htmlFor="loc_id">Password:</label><br/>
              <input type="text" id="password" name="password"/><br/><br/>
            </div>
            <input className="button" type="submit" value="Update details" onClick={handleUpdate}></input>
          </form>
          </div>
          <div className='column'>
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
