import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./budget.css";


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const categories = [
  "Asset Management", "Variable Expenses", "Savings and Investments",
  "Debts and Obligations", "Donations", "Taxes", "Goals"
];

const initialBudgets = {
  "2025-01": {
    "Asset Management": [
      ["Real Estate", "$50,000", "2025-01-05"],
      ["Stocks", "$15,000", "2025-01-10"]
    ],
    "Variable Expenses": [
      ["Groceries", "$300", "2025-01-15"],
      ["Dining Out", "$150", "2025-01-20"]
    ],
    "Savings and Investments": [
      ["Retirement Fund", "$500", "2025-01-25"]
    ],
    "Debts and Obligations": [
      ["Car Loan", "$400", "2025-01-28"]
    ],
    "Donations": [
      ["Charity", "$50", "2025-01-30"]
    ],
    "Taxes": [
      ["Income Tax", "$1,200", "2025-01-31"]
    ],
    "Goals": [
      ["Vacation Fund", "$1,000", "2025-01-01"]
    ]
  },
  "2025-02": {
    "Asset Management": [
      ["Real Estate", "$51,000", "2025-02-05"],
      ["Stocks", "$14,500", "2025-02-10"]
    ],
    "Variable Expenses": [
      ["Groceries", "$320", "2025-02-12"],
      ["Dining Out", "$140", "2025-02-18"]
    ],
    "Savings and Investments": [
      ["Retirement Fund", "$550", "2025-02-22"]
    ],
    "Debts and Obligations": [
      ["Car Loan", "$400", "2025-02-27"]
    ],
    "Donations": [
      ["Charity", "$60", "2025-02-20"]
    ],
    "Taxes": [
      ["Income Tax", "$1,300", "2025-02-25"]
    ],
    "Goals": [
      ["Vacation Fund", "$1,200", "2025-02-01"]
    ]
  }
};

const Budget = () => {
  const [selectedMonth, setSelectedMonth] = useState("2025-01");

  return (
    <div className="budget-container">
      <h1 className="budget-title">Budget Overview</h1>

      <div className="month-selector">
        <label>Choose Month: </label>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {Object.keys(initialBudgets).map((key) => (
            <option key={key} value={key}>
              {months[parseInt(key.split("-")[1]) - 1]} {key.split("-")[0]}
            </option>
          ))}
        </select>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="table-section">
          <h2 className="table-title">{category}</h2>
          <table className="budget-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(initialBudgets[selectedMonth][category] || []).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                  <td className="action-buttons">
                    <button className="edit-btn"><FaEdit /></button>
                    <button className="delete-btn"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Budget;
