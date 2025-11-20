


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice"; // adjust path

// const Register = ({ onClose, openLogin }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//  const dispatch = useDispatch();

// const handleRegister = async (e) => {
//   e.preventDefault();

//   if (password !== confirmPassword) {
//     setError("Passwords do not match");
//     return;
//   }

//   try {
//     // Check if user already exists
//     const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
//     const existingUsers = await checkRes.json();

//     if (existingUsers.length > 0) {
//       setError("Email is already registered");
//       return;
//     }

//     const newUser = {
//       id: Math.random().toString(16).slice(2, 6),
//       username: name,
//       email,
//       password,
//       avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       orders: [],
//       cart: [], // ⭐ initialize empty cart
//       createdAt: new Date().toISOString(),
//       lastLogin: new Date().toISOString(),
//       loginCount: 1,
//       activity: [{ event: "account_created", time: new Date().toLocaleString() }],
//     };

//     // POST new user to database
//     const res = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newUser),
//     });

//     if (!res.ok) throw new Error("Failed to register");

//     // Save user to localStorage (auto login)
//     localStorage.setItem("loggedUser", JSON.stringify(newUser));

//     // ⭐ Initialize Redux cart
//     dispatch(setCartFromBackend(newUser.cart || []));

//     alert(`Welcome, ${name}! Registration successful.`);
//     if (onClose) onClose();
//     window.location.reload();
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

//       <h2 className="text-center mb-4 mt-2">Register</h2>

//       <form onSubmit={handleRegister}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label fw-semibold">
//             Full Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
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
//             required
//             minLength={8}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label fw-semibold">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             required
//             minLength={8}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Already have an account?</span>
//         <button
//           className="btn btn-outline-primary btn-sm"
//           onClick={openLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCartFromBackend } from "../redux/cartSlice"; // adjust path

// const Register = ({ onClose, openLogin }) => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       // Check if user already exists
//       const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
//       const existingUsers = await checkRes.json();

//       if (existingUsers.length > 0) {
//         setError("Email is already registered");
//         return;
//       }

//       const newUser = {
//         id: Math.random().toString(16).slice(2, 6), // auto small ID
//         username: name,
//         email,
//         password,
//         avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//         orders: [],
//         cart: [], // ⭐ initialize empty cart
//         createdAt: new Date().toISOString(),
//         lastLogin: new Date().toISOString(),
//         loginCount: 1,
//         activity: [{ event: "account_created", time: new Date().toLocaleString() }],
//       };

//       // POST new user to database
//       const res = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newUser),
//       });

//       if (!res.ok) throw new Error("Failed to register");

//       // Save user to localStorage (auto login)
//       localStorage.setItem("loggedUser", JSON.stringify(newUser));

//       // ⭐ Initialize Redux cart
//       dispatch(setCartFromBackend(newUser.cart || []));

//       alert(`Welcome, ${name}! Registration successful.`);
//       if (onClose) onClose();
//       window.location.reload();
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
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")
//         }
//       ></button>

//       <h2 className="text-center mb-4 mt-2">Register</h2>

//       <form onSubmit={handleRegister}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label fw-semibold">
//             Full Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label fw-semibold">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
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
//             required
//             minLength={8}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label fw-semibold">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             required
//             minLength={8}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         {error && <p className="text-danger small">{error}</p>}

//         <div className="d-grid mb-3">
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//         </div>
//       </form>

//       <div className="text-center mt-3">
//         <span className="me-2">Already have an account?</span>
//         <button
//           className="btn btn-outline-primary btn-sm"
//           onClick={openLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCartFromBackend } from "../redux/cartSlice";
import { getGuestCart, clearGuestCart } from "../utils/cart";

const Register = ({ onClose, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
      const existingUsers = await checkRes.json();
      if (existingUsers.length > 0) {
        setError("Email is already registered");
        return;
      }

      const newUser = {
        id: Math.random().toString(16).slice(2, 6),
        username: name,
        email,
        password,
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        cart: [],
        orders: [],
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        loginCount: 1,
        activity: [{ event: "account_created", time: new Date().toLocaleString() }]
      };

      // Merge guest cart
      const guestCart = getGuestCart();
      guestCart.forEach(item => {
        const existing = newUser.cart.find(i => i.id === item.id);
        if (existing) existing.quantity += item.quantity;
        else newUser.cart.push(item);
      });

      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });
      if (!res.ok) throw new Error("Failed to register");

      localStorage.setItem("loggedUser", JSON.stringify(newUser));
      dispatch(setCartFromBackend(newUser.cart));
      clearGuestCart();

      alert(`Welcome, ${name}! Registration successful.`);
      if (onClose) onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
      <button type="button" className="btn-close position-absolute"
        style={{ top: "10px", right: "10px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "50%", padding: "8px", transition: "background-color 0.2s ease" }}
        onClick={onClose}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#dc3545")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
      ></button>

      <h2 className="text-center mb-4 mt-2">Register</h2>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
          <input type="text" className="form-control" id="name" required value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" id="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" id="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" required minLength={8} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>

        {error && <p className="text-danger small">{error}</p>}

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Already have an account?</span>
        <button className="btn btn-outline-primary btn-sm" onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;


