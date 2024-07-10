import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import { Footer } from './Components/Footer/footer'
import HeaderPage from './pages/HeaderPage/HeaderPage'
import SearchPage from './Components/SearchPage/SearchPage';
import FormPage from './pages/FormPage/FormPage'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/';
  const [showLogin,setShowLogin] =  useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        {showNavbarAndFooter && <Navbar setShowLogin={setShowLogin}/>}
        <Routes>
          <Route path='/' element={<HeaderPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App

