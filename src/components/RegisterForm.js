
import '../css/Register.css'
import { UserContext } from '../contexts/UserContext.js'
import { useContext, useState } from 'react'
import jwt from 'jwt-decode'

// Create function for the register form
const RegisterForm = () => {

  const {token} = useContext(UserContext)
  const [firstName, setFirstName] = useState(token ? jwt(token).firstname : '')
  const [lastName, setLastName] = useState(token ? jwt(token).lastname : '')
  const [email, setEmail] = useState(token ? jwt(token).email : '')
  const [postcode, setPostCode] = useState(token ? jwt(token).postcode : '')
  const [phoneNumber, setPhoneNumber] = useState(token ? jwt(token).phone_number : '')
  const [address, setAddress] = useState(token ? jwt(token).address : '')

  // Ensure postcode follows standards (only allow numbers and no numbers above 9999)
  const updatePostCode = (e) => {
    if (e.target.value <= 9999) {
      setPostCode(e.target.value.replace('/[^a-zA-Zd]/ig', ""))
    }
  }

  // Ensure phone number is a phone number (only allow numbers)
  const updatePhoneNumber = (e) => {
    if (e.target.value <= 99999999) {
      setPhoneNumber(e.target.value.replace('/[^a-zA-Zd]/ig', ""))
    }
  }

  // Ensure first name consists of only letters from a-z (low or upper case) and include ÆØÅ
  const updateFirstName = (e) => {
      if (/^[a-zA-ZæøåÆØÅ\s]*$/.test(e.target.value))
        setFirstName(e.target.value)
  }

  // Ensure last name consists of only letters from a-z (low or upper case) and include ÆØÅ
  const updateLastName = (e) => {
    if (/^[a-zA-ZæøåÆØÅ\s]*$/.test(e.target.value)) {
      setLastName(e.target.value)
    }
  }

  // Create the text fields for the register-form
  return (
    <div>
      <form className="register-form">
        <div className="input-group">
          <label htmlFor="firstname">First Name:</label><br/>
          <input type="text" id="firstname" placeholder="John" value={firstName} name="firstname" maxLength="15" onChange={(e) => updateFirstName(e)}/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label><br/>
          <input type="text" id="lastname" placeholder="Doe" name="lastname" maxLength="15" value={lastName} onChange={(e) => updateLastName(e)}/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" placeholder="name@email.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="40"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="phone_number">Phone Number:</label><br/>
          <input type="text" id="phone_number" maxLength="8" name="phone_number" value={phoneNumber} onChange={(e) => updatePhoneNumber(e)} placeholder="99887766"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Street Address:</label><br/>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street name 23"/><br/><br/>
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
      </form>
    </div>
    );
}

export default RegisterForm;
