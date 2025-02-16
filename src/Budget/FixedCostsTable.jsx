import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./css/FixedCostsTable.css";

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
      <h2>Gastos Fijos</h2>

      {/* Formulario para agregar gastos */}
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
          placeholder="Categoría (Ej: Vivienda, Transporte...)"
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
        <button onClick={addExpense}>Agregar Gasto</button>
      </div>

      {/* Tabla de gastos */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Monto ($)</th>
            <th>Acciones</th>
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
            <th colSpan="2">Total Gastos:</th>
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
