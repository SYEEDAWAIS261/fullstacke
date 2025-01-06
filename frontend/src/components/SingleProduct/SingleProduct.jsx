import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaLinkedin, FaTiktok, FaShoppingCart } from 'react-icons/fa';
import img1 from "../../assets/pro2.jpeg";
import img2 from "../../assets/pro3.jpeg";
import img3 from "../../assets/pro4.jpg";

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(img1);  // State to store the main image

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        alert(`Added ${quantity} item(s) to the cart!`);
    };

    const handleImageClick = (image) => {
        setMainImage(image);  // Update main image on thumbnail click
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center mb-3">
                        <img
                            src={mainImage}
                            className="img-fluid"
                            alt="Main Product"
                            style={{ maxHeight: '400px', height: '270px' }}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <img
                            src={img1}
                            className="img-thumbnail me-2"
                            alt="Product 1"
                            style={{ width: '130px', cursor: 'pointer' }}
                            onClick={() => handleImageClick(img1)}  // Update main image on click
                        />
                        <img
                            src={img2}
                            className="img-thumbnail me-2"
                            alt="Product 2"
                            style={{ width: '130px', cursor: 'pointer' }}
                            onClick={() => handleImageClick(img2)}  // Update main image on click
                        />
                        <img
                            src={img3}
                            className="img-thumbnail"
                            alt="Product 3"
                            style={{ width: '130px', cursor: 'pointer' }}
                            onClick={() => handleImageClick(img3)}  // Update main image on click
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2>Product Name</h2>
                    <p className="text-muted">$99.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus eget eros volutpat auctor.</p>

                    <div className="d-flex align-items-center mb-3">
                        <button className="btn btn-outline-secondary me-2" onClick={decreaseQuantity}>-</button>
                        <span className="fs-5 me-2">{quantity}</span>
                        <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
                    </div>

                    <button className="btn btn-primary mb-4 d-flex align-items-center" onClick={addToCart}>
                        <FaShoppingCart className="me-2" /> Add to Cart
                    </button>

                    <div className="border-top pt-3">
                        <p><strong>Category:</strong> Electronics</p>
                        <p><strong>Brand:</strong> Example Brand</p>

                        <div className="d-flex align-items-center">
                            <span className="me-2">Share:</span>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
