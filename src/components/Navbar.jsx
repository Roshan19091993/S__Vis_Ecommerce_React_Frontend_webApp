

import React, { useContext, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { assets } from "../assets/assets";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import SearchBar from "./SearchBar";
import { CategoryContext } from "../context/CategoryContext";
import { clearCart } from "../redux/cartSlice";
import "./Navbar.css";

const Navbar = () => {
  const {
    category,
    setCategory,
    subcategory,
    setSubcategory,
    isLogin,
    setIsLogin,
    loggedUser,
    setLoggedUser,
  } = useContext(CategoryContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // To detect clicks outside the dropdown

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products || []);

  // Handle opening Login modal
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  // Handle opening SignUp modal
  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    dispatch(clearCart());
    alert("Logged out successfully!");
    navigate("/");
  localStorage.removeItem("cart");
  };

  // **Dropdown logic: Close dropdown if clicked outside**
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Cleanup event listeners when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Load user data from localStorage on initial mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (storedUser) setLoggedUser(storedUser);
  }, [setLoggedUser]);

  return (
    <>
      {/* SCROLLING OFFER BAR */}
      <div className="offer-bar bg-black text-white py-2">
        <div className="container-fluid overflow-hidden position-relative">
          <div className="marquee-text fw-semibold">
            🎉 Flat 40% OFF on Winter Collection | 🛍️ Free Shipping Above ₹999 | ✨ New Arrivals Every Week! | 👗 New Ethnic Styles Available Now | 💳 Easy Returns & Secure Payments!
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-danger shadow-sm">
        <div className="container-fluid py-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
          <Link
            to="/"
            className="d-flex align-items-center"
            style={{ marginLeft: "70px" }}
            onClick={() => {
              setCategory("");
              setSubcategory("");
            }}
          >
            <img
              src={assets.logo_img}
              alt="logo"
              className="rounded-circle border border-3 border-white shadow-sm"
              style={{ width: "75px", height: "75px", objectFit: "cover" }}
            />
          </Link>

          <div
            className="flex-grow-1 d-flex justify-content-center my-2 my-md-0"
            style={{ maxWidth: "500px", marginLeft: "70px" }}
          >
            <SearchBar />
          </div>

          <div className="d-flex align-items-center gap-5 position-relative">
            <Link to="/cart" className="position-relative text-white fs-5">
              <FaShoppingCart className="fs-4" />
              {products.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {products.reduce((total, item) => total + (item.quantity || 1), 0)}
                </span>
              )}
            </Link>

            {/* User Profile Dropdown Logic */}
            {loggedUser ? (
              <div className="position-relative" ref={dropdownRef}>
                <div
                  className="d-flex align-items-center text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown visibility
                >
                  <img
                    src={
                      loggedUser.avatar ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="profile"
                    className="rounded-circle border border-2 border-light me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <span className="fw-semibold">Hi, {loggedUser.username}</span>
                  <i
                    className={`ms-2 bi ${
                      showDropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    }`}
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>

                {showDropdown && (
                  <div
                    className="position-absolute bg-white text-dark rounded shadow mt-2"
                    style={{ top: "100%", right: 0, zIndex: 1000, minWidth: "200px" }}
                  >
                    <div className="p-3 border-bottom text-center">
                      <img
                        src={
                          loggedUser.avatar ||
                          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt="profile"
                        className="rounded-circle mb-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className="fw-semibold">{loggedUser.username}</div>
                      <small className="text-muted">{loggedUser.email}</small>
                    </div>

                    <div className="list-group list-group-flush">
                      <button
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/profile");
                        }}
                      >
                        My Profile
                      </button>
                      <button
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/my-orders");
                        }}
                      >
                        My Orders
                      </button>
                      <button
                        className="list-group-item list-group-item-action text-danger"
                        onClick={() => {
                          setShowDropdown(false);
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login/Register for non-logged-in users */}
                <button
                  className="btn btn-outline-light fw-semibold d-none d-md-inline"
                  onClick={openLogin}
                >
                  Login | Register
                </button>
                <button className="btn btn-light d-md-none" onClick={openLogin}>
                  <FaUser className="fs-5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* NAVIGATION BAR */}
        <nav className="bg-black">
          <ul className="nav justify-content-center nav-pills py-2 flex-wrap fw-semibold">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  category === "" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                onClick={() => {
                  setCategory("");
                  setSubcategory("");
                  navigate("/");
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/collection?category=men"
                className={`nav-link ${
                  category === "men" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                onClick={() => {
                  setCategory("men");
                  setSubcategory("");
                  navigate("/collection?category=men");
                }}
              >
                Men
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/collection?category=women"
                className={`nav-link ${
                  category === "women" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                onClick={() => {
                  setCategory("women");
                  setSubcategory("");
                  navigate("/collection?category=women");
                }}
              >
                Women
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  category === "kids" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => {
                  setCategory("kids");
                  setSubcategory("");
                  navigate("/collection?category=kids");
                }}
              >
                Kids
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/collection?category=kids&subcategory=boys"
                    className="dropdown-item"
                    onClick={() => setSubcategory("boys")}
                  >
                    Boys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collection?category=kids&subcategory=girls"
                    className="dropdown-item"
                    onClick={() => setSubcategory("girls")}
                  >
                    Girls
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  category === "about" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                onClick={() => {
                  setCategory("about");
                  setSubcategory("");
                  navigate("/about");
                }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  category === "contact" ? "bg-white text-black fw-bold" : "text-white"
                }`}
                onClick={() => {
                  setCategory("contact");
                  setSubcategory("");
                  navigate("/contact");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* AUTH MODAL */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login onClose={closeModal} openSignUp={openSignUp} />
        ) : (
          <Register onClose={closeModal} openLogin={openLogin} />
        )}
      </Modal>
    </>
  );
};

export default Navbar;

