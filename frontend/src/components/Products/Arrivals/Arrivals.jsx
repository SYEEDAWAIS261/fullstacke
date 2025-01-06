import img1 from "../../../assets/pro5.jpg"
import "../NewArrival.css"

const Arrivals = () =>{
    return(
        <>
         <div className="container gx-0 Arrivals">
            <div className="row gx-0 align-items-center Arrivals_main">
        
            <div className="col-4">
            <div className="Arrivals_col1 text-center ">
                <img src={img1} className="img-fluid" alt="" />
            </div>
            </div>  
            <div className="col-8">
                <div className="Arrivals-col2">
                <h5 className="Product_name">HeadPhones</h5>
        <div className="icons py-2">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <p className="Product_price">$ 40</p>
            </div>
            </div>
        
            {/* ********************************** */}
        
            {/* <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img1} className="img-fluid" alt="" />
                <h5 className="Category-title">Category</h5>
            </div>
            </div>   */}
        
            {/* ******************************** */}
        
            {/* <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img1} className="img-fluid" alt="" />
                <h5 className="Category-title">Category</h5>
            </div>
            </div>   */}
        
             {/* ******************************** */}
        
             {/* <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img1} className="img-fluid" alt="" />
                <h5 className="Category-title">Category</h5>
            </div>
            </div>   */}
        
             {/* ******************************** */}
        
             {/* <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img1} className="img-fluid" alt="" />
                <h5 className="Category-title">Category</h5>
            </div>
            </div>   */}
        
             {/* ******************************** */}
             
             {/* <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img1} className="img-fluid" alt="" />
                <h5 className="Category-title">Category</h5>
            </div>
            </div>   */}
            
        
            </div>
            </div>
        
        
        
        </>
    )
}

export default Arrivals;