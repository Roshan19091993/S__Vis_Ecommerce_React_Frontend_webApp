

// import React, { useState, useContext, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import EmptyCart from "../assets/empty-cart-yellow.png";
// import { FaTrashAlt } from 'react-icons/fa';
// import { 
//   increaseQuantity, 
//   decreaseQuantity, 
//   removeFromCart, 
//   setCartFromBackend 
// } from '../redux/cartSlice';
// import { CategoryContext } from '../context/CategoryContext.jsx';
// import Modal from '../components/Modal';
// import Login from '../components/Login';
// import { getGuestCart, clearGuestCart, setGuestCart } from '../utils/cart';

// const Cart = () => {
//   const { setIsLogin, setIsLoginModalOpen } = useContext(CategoryContext);
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   // Load cart from backend/localStorage on mount
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     const guestCart = getGuestCart();

//     if (user) {
//       // Merge guest cart into user cart (avoid duplicates)
//       const mergedCart = [
//         ...user.cart,
//         ...guestCart.filter(gItem => !user.cart.some(uItem => uItem.id === gItem.id))
//       ].map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random()
//       }));

//       dispatch(setCartFromBackend(mergedCart));

//       // Update backend
//       fetch(`http://localhost:3000/users/${user.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ cart: mergedCart }),
//       }).then(() => {
//         localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: mergedCart }));
//         clearGuestCart();
//       }).catch(err => console.error('Failed to merge guest cart:', err));

//     } else if (guestCart.length > 0) {
//       // Ensure guest cart items have unique cartId
//       const guestCartWithIds = guestCart.map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random()
//       }));
//       dispatch(setCartFromBackend(guestCartWithIds));
//     }
//   }, [dispatch]);

//   // Sync Redux cart to localStorage
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     if (user) {
//       localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: cart.products }));
//     } else {
//       setGuestCart(cart.products);
//     }
//   }, [cart]);

//   const handleCheckout = () => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     if (!user) {
//       localStorage.setItem("redirectAfterLogin", "/checkout");
//       setIsLogin(true);
//       setShowLoginModal(true);
//     } else {
//       navigate("/checkout");
//     }
//   };

//   const handleIncrease = (cartId) => dispatch(increaseQuantity(cartId));
//   const handleDecrease = (cartId) => dispatch(decreaseQuantity(cartId));
//   const handleRemove = (cartId) => dispatch(removeFromCart(cartId));

//   return (
//     <div className="container my-5">
//       {cart.products.length > 0 ? (
//         <>
//           <h3 className="text-center mb-4">SHOPPING CART</h3>
//           <div className="row">
//             <div className="col-lg-8 col-md-7">
//               <div className="table-responsive">
//                 <table className="table table-striped align-middle">
//                   <thead>
//                     <tr>
//                       <th>PRODUCTS</th>
//                       <th>PRICE</th>
//                       <th>QUANTITY</th>
//                       <th>SUBTOTAL</th>
//                       <th>REMOVE</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.products.map(product => (
//                       <tr key={product.cartId}>
//                         <td className="d-flex align-items-center">
//                           <img 
//                             src={product.img?.[0] || product.image} 
//                             alt={product.name} 
//                             style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
//                           />
//                           <span className="ms-3">{product.name}</span>
//                         </td>
//                         <td>${product.price}</td>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <button className="btn btn-outline-secondary btn-sm" onClick={() => handleDecrease(product.cartId)}>-</button>
//                             <span className="mx-2">{product.quantity}</span>
//                             <button className="btn btn-outline-secondary btn-sm" onClick={() => handleIncrease(product.cartId)}>+</button>
//                           </div>
//                         </td>
//                         <td>${(product.quantity * product.price).toFixed(2)}</td>
//                         <td>
//                           <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(product.cartId)}>
//                             <FaTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
//               <div className="card shadow-sm border-0">
//                 <div className="card-header bg-danger text-white text-center">CART TOTAL</div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between mb-3">
//                     <span>Total Items:</span>
//                     <span>{cart.totalQuantity}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-4 border-top pt-3">
//                     <span className="fw-bold">Total Price:</span>
//                     <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
//                   </div>
//                   <button className="btn btn-danger btn-lg w-100" onClick={handleCheckout}>
//                     Proceed To Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="d-flex justify-content-center">
//           <img src={EmptyCart} alt="Empty Cart" style={{ height: '300px' }} />
//         </div>
//       )}

//       <Modal isModalOpen={showLoginModal} setIsModalOpen={setShowLoginModal}>
//         <Login onClose={() => setShowLoginModal(false)} />
//       </Modal>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useContext, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import EmptyCart from "../assets/empty-cart-yellow.png";
// import { FaTrashAlt } from 'react-icons/fa';
// import { 
//   increaseQuantity, 
//   decreaseQuantity, 
//   removeFromCart, 
//   setCartFromBackend 
// } from '../redux/cartSlice';
// import { CategoryContext } from '../context/CategoryContext.jsx';
// import Modal from '../components/Modal';
// import Login from '../components/Login';
// import { getGuestCart, clearGuestCart, setGuestCart } from '../utils/cart';

// const Cart = () => {
//   const { setIsLogin, setIsLoginModalOpen } = useContext(CategoryContext);
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   // Load cart from backend/localStorage on mount
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     const guestCart = getGuestCart();

//     if (user) {
//       // Merge guest cart into user cart (avoid duplicates)
//       const mergedCart = [
//         ...user.cart,
//         ...guestCart.filter(gItem => !user.cart.some(uItem => uItem.id === gItem.id))
//       ].map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random()
//       }));

//       dispatch(setCartFromBackend(mergedCart));

//       // Update backend
//       fetch(`http://localhost:3000/users/${user.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ cart: mergedCart }),
//       }).then(() => {
//         localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: mergedCart }));
//         clearGuestCart();
//       }).catch(err => console.error('Failed to merge guest cart:', err));

//     } else if (guestCart.length > 0) {
//       // Ensure guest cart items have unique cartId
//       const guestCartWithIds = guestCart.map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random()
//       }));
//       dispatch(setCartFromBackend(guestCartWithIds));
//     }
//   }, [dispatch]);

//   // Sync Redux cart to localStorage
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));

