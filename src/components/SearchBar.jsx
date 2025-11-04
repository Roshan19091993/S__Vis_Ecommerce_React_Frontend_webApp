// src/components/SearchBar.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/productSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = useSelector((state) => state.product.filteredData);

  // Handle typing (live search)
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  // Handle pressing Enter or clicking search icon
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSearchTerm(search));
      navigate("/filter-data"); // optional — goes to a filtered results page
    }
  };

  
  const handleSelectProduct = (product) => {
    setSearch(""); 
    dispatch(setSearchTerm("")); 
    navigate(`/product/${product.id}`); 
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            className="form-control border-end-0 rounded-start-pill ps-3 py-2"
            value={search}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-outline-secondary rounded-end-pill"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {/* === Suggestions Dropdown === */}
      {search && filteredData.length > 0 && (
        <ul
          className="list-group position-absolute bg-white border border-1 rounded mt-1"
          style={{
            width: "100%",
            top: "100%",
            left: 0,
            zIndex: 10,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredData.map((product) => (
            <li
              key={product.id}
              className="list-group-item d-flex align-items-center gap-2 py-2"
              style={{
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onClick={() => handleSelectProduct(product)}
              onMouseDown={(e) => e.preventDefault()} // prevent input blur before click
            >
              {/* optional: show product image */}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "35px", height: "35px", objectFit: "cover", borderRadius: "4px" }}
                />
              )}
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Optional: No results message */}
      {search && filteredData.length === 0 && (
        <div
          className="position-absolute bg-white border rounded mt-1 px-3 py-2 text-muted small"
          style={{
            width: "100%",
            top: "100%",
            left: 0,
            zIndex: 10,
          }}
        >
          No products found
        </div>
      )}
    </div>
  );
};

export default SearchBar;



