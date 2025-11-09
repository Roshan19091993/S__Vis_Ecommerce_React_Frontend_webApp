


import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { CategoryContext } from "../context/CategoryContext";
import { useNavigate } from "react-router-dom";
import { mockData } from "../assets/assets";

function Collection() {
  const {
    category,
    setCategory,
    subcategory,
    setSubcategory,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors,
    selectedSizes,
    setSelectedSizes,
    priceRange,
    setPriceRange,
  } = useContext(CategoryContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Reset all filters
  const resetFilters = () => {
    setCategory("");
    setSubcategory("");
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange(500);
  };

  // Get unique subcategories dynamically for the selected category
  const getSubcategories = () => {
    if (!category) return [];
    const subs = mockData
      .filter((p) => p.category === category && p.subcategory)
      .map((p) => p.subcategory);
    return [...new Set(subs)];
  };

  // Filter products
  const getFilteredProducts = () => {
    let list = [...mockData];

    if (category) {
      list = list.filter((p) => p.category === category);
      if (subcategory) {
        list = list.filter((p) => p.subcategory === subcategory);
      }
    }

    return list.filter((p) => {
      const sizeMatch = selectedSizes.length ? selectedSizes.includes(p.size) : true;
      const colorMatch = selectedColors.length ? selectedColors.includes(p.color) : true;
      const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
      const priceMatch = p.price <= priceRange;
      return sizeMatch && colorMatch && brandMatch && priceMatch;
    });
  };

  const filteredProducts = getFilteredProducts();

  // Helper function for checkbox toggles
  const toggleSelection = (array, setArray, value) => {
    if (array.includes(value)) {
      setArray(array.filter((v) => v !== value));
    } else {
      setArray([...array, value]);
    }
  };

  return (
    <main className="container-fluid my-4">
      <div className="row">
        {/* Sidebar filters */}
        <aside className="col-10 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
          <button className="btn btn-danger w-100 mb-3" onClick={resetFilters}>
            Reset Filters
          </button>

          <h6>Category</h6>
          <select
            className="form-select mb-3"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory(""); // reset subcategory on category change
            }}
          >
            <option value="">All</option>
            {[...new Set(mockData.map((p) => p.category))].map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          {/* Dynamic Subcategory */}
          {getSubcategories().length > 0 && (
            <>
              <h6>Subcategory</h6>
              <select
                className="form-select mb-3"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option value="">All</option>
                {getSubcategories().map((sub) => (
                  <option key={sub} value={sub}>
                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Sizes */}
          <h6>Sizes</h6>
          {["S", "M", "L", "XL"].map((size) => (
            <div className="form-check" key={size}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedSizes.includes(size)}
                onChange={() => toggleSelection(selectedSizes, setSelectedSizes, size)}
              />
              <label className="form-check-label">{size}</label>
            </div>
          ))}

          {/* Colors */}
          <h6>Colors</h6>
          {["Red", "Blue", "Black", "White","pink","purple","Orange"].map((color) => (
            <div className="form-check" key={color}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedColors.includes(color)}
                onChange={() => toggleSelection(selectedColors, setSelectedColors, color)}
              />
              <label className="form-check-label">{color}</label>
            </div>
          ))}

          {/* Brands */}
          <h6>Brands</h6>
          {[...new Set(mockData.map((p) => p.brand))].map((brand) => (
            <div className="form-check" key={brand}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleSelection(selectedBrands, setSelectedBrands, brand)}
              />
              <label className="form-check-label">{brand}</label>
            </div>
          ))}

          <h6 className="mt-3">Max Price: ${priceRange}</h6>
          <input
            type="range"
            className="form-range"
            min="0"
            max="500"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
        </aside>

        {/* Products grid */}
        <section className="col-12 col-md-9 col-lg-10 px-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div className="col" key={product.id || index}>
                  <div
                    className="card h-100 text-center shadow-sm rounded-3"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/product/${product.id || index}`, {
                        state: { product, selectedImage: 0 },
                      })
                    }
                  >
                    <div className="card-img-top img-fluid">
                      {product.img && product.img.length > 0 ? (
                        <img
                          src={product.img[0]}
                          alt={product.name}
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        />
                      ) : (
                        <img src="/images/default.jpg" alt={product.name} />
                      )}
                    </div>

                    <div className="card-body">
                      <h6 className="card-title text-truncate">{product.name}</h6>
                      <p className="text-muted mb-0">${product.price}.00</p>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addToCart(product));
                          toast.success(`🛒 ${product.name} added to cart!`, {
                            position: "top-center",
                          });
                        }}
                      >
                        Add to Cart
                      </button>
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
  );
}

export default Collection;
