  import {BrowserRouter, Routes,Route } from "react-router-dom";
  import { useState } from "react";
  import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";
  import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import FilterData from "./pages/FilterData";

import Order from "./pages/Order";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProductDetail from "./pages/ProductDetils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import { mockData } from "./assets/assets";

// import Register from "./components/Register";
// import Login from "./pages/Login";

  function App() {
    
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(mockData)); // ✅ loads all mock products
  }, [dispatch]);

    const [order, setOrder]=useState(null);
     
    return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>

       <Route path='/order-confirmation' element={<Order order={order}/>}/>
        <Route path='/filter-data' element={<FilterData/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<ProductDetail/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path="/register" element={<Register/>}/> */}
      {/* <Route path='/place-order' element={<PlaceOrder/>} /> */}
      
     </Routes>
     <Footer/>
           {/* Toast Notification Container */}
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
     </BrowserRouter>
    );
  }
  export default App;