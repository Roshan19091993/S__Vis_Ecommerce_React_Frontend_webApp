

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(productId))
  );

  const [mainImage, setMainImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (product) {
      setMainImage(product.img && product.img.length > 0 ? product.img[0] : "/images/default.jpg");
    }
  }, [product]);

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
  };

  return (
    <div className="product-details-container">
      {/* Thumbnails on the left */}
      <div className="thumbnail-container">
        {product.img && product.img.map((img, idx) => (
          <div
            key={idx}
            className={`thumbnail ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          >
            <img
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                className="thumbnail-img"
                loading="lazy"
              />

          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="main-image-container"
        onClick={() => setIsZoomed(true)}
        style={{ cursor: "zoom-in" }}
      >
        <img src={mainImage} alt="Main product" className="main-image" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p><strong>Description:{product.description}</strong></p>
        <p><strong>Color:{product.color}</strong></p>
        <p><strong>Size:{product.size}</strong></p>
         <p><strong>Brand:{product.brand}</strong></p>
        <h4 className="price">Price: ${product.price}</h4>
        <button className="btn btn-danger" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <img src={mainImage} alt="Zoomed product" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

