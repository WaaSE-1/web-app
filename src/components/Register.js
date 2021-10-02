
import '../css/Register.css'
import Request from '../scripts/request'

const handleRegisterSubmit = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(document.querySelector("form")))
  console.log(formData)
  Request("POST", "/users/register", formData).then(data => {
        let infoBar = document.getElementsByClassName("info-message")[0]
        infoBar.style.visibility = "visible"
        infoBar.style.color = data.access_token ? "#5ffd5f" : "#ff9999"
        infoBar.textContent = data.access_token ? data.access_token : data.error
    })
}

const Register = () => {
  return (
    <div>
      <form className="register-form">
        <h3>Please fill in your information below to register a user</h3>
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
          <input type="text" id="email" name="email"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="phonenumber">Phone Number:</label><br/>
          <input type="text" id="phonenumber" name="phonenumber"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Street Address:</label><br/>
          <input type="text" id="address" name="address"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="loc_id">Post Code:</label><br/>
          <input type="text" id="loc_id" name="loc_id"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="text" id="password" name="password"/><br/>
        </div>
        <p className="info-message">Hey</p>
        <input className = "button" type="submit" value="Submit" onClick={handleRegisterSubmit}></input>
      </form>
    </div>
    );
}

export default Register;
