import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { CategoryContext } from "../context/CategoryContext";
import { useNavigate } from "react-router-dom";
import { mockData1, mockData } from "../assets/assets";

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
    setPriceRange(500); // max price
  };

  // Get filtered products
  const getFilteredProducts = () => {
    let list = [];

    if (category === "kids") {
      list = subcategory
        ? mockData1[0].kids[subcategory] || []
        : [...mockData1[0].kids.boys, ...mockData1[0].kids.girls];
    } else if (category === "men") {
      list = mockData1[0].men || [];
    } else if (category === "women") {
      list = mockData1[0].women || [];
    } else {
      // All products
    list = [
  ...(mockData1[0]?.kids?.boys || []),
  ...(mockData1[0]?.kids?.girls || []),
  ...(mockData1[0]?.men || []),
  ...(mockData1[0]?.women || []),
  ...(mockData[0]?.kids?.boys || []),
  ...(mockData[0]?.kids?.girls || []),
  ...(mockData[0]?.men || []),
  ...(mockData[0]?.women || []),
].filter(Boolean); // removes undefined

    }

    // Apply filters
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
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="kids">Kids</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>

          {category === "kids" && (
            <>
              <h6>Subcategory</h6>
              <select
                className="form-select mb-3"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
              </select>
            </>
          )}

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

          <h6>Colors</h6>
          {["Red", "Blue", "Green", "Black", "White"].map((color) => (
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

          <h6>Brands</h6>
          {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
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
                  <div className="card h-100 text-center shadow-sm rounded-3">
                    <div className="card-img-top img-fluid">
                      {product.img && product.img.length > 0 ? (
                        <div className="d-flex gap-1 flex-wrap justify-content-center">
                          {product.img.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`${product.name} ${idx + 1}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "cover",
                                cursor: "pointer",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                              }}
                              onClick={() =>
                                navigate(`/product/${product.id || index}`, {
                                  state: { product, selectedImage: idx },
                                })
                              }
                            />
                          ))}
                        </div>
                      ) : (
                        <img src="/images/default.jpg" alt={product.name} />
                      )}
                    </div>

                    <div className="card-body">
                      <h6 className="card-title text-truncate">{product.name}</h6>
                      <p className="text-muted mb-0">${product.price}.00</p>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => {
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
