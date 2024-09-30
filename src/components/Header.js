import React from 'react';
import { Link } from 'react-router-dom';
import Header from './css/Header.css';



const Header= () => {
  return (
    <header>
    
      <div className="school-name">
        <h1> COLLEGE</h1>
      </div>
      S
      <nav>
        <ul>
          <li>
             
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Principal</Link></li>
          <li><Link to="/services">Staff</Link></li>
          <li><Link to="/career">Student</Link></li>
        
        </ul>
        
      </nav>

    </header>

  );
};

export default Header;
