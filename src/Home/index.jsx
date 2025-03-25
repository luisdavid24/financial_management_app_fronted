import React from "react";
import { useState, useEffect } from 'react'

import "./Home.css";

const Home = () => {
  

  return (
    <div className="container">
      <header className="hero">
        <h2>Simple. Smart. Financial Control.</h2>
        <p>Track your expenses, plan budgets, and gain financial freedom.</p>
        <button className="cta-button">Start Managing</button>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Track Expenses</h3>
          <p>Know exactly where your money goes every month.</p>
        </div>
        <div className="feature">
          <h3>Set Budgets</h3>
          <p>Plan ahead and keep your finances in check.</p>
        </div>
        <div className="feature">
          <h3>Generate Reports</h3>
          <p>Analyze your spending trends and optimize savings.</p>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
