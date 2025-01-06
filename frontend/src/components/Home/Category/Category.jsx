// import img1 from "../../../assets/img3.jpg"
import img1 from "../../../assets/computer-mouse.svg"
import img2 from "../../../assets/laptop.svg"
import img3 from "../../../assets/keyboard.svg"
import img4 from "../../../assets/computer-mouse.svg"
import "./category.css"

const Category = () =>{
    return(
    <>
    <div className="container gx-0 py-4 my-5 full_main_category">
        <h2 className="py-3">Browse by Category</h2>
    <div className="row gx-0 main_category">

    <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img1} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  

    {/* ********************************** */}

    <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img2} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  

    {/* ******************************** */}

    <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img3} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  

     {/* ******************************** */}

     <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img1} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  

     {/* ******************************** */}

     <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img2} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  

     {/* ******************************** */}
     
     <div className="col-md-2 col-6">
    <div className="home_category text-center">
        <img src={img3} className="img-fluid" alt="" />
        <h5 className="Category-title">Category</h5>
    </div>
    </div>  
    

    </div>
    </div>
    </>
    )
}
export default Category;