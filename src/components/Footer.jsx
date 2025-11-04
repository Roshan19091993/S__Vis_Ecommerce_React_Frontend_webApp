import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          
          {/* Brand Section */}
          <div className="col-12 col-md-4">
            <h3 className="fw-bold mb-3 text-uppercase">Funcky-Shop</h3>
            <p className="text-secondary">
              Your one-stop shop for all your needs. Shop with <strong>e-Shop</strong> and enjoy the best online shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-decoration-none link-light link-opacity-75-hover">Home</Link></li>
              <li className="mb-2"><Link to="/collection" className="text-decoration-none link-light link-opacity-75-hover">Collection</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none link-light link-opacity-75-hover">Contact</Link></li>
              <li><Link to="/about" className="text-decoration-none link-light link-opacity-75-hover">About</Link></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-4"><FaFacebook /></a>
              <a href="#" className="text-light fs-4"><FaInstagram /></a>
              <a href="#" className="text-light fs-4"><FaTwitter /></a>
              <a href="#" className="text-light fs-4"><FaYoutube /></a>
            </div>

            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-danger">Subscribe</button>
            </form>
          </div>
        </div>
      <div className="border-top mt-5 pt-4">
  <div className="text-center text-secondary">
    <p>
      <small>© {new Date().getFullYear()} funcky-Shop. All rights reserved.</small>
    </p>
    <div className="d-flex justify-content-center gap-4 mt-3 mt-md-0">
      <a 
        href="#" 
        className="text-decoration-none text-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        Privacy Policy
      </a>
      <a 
        href="#" 
        className="text-decoration-none text-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        Terms & Conditions
      </a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
