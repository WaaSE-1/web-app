export const CarDetails = ({car}) => {
    return (
        <div className="car-details">
            <h3>{car.company_name} {car.model} ({car.year})</h3>
            <hr style={{width: "70%"}}/>
            <p>License: {car.license_plate}, VIN: {car.vehicle_ident_number}</p>
        </div>
    )
}
