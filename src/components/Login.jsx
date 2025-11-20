

// import React, { useState } from "react";

// const Login = ({ onClose, openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch(
//       `http://localhost:3000/users?email=${email}&password=${password}`
//     );
//     const data = await res.json();

//     if (data.length > 0) {
//       const user = data[0];
//       // Save user to localStorage
//       localStorage.setItem("loggedUser", JSON.stringify(user));
//       alert(`Welcome, ${user.username}!`);

//       if (onClose) onClose(); 

//       // ✅ Redirect after login if coming from another page like checkout
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       if (redirectPath) {
//         localStorage.removeItem("redirectAfterLogin"); // Clean up
//         window.location.href = redirectPath; // Navigate to the stored path
//       } else {
//         window.location.reload(); // Refresh to update Navbar if no redirect
//       }
//     } else {
//       setError("Invalid email or password");
//     }
//   } catch (err) {
//     console.error(err);
//     setError("Something went wrong. Please try again.");
//   }
// };


//   return (
//     <div
//       className="card shadow-lg p-4 position-relative"
//       style={{ maxWidth: "400px", width: "100%" }}
//     >
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease",
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor = "#dc3545")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor =
//             "rgba(255,255,255,0.9)")
//         }
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button
//           className="btn btn-outline-primary btn-sm"
//           onClick={openSignUp}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice"; // adjust path

// const Login = ({ onClose, openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
 
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   try {
//     const res = await fetch(
//       `http://localhost:3000/users?email=${email}&password=${password}`
//     );
//     const data = await res.json();

//     if (data.length > 0) {
//       let user = data[0];
//       user = { ...user, orders: user.orders || [] };

//       // Save logged user
//       localStorage.setItem("loggedUser", JSON.stringify(user));

//       // ⭐ Sync cart for this user
//       if (user.cart) {
//         // If your backend has a cart array saved with the user
//         dispatch(setCartFromBackend(user.cart));
//       } else {
//         // Otherwise clear Redux cart for fresh login
//         dispatch(setCartFromBackend([]));
//       }

//       alert(`Welcome, ${user.username}!`);
//       if (onClose) onClose();

//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       if (redirectPath) {
//         localStorage.removeItem("redirectAfterLogin");
//         window.location.href = redirectPath;
//       } else {
//         window.location.reload(); // update navbar/cart icons
//       }
//     } else {
//       setError("Invalid email or password");
//     }
//   } catch (err) {
//     console.error(err);
//     setError("Something went wrong. Please try again.");
//   }
// };

//   return (
//     <div
//       className="card shadow-lg p-4 position-relative"
//       style={{ maxWidth: "400px", width: "100%" }}
//     >
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease",
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor = "#dc3545")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")
//         }
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button
//           className="btn btn-outline-primary btn-sm"
//           onClick={openSignUp}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice"; // adjust path

// const Login = ({ onClose, openSignUp }) => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch(
//         `http://localhost:3000/users?email=${email}&password=${password}`
//       );
//       const data = await res.json();

//       if (data.length > 0) {
//         let user = data[0];

//         // Ensure orders and cart exist
//         user = {
//           ...user,
//           orders: user.orders || [],
//           cart: user.cart || [], // ⭐ ensure cart exists
//         };

//         // Save user to localStorage
//         localStorage.setItem("loggedUser", JSON.stringify(user));

//         // ⭐ Sync cart with Redux
//         dispatch(setCartFromBackend(user.cart));

//         alert(`Welcome, ${user.username}!`);

//         if (onClose) onClose();

//         // Redirect if needed
//         const redirectPath = localStorage.getItem("redirectAfterLogin");
//         if (redirectPath) {
//           localStorage.removeItem("redirectAfterLogin");
//           window.location.href = redirectPath;
//         } else {
//           window.location.reload(); // refresh navbar/cart state
//         }
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div
//       className="card shadow-lg p-4 position-relative"
//       style={{ maxWidth: "400px", width: "100%" }}
//     >
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease",
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.backgroundColor = "#dc3545")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")
//         }
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button
//           className="btn btn-outline-primary btn-sm"
//           onClick={openSignUp}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";
// import { getGuestCart, clearGuestCart } from "../utils/cart";

