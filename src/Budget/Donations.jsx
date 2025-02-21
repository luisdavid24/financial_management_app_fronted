import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";

export default function Donations() {
  return (
    <div>
      <div className="containerIconCategory">
        <h2>Donations</h2>
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