//     if (user) {
//       // Save the updated cart to localStorage for logged-in user
//       localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: cart.products }));
//     } else {
//       // Save the updated cart to localStorage for guest user
//       setGuestCart(cart.products);
//     }
//   }, [cart]); // Sync when cart changes

//   const handleCheckout = () => {
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     if (!user) {
//       localStorage.setItem("redirectAfterLogin", "/checkout");
//       setIsLogin(true);
//       setShowLoginModal(true);
//     } else {
//       navigate("/checkout");
//     }
//   };

//   const handleIncrease = (cartId) => dispatch(increaseQuantity(cartId));
//   const handleDecrease = (cartId) => dispatch(decreaseQuantity(cartId));
//   const handleRemove = (cartId) => {
//     dispatch(removeFromCart(cartId));
//     // Immediately update localStorage after item removal
//     const updatedCart = cart.products.filter(product => product.cartId !== cartId);
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
    
//     if (user) {
//       // Update localStorage for logged-in user
//       localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: updatedCart }));
//     } else {
//       // Update localStorage for guest user
//       setGuestCart(updatedCart);
//     }
//   };

//   return (
//     <div className="container my-5">
//       {cart.products.length > 0 ? (
//         <>
//           <h3 className="text-center mb-4">SHOPPING CART</h3>
//           <div className="row">
//             <div className="col-lg-8 col-md-7">
//               <div className="table-responsive">
//                 <table className="table table-striped align-middle">
//                   <thead>
//                     <tr>
//                       <th>PRODUCTS</th>
//                       <th>PRICE</th>
//                       <th>QUANTITY</th>
//                       <th>SUBTOTAL</th>
//                       <th>REMOVE</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.products.map(product => (
//                       <tr key={product.cartId}>
//                         <td className="d-flex align-items-center">
//                           <img 
//                             src={product.img?.[0] || product.image} 
//                             alt={product.name} 
//                             style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
//                           />
//                           <span className="ms-3">{product.name}</span>
//                         </td>
//                         <td>${product.price}</td>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <button className="btn btn-outline-secondary btn-sm" onClick={() => handleDecrease(product.cartId)}>-</button>
//                             <span className="mx-2">{product.quantity}</span>
//                             <button className="btn btn-outline-secondary btn-sm" onClick={() => handleIncrease(product.cartId)}>+</button>
//                           </div>
//                         </td>
//                         <td>${(product.quantity * product.price).toFixed(2)}</td>
//                         <td>
//                           <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(product.cartId)}>
//                             <FaTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
//               <div className="card shadow-sm border-0">
//                 <div className="card-header bg-danger text-white text-center">CART TOTAL</div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between mb-3">
//                     <span>Total Items:</span>
//                     <span>{cart.totalQuantity}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-4 border-top pt-3">
//                     <span className="fw-bold">Total Price:</span>
//                     <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
//                   </div>
//                   <button className="btn btn-danger btn-lg w-100" onClick={handleCheckout}>
//                     Proceed To Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="d-flex justify-content-center">
//           <img src={EmptyCart} alt="Empty Cart" style={{ height: '300px' }} />
//         </div>
//       )}

//       <Modal isModalOpen={showLoginModal} setIsModalOpen={setShowLoginModal}>
//         <Login onClose={() => setShowLoginModal(false)} />
//       </Modal>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmptyCart from "../assets/empty-cart-yellow.png";
import { FaTrashAlt } from 'react-icons/fa';
import { 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart, 
  setCartFromBackend 
} from '../redux/cartSlice';
import { CategoryContext } from '../context/CategoryContext.jsx';
import Modal from '../components/Modal';
import Login from '../components/Login';
import { getGuestCart, clearGuestCart, setGuestCart } from '../utils/cart';

const Cart = () => {
  const { setIsLogin, setIsLoginModalOpen } = useContext(CategoryContext);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Load cart from localStorage or backend on initial load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const guestCart = getGuestCart();

    if (user) {
      // Merge guest cart with user cart (avoid duplicates)
      const mergedCart = [
        ...user.cart,
        ...guestCart.filter(gItem => !user.cart.some(uItem => uItem.id === gItem.id))
      ].map(item => ({
        ...item,
        cartId: item.cartId || Date.now() + Math.random() // Ensure unique cartId for each product
      }));

      // Dispatch the merged cart to Redux
      dispatch(setCartFromBackend(mergedCart));

      // Update backend
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart: mergedCart }),
      }).then(() => {
        localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: mergedCart }));
        clearGuestCart(); // Clear guest cart after merging
      }).catch(err => console.error('Failed to merge guest cart:', err));

    } else if (guestCart.length > 0) {
      // If no user is logged in, load the guest cart
      const guestCartWithIds = guestCart.map(item => ({
        ...item,
        cartId: item.cartId || Date.now() + Math.random()
      }));
      dispatch(setCartFromBackend(guestCartWithIds));
    }
  }, [dispatch]);

  // Sync cart state to localStorage whenever the cart changes (for guest users)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
      // For logged-in users, sync the cart to the backend and localStorage
      localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: cart.products }));
    } else {
      // For guest users, sync cart to localStorage
      setGuestCart(cart.products);
    }
  }, [cart]); // Sync whenever the cart state changes

  // Handle checkout flow
  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
      // Redirect guest to login page before checkout
      localStorage.setItem("redirectAfterLogin", "/checkout");
      setIsLogin(true);
      setShowLoginModal(true);
    } else {
      navigate("/checkout");
    }
  };

  // Handle quantity increase/decrease and item removal
  const handleIncrease = (cartId) => dispatch(increaseQuantity(cartId));
  const handleDecrease = (cartId) => dispatch(decreaseQuantity(cartId));
  const handleRemove = (cartId) => {
    dispatch(removeFromCart(cartId));

    // After removal, update localStorage (for guest users)
    const updatedCart = cart.products.filter(product => product.cartId !== cartId);
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
      // Sync cart to localStorage for logged-in users
      localStorage.setItem("loggedUser", JSON.stringify({ ...user, cart: updatedCart }));
    } else {
      // Sync cart to localStorage for guest users
      setGuestCart(updatedCart);
    }
  };

  return (
    <div className="container my-5">
      {cart.products.length > 0 ? (
        <>
          <h3 className="text-center mb-4">SHOPPING CART</h3>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="table-responsive">
                <table className="table table-striped align-middle">
                  <thead>
                    <tr>
                      <th>PRODUCTS</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>SUBTOTAL</th>
                      <th>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map(product => (
                      <tr key={product.cartId}>
                        <td className="d-flex align-items-center">
                          <img 
                            src={product.img?.[0] || product.image} 
                            alt={product.name} 
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                          />
                          <span className="ms-3">{product.name}</span>
                        </td>
                        <td>${product.price}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => handleDecrease(product.cartId)}>-</button>
                            <span className="mx-2">{product.quantity}</span>
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => handleIncrease(product.cartId)}>+</button>
                          </div>
                        </td>
                        <td>${(product.quantity * product.price).toFixed(2)}</td>
                        <td>
                          <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(product.cartId)}>
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-danger text-white text-center">CART TOTAL</div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4 border-top pt-3">
                    <span className="fw-bold">Total Price:</span>
                    <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="btn btn-danger btn-lg w-100" onClick={handleCheckout}>
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <img src={EmptyCart} alt="Empty Cart" style={{ height: '300px' }} />
        </div>
      )}

      <Modal isModalOpen={showLoginModal} setIsModalOpen={setShowLoginModal}>
        <Login onClose={() => setShowLoginModal(false)} />
      </Modal>
    </div>
  );
};

export default Cart;

