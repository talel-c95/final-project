import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
console.log("ddddddddddddddddddddddddddddddddddddddd",registerData);

    if (registerData.password !== registerData.repeatPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/user/createAccount', registerData);
      navigate("/login"); 
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed, please try again.');
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#e0f7fa" }} 
    >
      <div className="row w-100 shadow rounded">
        {/* Left Side: Image Section */}
        <div
          className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundImage: "url('https://frontenacarchbiosphere.ca/wp-content/uploads/2023/02/full-shot-travel-concept-with-landmarks-scaled.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "0.375rem",
            borderBottomLeftRadius: "0.375rem",
          }}
        >
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)", 
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          ></div>
          <div
            className="position-relative text-center text-white p-4"
            style={{ zIndex: 2 }}
          >
            <h1 className="display-4 fw-bold mb-4">Create Your Account</h1>
            <p className="fs-5">Sign up to start tracking your travels and experiences.</p>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="col-lg-6 p-5 bg-white">
          <h4 className="text-center fw-bold mb-4">Sign Up</h4>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Name</label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                value={registerData.fullName}
                onChange={(e) =>
                  setRegisterData({ ...registerData, fullName: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                placeholder="Enter your password"
              />
            </div>

            {/* Repeat Password Input */}
            <div className="mb-4">
              <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
              <input
                type="password"
                id="repeatPassword"
                className="form-control"
                value={registerData.repeatPassword}
                onChange={(e) =>
                  setRegisterData({ ...registerData, repeatPassword: e.target.value })
                }
                placeholder="Repeat your password"
              />
            </div>

            {/* Register Button */}
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
                Register
              </button>
            </div>

            {/* Divider */}
            <p className="text-center my-3 text-muted">Or</p>

            {/* Login Button */}
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  backgroundColor: "#e0f7fa", // Light cyan
                  color: "#00bcd4", // Cyan text color
                  border: "2px solid #00bcd4", // Border matching text
                  borderRadius: "25px", // Rounded edges
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#c2eef3"; // Slightly darker cyan
                  e.target.style.color = "#0097a7"; // Darker cyan text
                  e.target.style.transform = "scale(1.05)"; // Slight zoom effect
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#e0f7fa"; // Reset to original color
                  e.target.style.color = "#00bcd4"; // Reset to original text color
                  e.target.style.transform = "scale(1)"; // Reset zoom
                }}
                onClick={() => navigate("/login")}
              >
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
