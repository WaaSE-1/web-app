import Request from "../scripts/request"

export const ProductRow = ({product, products, setProducts}) => {
    const deleteProduct = (e, id) => {
        e.preventDefault()
        Request("DELETE", "/products/", {"part": id}).then(data => {
            console.log(data)
            if (data.success)
                setProducts(products.filter(product => !(product.id === id)))
        })
    }
    return (
            <tr>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.weight}</td>
                <td>{product.dimensions}</td>
                <td>{product.material}</td>
                <td>{product.barcode}</td>
                <td>{product.serial_number}</td>
                <td>{product.quantity}</td>
                <td>{product["price per unit"]}</td>
                <td>{product.dealership}</td>
                <td><button className="button delete" onClick={(e) => deleteProduct(e, product.id)}>DELETE</button></td>
            </tr>
            )      
}
