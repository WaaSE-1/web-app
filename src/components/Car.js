import '../css/Car.css'


const Car = ({id, brand, model, year}) => {
  return (
    
    <div className="car-selector-car">
       <p>{brand} - {model} - {year}</p>
    </div>
    
  )
}

export default Car;
