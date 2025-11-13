import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);

  
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [shippingInfo, setShippingInfo] = useState({
    city: '',
    state:'',
    pincode: ''
  });


  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleSubmit = (e) => {
  e.preventDefault();

  // Simple validation
  if (
    !billingInfo.name.trim() ||
    !billingInfo.email.trim() ||
    !billingInfo.phone.trim() ||
    !shippingInfo.city.trim() ||
    !shippingInfo.state.trim() ||
    !shippingInfo.pincode.trim()
  ) {
    alert('Please fill out all required fields before placing the order.');
    return;
  }

  const newOrder = {
    products: cart.products,
    orderNumber: '165647',
    billingInformation: billingInfo,
    shippingInformation: shippingInfo,
    totalPrice: cart.totalPrice,
  };

  setOrder(newOrder);
  localStorage.setItem('order', JSON.stringify(newOrder));

  // ✅ Clear the cart
  dispatch(clearCart());

  navigate('/order-confirmation');
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
                    onChange={(e) =>
                      setBillingInfo({ ...billingInfo, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setBillingInfo({ ...billingInfo, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setBillingInfo({ ...billingInfo, phone: e.target.value })
                    }
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
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, state: e.target.value })
                    }
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
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        pincode: e.target.value,
                      })
                    }
                    pattern='[0-9]{5,6}'
                    title='PIN code must be 5 or 6 digits'
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Order Summary */}
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
                      style={{
                        maxWidth: '50px',
                        marginRight: '10px',
                        objectFit: 'cover',
                      }}
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
              <button type='submit' className='btn btn-primary w-100'>
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
