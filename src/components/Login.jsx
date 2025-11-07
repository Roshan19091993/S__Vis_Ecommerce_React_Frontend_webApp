import React from "react";

const Login = ({ onClose, openSignUp }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    if (onClose) onClose();
  };

  return (
    <div className="card shadow-lg p-4 position-relative" style={{ maxWidth: "400px", width: "100%" }}>
      {/* Close Button */}
      <button
        type="button"
        className="btn-close position-absolute"
        style={{
          top: "10px",
          right: "10px",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "50%",
          padding: "8px",
          transition: "background-color 0.2s ease",
        }}
        onClick={onClose}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")}
      ></button>

      <h2 className="text-center mb-4 mt-2">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required autoFocus />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Don’t have an account?</span>
        <button className="btn btn-outline-primary btn-sm" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
