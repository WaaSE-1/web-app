
const ProductCreateForm = ({employees}) => {
    console.log(employees)
    return (
    <div className="register-form">
        Employee list:
        {employees.length !== [] ? employees.map(employee => <p key={employee.id}>{employee.email}</p>) : <p>No employees to show</p>}
    </div>)
}
export default ProductCreateForm