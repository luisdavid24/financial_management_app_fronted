import React from "react";
import AssetsTable from "./AssetsTable.jsx";
import FixedCostsTable from "./FixedCostsTable.jsx";
import VariableExpenses from "./VariableExpenses.jsx";
import FinanceTable from "./FinanceTable.jsx";
import Debts from "./Debts.jsx";
import "./css/Category.css";

export default function Category() {
  return (
    <div className="budget-box">
      {/*   <AssetsTable />
      <FixedCostsTable />
      <VariableExpenses /> */}
      {/* <FinanceTable /> */}
      <Debts />
    </div>
  );
}
