
export const getGuestCart = () => {
  try {
    return JSON.parse(localStorage.getItem("guestCart")) || [];
  } catch {
    console.error("Failed to parse guestCart from localStorage");
    return [];
  }
};

export const setGuestCart = (cart) => {
  localStorage.setItem("guestCart", JSON.stringify(cart));
};

export const clearGuestCart = () => {
  localStorage.removeItem("guestCart");
};


// // utils/cart.js

// export const setGuestCart = (cart) => {
//   // Save the cart to localStorage for guest users
//   localStorage.setItem("guest-cart", JSON.stringify(cart));
// };

// export const getGuestCart = () => {
//   // Retrieve the guest cart from localStorage
//   return JSON.parse(localStorage.getItem("guest-cart")) || [];
// };

// export const clearGuestCart = () => {
//   // Clear the guest cart from localStorage
//   localStorage.removeItem("guest-cart");
// };

