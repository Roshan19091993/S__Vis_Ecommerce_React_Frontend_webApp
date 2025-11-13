
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

// import React, { useContext, useEffect, useState, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { CategoryContext } from "../context/CategoryContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const COLORS = ["Red", "Blue", "Black", "White"];
// const SIZES = ["S", "M", "L", "XL"];

// function Collection() {
//   const {
//     category,
//     setCategory,
//     subcategory,
//     setSubcategory,
//     selectedBrands,
//     setSelectedBrands,
//     selectedColors,
//     setSelectedColors,
//     selectedSizes,
//     setSelectedSizes,
//     priceRange,
//     setPriceRange,
//   } = useContext(CategoryContext);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [maxPrice, setMaxPrice] = useState(500);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         const mappedProducts = response.data.map((p, index) => {
//           const color = COLORS[index % COLORS.length];
//           const size = SIZES[index % SIZES.length];

//           let mainCategory = "";
//           let subCat = "";

//           if (p.category.includes("men")) mainCategory = "Men";
//           else if (p.category.includes("women")) mainCategory = "Women";
//           else mainCategory = "Kids";

//           if (p.category.includes("casual")) subCat = "Casual";
//           else if (p.category.includes("formal")) subCat = "Formal";
//           else subCat = "Other";

//           return {
//             id: p.id,
//             name: p.title,
//             price: p.price,
//             img: [p.image],
//             category: mainCategory,
//             subcategory: subCat,
//             brand: p.category.split(" ")[0],
//             color,
//             size,
//           };
//         });

//         setProducts(mappedProducts);
//         setMaxPrice(Math.max(...mappedProducts.map((p) => p.price)));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const resetFilters = () => {
//     setCategory("");
//     setSubcategory("");
//     setSelectedBrands([]);
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setPriceRange(maxPrice);
//   };

//   const subcategories = useMemo(() => {
//     if (!category) return [];
//     return [...new Set(products.filter((p) => p.category === category).map((p) => p.subcategory))];
//   }, [products, category]);

//   const filteredProducts = useMemo(() => {
//     return products
//       .filter((p) => (category ? p.category === category : true))
//       .filter((p) => (subcategory ? p.subcategory === subcategory : true))
//       .filter((p) => (selectedSizes.length ? selectedSizes.includes(p.size) : true))
//       .filter((p) => (selectedColors.length ? selectedColors.includes(p.color) : true))
//       .filter((p) => (selectedBrands.length ? selectedBrands.includes(p.brand) : true))
//       .filter((p) => p.price <= priceRange);
//   }, [products, category, subcategory, selectedSizes, selectedColors, selectedBrands, priceRange]);

//   const toggleSelection = (array, setArray, value) => {
//     if (array.includes(value)) setArray(array.filter((v) => v !== value));
//     else setArray([...array, value]);
//   };

//   if (loading) return <p className="text-center my-5">Loading products...</p>;

//   return (
//     <>
//       {/* Main content below navbar */}
//       <main className="container-fluid mt-4">
//         <div className="row">
//           {/* Sidebar Filters */}
//           <aside className="col-12 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
//             <button className="btn btn-danger w-100 mb-3" onClick={resetFilters}>
//               Reset Filters
//             </button>

//             <h6>Category</h6>
//             <select
//               className="form-select mb-3"
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setSubcategory("");
//               }}
//             >
//               <option value="">All</option>
//               {[...new Set(products.map((p) => p.category))].map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>

//             {subcategories.length > 0 && (
//               <>
//                 <h6>Subcategory</h6>
//                 <select
//                   className="form-select mb-3"
//                   value={subcategory}
//                   onChange={(e) => setSubcategory(e.target.value)}
//                 >
//                   <option value="">All</option>
//                   {subcategories.map((sub) => (
//                     <option key={sub} value={sub}>
//                       {sub}
//                     </option>
//                   ))}
//                 </select>
//               </>
//             )}

