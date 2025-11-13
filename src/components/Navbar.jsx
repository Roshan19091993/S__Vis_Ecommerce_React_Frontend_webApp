
import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { assets } from "../assets/assets";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import SearchBar from "./SearchBar";
import { CategoryContext } from "../context/CategoryContext";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import "./Navbar.css";
const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);


  const { category, setCategory, subcategory, setSubcategory,isLogin,setIsLogin,isLoginModalOpen,setIsLoginModalOpen } =
    useContext(CategoryContext);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const products = useSelector((state) => state.cart.products || []);

  // === Auth Modal Handlers ===
  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // 🧠 Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (storedUser) setLoggedUser(storedUser);
  }, []);

  // 🚪 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    dispatch(clearCart())
    alert("Logged out successfully!");
    setShowDropdown(false);
   
  };

  return (
    <>
        {/* === SCROLLING OFFER BAR === */}
    <div className="offer-bar bg-black text-white py-2">
      <div className="container-fluid overflow-hidden position-relative">
        <div className="marquee-text fw-semibold">
          🎉 Flat 40% OFF on Winter Collection | 🛍️ Free Shipping Above ₹999 | ✨ New Arrivals Every Week! | 👗 New Ethnic Styles Available Now | 💳 Easy Returns & Secure Payments!
        </div>
      </div>
    </div>

      {/* === HEADER SECTION === */}
      <header className="bg-danger shadow-sm">
        <div className="container-fluid py-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
          {/* === Left: Logo === */}
          <Link
            to="/"
            className="d-flex align-items-center"
            style={{ marginLeft: "70px" }}
          >
            <img
              src={assets.logo_img}
              alt="logo"
              className="rounded-circle border border-3 border-white shadow-sm"
              style={{ width: "75px", height: "75px", objectFit: "cover" }}
            />
          </Link>

          {/* === Center: SearchBar === */}
          <div
            className="flex-grow-1 d-flex justify-content-center my-2 my-md-0"
            style={{ maxWidth: "500px", marginLeft: "70px" }}
          >
            <SearchBar />
          </div>

          {/* === Right: Cart + Login/Register or Profile Dropdown === */}
          <div className="d-flex align-items-center gap-5 position-relative">
            {/* Cart Icon */}
            <Link to="/cart" className="position-relative text-white fs-5">
              <FaShoppingCart className="fs-4" />
              {products.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {products.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                  )}
                </span>
              )}
            </Link>

            {/* Login/Register or Profile Dropdown */}
            {loggedUser ? (
              <div className="position-relative">
                {/* Profile trigger */}
                <div
                  className="d-flex align-items-center text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowDropdown(!showDropdown)}
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
                  ></i>
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div
                    className="position-absolute bg-white text-dark rounded shadow mt-2"
                    style={{
                      top: "100%",
                      right: 0,
                      zIndex: 1000,
                      minWidth: "200px",
                    }}
                  >
                    {/* Header */}
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

                    {/* Dropdown Items */}
                    <div className="list-group list-group-flush">
                      <button
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/profile");
                        }}
                      >
                        <i className="bi bi-person me-2"></i> My Profile
                      </button>

                      <button
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          setShowDropdown(false);
                          navigate("/orders");
                        }}
                      >
                        <i className="bi bi-box-seam me-2"></i> My Orders
                      </button>

                      <button
                        className="list-group-item list-group-item-action text-danger fw-semibold"
                        onClick={handleLogout}
                       
                      >
                        <i className="bi bi-box-arrow-right me-2"
                        
                        ></i> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login/Register Desktop */}
                <button
                  className="btn btn-outline-light fw-semibold d-none d-md-inline"
                  onClick={openLogin}
                >
                  Login | Register
                </button>

                {/* Mobile Icon */}
                <button className="btn btn-light d-md-none" onClick={openLogin}>
                  <FaUser className="fs-5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* === Navigation Bar === */}
        <nav className="bg-black">
          <ul className="nav justify-content-center nav-pills py-2 flex-wrap fw-semibold">
            {/* Home */}
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

            {/* Men */}
            <li className="nav-item">
              <Link
                to="/collection?category=men"
                className={`nav-link ${
                  category === "men"
                    ? "bg-white text-black fw-bold"
                    : "text-white"
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

            {/* Women */}
            <li className="nav-item">
              <Link
                to="/collection?category=women"
                className={`nav-link ${
                  category === "women"
                    ? "bg-white text-black fw-bold"
                    : "text-white"
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

            {/* Kids Dropdown */}
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  category === "kids"
                    ? "bg-white text-black fw-bold"
                    : "text-white"
                }`}
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                onClick={() => setCategory("kids")}
              >
                Kids
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/collection?category=kids&subcategory=boys"
                    className={`dropdown-item ${
                      subcategory === "boys" ? "active" : ""
                    }`}
                    onClick={() => {
                      setCategory("kids");
                      setSubcategory("boys");
                      navigate("/collection?category=kids&subcategory=boys");
                    }}
                  >
                    Boys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collection?category=kids&subcategory=girls"
                    className={`dropdown-item ${
                      subcategory === "girls" ? "active" : ""
                    }`}
                    onClick={() => {
                      setCategory("kids");
                      setSubcategory("girls");
                      navigate("/collection?category=kids&subcategory=girls");
                    }}
                  >
                    Girls
                  </Link>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  category === "about"
                    ? "bg-white text-black fw-bold"
                    : "text-white"
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

            {/* Contact */}
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  category === "contact"
                    ? "bg-white text-black fw-bold"
                    : "text-white"
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

      {/* === Breadcrumbs (Visible on Every Tab) === */}
      <div className="bg-light border-bottom">
        <div className="container py-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory("");
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>

              {category && (
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/collection?category=${category}`);
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              )}

              {subcategory && (
                <li className="breadcrumb-item active" aria-current="page">
                  {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* === Auth Modal === */}
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

// import "./Navbar.css";

//  {/* === SCROLLING OFFER BAR === */}
//       <div className="offer-bar bg-black text-white py-2">
//         <div className="container-fluid overflow-hidden position-relative">
//           <div className="marquee-text fw-semibold">
//             🎉 Flat 40% OFF on Winter Collection | 🛍️ Free Shipping Above ₹999 | ✨ New Arrivals Every Week! | 👗 New Ethnic Styles Available Now | 💳 Easy Returns & Secure Payments!
//           </div>
//         </div>
//       </div>


// import React, { useContext, useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { assets } from "../assets/assets";
// import Modal from "./Modal";
// import Login from "./Login";
// import Register from "./Register";
// import SearchBar from "./SearchBar";
// import { CategoryContext } from "../context/CategoryContext";
// import { clearCart } from "../redux/cartSlice";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loggedUser, setLoggedUser] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const {
//     category,
//     setCategory,
//     subcategory,
//     setSubcategory,
//     isLogin,
//     setIsLogin,
//   } = useContext(CategoryContext);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart.products || []);

//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModalOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
//     if (storedUser) setLoggedUser(storedUser);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedUser");
//     setLoggedUser(null);
//     dispatch(clearCart());
//     alert("Logged out successfully!");
//     setShowDropdown(false);
//   };

//   const subcategoriesMap = {
//     men: ["formal", "casual", "winter", "summer", "wedding", "festive"],
//     women: ["formal", "casual", "winter", "summer", "wedding", "festive"],
//     kids: ["boys", "girls"],
//   };

//   // Unified category/subcategory click handler
//   const handleCategoryClick = (cat, subcat = "") => {
//     setCategory(cat);
//     setSubcategory(subcat);
//     if (subcat) {
//       navigate(`/collection?category=${cat}&subcategory=${subcat}`);
//     } else {
//       navigate(`/collection?category=${cat}`);
//     }
//   };

//   return (
//     <>
//       {/* Header & Offer Bar omitted for brevity */}
//       <header className="bg-danger shadow-sm">
//         <div className="container-fluid py-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
//           {/* Logo */}
//           <Link to="/" className="d-flex align-items-center" style={{ marginLeft: "70px" }}>
//             <img
//               src={assets.logo_img}
//               alt="logo"
//               className="rounded-circle border border-3 border-white shadow-sm"
//               style={{ width: "75px", height: "75px", objectFit: "cover" }}
//             />
//           </Link>

//           {/* SearchBar */}
//           <div className="flex-grow-1 d-flex justify-content-center my-2 my-md-0" style={{ maxWidth: "500px", marginLeft: "70px" }}>
//             <SearchBar />
//           </div>

//           {/* Cart + Login/Profile */}
//           <div className="d-flex align-items-center gap-5 position-relative">
//             <Link to="/cart" className="position-relative text-white fs-5">
//               <FaShoppingCart className="fs-4" />
//               {products.length > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
//                   {products.reduce((total, item) => total + (item.quantity || 1), 0)}
//                 </span>
//               )}
//             </Link>

//             {loggedUser ? (
//               <div className="position-relative">
//                 <div
//                   className="d-flex align-items-center text-white"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => setShowDropdown(!showDropdown)}
//                 >
//                   <img
//                     src={loggedUser.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                     alt="profile"
//                     className="rounded-circle border border-2 border-light me-2"
//                     style={{ width: "40px", height: "40px", objectFit: "cover" }}
//                   />
//                   <span className="fw-semibold">Hi, {loggedUser.username}</span>
//                   <i className={`ms-2 bi ${showDropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"}`} style={{ fontSize: "0.9rem" }}></i>
//                 </div>

//                 {showDropdown && (
//                   <div className="position-absolute bg-white text-dark rounded shadow mt-2" style={{ top: "100%", right: 0, zIndex: 1000, minWidth: "200px" }}>
//                     <div className="p-3 border-bottom text-center">
//                       <img
//                         src={loggedUser.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                         alt="profile"
//                         className="rounded-circle mb-2"
//                         style={{ width: "50px", height: "50px" }}
//                       />
//                       <div className="fw-semibold">{loggedUser.username}</div>
//                       <small className="text-muted">{loggedUser.email}</small>
//                     </div>
//                     <div className="list-group list-group-flush">
//                       <button className="list-group-item list-group-item-action" onClick={() => { setShowDropdown(false); navigate("/profile"); }}>
//                         <i className="bi bi-person me-2"></i> My Profile
//                       </button>
//                       <button className="list-group-item list-group-item-action" onClick={() => { setShowDropdown(false); navigate("/orders"); }}>
//                         <i className="bi bi-box-seam me-2"></i> My Orders
//                       </button>
//                       <button className="list-group-item list-group-item-action text-danger fw-semibold" onClick={handleLogout}>
//                         <i className="bi bi-box-arrow-right me-2"></i> Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <button className="btn btn-outline-light fw-semibold d-none d-md-inline" onClick={openLogin}>
//                   Login | Register
//                 </button>
//                 <button className="btn btn-light d-md-none" onClick={openLogin}>
//                   <FaUser className="fs-5" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Navigation Bar */}
//         <nav className="bg-black">
//           <ul className="nav justify-content-center nav-pills py-2 flex-wrap fw-semibold">
//             <li className="nav-item">
//               <Link
//                 to="/"
//                 className={`nav-link ${category === "" ? "bg-white text-black fw-bold" : "text-white"}`}
//                 onClick={() => handleCategoryClick("")}
//               >
//                 Home
//               </Link>
//             </li>

//             {/* Dynamic Dropdowns */}
//             {["men", "women", "kids"].map((cat) => (
//               <li className="nav-item dropdown" key={cat}>
//                 <a
//                   className={`nav-link dropdown-toggle ${category === cat ? "bg-white text-black fw-bold" : "text-white"}`}
//                   data-bs-toggle="dropdown"
//                   href="#"
//                   role="button"
//                   aria-expanded="false"
//                   onClick={() => handleCategoryClick(cat)}
//                 >
//                   {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                 </a>
//                 <ul className="dropdown-menu">
//                   {subcategoriesMap[cat].map((sub) => (
//                     <li key={sub}>
//                       <a
//                         href="#"
//                         className={`dropdown-item ${subcategory === sub ? "active" : ""}`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleCategoryClick(cat, sub);
//                         }}
//                       >
//                         {sub.charAt(0).toUpperCase() + sub.slice(1)}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}

//             <li className="nav-item">
//               <Link
//                 to="/about"
//                 className={`nav-link ${category === "about" ? "bg-white text-black fw-bold" : "text-white"}`}
//                 onClick={() => handleCategoryClick("about")}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/contact"
//                 className={`nav-link ${category === "contact" ? "bg-white text-black fw-bold" : "text-white"}`}
//                 onClick={() => handleCategoryClick("contact")}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Auth Modal */}
//       <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
//         {isLogin ? <Login onClose={closeModal} openSignUp={openSignUp} /> : <Register onClose={closeModal} openLogin={openLogin} />}
//       </Modal>
//     </>
//   );
// };

// export default Navbar;
