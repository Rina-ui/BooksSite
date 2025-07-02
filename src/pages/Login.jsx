import React from "react";
import {motion} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });
            console.log(response.data);
            alert("Login successful!");

            // Redirect to the home page or any other page after successful login
            navigate("/home", {state: {userEmail: email}});
        }catch(error){
            console.error('Login error:', error);
            alert("Login failed. Please check your credentials.");
        }
    }

    return (
       <div style={{
         height: "100vh", 
         backgroundImage: "url('https://i.pinimg.com/736x/d1/a7/57/d1a7577fab1a44df6cc49bdb3ad719ea.jpg')", 
         backgroundSize: "cover",      
         backgroundPosition: "center", 
         backgroundRepeat: "no-repeat",
         display: "flex", 
         alignItems: "center", 
         justifyContent: "center", 
         fontFamily: "Segoe UI, sans-serif" 
        }}>
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
        <h2 style={{ textAlign: "center", color: "#000000", marginBottom: "24px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="email" style={{ fontWeight: 500, color: "#000000" }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
            <label htmlFor="password" style={{ fontWeight: 500, color: "#000000" }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
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
            Login
          </motion.button>

          <p style={{ marginTop: "16px", textAlign: "center", color: "#000" }}>
            Don't you have an account?{" "}
            <Link to="/register" style={{ color: "#000", fontWeight: "bold", textDecoration: "underline" }}>
              Sign up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
    );
}

export default Login;