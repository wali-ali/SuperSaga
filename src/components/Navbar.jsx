import React from 'react';
import './Navbar.css';

function Navbar({ setSelectedChar }) {
  const handleClick = () => {
    setSelectedChar(null); // closes any open character detail
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">SuperSaga</div>
      <div className="navbar-links">
        <a href="#hero" onClick={handleClick}>Home</a>
        <a href="#characters" onClick={handleClick}>Characters</a>
        <a href="#about" onClick={handleClick}>About</a>
      </div>
    </nav>
  );
}

export default Navbar;
