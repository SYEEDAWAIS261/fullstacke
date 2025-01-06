import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
// import { hide } from "@popperjs/core";
// import img1 from "../../../assets/img1.png"
// import img2 from "../../../assets/img2.png"
// import img3 from "../../../assets/img3.png"
import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img2.jpg"
import img3 from "../../../assets/img3.jpg"
import { NavLink } from "react-router-dom";
// import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const   Banner = () =>{
    return(
        <>
        <div className="banner_main" style={{marginTop:"10vh"}}>
        <Swiper
        Scrollbar={{
            hide: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className="container-fluid Banner_1 py-5" >
        <div className="container gx-0">
        <div className="row gx-0 align-items-center">
        <div
        className="col-md-12 col-lg-6"
        // data-aos="fade-right"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-out"
        >
        <div className="banner_col1 pt-md-4">
        <h6 className="Main_label pb-3"><i className="fa-solid fa-star"></i>Top Product Of the Month</h6>   
        <h1>Lenevo Gaming Laptop</h1>
        <p className="py-4">
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf  dferaf
        asdfwefasdfserf efgerf dferaf asdfwefasdfserf efgerf dferaf asdfwefa efgerf dferaf 
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf efgerf  efgerf     
        </p>
        <NavLink to="/products">
        <div className="banner_btns">
            <button className="main_btn">Shop Now</button>
        </div>
        </NavLink>
        </div>    
        </div>
        <div
        className="col-md-12 col-lg-6"
        // data-aos="fade-left"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-out"
        >
        <div className="banner-col1">
            <img src={img1} width="400vh" alt="" />
            </div>    

        </div>

        </div>
        </div>
        </div>

        
        
        </SwiperSlide>    	

        <SwiperSlide>
        <div className="container-fluid Banner_2 py-5">
        <div className="container gx-0">
        <div className="row gx-0 align-items-center">
        <div
        className="col-md-12 col-lg-6"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        >
        <div className="banner_col1 pt-md-4">
        <h6 className="Main_label pb-3"><i className="fa-solid fa-star"></i>Top Product Of the Month</h6>   
        <h1>Lenevo Gaming Laptop</h1>
        <p className="py-4">
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf  dferaf
        asdfwefasdfserf efgerf dferaf asdfwefasdfserf efgerf dferaf asdfwefa efgerf dferaf 
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf efgerf  efgerf     
        </p>

        <NavLink to="/products">
        <div className="banner_btns">
            <button className="main_btn">Shop Now</button>
        </div>
        </NavLink>
        </div> 
        </div>
        <div
        className="col-md-12 col-lg-6"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        >
        <div className="banner-col2">
        <img src={img2} width="400vh" alt="" />
            </div>    

        </div>

        </div>
        </div>
        </div>


        </SwiperSlide>

        <SwiperSlide>
        <div className="container-fluid Banner_3 py-5">
        <div className="container gx-0">
        <div className="row gx-0 align-items-center">
        <div
        className="col-md-12 col-lg-6"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        >
        <div className="banner_col1 pt-md-4">
        <h6 className="Main_label pb-3"><i className="fa-solid fa-star"></i>Top Product Of the Month</h6>   
        <h1>Lenevo Gaming Laptop</h1>
        <p className="py-4">
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf  dferaf
        asdfwefasdfserf efgerf dferaf asdfwefasdfserf efgerf dferaf asdfwefa efgerf dferaf 
        sdfserf efgerf dferaf asdfwefa sdfserf efgerf dferaf asdfwefasdfserf efgerf  efgerf     
        </p>

        <NavLink to="/products">
        <div className="banner_btns">
            <button className="main_btn">Shop Now</button>
        </div>
        </NavLink>
        </div> 
        </div>
        <div
        className="col-md-12 col-lg-6"
        // data-aos="fade-left"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-out"
        >
        <div className="banner-col3">
        <img src={img3} width="400vh" alt="" />
            </div>    

        </div>

        </div>
        </div>
        </div>


        </SwiperSlide>

        </Swiper>
        </div>
        </>
    )
}
export default Banner;