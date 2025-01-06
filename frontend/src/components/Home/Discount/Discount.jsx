import img from "../../../assets/newarrial.png";
import "./Discount.css" ;
import { NavLink } from "react-router-dom";

const Discount = () =>{
    return(
    <>
    <div className="container Discount px-5 my-5">
    <div className="row align-item-center">
    <div className="col-md-6">
    <div className="Discount_col1 pt-md-4">
        <h6 className="Main_label" style={{paddingTop:"10vh"}}><i className="fa-solid fa-star"></i>Top Product Of the Month</h6>   
        <h2 style={{paddingTop:"5vh"}}>MAC Air 2025 Best Discount 40%</h2>
        <p className="py-2">
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf sdfserf efgerf sdaw <br />
        asdfwefa sdfserf efgerf sdfserf efgerf sjdnj njnikikj jniko sdf<br />
        aknfkeknik      
       
    
        </p>

        <NavLink to="/products">
        <div className="banner_btns">
            <button className="main_btn">Shop Now</button>
        </div>
        </NavLink>
        </div>     
    </div>   
    <div className="col-md-5">
    <img src={img} alt="" style={{marginLeft:"-4vh"}}/>    
    </div>   
    </div>
    </div>
        
        
        
    </>
    )
}
export default Discount;