// import { createSlice } from "@reduxjs/toolkit";


// const initialState= {
//   products: [],
//   searchTerm: '',
//   filteredData:[]
// }

// const productSlice= createSlice({
//     name:"product",
//     initialState,

   
//     reducers:{
//       setProducts:(state,action)=>{
//         state.products= action.payload;
//       },
//       setSearchTerm(state, action){
//         state.searchTerm = action.payload;
//         state.filteredData = state.products.filter(product=>
//           product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
//         )
//       }
//     },
// })

// export const {setProducts, setSearchTerm}=productSlice.actions;
// export default productSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredData: [],
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredData = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((p) =>
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
