
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import productReducer from "./productSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
  },
});

export default store;
















// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// import productSlice from "./productSlice";


// const store = configureStore({
//     producer:{
//         cart:cartSlice,
//         product:productSlice
//     }
// })
// export default store;

// src/redux/store.jsx
