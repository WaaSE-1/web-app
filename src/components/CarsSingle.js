import '../css/Home.css'
import '../css/CarsSingle.css'


const CarsSingle = ({car}) => {
  
  let grid = (
    <div className="grid">
        <div className="cars-single-off-column">
            <img alt="product-img" className="product-img" src= "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/bmw-8-series-805_0.jpg?itok=e--SHpJj"/>
            <img alt="product-rating" className="product-rating" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fstar-image-transparent-background%2Fstar-image-transparent-background-19.png&f=1&nofb=1"/>

            <p>Price: {car?.['price per unit']}</p>            
            <p>Mileage: KM 200.000</p>
            <p>Year: {car?.year}</p>
            <p>Color: Grey</p>
            <p>Fuel type: electric</p>
        </div>
    <div className="car-details">
        <h3 className="car-title">BMW 2020</h3>
        <p>BMW says the iX should go on sale in early 2022 and offer an electric driving range of about 300 miles 
            per charge. Two electric motors provide full-time all-wheel drive, and carbon-fiber-reinforced plastic 
            body panels help save weight. The iX's cabin is quite spacious with plenty of modern technology features 
            on display, including a slick curved digital instrument panel screen. </p>
    </div>
  </div>
  )
  return car ? grid : "" // For now fixes rendering when no car is selected
 }

export default CarsSingle;

