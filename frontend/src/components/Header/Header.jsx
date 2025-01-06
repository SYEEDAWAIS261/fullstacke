import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);  

  const handleScroll = () => {
    const offsets = window.scrollY;
    if (offsets > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }      
    console.log(offsets);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1" : ""}`}>
        <div className="container gx-0">
          {/* Logo Section */}
          <NavLink to="/">
            <img src={logo} style={{ width: "80px" }} alt="Logo" />
          </NavLink>

          {/* Toggler Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <li className="nav_li">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav_li">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav_li">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav_li">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Icons Section */}
            <div className="d-flex align-items-center gap-3">
              {/* Search Icon */}
              <FontAwesomeIcon icon={faSearch} size="lg" color="black" style={{ cursor: 'pointer' }} />
              {/* Cart Icon */}
              <NavLink to="/singleproduct">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" color="black" style={{ cursor: 'pointer' }} />
              </NavLink>
              {/* Login Button */}
              <NavLink to="/signup">
              <button className="btn btn-outline-dark">
              Login
              </button>
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
