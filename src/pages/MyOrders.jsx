import React, { useEffect, useState } from "react";
import useAuthRedirect from "../hooks/useAuthRedirect";
const MyOrders = () => {
    useAuthRedirect("/"); 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        const res = await fetch(`http://localhost:3000/users?email=${loggedUser.email}`);
        const users = await res.json();
        if (!users.length) return;
        const userOrders = users[0].orders || [];
        setOrders(userOrders);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  if (!orders.length)
    return <p className="text-center py-5">You have no past orders.</p>;

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">My Orders</h3>
      {orders.map((order, idx) => (
        <div key={idx} className="card mb-3 shadow-sm p-3">
          <h5>Order #{order.orderNumber}</h5>
          <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>

          <h6>Products:</h6>
          <ul className="list-group mb-2">
            {order.products.map((prod, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>{prod.name} × {prod.quantity}</span>
                <span>${(prod.price * prod.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="row">
            <div className="col-md-6">
              <h6>Billing:</h6>
              <p>{order.billingInformation.name}</p>
              <p>{order.billingInformation.email}</p>
              <p>{order.billingInformation.phone}</p>
            </div>
            <div className="col-md-6">
              <h6>Shipping:</h6>
              <p>{order.shippingInformation.city}</p>
              <p>{order.shippingInformation.state}</p>
              <p>{order.shippingInformation.pincode}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
