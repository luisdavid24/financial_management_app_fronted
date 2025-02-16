import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./css/VariableExpenses.css";

export default function VariableExpenses() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Cena en restaurante",
      category: "Comida",
      amount: 30,
      date: "2025-02-10",
    },
    {
      id: 2,
      name: "Gasolina",
      category: "Transporte",
      amount: 50,
      date: "2025-02-12",
    },
  ]);

  const [newExpense, setNewExpense] = useState({
    name: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (
      !newExpense.name ||
      !newExpense.category ||
      !newExpense.amount ||
      !newExpense.date
    )
      return;

    const newExpenseData = {
      id: expenses.length + 1,
      ...newExpense,
      amount: parseFloat(newExpense.amount),
    };

    setExpenses([...expenses, newExpenseData]);
    setNewExpense({ name: "", category: "", amount: "", date: "" });
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="expense-box">
      <h2>Gastos Variables</h2>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Nombre del gasto"
          value={newExpense.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría (Ej: Entretenimiento, Transporte...)"
          value={newExpense.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto ($)"
          value={newExpense.amount}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleChange}
        />
        <button className="btnAddVariableExpenses" onClick={addExpense}>
          Agregar Gasto
        </button>
      </div>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Monto ($)</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toLocaleString()}</td>
              <td>{expense.date}</td>
              <td>
                <CiEdit />
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total Gastos:</th>
            <th>
              $
              {expenses
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toLocaleString()}
            </th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
