import Request from "../scripts/request"



const ProductCreateForm = ({employees, setEmployees}) => {
    const deleteEmployee = (email) => {
        console.log(email)
        Request("DELETE", "/employees/", {email: email}).then(data => {
            if (data.success){
                setEmployees(employees.filter(employee => employee.email !== email))
                
            }
        })
    }
    console.log(employees)
    return (
    <div className="register-form">
        <table>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {/* Someone pls extract this mess into another component */}
            {employees ? employees.map(employee => <tr key={employee.id}><td>{employee.id}</td><td>{employee.firstname}</td><td>{employee.lastname}</td><td>{employee.position}</td><td><p style={{display:"inline-block"}} >{employee.email}</p></td><td><button onClick={() => deleteEmployee(employee.email)} className="button delete">DELETE</button></td></tr>) : <p>No employees to show</p>}
        </table>
    </div>)
}
export default ProductCreateForm