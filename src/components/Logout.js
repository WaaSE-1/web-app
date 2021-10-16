const Logout = ({setToken}) => {
    localStorage.removeItem('token')
    setToken(null)
    return (
        <div>
            Logged out!
        </div>
    )
}
export default Logout