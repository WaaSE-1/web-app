import '../css/Home.css'
import '../css/Cars.css'
import Car from './Car'
import CarsSingle from './CarsSingle'
import { Link } from 'react-router-dom';
import Request from '../scripts/request';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Cars = ({cars, car, setCar}) => {
  let { id } = useParams();

  // Send the request for get a specific car
  const handleClick = (e, id) => {
      Request("GET", `/cars/${id}`).then(data => {
          setCar(data)
          console.log("Request for GET car specific")
      })

  }
  useEffect(() => {
    if (id){
    Request("GET", `/cars/${id}`).then(data => {
          setCar(data)
          console.log("Request for GET car specific")
      })
    } else {
      setCar(cars[0])
    }
  }, [id, setCar, cars])

  return (
    <div className="grid">
      <div className="cars-menu">
        {cars.map(car => <Link key={car.id} to={`/cars/${car.id}`}><button type="button" className="cars-button-list" onClick={(e) => handleClick(e, car.id)}><Car id={car.id} brand={car.brand} model={car.model} year={car.year}/></button></Link>)}
        </div>
      <div className="car-details">
        
        <CarsSingle car={car} setCar={setCar}/>
      </div>
    </div>
  )
}

export default Cars;
