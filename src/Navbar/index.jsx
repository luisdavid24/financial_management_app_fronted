import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { SlLogin } from "react-icons/sl";
import { logout, getProtected } from '../Login/api'
import "./Navbar.css";

const Navbar = ({user, setUser}) => {
  
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
        <li>
          <SlLogin className="btnLogin" onClick={() => { logout(); setUser(null) }}/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
