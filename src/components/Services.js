import {useState, useEffect} from 'react'
import Request from '../scripts/request'
import { CarDetails } from './CarDetails'
import Loader from "react-loader-spinner";


const createServiceRequest = (e) => {
    e.preventDefault()
    
    let formData = Object.fromEntries(new FormData(document.querySelector("form")))
    let infoBar = document.getElementsByClassName("info-message")[0]
    const currentDate = new Date()
    formData = {"date": currentDate.toISOString().split('T')[0], ...formData}
    console.log(formData)
    if (Object.values(formData).some(e => e === '')) {
            console.log('empty', Object.values(formData))
            infoBar.style.visibility = "visible"
            infoBar.textContent = "Please fill out all of the fields!"
            return
        }

    Request("POST", "/services/requests", formData).then(data => {
          infoBar.style.visibility = "visible"
          infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
          infoBar.textContent = data.success ? data.success : data.error
      })
} 

export const Services = ({services, token}) => {
    const [cars, setCars] = useState([])
    useEffect(() => {
      Request("GET", "/users/garage", {}, 'Bearer ' + token).then(data => {
          setCars(data)
      })
    }, [token])
    return (
        <div className="grid register-form">
            <div className="services">
                <h1 className="header-title">Our Services</h1>
                {services.length !== 0 ? services.map(service => <p key={service.dealership + service.service_type}>Service: {service.service_type} - DKK {service.price} - At: {service.dealership}</p>) : <Loader color="#1e1e2f" type="ThreeDots"/>}
            </div>
            <div className="customer-section">
                <div className="customer-cars">
                    <h1 className="header-title">Your cars</h1>
                    {cars.length === 0 ? cars.length === 0 && services.length > 0 ? "No cars available!" : <Loader color="#1e1e2f" type="ThreeDots"/> : cars.map(car => <CarDetails key={car.vehicle_ident_number} car={car} />) }
                </div>
            </div>
            <div className="book-a-service">
                <div className="customer-cars">
                    <h1 className="header-title">Book a service</h1>
                    {cars.length !== 0 && services.length !== 0 ? (<form >
                        <div className="input-group">
                            <label htmlFor="services">Service type</label>
                            <select name="service" id="service">
                                {services.map(service => <option key={service.dealership + service.service_type} value={service.id}>{service.service_type + " at " + service.dealership + " (DKK " + service.price + ")"}</option>)}
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="cars">Vehicle</label>
                            <select name="VIN" id="VIN">
                                {cars.map(car => <option key={car.vehicle_ident_number} value={car.vehicle_ident_number}>{car.company_name + " " + car.model + ", " + car.license_plate}</option>)}
                            </select>
                        </div>
                        <p className="info-message">Hey</p>
                        <div className="input-group">
                            <button type="button" className="button buy" onClick={(e) => createServiceRequest(e)}>Create service request</button>
                        </div>
                    </form>) : cars.length === 0 && services.length > 0 ? "No cars available!" : <Loader color="#1e1e2f" type="ThreeDots"/>}
                </div>
            </div>
            
        </div>
    )
}
