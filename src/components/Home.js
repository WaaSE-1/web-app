import '../css/Home.css'

const Home = ({parts}) => {
  return (
    <div>
      <h1>Products!</h1>
      {/* Retarded fix to a retarded problem. Need to change the key to an actual id. */}
      {parts.map(part => <p key={part.id + part.dealership}>{part.brand} - {part.weight} - {part.dimensions} - {part.material}</p>)}
    </div>
    
  )
}

export default Home;
