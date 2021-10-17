export const ProductCustomerRow = ({product, products, setProducts}) => {
    return (
            <tr>
                <td>{product.brand}</td>
                <td>{product.weight}</td>
                <td>{product.dimensions}</td>
                <td>{product.material}</td>
                <td>{product.barcode}</td>
                <td>{product.serial_number}</td>
                <td>{product.quantity}</td>
                <td>{product["price per unit"]}</td>
                <td>{product.dealership}</td>
                <td><button className="button buy">Buy</button></td>
            </tr>
            )      
}
