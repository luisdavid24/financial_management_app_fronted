import React from "react";
import "./Category.css";

export default function Category({ name }) {
  return (
    <div className="budget-box">
      <h2>{name}</h2>
    </div>
  );
}
