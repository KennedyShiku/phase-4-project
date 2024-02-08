import React from 'react';
import '../App.css'; 
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    const logoUrl = "https://iili.io/J139fWb.png"

  return (
    <nav className="navigation">
      <div className="container">
        <div className='logo-container'>
            <img src={logoUrl} alt="Logo" className='logo'/>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/movies" className={"active"}>Home</NavLink>
          </li>
          <li>
            {/* <a href="#">Rented Movies</a> */}
            <NavLink to="/rental-history" className={"active"}>Rented Movies</NavLink>
          </li>  
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
