import {useState, useEffect} from 'react'
import Request from '../scripts/request'
import jwt from 'jwt-decode'
import { CarDetails } from './CarDetails'
const Garage = ({token}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
      Request("GET", "/users/garage", {}, 'Bearer ' + token).then(data => {
          setCars(data)
      })
    }, [token])
    
    const createCarForUser = (e) => {
        e.preventDefault()
        console.log(token)
        console.log(jwt(token))
        let formData = {"price": 0, ...Object.fromEntries(new FormData(document.querySelector("form")))}
        let infoBar = document.getElementsByClassName("info-message")[0]
        console.log(formData)
        if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
            infoBar.style.visibility = "visible"
            infoBar.textContent = "Please fill out all of the fields!"
            return
        }
        Request("POST", "/cars/", formData, 'Bearer ' + token).then(data => {
          if(data.success){
              console.log(data)

              formData = {"customer_id": jwt(token).id, "vehicle_id": data.id, ...formData}
              console.log('new form', formData)
               Request("POST", "/users/garage", formData, 'Bearer ' + token).then(data => {
                infoBar.style.visibility = "visible"
                infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
                infoBar.textContent = data.success ? data.success : data.error
                if (data.success) {
                    Request("GET", "/users/garage", {}, 'Bearer ' + token).then(data => {
                        setCars(data)
                    })
                }
                console.log(data)
               })
          }
      })
    }

    return (
        <div className="grid register-form">
            <div className="cars">
                 <h1 className="header-title">Your cars</h1>
                {cars.length === 0 ? "You don't have any cars in your garage." : cars.map(car => <CarDetails key={car.vehicle_ident_number} car={car} />)}
            </div>
            <div className="addCar">
                <h1 className="header-title">Add a new car</h1>
                
                <form>
                    <div className="input-group">
                        <label htmlFor="manufacturer">Manufacturer:</label><br/>
                        <input type="text" id="manufacturer" name="manufacturer" placeholder="Tesla"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="manufacturer">Model:</label><br/>
                        <input type="text" id="model" name="model" placeholder="Model 3"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="year">Year:</label><br/>
                        <input type="number" id="year" name="year" placeholder="2021"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="VIN">VIN number:</label><br/>
                        <input type="text" id="VIN" name="VIN" placeholder="SKAP5000TES"/><br/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="manufacturer">License plate:</label><br/>
                        <input type="text" id="manufacturer" name="license_plate" placeholder="ES El5I"/><br/><br/>
                    </div>
                    <p className="info-message">Hey</p>
                    <button type="button" className="button" onClick={(e) => createCarForUser(e)}>Add a car</button>
                </form>
            </div>
        </div>
    )
}

export default Garage