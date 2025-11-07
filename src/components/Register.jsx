import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registration Successful!");

    // Navigate to login page
    navigate("/login"); 
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%", maxHeight: "600px", overflowY: "auto" }}
      >
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleRegister}>
          {/* Name, Email, Password, Confirm Password fields */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <div className="text-center mt-3">
          <span className="me-2">Already have an account?</span>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
