import '../css/Home.css'
import '../css/App.css'
import '../css/Register.css'
import '../css/CarsSingle.css'

export const Homepage = () => {

    return (
        <div className="register-form ">
            <h1 className="header-title">Hellstern Auto</h1>
            <p><i class="fas fa-hand-sparkles" style={{color: "green"}} ></i> Welcome to our car dealership. <i class="fas fa-hand-sparkles" style={{color: "green"}} ></i><br /> Here you can find the most reliable cars and their parts.<br /> 
                You can create an account, add a car to your profile, and request a service<br /> 
                to be done to your vehicle by one of our trained employees.
            </p><h1 className="header-title">Our Values</h1>
            At Hellstern Auto, we are proud of the work that we do.<br /> 
            We will ensure that you will be satisfied with your purchase.
            <div className="grid" style={{width: "800px", margin: "40px auto 0px auto"}}>
                <div className="field" style={{ border: "5px solid #1E1E2F", width: "200px", height: "200px", borderRadius: "50%"}}>
                    <div className="inner" style={{ marginTop:"30%"}}>
                        <i style={{fontSize: "30px"}} class="fas fa-car"></i> 
                        <p>Best car selection</p>
                    </div>
                </div>
                
                <div className="field" style={{ border: "5px solid #1E1E2F", width: "200px", height: "200px", borderRadius: "50%"}}>
                    <div className="inner" style={{marginTop:"30%"}}>
                        <i style={{fontSize: "30px"}} class="fas fa-car"></i> 
                        <p>Cheapest prices</p>
                    </div>
                </div>
                <div className="field" style={{ border: "5px solid #1E1E2F", width: "200px", height: "200px", borderRadius: "50%"}}>
                    <div className="inner" style={{ marginTop:"30%"}}>
                        <i style={{fontSize: "30px"}} class="fas fa-concierge-bell"></i> 
                        <p>Fastest car repairs</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
