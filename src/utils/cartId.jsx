// utils/cartId.js
export const generateCartId = (product) => {
  // Use product id + size + color to generate a stable cartId
  return `${product.id}-${product.size || 'NA'}-${product.color || 'NA'}`;
};
