import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../../app/pages/Register'
import { BrowserRouter } from "react-router-dom";
import Home from '../../Home';
import Login from '../../app/pages/Login';
function Routers() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers