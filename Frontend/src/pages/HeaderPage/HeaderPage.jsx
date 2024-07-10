import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './HeaderPage.css';

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className="header-page">
      <Header />
    </div>
  );
}

export default HeaderPage;