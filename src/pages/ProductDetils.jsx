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

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const dispatch = useDispatch();

//   // Find product from Redux store (you can also use mockData if needed)
//   const product = useSelector((state) =>
//     state.product.products.find((p) => p.id === parseInt(productId))
//   );

//   // State to track main image
//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     if (product) {
//       // Make sure we always get an array of images
//       const imagesArray = product.img || (product.image ? [product.image] : []);
//       setMainImage(imagesArray[0]);
//     }
//   }, [product]);

//   if (!product) return <p>Product not found</p>;

//   // Prepare images for thumbnails
//   const images = product.img || (product.image ? [product.image] : []);
//   const thumbnails = images; // show all images as thumbnails

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     toast.success(`🛒 ${product.name} added to cart!`, {
//       position: "top-center",
//     });
//   };

//   return (
//     <div className="product-details-container">
//       {/* Left side: Images */}
//       <div className="product-images">
//         <div className="main-image-container">
//           <img src={mainImage} alt="Main product" className="main-image" />
//         </div>

//         <div className="thumbnail-container">
//           {thumbnails.map((img, idx) => (
//             <div
//               key={idx}
//               className={`thumbnail ${mainImage === img ? "active" : ""}`}
//               onClick={() => setMainImage(img)}
//             >
//               <img src={img} alt={`Thumbnail ${idx + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right side: Product info */}
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p>{product.description || "No description available"}</p>
//         <h4 className="price">Price: ${product.price}</h4>
//         <button className="btn btn-danger" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const { product, selectedImage } = location.state || {};

//   const [mainImage, setMainImage] = useState(null);

//   useEffect(() => {
//     if (product) {
//       const images = product.img || [];
//       setMainImage(images[selectedImage || 0] || images[0] || "/images/default.jpg");
//     }
//   }, [product, selectedImage]);

//   if (!product) return <p>Product not found</p>;

//   const images = product.img || [];

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
//   };

//   return (
//     <div className="product-details-container">
//       {/* Main Image */}
//       <div className="main-image-container">
//         <img src={mainImage} alt={product.name} className="main-image" />
//       </div>

//       {/* Thumbnails */}
//       <div className="thumbnail-container d-flex gap-2 mt-2">
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className={`thumbnail ${mainImage === img ? "active" : ""}`}
//             style={{
//               border: mainImage === img ? "2px solid #007bff" : "1px solid #ddd",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//             onClick={() => setMainImage(img)}
//           >
//             <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
//           </div>
//         ))}
//       </div>

//       {/* Product Info */}
//       <div className="product-info mt-3">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <h4 className="price">Price: ${product.price}</h4>
//         <button className="btn btn-danger mt-2" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

