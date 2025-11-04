// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import image1 from "../assets/products/product1.jpg";
// import image2 from "../assets/products/product2.jpg";
// import image3 from "../assets/products/product3.jpg";

// function Collection() {
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [priceRange, setPriceRange] = useState(500);
//   // const [cart, setCart] = useState([]);
//   // const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();

//   const products = {
//     kids: {
//       boys: [
//         { name: "Boys T-shirt", price: 25, img: [image1, image2, image3], size: "M", color: "Red", brand: "Nike", description: "Comfortable cotton t-shirt." },
//         { name: "Boys Jeans", price: 40, img: [image2], size: "L", color: "Blue", brand: "Adidas", description: "Stylish denim jeans for boys." },
//       ],
//       girls: [
//         { name: "Girls Dress", price: 30, img: [image3], size: "S", color: "Green", brand: "Puma", description: "Elegant dress for girls." },
//         { name: "Girls Top", price: 20, img: [image1], size: "M", color: "Red", brand: "Nike", description: "Stylish top for girls." },
//       ],
//     },
//     men: [
//       { name: "Men Shirt", price: 35, img: [image1], size: "L", color: "Blue", brand: "Nike", description: "A classic men’s shirt." },
//       { name: "Men Pants", price: 50, img: [image2], size: "XL", color: "Green", brand: "Adidas", description: "Comfortable pants for men." },
//     ],
//     women: [
//       { name: "Women Dress", price: 45, img: [image3], size: "M", color: "Red", brand: "Puma", description: "Stylish women’s dress." },
//       { name: "Women Top", price: 30, img: [image1], size: "S", color: "Blue", brand: "Nike", description: "Fashionable top for women." },
//     ],
//   };

//   // Get filtered products based on selected filters
//   const getFilteredProducts = () => {
//     let list = [];

//     if (category === "kids") {
//       if (subcategory) list = products.kids[subcategory];
//       else list = [...products.kids.boys, ...products.kids.girls];
//     } else if (category) {
//       list = products[category];
//     } else {
//       list = [
//         ...products.kids.boys,
//         ...products.kids.girls,
//         ...products.men,
//         ...products.women,
//       ];
//     }

//     return list.filter((p) => {
//       const sizeMatch = selectedSizes.length ? selectedSizes.includes(p.size) : true;
//       const colorMatch = selectedColors.length ? selectedColors.includes(p.color) : true;
//       const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
//       const priceMatch = p.price <= priceRange;
//       return sizeMatch && colorMatch && brandMatch && priceMatch;
//     });
//   };

//   // Toggle filter (add/remove selected filter)
//   const toggleFilter = (value, setter, current) => {
//     if (current.includes(value)) setter(current.filter((v) => v !== value));
//     else setter([...current, value]);
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setSelectedSizes([]);
//     setSelectedColors([]);
//     setSelectedBrands([]);
//     setPriceRange(500);
//   };

//   // // Add product to cart
//   // const addToCart = (product) => {
//   //   setCart((prevCart) => [...prevCart, product]);
//   // };

//   // // Set selected product for details modal
//   // const viewProductDetails = (product) => {
//   //   setSelectedProduct(product);
//   // };

//   // Handle Breadcrumb click and reset state for Collection
//   const handleBreadcrumbClick = () => {
//     setCategory("");      // Reset category
//     setSubcategory("");   // Reset subcategory
//     resetFilters();       // Reset all filters
//     navigate("/collection");  // Navigate to the default collection page
//   };

//   const filteredProducts = getFilteredProducts();

//   return (
//     <>
//       {/* Header and Breadcrumb */}
//       <div className="bg-light border-bottom">
//         <div className="container py-3">
//           <nav aria-label="breadcrumb" className="mb-2">
//             <ol className="breadcrumb mb-0 flex-wrap">
//               <li className="breadcrumb-item">
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigate("/"); // Navigate to home
//                   }}
//                 >
//                   Home
//                 </a>
//               </li>

