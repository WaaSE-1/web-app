import {useState, useEffect} from 'react'
import Request from '../scripts/request'
import { CarDetails } from './CarDetails'

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
                {services.map(service => <p key={service.dealership + service.service_type}>Service: {service.service_type} - DKK {service.price} - At: {service.dealership}</p>)}
            </div>
            <div className="customer-section">
                <div className="customer-cars">
                    <h1 className="header-title">Your cars</h1>
                    {cars.length === 0 ? "You don't have any cars in your garage." : cars.map(car => <CarDetails key={car.vehicle_ident_number} car={car} />)}
                </div>
            </div>
            <div className="book-a-service">
                {cars.length === 0 ? "Add a car before creating a service request" : <div className="customer-cars">
                    <h1 className="header-title">Book a service</h1>
                    <form >
                        <div className="input-group">
                            <label htmlFor="services">Service type</label>
                            <select name="services" id="services">
                                {services.map(service => <option key={service.dealership + service.service_type} value={service.service_type + " at " + service.dealership}>{service.service_type + " at " + service.dealership + " (DKK " + service.price + ")"}</option>)}
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="cars">Vehicle</label>
                            <select name="cars" id="cars">
                                {cars.map(car => <option key={car.vehicle_ident_number} value={car.company_name + " " + car.model + ", " + car.license_plate}>{car.company_name + " " + car.model + ", " + car.license_plate}</option>)}
                            </select>
                        </div>
                        <div className="input-group">
                            <button type="button" className="button buy" onClick={() => alert("Not implemented")}>Create service request</button>
                        </div>
                    </form>
                </div>}
            </div>
            
        </div>
    )
}
