// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setProducts } from "./redux/productSlice";
// import { setCartFromBackend } from "./redux/cartSlice";
// import { mockData } from "./assets/assets";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import Contact from "./pages/Contact";
// import FilterData from "./pages/FilterData";
// import Order from "./pages/Order";
// import About from "./pages/About";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import ProductDetails from "./pages/ProductDetails";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import UserProfile from "./pages/UserProfile";
// import MyOrders from "./pages/MyOrders";

// import { CategoryProvider } from "./context/CategoryContext.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useSyncCart from "./hooks/useSyncCart";
// import "./App.css";

// function App() {
//   useSyncCart(); // 🔥 auto backend sync

//   const dispatch = useDispatch();
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     // Load product list
//     dispatch(setProducts(mockData));

//     // Load user cart from backend if logged in
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

//     if (loggedUser) {
//       fetch(`http://localhost:3000/users/${loggedUser.id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.cart) {
//             dispatch(setCartFromBackend(data.cart));

//             // update local stored user
//             localStorage.setItem("loggedUser", JSON.stringify(data));
//           }
//         })
//         .catch((err) => console.log("Failed to load backend cart:", err));
//     }
//   }, [dispatch]);

//   return (
//     <BrowserRouter>
//       <CategoryProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
//           <Route path="/order-confirmation" element={<Order order={order} />} />
//           <Route path="/filter-data" element={<FilterData />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product/:productId" element={<ProductDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/my-orders" element={<MyOrders />} />
//         </Routes>

//         <Footer />

//         <ToastContainer
//           position="top-center"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           pauseOnHover
//           draggable
//           theme="colored"
//         />
//       </CategoryProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setProducts } from "./redux/productSlice";
// import { setCartFromBackend } from "./redux/cartSlice";
// import { mockData } from "./assets/assets";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import Contact from "./pages/Contact";
// import FilterData from "./pages/FilterData";
// import Order from "./pages/Order";
// import About from "./pages/About";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import ProductDetails from "./pages/ProductDetails";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import UserProfile from "./pages/UserProfile";
// import MyOrders from "./pages/MyOrders";

// import { CategoryProvider } from "./context/CategoryContext.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useSyncCart from "./hooks/useSyncCart";
// import "./App.css";

// function App() {
//   useSyncCart(); // 🔥 auto backend sync

//   const dispatch = useDispatch();
//   const [order, setOrder] = useState(null);


//   useEffect(() => {
//     // Load product list
//     dispatch(setProducts(mockData));

//     // Check if user is logged in
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     if (loggedUser) {
//       const savedCart = JSON.parse(localStorage.getItem(`cart-${loggedUser.id}`)) || [];
//       console.log("Loading saved cart from localStorage:", savedCart);
//       dispatch(setCartFromBackend(savedCart)); // Load cart from localStorage into Redux
//     }
//   }, [dispatch]);

//   return (
//     <BrowserRouter>
//       <CategoryProvider>

//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
//           <Route path="/order-confirmation" element={<Order order={order} />} />
//           <Route path="/filter-data" element={<FilterData />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product/:productId" element={<ProductDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/my-orders" element={<MyOrders />} />
//         </Routes>

//         <Footer />

//         <ToastContainer
//           position="top-center"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           pauseOnHover
//           draggable
//           theme="colored"
//         />
//       </CategoryProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import { setCartFromBackend } from "./redux/cartSlice";
import { mockData } from "./assets/assets";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import MyOrders from "./pages/MyOrders";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSyncCart from "./hooks/useSyncCart";
import Order  from "./pages/Order";
 import About from "./pages/About";
 import Contact from "./pages/Contact";
 
import "./App.css";

function App() {
  useSyncCart(); // 🔥 auto backend sync

  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Load product list
    dispatch(setProducts(mockData));

    // Check if user is logged in
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const guestCart = JSON.parse(localStorage.getItem("guest-cart")) || [];

    if (loggedUser) {
      // Load saved cart from backend or localStorage if available
      fetch(`http://localhost:3000/users/${loggedUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.cart) {
            dispatch(setCartFromBackend(data.cart));
            // Update localStorage with updated cart
            localStorage.setItem("loggedUser", JSON.stringify(data));
          }
        })
        .catch((err) => console.log("Failed to load backend cart:", err));

      // Ensure logged-in user cart is merged correctly with guest cart
      const savedCart = JSON.parse(localStorage.getItem(`cart-${loggedUser.id}`)) || [];
      const mergedCart = [
        ...savedCart,
        ...guestCart.filter(gItem => !savedCart.some(sItem => sItem.id === gItem.id)),
      ];
      dispatch(setCartFromBackend(mergedCart)); // Sync to Redux
      // Save the merged cart in localStorage
      localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(mergedCart));
      localStorage.removeItem("guest-cart"); // Clear guest cart once merged
    } else if (guestCart.length > 0) {
      // If not logged in, load guest cart
      dispatch(setCartFromBackend(guestCart));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <CategoryProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-confirmation" element={<Order order={order} />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/my-orders" element={<MyOrders />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
