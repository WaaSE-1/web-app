import '../css/Car.css'
import { Link } from 'react-router-dom';

const Car = ({id, brand, model, year}) => {
  return (
    <Link to={`/cars/${id}`}>
    <div className="car-selector-car">
       <p>{brand} - {model} - {year}</p>
    </div>
    </Link>
  )
}

export default Car;
