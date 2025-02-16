import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import "./css/AssetsTable.css";

export default function AssetsTable() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Cuenta de Ahorros",
      initialBalance: 5000,
      availableBalance: 4500,
    },
    {
      id: 2,
      name: "Inversiones",
      initialBalance: 10000,
      availableBalance: 10500,
    },
  ]);

  const [newAsset, setNewAsset] = useState({
    name: "",
    type: "",
    initialBalance: "",
    availableBalance: "",
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  // Agregar activo
  const addAsset = () => {
    if (
      !newAsset.name ||
      !newAsset.type ||
      !newAsset.initialBalance ||
      !newAsset.availableBalance
    )
      return;

    const newAssetData = {
      id: assets.length + 1,
      ...newAsset,
      initialBalance: parseFloat(newAsset.initialBalance),
      availableBalance: parseFloat(newAsset.availableBalance),
    };

    setAssets([...assets, newAssetData]);
    setNewAsset({
      name: "",
      type: "",
      initialBalance: "",
      availableBalance: "",
    });
  };

  return (
    <div className="budget-box">
      <h2>Gestión de Activos</h2>
      <div className="formAssetsTable">
        <input
          type="text"
          name="name"
          placeholder="Nombre del Activo"
          value={newAsset.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Tipo (Banco, Inversión...)"
          value={newAsset.type}
          onChange={handleChange}
        />
        <input
          type="number"
          name="initialBalance"
          placeholder="Saldo Inicial"
          value={newAsset.initialBalance}
          onChange={handleChange}
        />
        <input
          type="number"
          name="availableBalance"
          placeholder="Saldo Disponible"
          value={newAsset.availableBalance}
          onChange={handleChange}
        />
        <button className="btnAssetsTable" onClick={addAsset}>
          Agregar Activo
        </button>
      </div>

      <table className="paleBlueRows">
        <thead>
          <tr>
            <th>Nombre</th>

            <th>Saldo Inicial ($)</th>
            <th>Saldo Disponible ($)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.initialBalance.toLocaleString()}</td>
              <td>{asset.availableBalance.toLocaleString()}</td>
              <td>
                <CiEdit />
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
