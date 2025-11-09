

import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmptyCart from "../assets/empty-cart-yellow.png";
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../components/ChangeAddress';
import Modal from '../components/Modal';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { CategoryContext } from '../context/CategoryContext';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setAddress } = useContext(CategoryContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      {cart.products.length > 0 ? (
        <>
          <h3 className="text-center mb-4">SHOPPING CART</h3>
          <div className="row">
            {/* LEFT SIDE: Shopping Cart Table */}
            <div className="col-lg-8 col-md-7">
              <div className="table-responsive">
                <table className="table table-striped align-middle">
                  <thead>
                    <tr>
                      <th>PRODUCTS</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>SUBTOTAL</th>
                      <th>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-fluid"
                              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                            />
                            <div className="ms-3">
                              <h6>{product.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>${product.price}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => dispatch(decreaseQuantity(product.id))}
                            >
                              -
                            </button>
                            <p className="mx-2 mb-0">{product.quantity}</p>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => dispatch(increaseQuantity(product.id))}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(product.quantity * product.price).toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT SIDE: Cart Total */}
            <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-danger text-white text-center">
                  <h5 className="mb-0">CART TOTAL</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-4 border-top pt-3">
                    <span className="fw-bold">Total Price:</span>
                    <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-danger btn-lg"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Modal */}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <img
            src={EmptyCart}
            alt="Empty Cart"
            className="img-fluid"
            style={{ height: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
