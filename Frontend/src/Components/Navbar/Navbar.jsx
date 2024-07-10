import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/image';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);


    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/home")
      }

    const handleSearchClick = () => {
        navigate('/search');
    };
    
    const handleHomeClick = () => {
        navigate('/home');
    };
   

    const handleFormClick = () => {
        navigate('/form'); 
    };

    const handleCartClick = () => {
        navigate('/cart');
      };

    return (
        <div className='navbar'>
            <img src={assets.lo_go2} alt="logo" className="logo" />
            <div className="navbar-right">
                <img src={assets.searchicon} alt="search" onClick={handleSearchClick} />
                <img src={assets.form} alt="form" onClick={handleFormClick} /> 
                <img src={assets.home} alt="home" onClick={handleHomeClick} />
                <div className="navbar-search-icon" onClick={handleCartClick}>
                    <img src={assets.basketicon1} alt="basket" />
                    <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
                :<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr/>
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>}
                
            </div>
        </div>
    );
}
export default Navbar;
