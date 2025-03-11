import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">FinancePro</h2>
      <ul className="nav-links">
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