//             <h6>Sizes</h6>
//             {SIZES.map((size) => (
//               <div className="form-check" key={size}>
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   checked={selectedSizes.includes(size)}
//                   onChange={() => toggleSelection(selectedSizes, setSelectedSizes, size)}
//                 />
//                 <label className="form-check-label">{size}</label>
//               </div>
//             ))}

//             <h6>Colors</h6>
//             {COLORS.map((color) => (
//               <div className="form-check" key={color}>
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   checked={selectedColors.includes(color)}
//                   onChange={() => toggleSelection(selectedColors, setSelectedColors, color)}
//                 />
//                 <label className="form-check-label">{color}</label>
//               </div>
//             ))}

//             <h6>Brands</h6>
//             {[...new Set(products.map((p) => p.brand))].map((brand) => (
//               <div className="form-check" key={brand}>
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   checked={selectedBrands.includes(brand)}
//                   onChange={() => toggleSelection(selectedBrands, setSelectedBrands, brand)}
//                 />
//                 <label className="form-check-label">{brand}</label>
//               </div>
//             ))}

//             <h6 className="mt-3">Max Price: ${priceRange}</h6>
//             <input
//               type="range"
//               className="form-range"
//               min="0"
//               max={Math.ceil(maxPrice / 10) * 10}
//               step="10"
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//             />
//           </aside>

//           {/* Products Grid */}
//           <section className="col-12 col-md-9 col-lg-10 px-4">
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <div className="col" key={product.id}>
//                     <div
//                       className="card h-100 text-center shadow-sm rounded-3"
//                       style={{ cursor: "pointer" }}
//                       onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
//                     >
//                       <img
//                         src={product.img[0]}
//                         alt={product.name}
//                         style={{
//                           width: "200px",
//                           height: "200px",
//                           objectFit: "cover",
//                           border: "1px solid #ddd",
//                           borderRadius: "4px",
//                           margin: "auto",
//                         }}
//                       />
//                       <div className="card-body">
//                         <h6 className="card-title text-truncate">{product.name}</h6>
//                         <p className="text-muted mb-0">${product.price}</p>
//                         <button
//                           className="btn btn-danger mt-2"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             dispatch(addToCart(product));
//                             toast.success(`🛒 ${product.name} added to cart!`, {
//                               position: "top-center",
//                             });
//                           }}
//                         >
//                           Add to Cart
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



// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import { CategoryContext } from "../context/CategoryContext";

// const subcategoryMap = {
//   men: {
//     formal: ["shirt", "t-shirt"],
//     casual: ["jeans", "t-shirt", "sneaker"],
//     winter: ["jacket", "sweater"],
//     summer: ["t-shirt", "shorts"],
//     wedding: ["shirt"],
//     festive: ["sweater"]
//   },
//   women: {
//     formal: ["dress", "blouse"],
//     casual: ["dress", "top", "jeans"],
//     winter: ["coat", "sweater"],
//     summer: ["dress", "top"],
//     wedding: ["dress"],
//     festive: ["top", "sweater"]
//   },
//   kids: {
//     boys: ["boys", "t-shirt", "shorts"],
//     girls: ["girls", "dress", "top"]
//   }
// };

// const Collection = () => {
//   const { category, subcategory } = useContext(CategoryContext);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const location = useLocation();

//   const fetchProducts = async (cat, subcat) => {
//     try {
//       setLoading(true);
//       setError("");
//       let res;

//       // Fetch products based on category
//       if (cat === "men") {
//         res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
//       } else if (cat === "women") {
//         res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
//       } else if (cat === "kids") {
//         const menRes = await axios.get("https://fakestoreapi.com/products/category/boys clothing");
//         const womenRes = await axios.get("https://fakestoreapi.com/products/category/girls clothing");
//         res = { data: [...menRes.data, ...womenRes.data] };
//       } else {
//         res = await axios.get("https://fakestoreapi.com/products");
//       }

