import Request from '../scripts/request'

const EmployeeCreateForm = ({setEmployees}) => {
    const addEmployee = (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(document.querySelector("form")))
        let infoBar = document.getElementsByClassName("info-message")[0]
        if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
            infoBar.style.visibility = "visible"
            infoBar.textContent = "Please fill out all of the fields!"
            return
        }
        Request("POST", "/employees/register", formData).then(data => {
            console.log(data)
          infoBar.style.visibility = "visible"
          infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
          infoBar.textContent = data.success ? data.success : data.error
          if (data.success) {
              Request("GET", "/employees").then(data => {
                setEmployees(data)
                })
          }
      })
}

    return (
    <div className="register-form">
        Add a new employee:
        <form>
            <div className="input-group">
          <label htmlFor="dealership_id">Dealership ID:</label><br/>
          <input type="number" id="dealership_id" placeholder="1" name="dealership_id" maxLength="10"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="weight">Department ID:</label><br/>
          <input type="number" id="department_id" maxLength="8" name="department_id" placeholder="1"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="position">Position:</label><br/>
          <input type="number" id="position" name="position" placeholder="1"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="firstname">Firstname:</label><br/>
          <input type="text" id="firstname" name="firstname" placeholder="John"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Lastname:</label><br/>
          <input type="text" id="lastname" name="lastname" placeholder="Doe"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="text" id="email" name="email" placeholder="john.doe@gmail.com"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="postcode">Post code:</label><br/>
          <input type="number" id="postcode" name="postcode" placeholder="2200"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label><br/>
          <input type="text" id="address" name="address" placeholder="Street name 23"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" name="password" placeholder="***********"/><br/><br/>
        </div>
        <p className="info-message">Hey</p>
        <button className = "register-form button input-group" type="button" value="Register" onClick={e => {addEmployee(e)}}>Submit</button>
        </form>
    </div>)
}
export default EmployeeCreateForm