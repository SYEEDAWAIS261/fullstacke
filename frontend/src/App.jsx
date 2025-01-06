import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Banner from './components/Home/Banner/Banner';
import NewsLetter from './components/Home/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import AllProducts from './components/Products/AllProducts/AllProducts';
import SingleProduct from './components/SingleProduct/SingleProduct';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';

function App() {
  const location = useLocation(); // Get the current route

  const authPages = ['/signin', '/signup'];
  const isAuthPage = authPages.includes(location.pathname);

  const excludeBannerRoutes = ['/about', '/contact', '/products', '/singleproduct'];

  return (
    <>
      {!isAuthPage && <Header />}
      {!isAuthPage && !excludeBannerRoutes.includes(location.pathname) && <Banner />}
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/singleproduct" element={<SingleProduct />} />
    </Routes>

      {!isAuthPage && <NewsLetter />}
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
