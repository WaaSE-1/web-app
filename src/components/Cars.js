import '../css/Home.css'
import '../css/Cars.css'
import Car from './Car'
import CarsSingle from './CarsSingle'



const Cars = ({cars, car, setCar}) => {
  return (
    <div className="grid">
      <div className="cars-menu">
        
        {cars.map(car => <button className="cars-button-list"><Car key={car.id} id={car.id} brand={car.brand} model={car.model} year={car.year}/></button>)}
        </div>
      <div className="car-details">
        
        <CarsSingle cars={cars[0]} car={car} setCar={setCar}/>
      </div>
    </div>
  )
}

export default Cars;
