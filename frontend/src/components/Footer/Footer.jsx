import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Footer = () =>{
    return(
        <>
        <div className="Footer">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-4">

                    <div className="footer_col1">
                    <img src={logo} alt="" />
                    <div className="ft_icons pt-md-2 pb-md-4">
                    <i className="fa-brands fa-facebook-f"></i>    
                    <i className="fa-brands fa-twitter"></i>    
                    <i className="fa-brands fa-instagram"></i>    
                    <i className="fa-brands fa-linkedin"></i>    
                    </div>
                    <p>@2024 Kakakhel. All Rights Reserved</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer_col2">
                    <h5 className="ft-h5">Get to Know Us</h5>
                    <ul>
                         
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Home</NavLink>
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">About Us</NavLink>       
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Product</NavLink>                      
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Contact Us</NavLink>   
                    </li>
                    </ul>
                    </div>
                </div>

                <div className="col-md-3">

                    <div className="footer_col2">
                    <h5 className="ft-h5">Orders & Returns</h5>
                    <ul>
                         
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Home</NavLink>
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">About Us</NavLink>       
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Product</NavLink>                      
                    </li>

                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Contact Us</NavLink>   
                    </li>
                    </ul>

                    </div>
                </div>
                <div className="col-md-2">

                    <div className="footer_col3">
                    <h5 className="ft-h5">Contact Us</h5>
                    <p className="py-1"><i className="fa-solid fa-phone"></i>+92 333 6887127</p>
                    <p className="py-1"><i className="fa-solid fa-envelope"></i>awaisshah141</p>
                    <p className="py-1"><i className="fa-solid fa-location-dot"></i>Abu Dhabi</p>
                    </div>
                </div>
            </div>
        </div>


        </div>
        </>
    )
}
export default Footer;