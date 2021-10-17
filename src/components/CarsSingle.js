import '../css/Home.css'
import '../css/CarsSingle.css'

// Function for showing a single car display at url/cars/car_id
const CarsSingle = ({car}) => {
  
  let grid = (
    <div className="grid">
      <div className="cars-single-off-column">
          <img width="400" height="180" alt="product-img" className="product-img" src={car?.image_url ? car.image_url : "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/bmw-8-series-805_0.jpg?itok=e--SHpJj"} />
          <img alt="product-rating" className="product-rating" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fstar-image-transparent-background%2Fstar-image-transparent-background-19.png&f=1&nofb=1"/>
          <p>Price: {car?.price}</p>
          <p>Dealership: {car?.name}</p>
          <p>Year: {car?.year}</p>
          <p>Model: {car?.model}</p>
          <p>Quantity: {car?.quantity}</p>
          <p>Condition: {car?.condition}</p>
      </div>
      <div className="car-details">
          <h3 className="car-title">{car?.company_name} - {car?.model} ({car?.year})</h3>
          <p>{car?.description ? car?.description : "No Description available"} </p>
      </div>
    </div>
  )
  return car ? grid : "" // For now fixes rendering when no car is selected
 }

export default CarsSingle;