//       let filteredProducts = res.data;

//       // Apply subcategory mapping filter
//       if (subcat && subcategoryMap[cat] && subcategoryMap[cat][subcat]) {
//         const keywords = subcategoryMap[cat][subcat];
//         filteredProducts = filteredProducts.filter(product =>
//           keywords.some(kw => product.title.toLowerCase().includes(kw) || product.description.toLowerCase().includes(kw))
//         );
//       }

//       // For kids, filter by boys/girls keywords
//       if (cat === "kids" && subcat) {
//         const keywords = subcategoryMap.kids[subcat];
//         filteredProducts = filteredProducts.filter(product =>
//           keywords.some(kw => product.title.toLowerCase().includes(kw) || product.description.toLowerCase().includes(kw))
//         );
//       }

//       setProducts(filteredProducts);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch products. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(category, subcategory);
//   }, [category, subcategory, location]);

//   if (loading) return <div className="text-center my-5">Loading products...</div>;
//   if (error) return <div className="text-center text-danger my-5">{error}</div>;
//   if (products.length === 0) return <div className="text-center my-5">No products found!</div>;

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-capitalize">{category} {subcategory && `- ${subcategory}`}</h2>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="card-img-top"
//                 style={{ height: "250px", objectFit: "contain" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text fw-bold">₹{product.price}</p>
//                 <button className="btn btn-danger mt-auto">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collection;


// import React, { useContext, useEffect, useState, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { CategoryContext } from "../context/CategoryContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const COLORS = ["Red", "Blue", "Black", "White", "Pink", "Purple", "Orange"];
// const SIZES = ["S", "M", "L", "XL"];

// const subcategoryMap = {
//   men: {
//     formal: ["shirt", "t-shirt"],
//     casual: ["jeans", "t-shirt", "sneaker"],
//     winter: ["jacket", "sweater"],
//     summer: ["t-shirt", "shorts"],
//     wedding: ["shirt"],
//     festive: ["sweater"]
//   },
//   women: {
//     formal: ["dress", "blouse"],
//     casual: ["dress", "top", "jeans"],
//     winter: ["coat", "sweater"],
//     summer: ["dress", "top"],
//     wedding: ["dress"],
//     festive: ["top", "sweater"]
//   },
//   kids: {
//     boys: ["boys", "t-shirt", "shorts"],
//     girls: ["girls", "dress", "top"]
//   }
// };

// const Collection = () => {
//   const {
//     category,
//     setCategory,
//     subcategory,
//     setSubcategory,
//     selectedBrands,
//     setSelectedBrands,
//     selectedColors,
//     setSelectedColors,
//     selectedSizes,
//     setSelectedSizes,
//     priceRange,
//     setPriceRange
//   } = useContext(CategoryContext);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [maxPrice, setMaxPrice] = useState(500);

//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const menRes = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
//         const womenRes = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
//         const boysRes = await axios.get("https://fakestoreapi.com/products/category/boys clothing");
//         const girlsRes = await axios.get("https://fakestoreapi.com/products/category/girls clothing");

//         const rawProducts = [...menRes.data, ...womenRes.data, ...boysRes.data, ...girlsRes.data];

//         const mappedProducts = rawProducts.map((p, index) => {
//           let mainCategory = "Kids";
//           if (p.category.includes("men")) mainCategory = "Men";
//           else if (p.category.includes("women")) mainCategory = "Women";

//           let subCat = "";
//           for (const key in subcategoryMap[mainCategory.toLowerCase()] || {}) {
//             const keywords = subcategoryMap[mainCategory.toLowerCase()][key];
//             if (keywords.some(k => p.title.toLowerCase().includes(k))) {
//               subCat = key;
//               break;
//             }
//           }

