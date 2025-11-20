


// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { clearCart } from '../redux/cartSlice';

// const Checkout = () => {
//   const [billingToggle, setBillingToggle] = useState(true);
//   const [shippingToggle, setShippingToggle] = useState(false);
//   const [paymentToggle, setPaymentToggle] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('cod');

//   const [billingInfo, setBillingInfo] = useState({ name: '', email: '', phone: '' });
//   const [shippingInfo, setShippingInfo] = useState({ city: '', state: '', pincode: '' });

//   const cart = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//  // Inside handleSubmit in Checkout component

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Basic validation
//   if (
//     !billingInfo.name.trim() ||
//     !billingInfo.email.trim() ||
//     !billingInfo.phone.trim() ||
//     !shippingInfo.city.trim() ||
//     !shippingInfo.state.trim() ||
//     !shippingInfo.pincode.trim()
//   ) {
//     alert('Please fill out all required fields before placing the order.');
//     return;
//   }

//   const newOrder = {
//     products: cart.products,
//     orderNumber: Math.floor(Math.random() * 1000000),
//     billingInformation: billingInfo,
//     shippingInformation: shippingInfo,
//     totalPrice: cart.totalPrice,
//     paymentMethod: paymentMethod,
//   };

//   try {
//     // Get logged-in user from localStorage
//     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

//     // Fetch user by email
//     const userRes = await fetch(`http://localhost:3000/users?email=${loggedUser.email}`);
//     const users = await userRes.json();
//     if (!users.length) throw new Error("User not found");
//     const user = users[0];

//     // Append new order
//     const updatedUser = {
//       ...user,
//       orders: user.orders ? [...user.orders, newOrder] : [newOrder],
//     };

//     // Update user in DB
//     await fetch(`http://localhost:3000/users/${user.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedUser),
//     });

//     // Save to localStorage (for order confirmation page)
//     localStorage.setItem("order", JSON.stringify(newOrder));

//     // Clear cart
//     dispatch(clearCart());

//     navigate("/order-confirmation");
//   } catch (err) {
//     console.error(err);
//     alert("Failed to place order. Try again.");
//   }
// };


