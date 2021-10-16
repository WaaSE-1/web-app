import Request from "../scripts/request"

export const ProductRow = ({product, products, setProducts}) => {
    const deleteProduct = (e, id, dealership) => {
        e.preventDefault()
        Request("DELETE", "/products/", {"part": id, "dealership": dealership}).then(data => {
            console.log(data)
            if (data.success)
                setProducts(products.filter(product => !(product.id === id && product.dealership === dealership)))
        })
    }
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
                <td><button className="button delete" onClick={(e) => deleteProduct(e, product.id, product.dealership)}>DELETE</button></td>
            </tr>
            )      
}
