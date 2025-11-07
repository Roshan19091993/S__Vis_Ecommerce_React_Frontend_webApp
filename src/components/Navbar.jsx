// import React, { useContext, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { assets } from "../assets/assets";
// import Modal from "./Modal";
// import Login from "./Login";
// import Register from "./Register";
// import SearchBar from "./SearchBar";

// import { CategoryContext } from "../context/CategoryContext";

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const {category, setCategory, subcategory, setSubcategory}=useContext(CategoryContext);
//   const navigate = useNavigate();

//   const products = useSelector((state) => state.cart.products || []);

//   // === Auth Modal Handlers ===
//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModalOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       {/* === HEADER SECTION === */}
//       <header className="bg-danger shadow-sm">
//         <div className="container-fluid py-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
//           {/* === Left: Logo === */}
//           <Link
//             to="/"
//             className="d-flex align-items-center"
//             style={{ marginLeft: "70px" }} // <-- move logo right
//           >
//             <img
//               src={assets.logo_img}
//               alt="logo"
//               className="rounded-circle border border-3 border-white shadow-sm"
//               style={{
//                 width: "75px", // <-- increased logo size
//                 height: "75px",
//                 objectFit: "cover",
//               }}
//             />
//           </Link>

//           {/* === Center: SearchBar === */}
//           <div
//             className="flex-grow-1 d-flex justify-content-center my-2 my-md-0"
//             style={{ maxWidth: "500px",marginLeft: "70px" }}
//           >
//             <SearchBar />
//           </div>

//           {/* === Right: Cart + Login/Register === */}
//           <div className="d-flex align-items-center gap-5">
//             {/* Cart Icon */}
//             <Link to="/cart" className="position-relative text-white fs-5 " >
//               <FaShoppingCart className="fs-4" />
//               {products.length > 0 && (
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
//                 {products.reduce((total, item) => total + (item.quantity || 1), 0)}
//               </span>

//               )}
//             </Link>

//             {/* Login/Register */}
            
//             <button
//               className="btn btn-outline-light fw-semibold d-none d-md-inline"
//               onClick={() => {
//                 setIsLogin(true);  // Open Login view by default
//                 setIsModalOpen(true);
//               }}
//             >
//               Login | Register
//             </button>


//             {/* Mobile Icon */}
        
//             <button
//               className="btn btn-light d-md-none"
//               onClick={() => {
//                 setIsLogin(true);  // Open Login view by default
//                 setIsModalOpen(true);
//               }}
//             >
//               <FaUser className="fs-5" />
//             </button>
//           </div>
//         </div>

//         {/* === Blue Navigation Bar === */}
//         <nav className="bg-black">
//           <ul className="nav justify-content-center nav-pills py-2 flex-wrap fw-semibold">
//             {/* Home */}
//            <li className="nav-item">
//             <Link
//               to="/"
//               className={`nav-link ${
//                 category === "" 
//                   ? "bg-white text-black fw-bold"  // active tab: white background
//                   : "text-white"                   // inactive: white text
//               }`}
//               onClick={() => {
//                 setCategory("");
//                 setSubcategory("");
//                 navigate("/");
//               }}
//             >
//               Home
//             </Link>
//           </li>


//             {/* Men */}
//             <li className="nav-item">
//               <Link
//                 to="/collection?category=men"
//                 className={`nav-link  ${
//                   category === "men" ? "bg-white text-black fw-bold" : "text-white" 
//                 }`}
//                 onClick={() => {
//                   setCategory("men");
//                   setSubcategory("");
//                   navigate("/collection?category=men");
//                 }}
//               >
//                 Men
//               </Link>
//             </li>

//             {/* Women */}
//             <li className="nav-item">
//               <Link
//                 to="/collection?category=women"
//                 className={`nav-link ${
//                   category === "women" ? "bg-white text-black fw-bold" : "text-white" 
//                 }`}
//                 onClick={() => {
//                   setCategory("women");
//                   setSubcategory("");
//                   navigate("/collection?category=women");
//                 }}
//               >
//                 Women
//               </Link>
//             </li>

//             {/* Kids Dropdown */}
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle  ${
//                   category === "kids" ? "bg-white text-black fw-bold" : "text-white" 
//                 }`}
//                 data-bs-toggle="dropdown"
//                 href="#"
//                 role="button"
//                 aria-expanded="false"
//                 onClick={() => setCategory("kids")}
//               >
//                 Kids
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link
//                     to="/collection?category=kids&subcategory=boys"
//                     className={`dropdown-item ${
//                       subcategory === "boys" ? "active" : ""
//                     }`}
//                     onClick={() => {
//                       setCategory("kids");
//                       setSubcategory("boys");
//                       navigate("/collection?category=kids&subcategory=boys");
//                     }}
//                   >
//                     Boys
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/collection?category=kids&subcategory=girls"
//                     className={`dropdown-item ${
//                       subcategory === "girls" ? "active" : ""
//                     }`}
//                     onClick={() => {
//                       setCategory("kids");
//                       setSubcategory("girls");
//                       navigate("/collection?category=kids&subcategory=girls");
//                     }}
//                   >
//                     Girls
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             {/* About */}
//             <li className="nav-item">
//               <Link
//                 to="/about"
//                 className={`nav-link  ${
//                   category === "about" ? "bg-white text-black fw-bold" : "text-white" 
//                 }`}
//                 onClick={() => {
//                   setCategory("about");
//                   setSubcategory("");
//                   navigate("/about");
//                 }}
//               >
//                 About
//               </Link>
//             </li>

//             {/* Contact */}
//             <li className="nav-item">
//               <Link
//                 to="/contact"
//                 className={`nav-link  ${
//                   category === "contact" ? "bg-white text-black fw-bold" : "text-white" 
//                 }`}
//                 onClick={() => {
//                   setCategory("contact");
//                   setSubcategory("");
//                   navigate("/contact");
//                 }}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* === Breadcrumbs (Visible on Every Tab) === */}
//       <div className="bg-light border-bottom">
//         <div className="container py-2">
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb mb-0">
//               <li className="breadcrumb-item">
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setCategory("");
//                     navigate("/");
//                   }}
//                 >
//                   Home
//                 </a>
//               </li>

//               {category && (
//                 <li className="breadcrumb-item">
//                   <a
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       navigate(`/collection?category=${category}`);
//                     }}
//                   >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </a>
//                 </li>
//               )}

//               {subcategory && (
//                 <li className="breadcrumb-item active" aria-current="page">
//                   {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
//                 </li>
//               )}
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* === Auth Modal === */}
//       <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
//         {isLogin ? (
//           <Login openSignUp={openSignUp} />
//         ) : (
//           <Register openLogin={openLogin} />
//         )}
//       </Modal>
//     </>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { assets } from "../assets/assets";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import SearchBar from "./SearchBar";

import { CategoryContext } from "../context/CategoryContext";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { category, setCategory, subcategory, setSubcategory } =
    useContext(CategoryContext);
  const navigate = useNavigate();

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

  return (
    <>
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
              style={{
                width: "75px",
                height: "75px",
                objectFit: "cover",
              }}
            />
          </Link>

          {/* === Center: SearchBar === */}
          <div
            className="flex-grow-1 d-flex justify-content-center my-2 my-md-0"
            style={{ maxWidth: "500px", marginLeft: "70px" }}
          >
            <SearchBar />
          </div>

          {/* === Right: Cart + Login/Register === */}
          <div className="d-flex align-items-center gap-5">
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
          </div>
        </div>

        {/* ===  Navigation Bar === */}
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