//           return {
//             id: p.id,
//             name: p.title,
//             price: p.price,
//             img: [p.image],
//             category: mainCategory,
//             subcategory: subCat,
//             brand: p.category.split(" ")[0],
//             color: COLORS[index % COLORS.length],
//             size: SIZES[index % SIZES.length]
//           };
//         });

//         setProducts(mappedProducts);
//         setMaxPrice(Math.max(...mappedProducts.map(p => p.price)));
//         setPriceRange(Math.max(...mappedProducts.map(p => p.price)));
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Reset filters
//   const resetFilters = () => {
//     setCategory("");
//     setSubcategory("");
//     setSelectedBrands([]);
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setPriceRange(maxPrice);
//   };

//   // Subcategories for selected category
//   const subcategories = useMemo(() => {
//     if (!category) return [];
//     return [...new Set(products.filter(p => p.category === category).map(p => p.subcategory))];
//   }, [products, category]);

//   // Filtered products
//   const filteredProducts = useMemo(() => {
//     return products
//       .filter(p => (category ? p.category === category : true))
//       .filter(p => (subcategory ? p.subcategory === subcategory : true))
//       .filter(p => (selectedSizes.length ? selectedSizes.includes(p.size) : true))
//       .filter(p => (selectedColors.length ? selectedColors.includes(p.color) : true))
//       .filter(p => (selectedBrands.length ? selectedBrands.includes(p.brand) : true))
//       .filter(p => p.price <= priceRange);
//   }, [products, category, subcategory, selectedSizes, selectedColors, selectedBrands, priceRange]);

//   const toggleSelection = (array, setArray, value) => {
//     if (array.includes(value)) setArray(array.filter(v => v !== value));
//     else setArray([...array, value]);
//   };

//   if (loading) return <p className="text-center my-5">Loading products...</p>;

//   return (
//     <main className="container-fluid my-4">
//       <div className="row">
//         {/* Sidebar Filters */}
//         <aside className="col-12 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
//           <button className="btn btn-danger w-100 mb-3" onClick={resetFilters}>
//             Reset Filters
//           </button>

//           <h6>Category</h6>
//           <select
//             className="form-select mb-3"
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               setSubcategory("");
//             }}
//           >
//             <option value="">All</option>
//             {[...new Set(products.map(p => p.category))].map(cat => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>

//           {subcategories.length > 0 && (
//             <>
//               <h6>Subcategory</h6>
//               <select
//                 className="form-select mb-3"
//                 value={subcategory}
//                 onChange={(e) => setSubcategory(e.target.value)}
//               >
//                 <option value="">All</option>
//                 {subcategories.map(sub => (
//                   <option key={sub} value={sub}>{sub}</option>
//                 ))}
//               </select>
//             </>
//           )}

//           <h6>Sizes</h6>
//           {SIZES.map(size => (
//             <div className="form-check" key={size}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedSizes.includes(size)}
//                 onChange={() => toggleSelection(selectedSizes, setSelectedSizes, size)}
//               />
//               <label className="form-check-label">{size}</label>
//             </div>
//           ))}

//           <h6>Colors</h6>
//           {COLORS.map(color => (
//             <div className="form-check" key={color}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedColors.includes(color)}
//                 onChange={() => toggleSelection(selectedColors, setSelectedColors, color)}
//               />
//               <label className="form-check-label">{color}</label>
//             </div>
//           ))}

//           <h6>Brands</h6>
//           {[...new Set(products.map(p => p.brand))].map(brand => (
//             <div className="form-check" key={brand}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedBrands.includes(brand)}
//                 onChange={() => toggleSelection(selectedBrands, setSelectedBrands, brand)}
//               />
//               <label className="form-check-label">{brand}</label>
//             </div>
//           ))}

//           <h6 className="mt-3">Max Price: ${priceRange}</h6>
//           <input
//             type="range"
//             className="form-range"
//             min="0"
//             max={Math.ceil(maxPrice / 10) * 10}
//             step="10"
//             value={priceRange}
//             onChange={(e) => setPriceRange(Number(e.target.value))}
//           />
//         </aside>

