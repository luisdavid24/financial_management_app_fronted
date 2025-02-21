import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";

export default function FixedCostsTable() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Alquiler", category: "Vivienda", amount: 500 },
    { id: 2, name: "Internet", category: "Servicios", amount: 50 },
  ]);

  const [newExpense, setNewExpense] = useState({
    name: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!newExpense.name || !newExpense.category || !newExpense.amount) return;

    const newExpenseData = {
      id: expenses.length + 1,
      ...newExpense,
      amount: parseFloat(newExpense.amount),
    };

    setExpenses([...expenses, newExpenseData]);
    setNewExpense({ name: "", category: "", amount: "" });
  };

  // Eliminar gasto
  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="expense-box">
      <div className="containerIconCategory">
        <h2>Fixed Expenses</h2>
        <MdOutlineAddCircle />
      </div>

      <table className="tableCategory">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.amount.toLocaleString()}</td>
              <td>
                <CiEdit />
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total Expenses:</th>
            <th>
              $
              {expenses
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toLocaleString()}
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
