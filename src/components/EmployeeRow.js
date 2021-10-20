
import Request from "../scripts/request"
const EmployeeRow = ({employee, employees, setEmployees}) => {
    const deleteEmployee = (email) => {
        console.log(email)
        Request("DELETE", "/employees/", {email: email}).then(data => {
            if (data.success){
                setEmployees(employees.filter(employee => employee.email !== email))
                
            }
        })
    }
    return <tr><td>{employee.id}</td><td>{employee.firstname}</td><td>{employee.lastname}</td><td>{employee.position}</td><td>{employee.department}</td><td><p style={{display:"inline-block"}} >{employee.email}</p></td><td><button onClick={() => deleteEmployee(employee.email)} className="button delete">DELETE</button></td></tr>
}

export default EmployeeRow