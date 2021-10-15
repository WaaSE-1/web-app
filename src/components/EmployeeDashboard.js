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
        Employee list:
        {employees ? employees.map(employee => <div key={employee.id}><p style={{display:"inline-block"}} >{employee.email}</p><button onClick={() => deleteEmployee(employee.email)} className="button">DELETE</button></div>) : <p>No employees to show</p>}
    </div>)
}
export default ProductCreateForm