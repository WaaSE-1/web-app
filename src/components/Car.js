import '../css/Car.css'


const Car = ({id, brand, model, price}) => {
  return (
    
    <div className="car-selector-car">
       <p>{brand} - {model}</p>
       <p>DKK {price}</p>
    </div>
    
  )
}

export default Car;
