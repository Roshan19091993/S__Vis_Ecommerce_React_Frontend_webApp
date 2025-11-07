import React, { useEffect } from "react";
import { mockData } from "../assets/assets";
import "../App.css";
import Banner1 from "../assets/banner/image1.jpg";
import Banner2 from "../assets/banner/image2.webp";
import Banner3 from "../assets/banner/image3.webp";

import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";

import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
  };

  return (

    <div className="bg-white mt-0 px-3 px-md-5">
      <div className="container-fluid py-3">
          <section className="container my-1 text-center">
          <h1>WELCOME TO FUNCKY STORE </h1>
        <p
          className="lead fw-semibold"
          style={{ color: "black" }}
        >
          Discover amazing products for everyone!
        </p>

        </section>
       
<div className="w-100%" style={{ margin: 0, padding: 0}}>
  <div
    id="homeCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    {/* Carousel Indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    {/* Carousel Items */}
          <div className="carousel-inner rounded-0 shadow-sm">
            {[Banner1, Banner2, Banner3].map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={banner}
                  className="d-block w-100"
                  alt={`Banner ${index + 1}`}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption text-start">
                  <h3 className="fw-bold text-light">
                    {index === 0 ? "New Arrivals" : index === 1 ? "Big Discounts" : "Season Sale"}
                  </h3>
                  <p>
                    {index === 0
                      ? "Discover the latest trends now!"
                      : index === 1
                      ? "Up to 50% off on selected items!"
                      : "Don’t miss out on limited-time offers!"}
                  </p>
                  <button className="btn btn-danger px-4 py-2 fw-semibold">
                    {index === 0 ? "Shop Now" : index === 1 ? "Explore Deals" : "Shop Sale"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Manual Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      </div>

      <InfoSection />
      <CategorySection />

      {/* ===== PRODUCTS ===== */}
      <div className="container py-2">
      <p className="lead fw-semibold text-center" style={{ color: "black" }}>
              TOP PRODUCTS
            </p>

        <div className="row g-4">
          {products &&
            products.slice(0, 8).map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
                key={product.id}
              >
                <div
            className="card border-0 shadow-sm h-100 text-center p-3 product-card"
            style={{ width: "100%", cursor: "pointer", transition: "transform 0.3s" }}
            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              className="card-img-top mx-auto"
              alt={product.name}
              style={{ height: "200px", width: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-semibold">{product.name}</h5>
              <p className="text-muted mb-1">${product.price}</p>
              <div className="d-flex justify-content-center mb-3 text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
    {/* Button: prevent propagation so it does NOT navigate but only adds to cart */}
            <button
              className="btn btn-danger btn-sm rounded-pill px-3"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(e, product);
              }}
            >
              Add to Cart
            </button>
            </div>
          </div>

            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
