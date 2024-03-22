// Navbar.js
import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><a style={{ color: '#fff', textDecoration: 'none'}}href="/">MeroBlog</a></div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