//   return (
//     <div className='container py-5'>
//       <h3 className='text-center mb-4'>Checkout</h3>
//       <form onSubmit={handleSubmit}>
//         <div className='row'>
//           {/* LEFT COLUMN */}
//           <div className='col-md-8'>
//             {/* Billing Section */}
//             <div className='card mb-4'>
//               <div
//                 className='card-header d-flex justify-content-between'
//                 onClick={() => setBillingToggle(!billingToggle)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <h5 className='mb-0'>Billing Information</h5>
//                 {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
//               </div>
//               <div className={`card-body ${billingToggle ? '' : 'd-none'}`}>
//                 <div className='mb-3'>
//                   <label className='form-label'>Name</label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Enter Name'
//                     value={billingInfo.name}
//                     onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>Email</label>
//                   <input
//                     type='email'
//                     className='form-control'
//                     placeholder='Enter Email'
//                     value={billingInfo.email}
//                     onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>Phone</label>
//                   <input
//                     type='tel'
//                     className='form-control'
//                     placeholder='Enter Phone Number'
//                     value={billingInfo.phone}
//                     onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
//                     pattern='[0-9]{10}'
//                     title='Phone number should be 10 digits'
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Shipping Section */}
//             <div className='card mb-4'>
//               <div
//                 className='card-header d-flex justify-content-between'
//                 onClick={() => setShippingToggle(!shippingToggle)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <h5 className='mb-0'>Shipping Information</h5>
//                 {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
//               </div>
//               <div className={`card-body ${shippingToggle ? '' : 'd-none'}`}>
//                 <div className='mb-3'>
//                   <label className='form-label'>City</label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Enter City'
//                     value={shippingInfo.city}
//                     onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>State</label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Enter State'
//                     value={shippingInfo.state}
//                     onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>Pin Code</label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Enter Pin Code'
//                     value={shippingInfo.pincode}
//                     onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
//                     pattern='[0-9]{5,6}'
//                     title='PIN code must be 5 or 6 digits'
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className='card mb-4 shadow-sm'>
//               <div
//                 className='card-header d-flex justify-content-between align-items-center bg-gray text-black'
//                 onClick={() => setPaymentToggle(!paymentToggle)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <h5 className='mb-0'>Payment Method</h5>
//                 {paymentToggle ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
//               </div>
//               <div className={`collapse ${paymentToggle ? 'show' : ''}`}>
//                 <div className='card-body'>
//                   <div className='form-check mb-3'>
//                     <input
//                       type='radio'
//                       className='form-check-input'
//                       id='paymentCOD'
//                       name='payment'
//                       checked={paymentMethod === 'cod'}
//                       onChange={() => setPaymentMethod('cod')}
//                     />
//                     <label className='form-check-label' htmlFor='paymentCOD'>
//                       Cash on Delivery
//                     </label>
//                   </div>
//                   <div className='form-check mb-3'>
//                     <input
//                       type='radio'
//                       className='form-check-input'
//                       id='paymentDC'
//                       name='payment'
//                       checked={paymentMethod === 'dc'}
//                       onChange={() => setPaymentMethod('dc')}
//                     />
//                     <label className='form-check-label' htmlFor='paymentDC'>
//                       Debit Card
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {paymentMethod === 'dc' && (
//                 <div className='card-body border-top bg-light'>
//                   <h6 className='mb-3 text-danger fw-bold'>Debit Card Information</h6>
//                   <div className='row g-3'>
//                     <div className='col-12'>
//                       <label className='form-label'>Card Number</label>
//                       <input type='text' className='form-control' placeholder='Enter card number' />
//                     </div>
//                     <div className='col-12'>
//                       <label className='form-label'>Card Holder Name</label>
//                       <input type='text' className='form-control' placeholder='Enter card holder name' />
//                     </div>
//                     <div className='col-md-6'>
//                       <label className='form-label'>Expiry Date</label>
//                       <input type='text' className='form-control' placeholder='MM/YY' />
//                     </div>
//                     <div className='col-md-6'>
//                       <label className='form-label'>CVV</label>
//                       <input type='text' className='form-control' placeholder='Enter CVV' />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className='col-md-4'>
//             <div className='card p-3'>
//               <h5>Order Summary</h5>
//               <div>
//                 {cart.products.map((product, index) => (
//                   <div key={index} className='d-flex mb-3'>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className='img-fluid'
//                       style={{ maxWidth: '50px', marginRight: '10px', objectFit: 'cover' }}
//                     />
//                     <div>
//                       <h6>{product.name}</h6>
//                       <p>
//                         {product.price} × {product.quantity}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className='d-flex justify-content-between mb-3 border-top pt-2'>
//                 <span>Total Price:</span>
//                 <span>${cart.totalPrice.toFixed(2)}</span>
//               </div>
//              <button
//                 type="submit"
//                 className="btn btn-primary w-100"
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent form default submission behavior
//                   dispatch(clearCart()); // Dispatch action to clear cart
//                   navigate("/order-confirmation"); // Navigate to the Order Confirmation page
//                 }}
//               >
//                 Place Order
//               </button>

//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [billingInfo, setBillingInfo] = useState({ name: '', email: '', phone: '' });
  const [shippingInfo, setShippingInfo] = useState({ city: '', state: '', pincode: '' });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form submission (Place order)
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Form validation
  if (
    !billingInfo.name.trim() ||
    !billingInfo.email.trim() ||
    !billingInfo.phone.trim() ||
    !shippingInfo.city.trim() ||
    !shippingInfo.state.trim() ||
    !shippingInfo.pincode.trim()
  ) {
    alert("Please fill all required fields");
    return;
  }

  const newOrder = {
    products: cart.products,
    orderNumber: Math.floor(Math.random() * 1000000),
    billingInformation: billingInfo,
    shippingInformation: shippingInfo,
    totalPrice: cart.totalPrice,
    paymentMethod: paymentMethod,
  };

  try {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      const res = await fetch(`http://localhost:3000/users/${loggedUser.id}`);
      const user = await res.json();

      const updatedUser = {
        ...user,
        orders: user.orders ? [...user.orders, newOrder] : [newOrder],
      };

      await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    }

    // Save order to localStorage
    localStorage.setItem("order", JSON.stringify(newOrder));

    // Set order in App.js state
    setOrder(newOrder); // <-- Important!

    // Clear cart
    dispatch(clearCart());

    // Navigate after everything is done
    navigate("/order-confirmation");

  } catch (err) {
    console.error(err);
    alert("Failed to place order.");
  }
};

  return (
    <div className='container py-5'>
      <h3 className='text-center mb-4'>Checkout</h3>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          {/* LEFT COLUMN */}
          <div className='col-md-8'>
            {/* Billing Section */}
            <div className='card mb-4'>
              <div
                className='card-header d-flex justify-content-between'
                onClick={() => setBillingToggle(!billingToggle)}
                style={{ cursor: 'pointer' }}
              >
                <h5 className='mb-0'>Billing Information</h5>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`card-body ${billingToggle ? '' : 'd-none'}`}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Name'
                    value={billingInfo.name}
                    onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter Email'
                    value={billingInfo.email}
                    onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Phone</label>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Enter Phone Number'
                    value={billingInfo.phone}
                    onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                    pattern='[0-9]{10}'
                    title='Phone number should be 10 digits'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Section */}
            <div className='card mb-4'>
              <div
                className='card-header d-flex justify-content-between'
                onClick={() => setShippingToggle(!shippingToggle)}
                style={{ cursor: 'pointer' }}
              >
                <h5 className='mb-0'>Shipping Information</h5>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`card-body ${shippingToggle ? '' : 'd-none'}`}>
                <div className='mb-3'>
                  <label className='form-label'>City</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter City'
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>State</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter State'
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Pin Code</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Pin Code'
                    value={shippingInfo.pincode}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                    pattern='[0-9]{5,6}'
                    title='PIN code must be 5 or 6 digits'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className='card mb-4 shadow-sm'>
              <div
                className='card-header d-flex justify-content-between align-items-center bg-gray text-black'
                onClick={() => setPaymentToggle(!paymentToggle)}
                style={{ cursor: 'pointer' }}
              >
                <h5 className='mb-0'>Payment Method</h5>
                {paymentToggle ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
              </div>
              <div className={`collapse ${paymentToggle ? 'show' : ''}`}>
                <div className='card-body'>
                  <div className='form-check mb-3'>
                    <input
                      type='radio'
                      className='form-check-input'
                      id='paymentCOD'
                      name='payment'
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <label className='form-check-label' htmlFor='paymentCOD'>
                      Cash on Delivery
                    </label>
                  </div>
                  <div className='form-check mb-3'>
                    <input
                      type='radio'
                      className='form-check-input'
                      id='paymentDC'
                      name='payment'
                      checked={paymentMethod === 'dc'}
                      onChange={() => setPaymentMethod('dc')}
                    />
                    <label className='form-check-label' htmlFor='paymentDC'>
                      Debit Card
                    </label>
                  </div>
                </div>
              </div>
              {paymentMethod === 'dc' && (
                <div className='card-body border-top bg-light'>
                  <h6 className='mb-3 text-danger fw-bold'>Debit Card Information</h6>
                  <div className='row g-3'>
                    <div className='col-12'>
                      <label className='form-label'>Card Number</label>
                      <input type='text' className='form-control' placeholder='Enter card number' />
                    </div>
                    <div className='col-12'>
                      <label className='form-label'>Card Holder Name</label>
                      <input type='text' className='form-control' placeholder='Enter card holder name' />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label'>Expiry Date</label>
                      <input type='text' className='form-control' placeholder='MM/YY' />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label'>CVV</label>
                      <input type='text' className='form-control' placeholder='Enter CVV' />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='col-md-4'>
            <div className='card p-3'>
              <h5>Order Summary</h5>
              <div>
                {cart.products.map((product, index) => (
                  <div key={index} className='d-flex mb-3'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='img-fluid'
                      style={{ maxWidth: '50px', marginRight: '10px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6>{product.name}</h6>
                      <p>
                        {product.price} × {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='d-flex justify-content-between mb-3 border-top pt-2'>
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Place Order
              </button>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
