import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import EmptyCart from "../assets/empty-cart-yellow.png";
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../components/ChangeAddress';
import Modal from '../components/Modal';
import { removeFromCart,increaseQuantity,decreaseQuantity } from '../redux/cartSlice';
import { CategoryContext } from '../context/CategoryContext';
const Cart = () => {

  const cart = useSelector(state => state.cart);
 
  const [isModalOpen, setIsModalOpen]=useState(false);
  const {setAddress}=useContext(CategoryContext);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className="container my-5">
      {cart.products.length > 0 ?(
        <div>
          <h3 className="text-center mb-4">SHOPPING CART</h3>
          <div className="table-responsive">
            <table className="table table-striped">
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
                {
                  cart.products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={product.image} alt={product.name} className="img-fluid" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                          <div className="ms-3">
                            <h5>{product.name}</h5>
                          </div>
                        </div>
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary btn-sm"
                           onClick={()=>dispatch(decreaseQuantity(product.id))}
                          >-</button>
                          <p className="mx-2">{product.quantity}</p>
                          <button className="btn btn-outline-secondary btn-sm"
                          onClick={()=>dispatch(increaseQuantity(product.id))}
                          >+</button>
                        </div>
                      </td>
                      <td>${(product.quantity * product.price).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-outline-danger btn-sm">
                          <FaTrashAlt onClick={()=> dispatch(removeFromCart(product.id))} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
                  <div className="container my-5">
              <div className="row justify-content-center">
                <div className="col-16 col-md-14 col-lg-12">
                  <div className="card shadow-sm border-0">
                    <div className="card-header bg-danger text-white text-center">
                      <h5 className="mb-0">CART TOTAL</h5>
                    </div>
                    <div className="card-body">
                      {/* Total Items Section */}
                      <div className="d-flex justify-content-between mb-3">
                        <span>Total Items:</span>
                        <span>{cart.totalQuantity}</span>
                      </div>

               

                      {/* Total Price Section */}
                      <div className="d-flex justify-content-between mb-4 border-top pt-3">
                        <span className="fw-bold">Total Price:</span>
                        <span className="fw-bold">${cart.totalPrice.toFixed(2)}</span>
                      </div>

                      {/* Proceed to Checkout Button */}
                      <div className="d-grid">
                        <button className="btn btn-danger btn-lg"
                        onClick={()=>Navigate('/checkout')}
                        >
                          Proceed To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       </table>
          </div>
          <Modal 
          isModalOpen={isModalOpen}
          setIsModalOpen= {setIsModalOpen}
          >
            <ChangeAddress 
               setAddress={setAddress}       
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      )
        :(
        <div className="d-flex justify-content-center">
          <img src={EmptyCart} alt="Empty Cart" className="img-fluid" style={{ height: '300px' }} />
        </div>
        )
      }
    </div>
  );
}

export default Cart;
