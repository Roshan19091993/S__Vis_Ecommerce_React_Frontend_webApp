import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Modal from "./Modal";
import SearchBar from "./SearchBar"; // ✅ Import the new component
import Collection from "../pages/Collection";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products || []);

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-fluid px-3 py-2 d-flex justify-content-between align-items-center flex-wrap">
        {/* === Logo === */}
        <Link to="/" className="d-flex align-items-center">
          <img
            src={assets.logo_img}
            alt="logo"
            className="rounded-circle border border-3 border-info shadow-sm"
            style={{ width: "55px", height: "55px", objectFit: "cover" }}
          />
        </Link>

        {/* === SearchBar Component === */}
        <div className="flex-grow-1 mx-2" style={{ maxWidth: "500px" }}>
          <SearchBar />
        </div>

        {/* === Icons Section === */}
        <div className="d-flex align-items-center gap-3 position-relative">
          {/* Cart Icon */}
          <Link to="/cart" className="position-relative text-dark fs-5">
          <FaShoppingCart className="fs-4" />
          {products.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {
                products.reduce((total, item) => total + (item.quantity || 1), 0)
              }
            </span>
          )}
        </Link>

          {/* Login/Register Button (Desktop) */}
          <button
            className="btn btn-outline-secondary fw-semibold d-none d-md-inline"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>

          {/* User Icon (Mobile) */}
          <button
            className="btn btn-light d-md-none"
            onClick={() => setIsModalOpen(true)}
          >
            <FaUser className="fs-5" />
          </button>
        </div>
      </div>

      {/* === Bottom Links === */}
      <div className="bg-light py-2">
        <div className="d-flex justify-content-center gap-4 fw-bold small flex-wrap">
          <Link to="/" className="text-dark text-decoration-none">
            HOME
          </Link>
          <Link to="/collection" className="text-dark text-decoration-none">
            COLLECTION
          </Link>
          <Link to="/contact" className="text-dark text-decoration-none">
            CONTACT
          </Link>
          <Link to="/about" className="text-dark text-decoration-none">
            ABOUT
          </Link>
        </div>
      </div>

      {/* === Login/Register Modal === */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
