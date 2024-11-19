import React, { useState } from "react";
import "./App.css"; // Add your own CSS styles

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  // Toggle between login and registration form
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="form-container">
      {isRegistering ? (
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <span className="toggle-link" onClick={toggleForm}>
              Log In
            </span>
          </p>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={toggleForm}>
              Create Account
              
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
