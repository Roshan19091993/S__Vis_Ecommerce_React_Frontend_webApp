


import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { mockData } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Load and flatten mock data once
  useEffect(() => {
    const flattenData = [];

    mockData.forEach((item) => {
      if (item.name) flattenData.push(item);
      if (item.men) flattenData.push(...item.men);
      if (item.women) flattenData.push(...item.women);
      if (item.kids) flattenData.push(...item.kids.boys, ...item.kids.girls);
    });

    dispatch(setProducts(flattenData));
  }, [dispatch]);

  const products = useSelector((state) => state.product.products || []);

  // ✅ Memoize filteredData to prevent unnecessary rerenders
  const filteredData = React.useMemo(() => {
    if (!search) return [];
    return products.filter((product) =>
      product?.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const handleSelectProduct = (product) => {
    setSearch(""); // clear search
    navigate(`/product/${product.id}`); // open product page
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate("/filter-data");
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for products..."
            className="form-control border-end-0 rounded-start-pill ps-3 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="btn btn-outline-light rounded-end-pill"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {search && filteredData.length > 0 && (
        <ul
          className="list-group position-absolute bg-white border mt-1 shadow-sm"
          style={{
            width: "100%",
            top: "100%",
            left: 0,
            zIndex: 10,
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {filteredData.map((product) => (
            <li
              key={product.id}
              className="list-group-item d-flex align-items-center gap-2 py-2"
              style={{ cursor: "pointer" }}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelectProduct(product)}
            >
              <img
                src={product.image || product.images?.[0]}
                alt={product.name}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}

      {search && filteredData.length === 0 && (
        <div
          className="position-absolute bg-white border rounded mt-1 px-3 py-2 text-muted small shadow-sm"
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
