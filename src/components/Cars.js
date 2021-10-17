import '../css/Home.css'
import '../css/Cars.css'
import Car from './Car'
import CarsSingle from './CarsSingle'
import { Link } from 'react-router-dom';
import Request from '../scripts/request';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";

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
    <div className="grid-car">
      <div className="cars-menu">
        {cars.length === 0 ? <Loader color="#27293D" type="ThreeDots"/> : cars.map(car => <Link key={car.id} to={`/cars/${car.id}`}><button type="button" className="cars-button-list" onClick={(e) => handleClick(e, car.id)}><Car id={car.id} brand={car.company_name} model={car.model} price={car.price}/></button></Link>)}
        </div>
      <div className={cars.length === 0 ? "" : "car-details"}>
        {cars.length === 0 ? <Loader color="#27293D" type="ThreeDots"/> : (car ? <CarsSingle car={car} setCar={setCar}/> : "Loading")}
      </div>
    </div>
  )
}

export default Cars;