//         {/* Products Grid */}
//         <section className="col-12 col-md-9 col-lg-10 px-4">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map(product => (
//                 <div className="col" key={product.id}>
//                   <div
//                     className="card h-100 text-center shadow-sm rounded-3"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
//                   >
//                     <img
//                       src={product.img[0]}
//                       alt={product.name}
//                       style={{
//                         width: "200px",
//                         height: "200px",
//                         objectFit: "cover",
//                         border: "1px solid #ddd",
//                         borderRadius: "4px",
//                         margin: "auto"
//                       }}
//                     />
//                     <div className="card-body">
//                       <h6 className="card-title text-truncate">{product.name}</h6>
//                       <p className="text-muted mb-0">₹{product.price}</p>
//                       <button
//                         className="btn btn-danger mt-2"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           dispatch(addToCart(product));
//                           toast.success(`🛒 ${product.name} added to cart!`, { position: "top-center" });
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-muted">No products match the selected filters.</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Collection;


// import React, { useContext, useEffect, useState, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { CategoryContext } from "../context/CategoryContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const COLORS = ["Red", "Blue", "Black", "White", "Pink", "Purple", "Orange"];
// const SIZES = ["S", "M", "L", "XL"];

// function Collection() {
//   const {
//     category,
//     setCategory,
//     subcategory,
//     setSubcategory,
//     selectedBrands,
//     setSelectedBrands,
//     selectedColors,
//     setSelectedColors,
//     selectedSizes,
//     setSelectedSizes,
//     priceRange,
//     setPriceRange,
//   } = useContext(CategoryContext);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [maxPrice, setMaxPrice] = useState(500);

//   // Map kids products and assign categories/subcategories
//   const mapKidsProducts = (products) => {
//     return products.map((p, index) => {
//       let mainCategory = "";
//       let subCat = "";

//       // Simulate categories
//       if (p.category === "men's clothing" && index % 5 === 0) {
//         mainCategory = "Kids";
//         subCat = "Boys";
//       } else if (p.category === "women's clothing" && index % 5 === 0) {
//         mainCategory = "Kids";
//         subCat = "Girls";
//       } else if (p.category.includes("men")) {
//         mainCategory = "Men";
//         subCat = "Casual";
//       } else if (p.category.includes("women")) {
//         mainCategory = "Women";
//         subCat = "Formal";
//       } else {
//         mainCategory = "Men";
//         subCat = "Other";
//       }

//       return {
//         id: p.id,
//         name: p.title,
//         price: p.price,
//         img: [p.image],
//         category: mainCategory,
//         subcategory: subCat,
//         brand: p.category.split(" ")[0],
//         color: COLORS[index % COLORS.length],
//         size: SIZES[index % SIZES.length],
//       };
//     });
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const menRes = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
//         const womenRes = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
//         const allProducts = [...menRes.data, ...womenRes.data];

//         const mappedProducts = mapKidsProducts(allProducts);
//         setProducts(mappedProducts);
//         setMaxPrice(Math.max(...mappedProducts.map((p) => p.price)));
//         setPriceRange(Math.max(...mappedProducts.map((p) => p.price)));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const resetFilters = () => {
//     setCategory("");
//     setSubcategory("");
//     setSelectedBrands([]);
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setPriceRange(maxPrice);
//   };

//   const subcategories = useMemo(() => {
//     if (!category) return [];
//     return [...new Set(products.filter((p) => p.category === category).map((p) => p.subcategory))];
//   }, [products, category]);

//   const filteredProducts = useMemo(() => {
//     return products
//       .filter((p) => (category ? p.category === category : true))
//       .filter((p) => (subcategory ? p.subcategory === subcategory : true))
//       .filter((p) => (selectedSizes.length ? selectedSizes.includes(p.size) : true))
//       .filter((p) => (selectedColors.length ? selectedColors.includes(p.color) : true))
//       .filter((p) => (selectedBrands.length ? selectedBrands.includes(p.brand) : true))
//       .filter((p) => p.price <= priceRange);
//   }, [products, category, subcategory, selectedSizes, selectedColors, selectedBrands, priceRange]);

