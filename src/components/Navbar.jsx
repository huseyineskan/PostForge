import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">LOGO</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
