import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="LoginWrapper">
      <div className="LoginContainer">
        <div className="LogoSection">
          <img src={logo} alt="logo" />
          <h2>Admin Dashboard</h2>
        </div>
        <form className="LoginForm" onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <div className="ErrorMessage">{error}</div>}
          <div className="InputGroup">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="InputGroup">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="LoginButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
