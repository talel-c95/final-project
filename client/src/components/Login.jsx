import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/login", loginData);
      localStorage.setItem("token", response.data.accessToken);
      console.log("token",response.data.accessToken);
      
      navigate("/main");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp4782899.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Login Card */}
      <div
        className="shadow-lg bg-white rounded p-4"
        style={{
          width: "90%", // Adjust card width for responsiveness
          maxWidth: "400px", // Limit the card's max size
        }}
      >
        <h4 className="text-center fw-bold mb-4">Login</h4>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="togglePassword"
              >
                👁️ {/* Replace with an icon */}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-lg text-white"
              style={{
                background: "#00bcd4",
                borderRadius: "25px",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#00a1c1";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#00bcd4";
                e.target.style.transform = "scale(1)";
              }}
            >
              LOGIN
            </button>
          </div>

          {/* Divider */}
          <p className="text-center my-3 text-muted">Or</p>

          {/* Create Account Button */}
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-lg"
              style={{
                backgroundColor: "#e0f7fa",
                border: "2px solid #00bcd4",
                borderRadius: "25px",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#c2eef3";
                e.target.style.color = "#0097a7";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#e0f7fa";
                e.target.style.color = "#00bcd4";
                e.target.style.transform = "scale(1)";
              }}
              onClick={() => {
                console.log("Create Account clicked");
                navigate("/signUp");
              }}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
