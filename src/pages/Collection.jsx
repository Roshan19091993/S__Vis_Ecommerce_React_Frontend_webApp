import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../assets/products/product1.jpg"; // men's shorts
import Image2 from "../assets/products/product2.jpg"; // xl t-shirts men
import Image3 from "../assets/products/product3.jpg"; // men shirts
import Image4 from "../assets/products/product4.webp"; // men shirts
import Image5 from "../assets/products/product5.webp"; // men blazer
import Image6 from "../assets/products/product6.webp"; // men 
import Image7 from "../assets/products/product7.webp"; // women dress
import Image8 from "../assets/products/product8.webp"; // women
import Image9 from "../assets/products/product9.webp"; // jents pant
import Image10 from "../assets/products/product10.webp"; // men jackets
import boys2 from "../assets/ProjectImage/T-ShirtsImages/Kids/Boyz/boys2.jpg";
import boys3 from "../assets/ProjectImage/Pants/KIDS/Boyz/boysPant.jpg";
import girls1 from "../assets/ProjectImage/Coats/Kids/girls/girlsBlezzer.jpg";

import { useDispatch } from "react-redux";
  import { addToCart } from "../redux/cartSlice";

function Collection() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(500);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showDetailsModal, setShowDetailsModal] = useState(false); // Modal visibility
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const products = {
    kids: {
      boys: [
        { name: "Boys T-shirt", price: 25, img: [boys2], size: "M", color: "orange", brand: "Nike", description: "Comfortable cotton t-shirt." },
        { name: "Boys pants", price: 40, img: [boys3], size: "L", color: "Blue", brand: "Adidas", description: "Stylish denim jeans for boys." },
      ],
      girls: [
        { name: "Girls Dress", price: 30, img: [Image1], size: "S", color: "Green", brand: "mulchand", description: "Elegant dress for girls." },
        { name: "Girls blezzer", price: 20, img: [girls1], size: "M", color: "blue", brand: "Nike", description: "Stylish top for girls." },
      ],
    },
    men: [
      { name: "Men blezzer", price: 35, img: [Image5], size: "L", color: "Blue", brand: "Nike", description: "A classic men’s shirt." },
      { name: "Men Pants", price: 50, img: [Image9], size: "XL", color: "Green", brand: "Adidas", description: "Comfortable pants for men." },
    ],
    women: [
      { name: "Women Dress", price: 45, img: [Image7], size: "M", color: "pink", brand: "Puma", description: "Stylish women’s dress." },
      { name: "Women t-shirts", price: 30, img: [Image8], size: "S", color: "Blue", brand: "Nike", description: "Fashionable top for women." },
    ],
  };

  const getFilteredProducts = () => {
    let list = [];

    if (category === "kids") {
      if (subcategory) list = products.kids[subcategory];
      else list = [...products.kids.boys, ...products.kids.girls];
    } else if (category) {
      list = products[category];
    } else {
      list = [
        ...products.kids.boys,
        ...products.kids.girls,
        ...products.men,
        ...products.women,
      ];
    }

    return list.filter((p) => {
      const sizeMatch = selectedSizes.length ? selectedSizes.includes(p.size) : true;
      const colorMatch = selectedColors.length ? selectedColors.includes(p.color) : true;
      const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
      const priceMatch = p.price <= priceRange;
      return sizeMatch && colorMatch && brandMatch && priceMatch;
    });
  };

  // // Add product to cart
  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  // Set selected product for details modal and show the modal
  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  // Close product details modal
  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedProduct(null);
  };

  // Toggle filter (add/remove selected filter)
  const toggleFilter = (value, setter, current) => {
    if (current.includes(value)) setter(current.filter((v) => v !== value));
    else setter([...current, value]);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setPriceRange(500);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      {/* Header and Breadcrumb */}
      <div className="bg-light border-bottom">
        <div className="container py-3">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb mb-0 flex-wrap">
              <li className="breadcrumb-item">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" onClick={() => { setCategory(""); setSubcategory(""); resetFilters(); navigate("/collection"); }}>
                  Collection
                </a>
              </li>
              {category && <li className="breadcrumb-item active">{category.charAt(0).toUpperCase() + category.slice(1)}</li>}
              {category === "kids" && subcategory && <li className="breadcrumb-item active">{subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</li>}
            </ol>
          </nav>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="container text-center my-3">
        <ul className="nav justify-content-center nav-pills flex-wrap">
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle ${category === "kids" ? "active" : ""}`} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" onClick={() => setCategory("kids")}>
              Kids
            </a>
            <ul className="dropdown-menu">
              <li><a className={`dropdown-item ${subcategory === "boys" ? "active" : ""}`} href="#" onClick={() => setSubcategory("boys")}>Boys</a></li>
              <li><a className={`dropdown-item ${subcategory === "girls" ? "active" : ""}`} href="#" onClick={() => setSubcategory("girls")}>Girls</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${category === "men" ? "active" : ""}`} href="#" onClick={() => setCategory("men")}>Men</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${category === "women" ? "active" : ""}`} href="#" onClick={() => setCategory("women")}>Women</a>
          </li>
        </ul>
      </div>

      {/* Products + Filters */}
      <main className="container-fluid my-4">
        <div className="row">
          {/* Sidebar Filters */}
          <aside className="col-10 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
            <button className="btn btn-outline-secondary w-100 mb-3 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#filterMenu">Filters</button>
            <div className="collapse d-md-block" id="filterMenu">
              <h5 className="fw-bold mb-3">Filter By</h5>
              {/* Size */}
              <div className="mb-4">
                <h6>Size</h6>
                {["S", "M", "L", "XL"].map((size) => (
                  <div className="form-check" key={size}>
                    <input className="form-check-input" type="checkbox" id={`size-${size}`} checked={selectedSizes.includes(size)} onChange={() => toggleFilter(size, setSelectedSizes, selectedSizes)} />
                    <label className="form-check-label" htmlFor={`size-${size}`}>{size}</label>
                  </div>
                ))}
              </div>
              {/* Color */}
              <div className="mb-4">
                <h6>Color</h6>
                {["pink", "Blue", "orange"].map((color) => (
                  <div className="form-check" key={color}>
                    <input className="form-check-input" type="checkbox" id={`color-${color}`} checked={selectedColors.includes(color)} onChange={() => toggleFilter(color, setSelectedColors, selectedColors)} />
                    <label className="form-check-label" htmlFor={`color-${color}`}>{color}</label>
                  </div>
                ))}
              </div>
              {/* Brand */}
              <div className="mb-4">
                <h6>Brand</h6>
                {["Nike", "Adidas", "Puma"].map((brand) => (
                  <div className="form-check" key={brand}>
                    <input className="form-check-input" type="checkbox" id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onChange={() => toggleFilter(brand, setSelectedBrands, selectedBrands)} />
                    <label className="form-check-label" htmlFor={`brand-${brand}`}>{brand}</label>
                  </div>
                ))}
              </div>
              {/* Price */}
              <div className="mb-4">
                <h6>Price Range</h6>
                <input type="range" className="form-range w-100" min="0" max="500" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
                <p className="small text-muted">Up to ${priceRange}</p>
              </div>
              {/* Reset Filters Button */}
              <button className="btn btn-danger w-100" onClick={resetFilters}>Reset Filters</button>
            </div>
          </aside>

          {/* Products grid */}
          <section className="col-12 col-md-9 col-lg-10 px-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div className="col" key={index}>
                    <div className="card h-100 text-center shadow-sm rounded-3">
                      <img src={product.img[0]} className="card-img-top img-fluid" alt={product.name} />
                      <div className="card-body">
                        <h6 className="card-title text-truncate">{product.name}</h6>
                        <p className="text-muted mb-0">${product.price}.00</p>
                      <button
                          className="btn btn-primary mt-2"
                          onClick={() => {
                            dispatch(addToCart(product));   
                            alert(`${product.name} added to cart!`); 
                          }}
                        >
                          Add to Cart
                        </button>
                        <button className="btn btn-info mt-2 ms-2" onClick={() => viewProductDetails(product)}>View Details</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No products match the selected filters.</p>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Product Details Modal with Zoom */}
      {showDetailsModal && selectedProduct && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }} aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={closeDetailsModal}></button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <img
                    src={selectedProduct.img[0]}
                    className="img-fluid"
                    alt={selectedProduct.name}
                    style={{ cursor: "zoom-in" }}
                    onClick={() => window.open(selectedProduct.img[0], "_blank")}  // Simple zoom effect
                  />
                </div>
                <p>{selectedProduct.description}</p>
                <p>Price: ${selectedProduct.price}.00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Collection;
