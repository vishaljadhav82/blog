import React from 'react';
import './header.css';

const Header = () => {
  
  return (
<div className="header">
        <nav className="navbar">
          <div className="logo">&#394;&#314;gital कट्टा</div>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </label>

          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/schemes">Schemes</a></li>
            <li className="close-menu"><label htmlFor="nav-toggle">✖</label></li>
          </ul>
        </nav>
      </div>
  );
};

export default Header;
