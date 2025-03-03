import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Budget">Budget</Link>
        </li>
        <li>
          <Link to="/Report">Report</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
