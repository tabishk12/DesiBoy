import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='headder'>
      <div className='nav-links'>
        <ul>
           <li  className='logo'><NavLink to="/" style={{ textDecoration: 'none' }}>&emsp;Desi Boy &emsp;</NavLink></li>
         </ul>
      </div>
      <div className='svgs'>
        <ul> 
          <li><NavLink to="/review" className="nav-link">Review </NavLink></li>
          <li><NavLink to="/schedule" className="nav-link"><span className='btn'>Schedule </span></NavLink></li>
          
     </ul>
      </div>
    </div>
  );
}

export default Header;
