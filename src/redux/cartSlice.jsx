
import { createSlice } from "@reduxjs/toolkit";
import { generateCartId } from "../utils/cartId";  // Assuming this utility is available to generate unique cartId
import { setGuestCart } from "../utils/cart";
const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const calculateTotals = (products) => {
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = products.reduce((acc, item) => acc + item.totalPrice, 0);
  return { totalQuantity, totalPrice };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const cartId = generateCartId(newItem);
      const existingItem = state.products.find((item) => item.cartId === cartId);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          cartId,  // use stable cartId
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      const totals = calculateTotals(state.products);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;

      // After adding an item, sync immediately to localStorage and backend (if logged-in)
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      if (loggedUser) {
        // Update localStorage immediately after addition
        localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));

        // Sync to the backend (db.json) for logged-in users
        fetch(`http://localhost:3000/users/${loggedUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: state.products }),
        }).catch((err) => console.error("Failed to sync cart with backend:", err));
      } else {
        // For guest users, update guest cart in localStorage
        setGuestCart(state.products);
      }
    },

    removeFromCart(state, action) {
      const cartId = action.payload;
      const findItem = state.products.find((item) => item.cartId === cartId);

      if (findItem) {
        // Decrease total values accordingly
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;

        // Remove the item from the state
        state.products = state.products.filter((item) => item.cartId !== cartId);

        // Sync immediately after deletion to backend and localStorage
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        if (loggedUser) {
          // Update localStorage immediately after removal
          localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));

          // Sync the change to backend (update the user's cart in db.json)
          fetch(`http://localhost:3000/users/${loggedUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: state.products }),
          }).catch((err) => console.error("Failed to sync cart:", err));
        } else {
          // For guest users, update guest cart in localStorage
          setGuestCart(state.products);
        }
      }
    },

    increaseQuantity(state, action) {
      const cartId = action.payload;
      const item = state.products.find(p => p.cartId === cartId);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        const totals = calculateTotals(state.products);
        state.totalQuantity = totals.totalQuantity;
        state.totalPrice = totals.totalPrice;

        // Sync to localStorage and backend after increasing quantity
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        if (loggedUser) {
          localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));

          fetch(`http://localhost:3000/users/${loggedUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: state.products }),
          }).catch((err) => console.error("Failed to sync cart:", err));
        } else {
          setGuestCart(state.products);
        }
      }
    },

    decreaseQuantity(state, action) {
      const cartId = action.payload;
      const item = state.products.find(p => p.cartId === cartId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
        } else {
          state.products = state.products.filter(p => p.cartId !== cartId);
        }
        const totals = calculateTotals(state.products);
        state.totalQuantity = totals.totalQuantity;
        state.totalPrice = totals.totalPrice;

        // Sync to localStorage and backend after decreasing quantity
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        if (loggedUser) {
          localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));

          fetch(`http://localhost:3000/users/${loggedUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: state.products }),
          }).catch((err) => console.error("Failed to sync cart:", err));
        } else {
          setGuestCart(state.products);
        }
      }
    },

    setCartFromBackend(state, action) {
      const productsWithIds = action.payload.map(item => ({
        ...item,
        cartId: item.cartId || generateCartId(item)
      }));
      state.products = productsWithIds;
      const totals = calculateTotals(productsWithIds);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },

    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Sync to localStorage and backend after clearing cart
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      if (loggedUser) {
        localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));
        fetch(`http://localhost:3000/users/${loggedUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: state.products }),
        }).catch((err) => console.error("Failed to sync cart:", err));
      } else {
        setGuestCart(state.products);
      }
    },

    mergeCart(state, action) {
      const guestCart = action.payload;
      const merged = [...state.products];

      guestCart.forEach(gItem => {
        const cartId = generateCartId(gItem);
        const existing = merged.find(item => item.cartId === cartId);
        if (existing) {
          existing.quantity += gItem.quantity;
          existing.totalPrice += gItem.totalPrice;
        } else {
          merged.push({ ...gItem, cartId });
        }
      });

      state.products = merged;
      const totals = calculateTotals(merged);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;

      // Sync merged cart with localStorage and backend
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      if (loggedUser) {
        localStorage.setItem(`cart-${loggedUser.id}`, JSON.stringify(state.products));
        fetch(`http://localhost:3000/users/${loggedUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: state.products }),
        }).catch((err) => console.error("Failed to sync cart:", err));
      } else {
        setGuestCart(state.products);
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart, 
  setCartFromBackend, 
  mergeCart 
} = cartSlice.actions;

export default cartSlice.reducer;

