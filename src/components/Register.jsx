import React from "react";

const Register = ({ onClose, openLogin }) => {

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
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

      <h2 className="text-center mb-4 mt-2">Register</h2>

      <form onSubmit={handleRegister}>
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

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Already have an account?</span>
        <button className="btn btn-outline-primary btn-sm" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