//   const toggleSelection = (array, setArray, value) => {
//     if (array.includes(value)) setArray(array.filter((v) => v !== value));
//     else setArray([...array, value]);
//   };

//   if (loading) return <p className="text-center my-5">Loading products...</p>;

//   return (
//     <main className="container-fluid mt-4">
//       <div className="row">
//         {/* Sidebar Filters */}
//         <aside className="col-12 col-md-3 col-lg-2 border-end mb-3 mb-md-0 p-3">
//           <button className="btn btn-danger w-100 mb-3" onClick={resetFilters}>
//             Reset Filters
//           </button>

//           <h6>Category</h6>
//           <select
//             className="form-select mb-3"
//             value={category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               setSubcategory("");
//             }}
//           >
//             <option value="">All</option>
//             {[...new Set(products.map((p) => p.category))].map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           {subcategories.length > 0 && (
//             <>
//               <h6>Subcategory</h6>
//               <select
//                 className="form-select mb-3"
//                 value={subcategory}
//                 onChange={(e) => setSubcategory(e.target.value)}
//               >
//                 <option value="">All</option>
//                 {subcategories.map((sub) => (
//                   <option key={sub} value={sub}>
//                     {sub}
//                   </option>
//                 ))}
//               </select>
//             </>
//           )}

//           <h6>Sizes</h6>
//           {SIZES.map((size) => (
//             <div className="form-check" key={size}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedSizes.includes(size)}
//                 onChange={() => toggleSelection(selectedSizes, setSelectedSizes, size)}
//               />
//               <label className="form-check-label">{size}</label>
//             </div>
//           ))}

//           <h6>Colors</h6>
//           {COLORS.map((color) => (
//             <div className="form-check" key={color}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedColors.includes(color)}
//                 onChange={() => toggleSelection(selectedColors, setSelectedColors, color)}
//               />
//               <label className="form-check-label">{color}</label>
//             </div>
//           ))}

//           <h6>Brands</h6>
//           {[...new Set(products.map((p) => p.brand))].map((brand) => (
//             <div className="form-check" key={brand}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 checked={selectedBrands.includes(brand)}
//                 onChange={() => toggleSelection(selectedBrands, setSelectedBrands, brand)}
//               />
//               <label className="form-check-label">{brand}</label>
//             </div>
//           ))}

//           <h6 className="mt-3">Max Price: ${priceRange}</h6>
//           <input
//             type="range"
//             className="form-range"
//             min="0"
//             max={Math.ceil(maxPrice / 10) * 10}
//             step="10"
//             value={priceRange}
//             onChange={(e) => setPriceRange(Number(e.target.value))}
//           />
//         </aside>

//         {/* Products Grid */}
//         <section className="col-12 col-md-9 col-lg-10 px-4">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <div className="col" key={product.id}>
//                   <div
//                     className="card h-100 text-center shadow-sm rounded-3"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
//                   >
//                     <img
//                       src={product.img[0]}
//                       alt={product.name}
//                       style={{
//                         width: "200px",
//                         height: "200px",
//                         objectFit: "cover",
//                         border: "1px solid #ddd",
//                         borderRadius: "4px",
//                         margin: "auto",
//                       }}
//                     />
//                     <div className="card-body">
//                       <h6 className="card-title text-truncate">{product.name}</h6>
//                       <p className="text-muted mb-0">${product.price}</p>
//                       <button
//                         className="btn btn-danger mt-2"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           dispatch(addToCart(product));
//                           toast.success(`🛒 ${product.name} added to cart!`, {
//                             position: "top-center",
//                           });
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-muted">No products match the selected filters.</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default Collection;
