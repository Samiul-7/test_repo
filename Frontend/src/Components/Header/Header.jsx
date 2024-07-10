import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };
  return (
    <div className='header'>
      <div className="header-contents">
            <h2>Order Your Groceries here</h2>
            <p>Choose from a diverse menu featuring an array fresh goodies for your daily necessities. Our aim is to provide farm fresh goodies to your doorstep in just a couple of taps!!!!</p>
            <button className="navigate-button" onClick={handleButtonClick}>
            View Items
      </button>
      </div>
    </div>
  )
}
export default Header
