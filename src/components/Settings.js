import Request from '../scripts/request' 

const handleDeleteSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(document.querySelector("form")))
    Request("POST", "/users/delete", formData).then(data => {
          let infoBar = document.getElementsByClassName("info-message")[0]
          infoBar.style.visibility = "visible"
          infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
          infoBar.textContent = data.success ? data.success : data.error
      })
  }

const Settings = () => {
  return ( 
      <form className="register-form">
        <div className="input-group">
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" name="email" placeholder="name@email.com" required/><br />
        </div>
        <p className="info-message">Hey</p>
        <input className="button" type="submit" value="Delete" onClick={handleDeleteSubmit}></input>
      </form>
    );

}

export default Settings;
