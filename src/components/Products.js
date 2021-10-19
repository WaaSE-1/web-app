import '../css/Home.css'
import Loader from "react-loader-spinner";
import { ProductCustomerRow } from "./ProductCustomer"

const Products = ({parts, setProducts}) => {
 return (
     parts.length === 0 ? <Loader color="#27293D" type="ThreeDots"/> : (<div className="register-form">
         <h1 className="header-title">Products</h1>
        <table>  
            <tbody>
                <tr>
                    <th>Name</th>
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
                {parts.map(product => <ProductCustomerRow key={product.id + product.dealership} setProducts={setProducts} product={product} products={parts}/>)}
            </tbody>
        </table>
    </div>) 
 )
}
export default Products