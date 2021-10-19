import Request from '../scripts/request'
const addProduct = (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(document.querySelector("form")))
    let infoBar = document.getElementsByClassName("info-message")[0]
    if (Object.values(formData).some(e => e === '')) {
        console.log('empty', Object.values(formData))
        infoBar.style.visibility = "visible"
        infoBar.textContent = "Please fill out all of the fields!"
        return
    }
    Request("POST", "/products", formData).then(data => {
        console.log(data)
        infoBar.style.visibility = "visible"
        infoBar.style.color = data.success ? "#5ffd5f" : "#ff9999"
        infoBar.textContent = data.success ? data.success : data.error
    })
}

const ProductCreateForm = () => {
    return (
        <div className="register-form">
            Create a new product:
            <form>
                <div className="input-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" placeholder="Catalytic Converter" name="name" maxLength="45"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input type="text" id="description" placeholder="Universal catalytic converter for use in pet..." name="description" maxLength="500"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="Manufacturer">Manufacturer:</label><br/>
                    <input type="text" id="manufacturer" placeholder="BMW" name="manufacturer" maxLength="45"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="weight">Weight (kg):</label><br/>
                    <input type="text" id="weight" maxLength="8" name="weight" placeholder="13.2"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="dimensions">Dimensions (cm):</label><br/>
                    <input type="text" id="dimensions" maxLength="45" name="dimensions" placeholder="32x23x12"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="material">Material:</label><br/>
                    <input type="text" id="material" maxLength="45" name="material" placeholder="Carbon"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="barcode">Barcode:</label><br/>
                    <input type="text" id="barcode" maxLength="45" name="barcode" placeholder="FF212312QQ"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="serial_number">Serial number:</label><br/>
                    <input type="text" id="serial_number" maxLength="45" name="serial_number" placeholder="SKA52223"/><br/><br/>
                </div>
                <div className="input-group">
                    <label htmlFor="price">Price:</label><br/>
                    <input type="number" id="price" name="price" placeholder="399.99"/><br/><br/>
                </div>
                <p className="info-message">Hey</p>
                <button className = "register-form button input-group" type="button" value="Register" onClick={e => {addProduct(e)}}>Submit</button>
            </form>
        </div>)
}
export default ProductCreateForm