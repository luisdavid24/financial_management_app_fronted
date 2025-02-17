import React from "react";
import { useEffect, useState } from "react";
import Category from "./Category";

export default function Budget() {
  const [data, setData] = useState([]);

  /*  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/v1/categoryRouter");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []); */

  return (
    <div className="containerBudget">
      <h2>Mensaje desde el Backend:</h2>
      <Category />
    </div>
  );
}
