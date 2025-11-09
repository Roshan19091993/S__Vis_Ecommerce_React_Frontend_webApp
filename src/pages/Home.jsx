


import React, { useEffect } from "react";
import { mockData } from "../assets/assets";
import "../App.css";
import Banner1 from "../assets/banner/image1.jpg";
import Banner2 from "../assets/banner/image2.webp";
import Banner3 from "../assets/banner/image3.webp";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockData)); // products are already flat
  }, [dispatch]);

  const carouselData = [
    { img: Banner1, title: "New Arrivals", text: "Discover the latest trends now!", btnText: "Shop Now" },
    { img: Banner2, title: "Big Discounts", text: "Up to 50% off on selected items!", btnText: "Explore Deals" },
    { img: Banner3, title: "Season Sale", text: "Don’t miss out on limited-time offers!", btnText: "Shop Sale" }
  ];

  return (
    <div className="bg-white mt-0 px-3 px-md-5">

      {/* Welcome Section */}
      <section className="container my-3 text-center">
        <h1>WELCOME TO FUNCKY STORE</h1>
        <p className="lead fw-semibold" style={{ color: "black" }}>
          Discover amazing products for everyone!
        </p>
      </section>

      {/* Banner Carousel */}
      <div className="w-100%" style={{ margin: 0, padding: 0 }}>
        <div
          id="homeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            {carouselData.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner rounded-0 shadow-sm">
            {carouselData.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt={`Banner ${index + 1}`}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption text-start">
                  <h3 className="fw-bold text-light">{item.title}</h3>
                  <p>{item.text}</p>
                  <button className="btn btn-danger px-4 py-2 fw-semibold">{item.btnText}</button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Info & Category Sections */}
      <InfoSection />
      <CategorySection />

      {/* Top Products */}
      <div className="container py-4">
        <p className="lead fw-semibold text-center" style={{ color: "black" }}>
          TOP PRODUCTS
        </p>
        <div className="row g-4 justify-content-center">
          {products?.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
            >
              <ProductCard
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div className="container py-4">
        <p className="lead fw-semibold text-center" style={{ color: "black" }}>
          ALL PRODUCTS
        </p>
        <div className="row g-4 justify-content-center">
          {products?.map((product) => (
            <div
              key={`all-${product.id}`}
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
            >
              <ProductCard
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;

