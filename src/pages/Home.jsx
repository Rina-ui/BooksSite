import React from "react";
import { motion } from "framer-motion";
import books from "../assets/books.jpg"; 
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="image-container">
        <motion.img
          src={books} 
          alt="books"
          className="image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          width={100}
          height={100}
        />
      </div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to BookHorizon
      </motion.h1>

      <motion.p
        className="text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        One-stop destination for all your book needs
      </motion.p>
    </div>
  );
}

export default Home;
