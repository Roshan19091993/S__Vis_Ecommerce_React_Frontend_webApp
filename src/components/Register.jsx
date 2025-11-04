import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({openLogin}) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    alert('Registration Successful!');
    navigate('/login');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center mb-4">Create an Account</h2>

        <form onSubmit={handleRegister}>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember Me
            </label>
          </div>

          {/* Register Button */}
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>

        {/* Already have an account? */}
        <div className="text-center">
          <span className="me-2">Already have an account?</span>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
