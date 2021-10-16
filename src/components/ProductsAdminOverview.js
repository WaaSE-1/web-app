import { ProductRow } from "./ProductRow"

const ProductsOverview = ({products, setProducts}) => {
 return (
     <div className="register-form">
        <table>  
            <tbody>
                <tr>
                    <th>Brand</th>
                    <th>Weight (g)</th>
                    <th>Dimensions (cm)</th>
                    <th>Material</th>
                    <th>Barcode</th>
                    <th>Serial number</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Dealership</th>
                    <th>Action</th>
                </tr>
                {products.map(product => <ProductRow key={product.id + product.dealership} setProducts={setProducts} product={product} products={products}/>)}
            </tbody>
        </table>
    </div>
 )
}
export default ProductsOverview