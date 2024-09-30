import React, { useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpg';

 const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginHover = () => {
    setShowLoginMenu(true);
  };

  const handleLoginLeave = () => {
    setShowLoginMenu(false);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">

          <div className="logo">
          <img src={logo} alt="Logo" />
            <h2 className="navbar-title">COLLEGE</h2>
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
              onMouseEnter={handleLoginHover}
              onMouseLeave={handleLoginLeave}
            >
              <Link className="login-link" to="#">Login</Link>
              {showLoginMenu && (
                <div className="floating-submenu">
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
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
