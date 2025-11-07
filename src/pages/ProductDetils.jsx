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

  useEffect(() => {
    if (product) {
      const images = product.images || [product.image];
      setMainImage(images[0]);
    }
  }, [product]);

  if (!product) return <p>Product not found</p>;

  const images = product.images || [product.image];
  const thumbnails = images.slice(0, 4); // up to 4 thumbnails

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`🛒 ${product.name} added to cart!`, {
      position: "top-center",
    });
  };

  return (
    <div className="product-details-container">
      {/* Main Image */}
      <div className="main-image-container">
        <img src={mainImage} alt="Main product" className="main-image" />
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnail-container">
        {thumbnails.map((img, idx) => (
          <div
            key={idx}
            className={`thumbnail ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h4 className="price">Price: ${product.price}</h4>
        <button className="btn btn-danger" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;