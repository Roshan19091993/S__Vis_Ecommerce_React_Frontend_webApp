import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  });

  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

const handleOrder = () => {
  const newOrder = {
    products: cart.products,
    orderNumber: "165647",
    shippingInformation: shippingInfo,
    totalPrice: cart.totalPrice,
  };

  setOrder(newOrder);
  localStorage.setItem("order", JSON.stringify(newOrder)); 
  navigate('/order-confirmation');
};


  return (
    <div className='container py-5'>
      <h3 className='text-center mb-4'>Checkout</h3>
      <div className='row'>
        {/* Left column for Billing, Shipping, and Payment */}
        <div className='col-md-8'>
          {/* Billing Section */}
          <div className='card mb-4'>
            <div className='card-header d-flex justify-content-between' onClick={() => setBillingToggle(!billingToggle)}>
              <h5 className='mb-0'>Billing Information</h5>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`card-body ${billingToggle ? "" : "d-none"}`}>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type='text' 
                className='form-control'
                 placeholder='Enter Name'
                 onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                 />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' 
                className='form-control'
                 placeholder='Enter Email'
                 onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Phone</label>
                <input type='text' 
                className='form-control'
                 placeholder='Enter Phone' 
                 onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                 />
              </div>
            </div>
          </div>

          {/* Shipping Section */}
          <div className='card mb-4'>
            <div className='card-header d-flex justify-content-between' onClick={() => setShippingToggle(!shippingToggle)}>
              <h5 className='mb-0'>Shipping Information</h5>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`card-body ${shippingToggle ? "" : "d-none"}`}>
              <div className='mb-3'>
                <label className='form-label'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Address'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>City</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter City'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Pin Code</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter PinCode'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className='card mb-4'>
            <div className='card-header d-flex justify-content-between' onClick={() => setPaymentToggle(!paymentToggle)}>
              <h5 className='mb-0'>Payment Information</h5>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`card-body ${paymentToggle ? "" : "d-none"}`}>
              {/* Payment Method Options */}
              <div className='mb-3'>
                <div className='form-check'>
                  <input
                    type='radio'
                    id='COD'
                    name='payment'
                    className='form-check-input'
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  <label className='form-check-label' htmlFor='COD'>Cash On Delivery</label>
                </div>
                <div className='form-check'>
                  <input
                    type='radio'
                    id='dc'
                    name='payment'
                    className='form-check-input'
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className='form-check-label' htmlFor='dc'>Debit Card</label>
                </div>
              </div>

              {/* Debit Card Info (appears only if 'dc' is selected) */}
              {paymentMethod === "dc" && (
                <div className='bg-light p-3'>
                  <h6 className='mb-3'>Debit Card Information</h6>
                  <div className='mb-3'>
                    <label className='form-label'>Card Number</label>
                    <input type='text' className='form-control' placeholder='Enter Card Number' required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Card Holder Name</label>
                    <input type='text' className='form-control' placeholder='Enter Card Holder Name' required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Expire Date (MM/YY)</label>
                    <input type='text' className='form-control' placeholder='MM/YY' required />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>CVV</label>
                    <input type='text' className='form-control' placeholder='Enter CVV' required />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right column for Order Summary */}
        <div className='col-md-4'>
          <div className='card p-3'>
            <h5>Order Summary</h5>
            <div>
              {cart.products.map((product, index) => (
                <div key={index} className='d-flex mb-3'>
                  <img src={product.image} alt={product.name} className='img-fluid' style={{ maxWidth: "50px", marginRight: "10px" }} />
                  <div>
                    <h6>{product.name}</h6>
                    <p>{product.price} x {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <button className='btn btn-primary w-100'
              onClick={handleOrder}
            >
                Place Order
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
