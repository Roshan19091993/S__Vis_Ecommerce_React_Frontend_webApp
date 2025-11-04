import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();

  // Try to load from localStorage if order prop is missing
  const savedOrder = localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order"))
    : null;

  const currentOrder = order || savedOrder;

  // If still no order, redirect user back to checkout
  if (!currentOrder) {
    navigate('/checkout');
    return null;
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold">Thank You For Your Order!</h2>
          <p className="text-muted">
            Your order has been placed successfully. You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-primary mb-3">Order Summary</h4>
          <p><strong>Order Number:</strong> {currentOrder.orderNumber}</p>
          <p><strong>Total Price:</strong> ${currentOrder.totalPrice?.toFixed(2)}</p>
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-secondary">Shipping Information</h5>
          <ul className="list-unstyled">
            <li><strong>Address:</strong> {currentOrder.shippingInformation?.address}</li>
            <li><strong>City:</strong> {currentOrder.shippingInformation?.city}</li>
            <li><strong>Pin Code:</strong> {currentOrder.shippingInformation?.pincode}</li>
          </ul>
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-secondary">Products Ordered</h5>
          <ul className="list-group">
            {currentOrder.products && currentOrder.products.length > 0 ? (
              currentOrder.products.map((product, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{product.name}</strong>
                    <p className="mb-0 text-muted">
                      {product.quantity} × ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="fw-bold">${(product.price * product.quantity).toFixed(2)}</span>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center text-muted">No products found.</li>
            )}
          </ul>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-outline-primary" onClick={() => navigate('/order-tracking')}>
            Track Order
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
