
const Logout = ({setToken,}) => {
    localStorage.removeItem('token')
    setToken(null)
    window.location = "/"
}
export default Logout