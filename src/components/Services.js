export const Services = ({services}) => {
    return (
        <div className="grid register-form">
            <div className="services">
                Our services:
                {services.map(service => <p key={service.dealership + service.service_type}>Service: {service.service_type} - DKK {service.price} - At: {service.dealership}</p>)}
            </div>
            <div className="book-a-service">
                <div className="customer-cars">
                    Book a service
                    <form>
                        <label for="cars">Service type:</label>
                        <select name="cars" id="cars">
                            {services.map(service => <option key={service.dealership + service.service_type} value={service.service_type + " at " + service.dealership}>{service.service_type + " at " + service.dealership + " (DKK " + service.price + ")"}</option>)}
                        </select>
                    </form>
                </div>
            </div>
            <div className="customer-section">
                <div className="customer-cars">
                    Your cars: You don't have any cars
                </div>
            </div>
        </div>
    )
}