//               <li className="breadcrumb-item">
//                 <a
//                   href="#"
//                   onClick={handleBreadcrumbClick} // Clicking on Collection resets to default state
//                 >
//                   Collection
//                 </a>
//               </li>
//               {category && (
//                 <li className="breadcrumb-item active">
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </li>
//               )}
//               {category === "kids" && subcategory && (
//                 <li className="breadcrumb-item active">
//                   {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
//                 </li>
//               )}
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="container text-center my-3">
//         <ul className="nav justify-content-center nav-pills flex-wrap">
//           <li className="nav-item dropdown">
//             <a
//               className={`nav-link dropdown-toggle ${category === "kids" ? "active" : ""}`}
//               data-bs-toggle="dropdown"
//               href="#"
//               role="button"
//               aria-expanded="false"
//               onClick={() => setCategory("kids")}
//             >
//               Kids
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 <a
//                   className={`dropdown-item ${subcategory === "boys" ? "active" : ""}`}
//                   href="#"
//                   onClick={() => setSubcategory("boys")}
//                 >
//                   Boys
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`dropdown-item ${subcategory === "girls" ? "active" : ""}`}
//                   href="#"
//                   onClick={() => setSubcategory("girls")}
//                 >
//                   Girls
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             <a
//               className={`nav-link ${category === "men" ? "active" : ""}`}
//               href="#"
//               onClick={() => setCategory("men")}
//             >
//               Men
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               className={`nav-link ${category === "women" ? "active" : ""}`}
//               href="#"
//               onClick={() => setCategory("women")}
//             >
//               Women
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Products + Filters */}
//       <main className="container-fluid my-4">
//         <div className="row">
//           {/* Sidebar Filters */}
//           <aside className="col-10 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
//             <button
//               className="btn btn-outline-secondary w-100 mb-3 d-md-none"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#filterMenu"
//             >
//               Filters
//             </button>
//             <div className="collapse d-md-block" id="filterMenu">
//               <h5 className="fw-bold mb-3">Filter By</h5>

//               {/* Size */}
//               <div className="mb-4">
//                 <h6>Size</h6>
//                 {["S", "M", "L", "XL"].map((size) => (
//                   <div className="form-check" key={size}>
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id={`size-${size}`}
//                       checked={selectedSizes.includes(size)}
//                       onChange={() => toggleFilter(size, setSelectedSizes, selectedSizes)}
//                     />
//                     <label className="form-check-label" htmlFor={`size-${size}`}>
//                       {size}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Color */}
//               <div className="mb-4">
//                 <h6>Color</h6>
//                 {["Red", "Blue", "Green"].map((color) => (
//                   <div className="form-check" key={color}>
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id={`color-${color}`}
//                       checked={selectedColors.includes(color)}
//                       onChange={() => toggleFilter(color, setSelectedColors, selectedColors)}
//                     />
//                     <label className="form-check-label" htmlFor={`color-${color}`}>
//                       {color}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Brand */}
//               <div className="mb-4">
//                 <h6>Brand</h6>
//                 {["Nike", "Adidas", "Puma"].map((brand) => (
//                   <div className="form-check" key={brand}>
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id={`brand-${brand}`}
//                       checked={selectedBrands.includes(brand)}
//                       onChange={() => toggleFilter(brand, setSelectedBrands, selectedBrands)}
//                     />
//                     <label className="form-check-label" htmlFor={`brand-${brand}`}>
//                       {brand}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Price */}
//               <div className="mb-4">
//                 <h6>Price Range</h6>
//                 <input
//                   type="range"
//                   className="form-range w-100"
//                   min="0"
//                   max="500"
//                   value={priceRange}
//                   onChange={(e) => setPriceRange(e.target.value)}
//                 />
//                 <p className="small text-muted">Up to ${priceRange}</p>
//               </div>

//               {/* Reset Filters Button */}
//               <button
//                 className="btn btn-danger w-100"
//                 onClick={resetFilters}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           </aside>

//           {/* Products grid */}
//           <section className="col-12 col-md-9 col-lg-10 px-4">
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product, index) => (
//                   <div className="col" key={index}>
//                     <div className="card h-100 text-center shadow-sm rounded-3">
//                       <img
//                         src={product.img[0]}
//                         className="card-img-top img-fluid"
//                         alt={product.name}
//                       />
//                       <div className="card-body">
//                         <h6 className="card-title text-truncate">{product.name}</h6>
//                         <p className="text-muted mb-0">${product.price}.00</p>
//                         <button
//                           className="btn btn-primary mt-2"
//                           onClick={() => addToCart(product)}
//                         >
//                           Add to Cart
//                         </button>
//                         <button
//                           className="btn btn-info mt-2 ms-2"
//                           onClick={() => viewProductDetails(product)}
//                         >
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-muted">No products match the selected filters.</p>
//               )}
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Collection;
