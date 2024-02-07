// src/components/NavigationBar.js

import React from 'react';
import '../App.css'; // Import CSS for navigation bar styling

const NavigationBar = () => {
    const logoUrl = "https://iili.io/J139fWb.png"

  return (
    <nav className="navigation">
      <div className="container">
        <div className='logo-container'>
            <img src={logoUrl} alt="Logo" className='logo'/>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Rented Movies</a></li>  
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
