import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        email,
        password,
      });
      console.log(response.data);
      
      alert('Welcome, ${email}! Your account is create succesfully.');

      //redicrection to home page
      navigate("/home", {state: {userEmail: email}})

    } catch (error) {
      console.error("Error during signup:", error);

      //si l'user est deja cree 
        if (error.response && error.response.status === 400) {
            alert("Email is already use , choose another one.");
            navigate('/login');
        } else {
            alert("Error during the registration , Please retry .");
        }
    }
  };

  return (
   <div
      style={{
        height: "100vh",
        backgroundImage: "url('https://i.pinimg.com/736x/8b/b8/67/8bb867df360564d4e697e66119ba26da.jpg')", 
        backgroundSize: "cover",      
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          width: "350px",
          maxWidth: "90%",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#000000", marginBottom: "24px" }}>
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="email" style={{ fontWeight: 500, color: "#000000" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label htmlFor="password" style={{ fontWeight: 500, color: "#000000" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#99582a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Register
          </motion.button>

          <p style={{ marginTop: "16px", textAlign: "center", color: "#000" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#000000", fontWeight: "bold", textDecoration: "underline" }}>
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
 );
};

export default Register;
