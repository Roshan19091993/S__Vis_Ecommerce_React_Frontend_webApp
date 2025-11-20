// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";

// const useSyncCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products);

//   useEffect(() => {
//     // Load cart from localStorage when user logs in
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     if (loggedUser && loggedUser.cart) {
//       dispatch(setCartFromBackend(loggedUser.cart));
//     }
//   }, [dispatch]); // runs once on mount

//   useEffect(() => {
//     // Sync cart changes to backend
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     if (!loggedUser) return; // only for logged-in users

//     // PATCH backend
//     fetch(`http://localhost:3000/users/${loggedUser.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cart }),
//     }).catch((err) => console.error("Failed to sync cart:", err));

//     // Update localStorage copy
//     localStorage.setItem(
//       "loggedUser",
//       JSON.stringify({ ...loggedUser, cart })
//     );
//   }, [cart]);
// };

// export default useSyncCart;

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";

// const useSyncCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products);

//   // Sync cart from localStorage on initial load
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
//     if (loggedUser) {
//       const savedCart = JSON.parse(localStorage.getItem(`cart-${loggedUser.id}`)) || [];
//       console.log("Loading cart from localStorage:", savedCart);
      
//       // If the logged-in user has a cart saved in localStorage, load it into Redux state
//       dispatch(setCartFromBackend(savedCart));
//     }
//   }, [dispatch]);

//   // Sync cart changes to backend and localStorage
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     if (!loggedUser) return; // Skip if not logged in

//     if (cart.length > 0) {
//       console.log("Syncing cart to backend:", cart);

//       // Sync to backend
//       fetch(`http://localhost:3000/users/${loggedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart }),
//       }).catch((err) => console.error("Failed to sync cart:", err));

//       // Sync cart to localStorage
//       localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(cart));
//     }
//   }, [cart]); // Sync whenever cart changes
// };

// export default useSyncCart;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";
// import { getGuestCart, setGuestCart, clearGuestCart } from "../utils/cart";

// const useSyncCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart.products);

//   // Load cart from localStorage or backend (on page load)
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     const guestCart = getGuestCart(); // Retrieve the guest cart

//     if (loggedUser) {
//       // Merge guest cart with user cart
//       const mergedCart = [
//         ...loggedUser.cart,
//         ...guestCart.filter(gItem => !loggedUser.cart.some(uItem => uItem.id === gItem.id))
//       ];

//       // Merge duplicate items based on product ID
//       const mergedCartWithQuantities = mergedCart.reduce((acc, item) => {
//         const existingItem = acc.find(i => i.id === item.id);
//         if (existingItem) {
//           existingItem.quantity += item.quantity;
//           existingItem.totalPrice += item.totalPrice;
//         } else {
//           acc.push(item);
//         }
//         return acc;
//       }, []);

//       // Assign unique cartId for each item
//       const mergedCartWithIds = mergedCartWithQuantities.map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random(),
//       }));

//       // Set cart in Redux store
//       dispatch(setCartFromBackend(mergedCartWithIds));

//       // Sync to backend
//       fetch(`http://localhost:3000/users/${loggedUser.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ cart: mergedCartWithIds })
//       })
//         .then(() => {
//           // Update localStorage with the merged cart
//           const updatedUser = { ...loggedUser, cart: mergedCartWithIds };
//           localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
//           clearGuestCart(); // Clear guest cart after merge
//         })
//         .catch(err => console.error("Failed to merge cart:", err));
//     } else if (guestCart.length > 0) {
//       // If no loggedUser but guest cart exists, set cart from guest cart
//       const guestCartWithIds = guestCart.map(item => ({
//         ...item,
//         cartId: item.cartId || Date.now() + Math.random(),
//       }));
//       dispatch(setCartFromBackend(guestCartWithIds));
//     }
//   }, [dispatch]);

//   // Sync cart to localStorage and backend on cart change
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
//     if (loggedUser) {
//       // Sync to localStorage when cart is updated for logged-in users
//       const updatedUser = { ...loggedUser, cart: cart };
//       localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

//       // Sync cart to backend
//       fetch(`http://localhost:3000/users/${loggedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart: cart }),
//       }).catch((err) => console.error("Failed to sync cart:", err));

//     } else {
//       // If guest user, save cart to localStorage for guest users
//       setGuestCart(cart);
//     }
//   }, [cart]); // Runs whenever the cart in Redux changes
// };

// export default useSyncCart;


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setGuestCart } from "../utils/cart"; // Utility to handle guest cart

// const useSyncCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products);

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

//     if (loggedUser) {
//       // Save the cart to localStorage for logged-in user
//       localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(cart));
//     } else {
//       // Save the cart to localStorage for guest user
//       setGuestCart(cart);
//     }
//   }, [cart]); // Sync when cart changes
// };

// export default useSyncCart;


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGuestCart } from "../utils/cart"; // Utility to handle guest cart
import { setCartFromBackend } from "../redux/cartSlice";
const useSyncCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  // Sync when the cart changes
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
      // Save the cart to localStorage for logged-in user
      localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(cart));

      // Optionally: Clear the guest cart once the user logs in
      localStorage.removeItem("guest-cart");
    } else {
      // If no logged user, save cart as a guest cart in localStorage
      setGuestCart(cart);
    }
  }, [cart]); // Runs when the cart state changes

  // Sync cart on page load
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const guestCart = JSON.parse(localStorage.getItem("guest-cart")) || [];

    if (loggedUser) {
      // When user logs in, just load the cart from localStorage
      const savedCart = JSON.parse(localStorage.getItem(`cart-${loggedUser.id}`)) || [];

      // Load cart for logged-in user only
      dispatch(setCartFromBackend(savedCart)); // This ensures that cart data comes from the backend (or localStorage)
    } else if (guestCart.length > 0) {
      // If there's a guest cart, load it as the current cart
      dispatch(setCartFromBackend(guestCart));
    }
  }, [dispatch]); // Load cart once on component mount
};

export default useSyncCart;



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice"; // Redux action to set the cart in Redux state
// import { setGuestCart, getGuestCart, clearGuestCart } from "../utils/cart"; // Guest cart utilities

// const useSyncCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products); // Get cart from Redux store

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     const guestCart = getGuestCart(); // Retrieve guest cart (if any)

//     if (loggedUser) {
//       // When the user logs in:
//       // Merge guest cart with logged-in user's cart, and update Redux & localStorage
//       const savedCart = JSON.parse(localStorage.getItem(`cart-${loggedUser.id}`)) || [];
//       const mergedCart = [
//         ...savedCart,
//         ...guestCart.filter(gItem => !savedCart.some(sItem => sItem.id === gItem.id)),
//       ];
//       dispatch(setCartFromBackend(mergedCart));

//       // Save merged cart to logged-in user's localStorage and backend
//       localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(mergedCart));
//       clearGuestCart(); // Clear guest cart after merging
//     } else if (guestCart.length > 0) {
//       // If the user is a guest and has a cart, load the guest cart into Redux
//       dispatch(setCartFromBackend(guestCart));
//     }
//   }, [dispatch]);

//   // Sync cart changes to localStorage and backend
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
//     if (loggedUser) {
//       // Save cart to localStorage for logged-in users
//       localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(cart));

//       // Sync the cart with backend (optional)
//       fetch(`http://localhost:3000/users/${loggedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart }),
//       }).catch((err) => console.error("Failed to sync cart:", err));

//     } else {
//       // If guest user, save cart to localStorage for guest users
//       setGuestCart(cart); // Save cart to localStorage for guest user
//     }
//   }, [cart]); // Sync when cart changes
// };

// export default useSyncCart;
