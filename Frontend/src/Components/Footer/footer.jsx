import React from 'react'
import "./footer.css";
import { assets } from '../../assets/image';
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Company Details will be available soon.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Explore</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact us</h2>
            <ul>
                <li>01983716969 </li>
                <li>Grocerez@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      {/* <p className='footer-copyrights'>copyrights 2024 c Grocerez.com - All Rights Reserved.</p> */}
    </div>
  );
}