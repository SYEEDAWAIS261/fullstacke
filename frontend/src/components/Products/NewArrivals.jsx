import mac from "../../assets/newarrial.png";
import Arrivals from "./Arrivals/Arrivals";
import "./NewArrival.css";
import { NavLink } from "react-router-dom";

const NewArrivals = () => {
    return (
        <>
            <div className="container gx-0 py-5">
                <h2 className="pb-5">New Arrivals</h2>
                <div className="row gx-0">
                    {/* Left side: NewArrival_col1 */}
                    <div className="col-md-6">
                        <div className="NewArrival_col1">
                            <h3>New MAC Air 2024</h3>
                            <NavLink to="/products">
                            <div className="banner_btns">
                            <button className="main_btn">Shop Now</button>
                            </div>
                            </NavLink>
                            <img src={mac} alt="MAC Air 2024" />
                        </div>
                    </div>
                    {/* Right side: NewArrival_col2 */}
                    <div className="col-md-6">
                        <div className="NewArrival_col2">
                            <Arrivals />
                            <Arrivals />
                            <Arrivals />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewArrivals;
