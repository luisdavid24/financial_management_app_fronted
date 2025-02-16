import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./css/FinanceTable.css";

export default function FinanceTable() {
  return (
    <div>
      <h2>Ahorro e inversiones</h2>

      <div className="form">
        <input type="text" name="name" placeholder="Nombre del gasto" />
        <input
          type="text"
          name="category"
          placeholder="Categoría (Ej: Vivienda, Transporte...)"
        />
        <input type="number" name="amount" placeholder="Monto ($)" />
        <button>Agregar inversion o Ahorro</button>
      </div>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Monto ($)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total Gastos:</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
