// 

import React, { useState } from "react";

const Register = ({ onClose, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Check if user already exists
      const checkRes = await fetch(
        `http://localhost:3000/users?email=${email}`
      );
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        setError("Email is already registered");
        return;
      }

      // Create new user
      const newUser = {
        username: name,
        email,
        password,
      };

      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) throw new Error("Failed to register");

      // Automatically log in after registration
      localStorage.setItem("loggedUser", JSON.stringify(newUser));

      alert(`Welcome, ${name}! Registration successful.`);
      if (onClose) onClose();
      window.location.reload(); // refresh to update Navbar
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

      <h2 className="text-center mb-4 mt-2">Register</h2>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="confirmPassword"
            className="form-label fw-semibold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-danger small">{error}</p>}

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>

      <div className="text-center mt-3">
        <span className="me-2">Already have an account?</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={openLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
