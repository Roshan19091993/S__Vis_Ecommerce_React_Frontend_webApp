


// import React, { createContext, useState } from "react";


// export const CategoryContext = createContext();

// export const CategoryProvider = ({ children }) => {
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//     const [address,setAddress]=useState("");
//       const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [priceRange, setPriceRange] = useState(500);

//   return (
//     <CategoryContext.Provider
//       value={{ category, setCategory, subcategory, address,setAddress,setSubcategory,
//         selectedSizes,setSelectedSizes,selectedColors,setSelectedColors,selectedBrands,setSelectedBrands,priceRange,setPriceRange}}
//     >
//       {children}
//     </CategoryContext.Provider>
//   );
// };


import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(500); // max price
      const [address,setAddress]=useState("");

  return (
    <CategoryContext.Provider
      value={{
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
        address,setAddress
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
