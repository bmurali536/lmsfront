import React, { useState } from 'react';
import './css/Navbar.css';
// import logo from '../images/WhatsApp Image 2024-09-04 at 12.45.21_eb845ffe.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showloginMenu, setShowloginMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleloginHover = () => {
    setShowloginMenu(true);
  };

  const handleloginLeave = () => {
    setShowloginMenu(false);
  };


  return (
    <> 
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo-container">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <h2 className="navbar-title">School</h2>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`menu ${showMenu ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li
              className="login-dropdown"
              onMouseEnter={handleloginHover}
              onMouseLeave={handleloginLeave}
            >
              <Link className="login-link" to="#">Login</Link>
            </li>
            
        </ul>
      </nav>
      {showloginMenu && (
          <div
            className="floating-submenu"
            onMouseEnter={handleloginHover}
            onMouseLeave={handleloginLeave}
          >
            <ul>
              <li>
                <Link to="/Principal" onClick={toggleMenu}>Principal</Link>
              </li>
              <li>
                <Link to="/Staff" onClick={toggleMenu}>Staff</Link>
              </li>
              <li>
                <Link to="/Student" onClick={toggleMenu}>Student</Link>
              </li>
              
            </ul>
          </div>
          )}  
    </div>
    </>
    
  );
};

export default Navbar;
