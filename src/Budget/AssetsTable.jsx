import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";

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
      <div className="containerIconCategory">
        <h2>Gestión de Activos</h2>
        <MdOutlineAddCircle />
      </div>

      <table className="tableCategory">
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
