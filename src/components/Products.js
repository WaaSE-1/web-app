import '../css/Home.css'

const Products = ({parts}) => {
  return (
    <div>
      <h1>Products!</h1>
      {parts.map(part => <p key={part.id}>{part.name} - {part.brand} - {part.weight} - {part.dimensions} - {part.material}</p>)}
    </div>
    
  )
}

export default Products;
