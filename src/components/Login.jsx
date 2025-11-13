

import React, { useState } from "react";

const Login = ({ onClose, openSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (data.length > 0) {
      const user = data[0];
      // Save user to localStorage
      localStorage.setItem("loggedUser", JSON.stringify(user));
      alert(`Welcome, ${user.username}!`);

      if (onClose) onClose(); // Close modal

      // ✅ Redirect after login if coming from another page like checkout
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin"); // Clean up
        window.location.href = redirectPath; // Navigate to the stored path
      } else {
        window.location.reload(); // Refresh to update Navbar if no redirect
      }
    } else {
      setError("Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  }
};


  return (
    <div
      className="card shadow-lg p-4 position-relative"
      style={{ maxWidth: "400px", width: "100%" }}
    >
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
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#dc3545")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            "rgba(255,255,255,0.9)")
        }
      ></button>

      <h2 className="text-center mb-4 mt-2">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-danger small">{error}</p>}

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Don’t have an account?</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={openSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;




