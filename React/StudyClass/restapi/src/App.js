// App.jsx
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./auth/Auth"
import Login from "./auth/Login"
import Register from "./auth/Register"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
