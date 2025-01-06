import NewArrivals from "../Products/NewArrivals";
import Products from "../Products/Products";
import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import OrderMethod from "./OrderMethod/OrderMethod";
const Home = () =>{
    return(
        <>
        <Category />
        <Products />
        <NewArrivals />
        <Discount />
        <div className="Section1 py-5">
        <OrderMethod />
        </div>
        </>
    )
}
export default Home; 