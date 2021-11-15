import EmployeeRow from "./EmployeeRow"


const ProductCreateForm = ({employees, setEmployees}) => {
    return (
    <div className="register-form">
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {employees ? employees.sort((e1, e2) => e1.id - e2.id).map(employee => <EmployeeRow key={employee.id} setEmployees={setEmployees} employee={employee} employees={employees}/>) : ""}
            </tbody>
        </table>
    </div>)
}
export default ProductCreateForm