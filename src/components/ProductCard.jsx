import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//  const handleAddToCart = (e, product) => {
//   e.stopPropagation();
//   e.preventDefault();
//   dispatch(addToCart(product));
//   alert("product added successfully");
//   toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
// };


//   return (
//     <div
//       className="card border-0 shadow-sm text-center position-relative p-3"
//       style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="card-img-top img-fluid mx-auto"
//         style={{ height: "200px", objectFit: "contain" }}
//       />

//       <div className="card-body">
//         <h5 className="card-title fw-semibold">{product.name}</h5>
//         <p className="text-muted mb-2">${product.price}</p>

//         <div className="d-flex justify-content-center mb-3 text-warning">
//           {[...Array(3)].map((_, i) => (
//             <FaStar key={i} />
//           ))}
//         </div>

//          <button  type="button" className="btn btn-danger btn-sm rounded-pill px-3"
//           onClick={(e) => handleAddToCart(e, product)}
//          >
//               Add to Cart
//             </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// ProductCard Component
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully");
    toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
  };

  return (
    <div className="card border-0 shadow-sm text-center position-relative p-3" style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top img-fluid mx-auto"
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-semibold">{product.name}</h5>
        <p className="text-muted mb-2">${product.price}</p>

        <div className="d-flex justify-content-center mb-3 text-warning">
          {[...Array(3)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <button
          type="button"
          className="btn btn-danger btn-sm rounded-pill px-3"
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

