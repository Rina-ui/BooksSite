import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createRoot } from 'react-dom/client'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Books from './pages/Books'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