// const Login = ({ onClose, openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch(); // ✅ Added

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   try {
//     const res = await fetch(
//       `http://localhost:3000/users?email=${email}&password=${password}`
//     );
//     const data = await res.json();

//     if (data.length > 0) {
//       let user = {
//         ...data[0],
//         orders: data[0].orders || [],
//         cart: data[0].cart || []
//       };

//       // --- ADVANCED GUEST CART MERGE ---
//       const guestCart = getGuestCart(); // get guest cart
//       const mergedCart = [...user.cart];

//       guestCart.forEach((gItem) => {
//         const existing = mergedCart.find((item) => item.id === gItem.id);
//         if (existing) {
//           existing.quantity += gItem.quantity;
//           existing.totalPrice += gItem.totalPrice;
//         } else {
//           mergedCart.push(gItem);
//         }
//       });

//       user.cart = mergedCart; // update user's cart
//       clearGuestCart(); // clear guest cart
//       // --- END GUEST CART MERGE ---

      
//       await fetch(`http://localhost:3000/users/${user.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart: mergedCart })
//       });

//       // Save user in localStorage
//       localStorage.setItem("loggedUser", JSON.stringify(user));

//       // Update Redux cart
//       dispatch(setCartFromBackend(user.cart));

//       alert(`Welcome back, ${user.username}!`);
//       if (onClose) onClose();

//       // Redirect after login if needed
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       if (redirectPath) {
//         localStorage.removeItem("redirectAfterLogin");
//         window.location.href = redirectPath;
//       } else {
//         window.location.reload();
//       }
//     } else {
//       setError("Invalid email or password");
//     }
//   } catch (err) {
//     console.error(err);
//     setError("Something went wrong. Please try again.");
//   }
// };


//   return (
//     <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease"
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">Login</button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button className="btn btn-outline-primary btn-sm" onClick={openSignUp}>
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";
// import { getGuestCart, clearGuestCart } from "../utils/cart";

// const Login = ({ onClose, openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // ⭐ loading state
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `http://localhost:3000/users?email=${email}&password=${password}`
//       );
//       const data = await res.json();

//       if (data.length === 0) {
//         setError("Invalid email or password");
//         setLoading(false);
//         return;
//       }

//       let user = { ...data[0], orders: data[0].orders || [], cart: data[0].cart || [] };

//       // --- Guest cart merge ---
//       const guestCart = getGuestCart();
//       const mergedCart = [...user.cart];

//       guestCart.forEach((gItem) => {
//         const existing = mergedCart.find((item) => item.id === gItem.id);
//         if (existing) {
//           existing.quantity += gItem.quantity;
//           existing.totalPrice += gItem.totalPrice;
//         } else {
//           mergedCart.push(gItem);
//         }
//       });

//       user.cart = mergedCart;
//       clearGuestCart();

//       // Update backend cart
//       try {
//         await fetch(`http://localhost:3000/users/${user.id}`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ cart: mergedCart }),
//         });
//       } catch (err) {
//         console.warn("Failed to sync cart to backend:", err);
//       }

//       // Save to localStorage & Redux
//       localStorage.setItem("loggedUser", JSON.stringify(user));
//       dispatch(setCartFromBackend(user.cart));

//       alert(`Welcome back, ${user.username}!`);
//       if (onClose) onClose();

//       // Redirect logic (SPA-friendly)
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       if (redirectPath) {
//         localStorage.removeItem("redirectAfterLogin");
//         window.location.href = redirectPath;
//       }

//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease"
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//             disabled={loading}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={loading}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button className="btn btn-outline-primary btn-sm" onClick={openSignUp} disabled={loading}>
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice";
// import { getGuestCart, clearGuestCart } from "../utils/cart";

// const Login = ({ onClose, openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `http://localhost:3000/users?email=${email}&password=${password}`
//       );
//       const data = await res.json();

//       if (data.length === 0) {
//         setError("Invalid email or password");
//         setLoading(false);
//         return;
//       }

//       let user = { ...data[0], orders: data[0].orders || [], cart: data[0].cart || [] };

//       // --- Guest cart merge ---
//       const guestCart = getGuestCart();
//       const mergedCart = [...user.cart];

//       guestCart.forEach((gItem) => {
//         const existing = mergedCart.find((item) => item.id === gItem.id);
//         if (existing) {
//           existing.quantity += gItem.quantity;
//           existing.totalPrice += gItem.totalPrice;
//         } else {
//           mergedCart.push(gItem);
//         }
//       });

//       user.cart = mergedCart;
//       clearGuestCart();

//       // Update backend cart
//       try {
//         await fetch(`http://localhost:3000/users/${user.id}`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ cart: mergedCart }),
//         });
//       } catch (err) {
//         console.warn("Failed to sync cart to backend:", err);
//       }

//       // Save to localStorage & Redux
//       localStorage.setItem("loggedUser", JSON.stringify(user));
//       dispatch(setCartFromBackend(user.cart));

//       alert(`Welcome back, ${user.username}!`);
//       if (onClose) onClose();

//       // Redirect if needed
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       if (redirectPath) {
//         localStorage.removeItem("redirectAfterLogin");
//         window.location.href = redirectPath;
//       }

//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
//       {/* Close Button */}
//       <button
//         type="button"
//         className="btn-close position-absolute"
//         style={{
//           top: "10px",
//           right: "10px",
//           backgroundColor: "rgba(255,255,255,0.9)",
//           borderRadius: "50%",
//           padding: "8px",
//           transition: "background-color 0.2s ease"
//         }}
//         onClick={onClose}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//             disabled={loading}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label fw-semibold">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Enter your password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={loading}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Don’t have an account?</span>
//         <button className="btn btn-outline-primary btn-sm" onClick={openSignUp} disabled={loading}>
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// src/components/Login.jsx

import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { setCartFromBackend } from "../redux/cartSlice";
import { getGuestCart, clearGuestCart } from "../utils/cart";
import { CategoryContext } from "../context/CategoryContext";

const Login = ({ onClose, openSignUp }) => {
  const dispatch = useDispatch();
  const { setLoggedUser } = useContext(CategoryContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const data = await res.json();

      if (!data || data.length === 0) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      let user = { ...data[0], orders: data[0].orders || [], cart: data[0].cart || [] };

      // Merge guest cart
      const guestCart = getGuestCart();
      const mergedCart = [...user.cart];
      guestCart.forEach((gItem) => {
        const existing = mergedCart.find((item) => item.id === gItem.id);
        if (existing) {
          existing.quantity += gItem.quantity;
          existing.totalPrice += gItem.totalPrice;
        } else {
          mergedCart.push(gItem);
        }
      });
      user.cart = mergedCart;
      clearGuestCart();

      // Sync with backend
      await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: mergedCart }),
      });

      // Update context + localStorage + Redux
      setLoggedUser(user);
      localStorage.setItem("loggedUser", JSON.stringify(user));
      dispatch(setCartFromBackend(user.cart));

      if (onClose) onClose();
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        window.location.href = redirectPath;
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
      <button
        type="button"
        className="btn-close position-absolute"
        style={{ top: "10px", right: "10px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "50%", padding: "8px", transition: "background-color 0.2s ease" }}
        onClick={onClose}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
      ></button>

      <h2 className="text-center mb-4 mt-2">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        {error && <p className="text-danger small">{error}</p>}

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Don’t have an account?</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={openSignUp}
          disabled={loading}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;

