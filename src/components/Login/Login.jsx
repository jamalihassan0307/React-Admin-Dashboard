import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (username === "admin" && password === "admin123") {
        // Store user data as a JSON string
        const userData = {
          name: "Admin User",
          email: "admin@example.com",
        };
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
              disabled={loading}
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
              disabled={loading}
              required
            />
          </div>
          <button type="submit" className="LoginButton" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
