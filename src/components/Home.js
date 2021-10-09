import '../css/Home.css'
import Car from './Car'


const Home = ({cars}) => {
  return (
    <div className="grid">
      <div className="cars-selector">
        {cars.map(car => <Car key={car.id} brand={car.Brand} model={car.model} year={car.year}/>)}
        </div>
      <div className="car-details"></div>
    </div>
  )
}

export default Home;
