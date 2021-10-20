import Request from '../scripts/request'

import {useState, useEffect} from 'react'

const EmployeeCreateForm = ({setEmployees}) => {
  const [dealerships, setDealerships] = useState([])
  const [departments, setDepartments] = useState([])
  const [positions, setPositions] = useState([])

  useEffect(() => {
    Request("GET", "/dealerships", {}).then(data => {
        setDealerships(data)
      })
    Request("GET", "/departments", {}).then(data => {
        setDepartments(data)
      })
    Request("GET", "/employees/positions", {}).then(data => {
        setPositions(data)
      })
  }, [])

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
            <select name="dealership_id" id="dealership_id">
              {dealerships.length !== 0 ? dealerships.map(dealership => <option key={dealership.id} value={dealership.id}>{dealership.name}</option>) : "Loading"}
            </select><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="department_id">Department ID:</label><br/>
          <select name="department_id" id="department_id">
            {departments.length !== 0 ? departments.map(department => <option key={department.id} value={department.id}>{department.name}</option>) : "Loading"}
          </select><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="position">Position:</label><br/>
          <select name="position" id="position">
            {positions.length !== 0 ? positions.map(position => <option key={position.id} value={position.id}>{position.name}</option>) : "Loading"}
          </select><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="firstname">Firstname:</label><br/>
          <input type="text" id="firstname" maxLength="45" name="firstname" placeholder="John"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Lastname:</label><br/>
          <input type="text" id="lastname" maxLength="45" name="lastname" placeholder="Doe"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="text" id="email" maxLength="55" name="email" placeholder="john.doe@gmail.com"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="postcode">Post code:</label><br/>
          <input type="number" id="postcode" name="postcode" placeholder="2200"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="address">Address:</label><br/>
          <input type="text" id="address" maxLength="45" name="address" placeholder="Street name 23"/><br/><br/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" name="password" placeholder="***********"/><br/><br/>
        </div>
        <p className="info-message">Hey</p>
        <button className = "button input-group" type="button" value="Register" onClick={e => {addEmployee(e)}}>Submit</button>
        </form>
    </div>)
}
export default EmployeeCreateForm