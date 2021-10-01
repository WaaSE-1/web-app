import '../css/Register.css'

const handleRegisterSubmit = (e) => {
  e.preventDefault();

  alert(e.firstname[0].value);
}

const Register = () => {
  return (
    <div>
      <form className="register-form">
        <h3>Please fill in your information below to register a user</h3>

        <label for="firstname">First Name:</label><br/>
        <input class = "input" type="text" id="firstname" name="firstname"/><br/><br/>

        <label for="lastname">Last Name:</label><br/>
        <input class = "input" type="text" id="lastname" name="lastname"/><br/><br/>

        <label for="email">Email:</label><br/>
        <input class = "input" type="text" id="email" name="email"/><br/><br/>

        <label for="phonenumber">Phone Number:</label><br/>
        <input class = "input" type="text" id="phonenumber" name="phonenumber"/><br/><br/>

        <label for="address">Street Address:</label><br/>
        <input class = "input" type="text" id="address" name="address"/><br/><br/>

        <label for="postcode">Post Code:</label><br/>
        <input class = "input" type="text" id="postcode" name="postcode"/><br/><br/>

        <label for="password">Password:</label><br/>
        <input class = "input" type="text" id="password"/><br/>

        <input class = "button" type="submit" value="Submit" onClick={handleRegisterSubmit}></input>
      </form>
    </div>
    );
}

export default Register;