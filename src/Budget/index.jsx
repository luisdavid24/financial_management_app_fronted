import React from "react";
import { useEffect, useState } from "react";
import Category from "./Category";

export default function Budget() {
  return (
    <div className="containerBudget">
      <h2>Mensaje desde el Backend:</h2>
      <Category />
    </div>
  );
}
