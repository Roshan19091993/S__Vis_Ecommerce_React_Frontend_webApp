import React from 'react';

const Login = ({  openSignUp  }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    alert("Login Successful!");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "60%" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              autoFocus
            />
          </div>

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

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label htmlFor="remember" className="form-check-label">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-decoration-none small text-primary">
              Forgot Password?
            </a>
          </div>

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
            aria-label="Open Sign Up Modal"
            onClick={(e) => { e.preventDefault();  openSignUp() ; }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
