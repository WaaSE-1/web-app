import {useState, useEffect} from 'react'
import Request from '../scripts/request'

const Garage = ({token}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
      Request("GET", "/users/garage", {}, 'Bearer ' + token).then(data => {
          setCars(data)
      })
    }, [token])
    
    return (
        <div className="grid register-form">
            <div className="cars">
                 Your cars: 
                {cars.map(car => <p key={car.vehicle_ident_number}>{car.company_name}, {car.model}, {car.year}, {car.license_plate}, {car.vehicle_ident_number}</p>)}
            </div>
            <div className="addCar">
                Add a new car
                <form>
                    <input type="text" placeholder="VIN number"/>
                    <input type="text" placeholder="Vehicle ID"/>
                    <input type="text" placeholder="License Plate"/>
                </form>
            </div>
        </div>
    )
}

export default Garage