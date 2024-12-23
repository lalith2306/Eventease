import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Placeholder logic for login
    if (credentials.email && credentials.password) {
      alert("Login successful!");
      window.location.href = "/events";
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
