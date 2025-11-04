import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0, // total number of items in cart
  totalPrice: 0,    // total cost of cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalQuantity += 1; 
      state.totalPrice += newItem.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity; // ✅ subtract total quantity of this item
        state.products = state.products.filter(item => item.id !== id);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);

      if (findItem) {
        findItem.quantity += 1;
        findItem.totalPrice += findItem.price;
        state.totalQuantity += 1; // ✅ increase global total
        state.totalPrice += findItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);

      if (findItem) {
        if (findItem.quantity > 1) {
          findItem.quantity -= 1;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity -= 1; // ✅ FIXED: update totalQuantity here
          state.totalPrice -= findItem.price;
        } else {
          // Optional: remove item if quantity becomes 0
          state.products = state.products.filter(item => item.id !== id);
          state.totalQuantity -= 1;
          state.totalPrice -= findItem.price;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
