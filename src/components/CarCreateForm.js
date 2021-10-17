import Request from '../scripts/request'

const CarCreateForm = ({token}) => {
    const createCar = (e) => {
        e.preventDefault()
        let formData = {...Object.fromEntries(new FormData(document.querySelector("form")))}
        let infoBar = document.getElementsByClassName("info-message")[0]
        if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
            infoBar.style.visibility = "visible"
            infoBar.textContent = "Please fill out all of the fields!"
            return
        }
        Request("POST", "/cars/", formData, 'Bearer ' + token).then(data => {
          if(data.success){
                infoBar.style.visibility = "visible"
                infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
                infoBar.textContent = data.success ? data.success : data.error
          }
      })
    }
    return (<div className="register-form">
        Add a new car
                <form>
                    <div className="input-group">
                        <label htmlFor="manufacturer">Manufacturer:</label><br/>
                        <input type="text" id="manufacturer" name="manufacturer" placeholder="Tesla"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="model">Model:</label><br/>
                        <input type="text" id="model" name="model" placeholder="Model 3"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="year">Year:</label><br/>
                        <input type="number" id="year" name="year" placeholder="2020"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price:</label><br/>
                        <input type="number" id="price" name="price" placeholder="19997"/><br/><br/>
                    </div>
                    <p className="info-message">Hey</p>
                    <button type="button" className="button" onClick={(e) => createCar(e)}>Add a car</button>
                </form>
    </div>) 
}

export default CarCreateForm