import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SuperSaga</div>
      <div className="navbar-links">
        <a href="#hero">Home</a>
        <a href="#characters">Characters</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
