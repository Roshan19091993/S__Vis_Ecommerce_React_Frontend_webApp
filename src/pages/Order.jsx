



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Order = ({ order }) => {
//   const navigate = useNavigate();
//   const [currentOrder, setCurrentOrder] = useState(order || null);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem('order')
//       ? JSON.parse(localStorage.getItem('order'))
//       : null;

//     if (!order && !savedOrder) {
//       navigate('/checkout');
//     } else {
//       const finalOrder = order || savedOrder;
//       setCurrentOrder(finalOrder);

//       // Save order to logged-in user's orders
//       const loggedUser = localStorage.getItem('loggedUser')
//         ? JSON.parse(localStorage.getItem('loggedUser'))
//         : null;

//       if (loggedUser) {
//         // Fetch latest user data from db.json
//         fetch(`http://localhost:3000/users?email=${loggedUser.email}`)
//           .then((res) => res.json())
//           .then(async (users) => {
//             if (users.length > 0) {
//               const user = users[0];
//               const updatedOrders = user.orders ? [...user.orders, finalOrder] : [finalOrder];

//               const updatedUser = { ...user, orders: updatedOrders };

//               await fetch(`http://localhost:3000/users/${user.id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedUser),
//               });

//               // Update localStorage too
//               localStorage.setItem('loggedUser', JSON.stringify(updatedUser));
//             }
//           })
//           .catch((err) => console.error('Failed to save order:', err));
//       }

//       // Optionally clear order from localStorage after saving
//       localStorage.removeItem('order');
//     }
//   }, [order, navigate]);

//   if (!currentOrder) return null;

//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg p-4">
//         <div className="text-center mb-4">
//           <h2 className="text-success fw-bold">Thank You For Your Order!</h2>
//           <p className="text-muted">
//             Your order has been placed successfully. You will receive an email confirmation shortly.
//           </p>
//         </div>

//         <div className="mb-4">
//           <h4 className="text-primary mb-3">Order Summary</h4>
//           <p><strong>Order Number:</strong> {currentOrder.orderNumber}</p>
//           <p><strong>Total Price:</strong> ${currentOrder.totalPrice?.toFixed(2)}</p>
//         </div>

//         <hr />

//         {/* Billing Information */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Billing Information</h5>
//           <ul className="list-unstyled">
//             <li><strong>Name:</strong> {currentOrder.billingInformation?.name}</li>
//             <li><strong>Email:</strong> {currentOrder.billingInformation?.email}</li>
//             <li><strong>Phone:</strong> {currentOrder.billingInformation?.phone}</li>
//           </ul>
//         </div>

//         <hr />

//         {/* Shipping Information */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Shipping Information</h5>
//           <ul className="list-unstyled">
//             <li><strong>City:</strong> {currentOrder.shippingInformation?.city}</li>
//             <li><strong>State:</strong> {currentOrder.shippingInformation?.state}</li>
//             <li><strong>Pin Code:</strong> {currentOrder.shippingInformation?.pincode}</li>
//           </ul>
//         </div>

//         <hr />

//         {/* Products Ordered */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Products Ordered</h5>
//           <ul className="list-group">
//             {currentOrder.products && currentOrder.products.length > 0 ? (
//               currentOrder.products.map((product, index) => (
//                 <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                   <div>
//                     <strong>{product.name}</strong>
//                     <p className="mb-0 text-muted">{product.quantity} × ${product.price.toFixed(2)}</p>
//                   </div>
//                   <span className="fw-bold">${(product.price * product.quantity).toFixed(2)}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="list-group-item text-center text-muted">No products found.</li>
//             )}
//           </ul>
//         </div>

//         <div className="d-flex justify-content-center gap-3 mt-4">
//           <button className="btn btn-primary" onClick={() => navigate('/collection')}>
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Order = ({ order }) => {
//   const navigate = useNavigate();
//   const [currentOrder, setCurrentOrder] = useState(order || null);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem('order')
//       ? JSON.parse(localStorage.getItem('order'))
//       : null;

//     // If no order exists, redirect to checkout page
//     if (!order && !savedOrder) {
//       navigate('/checkout');
//     } else {
//       // Use passed order or savedOrder
//       const finalOrder = order || savedOrder;
//       setCurrentOrder(finalOrder);

//       // Save the order to logged-in user's orders
//       const loggedUser = localStorage.getItem('loggedUser')
//         ? JSON.parse(localStorage.getItem('loggedUser'))
//         : null;

//       if (loggedUser) {
//         // Fetch latest user data from backend (only if logged in)
//         fetch(`http://localhost:3000/users?email=${loggedUser.email}`)
//           .then((res) => res.json())
//           .then(async (users) => {
//             if (users.length > 0) {
//               const user = users[0];
//               const updatedOrders = user.orders ? [...user.orders, finalOrder] : [finalOrder];

//               const updatedUser = { ...user, orders: updatedOrders };

//               // Update user orders in backend DB
//               await fetch(`http://localhost:3000/users/${user.id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedUser),
//               });

//               // Update localStorage too with updated user data
//               localStorage.setItem('loggedUser', JSON.stringify(updatedUser));
//             }
//           })
//           .catch((err) => console.error('Failed to save order:', err));
//       }

//       // Optionally clear the order from localStorage after saving
//       localStorage.removeItem('order');
//     }
//   }, [order, navigate]);

//   // If no order exists (after useEffect or initial load)
//   if (!currentOrder) return null;

//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg p-4">
//         <div className="text-center mb-4">
//           <h2 className="text-success fw-bold">Thank You For Your Order!</h2>
//           <p className="text-muted">
//             Your order has been placed successfully. You will receive an email confirmation shortly.
//           </p>
//         </div>

//         <div className="mb-4">
//           <h4 className="text-primary mb-3">Order Summary</h4>
//           <p><strong>Order Number:</strong> {currentOrder.orderNumber}</p>
//           <p><strong>Total Price:</strong> ${currentOrder.totalPrice?.toFixed(2)}</p>
//         </div>

//         <hr />

//         {/* Billing Information */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Billing Information</h5>
//           <ul className="list-unstyled">
//             <li><strong>Name:</strong> {currentOrder.billingInformation?.name}</li>
//             <li><strong>Email:</strong> {currentOrder.billingInformation?.email}</li>
//             <li><strong>Phone:</strong> {currentOrder.billingInformation?.phone}</li>
//           </ul>
//         </div>

//         <hr />

//         {/* Shipping Information */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Shipping Information</h5>
//           <ul className="list-unstyled">
//             <li><strong>City:</strong> {currentOrder.shippingInformation?.city}</li>
//             <li><strong>State:</strong> {currentOrder.shippingInformation?.state}</li>
//             <li><strong>Pin Code:</strong> {currentOrder.shippingInformation?.pincode}</li>
//           </ul>
//         </div>

//         <hr />

//         {/* Products Ordered */}
//         <div className="mb-4">
//           <h5 className="text-secondary">Products Ordered</h5>
//           <ul className="list-group">
//             {currentOrder.products && currentOrder.products.length > 0 ? (
//               currentOrder.products.map((product, index) => (
//                 <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                   <div>
//                     <strong>{product.name}</strong>
//                     <p className="mb-0 text-muted">{product.quantity} × ${product.price.toFixed(2)}</p>
//                   </div>
//                   <span className="fw-bold">${(product.price * product.quantity).toFixed(2)}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="list-group-item text-center text-muted">No products found.</li>
//             )}
//           </ul>
//         </div>

//         <div className="d-flex justify-content-center gap-3 mt-4">
//           <button className="btn btn-primary" onClick={() => navigate('/collection')}>
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();
  const [currentOrder, setCurrentOrder] = useState(order || null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('order')
      ? JSON.parse(localStorage.getItem('order'))
      : null;

    // If no order exists, redirect to checkout page
    if (!order && !savedOrder) {
      navigate('/checkout');
    } else {
      // Use passed order or savedOrder
      const finalOrder = order || savedOrder;
      setCurrentOrder(finalOrder);

      // Optionally clear the order from localStorage after displaying
      localStorage.removeItem('order');
    }
  }, [order, navigate]);

  // If no order exists (after useEffect or initial load)
  if (!currentOrder) return null;

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

        {/* Billing Information */}
        <div className="mb-4">
          <h5 className="text-secondary">Billing Information</h5>
          <ul className="list-unstyled">
            <li><strong>Name:</strong> {currentOrder.billingInformation?.name}</li>
            <li><strong>Email:</strong> {currentOrder.billingInformation?.email}</li>
            <li><strong>Phone:</strong> {currentOrder.billingInformation?.phone}</li>
          </ul>
        </div>

        <hr />

        {/* Shipping Information */}
        <div className="mb-4">
          <h5 className="text-secondary">Shipping Information</h5>
          <ul className="list-unstyled">
            <li><strong>City:</strong> {currentOrder.shippingInformation?.city}</li>
            <li><strong>State:</strong> {currentOrder.shippingInformation?.state}</li>
            <li><strong>Pin Code:</strong> {currentOrder.shippingInformation?.pincode}</li>
          </ul>
        </div>

        <hr />

        {/* Products Ordered */}
        <div className="mb-4">
          <h5 className="text-secondary">Products Ordered</h5>
          <ul className="list-group">
            {currentOrder.products && currentOrder.products.length > 0 ? (
              currentOrder.products.map((product, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{product.name}</strong>
                    <p className="mb-0 text-muted">{product.quantity} × ${product.price.toFixed(2)}</p>
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
          <button className="btn btn-primary" onClick={() => navigate('/collection')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
