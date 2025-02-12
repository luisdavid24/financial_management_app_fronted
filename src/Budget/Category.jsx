import React from "react";
import "./Category.css";

export default function Category({ name }) {
  return (
    <div className="budget-box">
      <h2>{name}</h2>
      <p className="amount">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut
        nostrum cum corporis nesciunt praesentium fuga id magnam illum, aut
        architecto quo, fugit ipsum, numquam error voluptas harum? Voluptas,
        eligendi!
      </p>
    </div>
  );
}
