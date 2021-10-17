import {useState, useEffect} from 'react'
import Request from '../scripts/request'


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
                Our services:
                {services.map(service => <p key={service.dealership + service.service_type}>Service: {service.service_type} - DKK {service.price} - At: {service.dealership}</p>)}
            </div>
            <div className="customer-section">
                <div className="customer-cars">
                    Your cars: 
                    {cars.map(car => <p key={car.vehicle_ident_number}>{car.company_name}, {car.model}, {car.year}, {car.license_plate}, {car.vehicle_ident_number}</p>)}
                </div>
            </div>
            <div className="book-a-service">
                {cars.length === 0 ? "Add a car before creating a service request" : <div className="customer-cars">
                    Book a service
                    <form>
                        <label htmlFor="services">Service type:</label>
                        <select name="services" id="services">
                            {services.map(service => <option key={service.dealership + service.service_type} value={service.service_type + " at " + service.dealership}>{service.service_type + " at " + service.dealership + " (DKK " + service.price + ")"}</option>)}
                        </select>
                        <label htmlFor="cars">Which car:</label>
                        <select name="cars" id="cars">
                            {cars.map(car => <option key={car.vehicle_ident_number} value={car.company_name + " " + car.model + ", " + car.license_plate}>{car.company_name + " " + car.model + ", " + car.license_plate}</option>)}
                        </select>
                    </form>
                </div>}
            </div>
            
        </div>
    )
}
