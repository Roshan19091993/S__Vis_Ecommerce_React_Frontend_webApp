

// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { toast } from "react-toastify";

// const ProductCard = ({ product, onClick }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     dispatch(addToCart(product));
//     toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
//   };

//   return (
//     <div
//       className="card border-0 shadow-sm text-center p-3"
//       style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
//       onClick={onClick}
//       onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//       onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//     >
//       <img
//         src={product.img?.[0] || "/images/default.jpg"}
//         alt={product.name}
//         className="card-img-top mx-auto"
//         style={{ height: "200px", objectFit: "contain" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title fw-semibold">{product.name}</h5>
//         <p className="text-muted mb-2">${product.price}</p>
//         <div className="d-flex justify-content-center mb-3 text-warning">
//           {[...Array(5)].map((_, i) => (

//             <FaStar key={i} />
            
//           ))}
//         </div>
//         <button className="btn btn-danger btn-sm rounded  px-3" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { toast } from "react-toastify";

// const ProductCard = ({ product, onClick }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); 
//     e.preventDefault();
//     dispatch(addToCart(product));
//     toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
//   };

//   return (
//     <div
//       className="card border-0 shadow-sm text-center p-3 h-100 d-flex flex-column justify-content-between"
//       style={{
//         cursor: "pointer",
//         transition: "transform 0.3s ease",
//       }}
//       onClick={onClick}
//       onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//       onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//     >
//       {/* Product Image */}
//       <img
//         src={product.img?.[0] || "/images/default.jpg"}
//         alt={product.name}
//         className="card-img-top mx-auto"
//         style={{ height: "200px", objectFit: "contain" }}
//       />

//       {/* Product Info */}
//       <div className="card-body d-flex flex-column flex-grow-1 justify-content-between">
//         <div>
//           <h5 className="card-title fw-semibold text-truncate">{product.name}</h5>
//           <p className="text-muted mb-2">${product.price}</p>

//           <div className="d-flex justify-content-center mb-2 text-warning">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>
//         </div>

//         {/* Aligned Button */}
//         <div className="mt-auto d-flex justify-content-center">
//           <button
//             className="btn btn-danger btn-sm rounded px-3 fw-semibold"
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product, onClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
  };

  return (
    <div
      className="card border-0 shadow-sm text-center p-3 h-100 d-flex flex-column justify-content-between"
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Product Image */}
      <img
        src={product.img?.[0] || "/images/default.jpg"}
        alt={product.name}
        className="card-img-top mx-auto"
        style={{ height: "200px", objectFit: "contain" }}
      />

      {/* Product Info */}
      <div className="card-body d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h5 className="card-title fw-semibold text-truncate">{product.name}</h5>
          <p className="text-muted mb-2">${product.price}</p>

          <div className="d-flex justify-content-center mb-2 text-warning">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Aligned Button */}
        <div className="mt-auto d-flex justify-content-center">
          <button
            className="btn btn-danger btn-sm rounded px-3 fw-semibold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
