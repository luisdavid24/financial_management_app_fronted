import React from "react";
import AssetsTable from "./AssetsTable.jsx";
import FixedCostsTable from "./FixedCostsTable.jsx";
import VariableExpenses from "./VariableExpenses.jsx";
import FinanceTable from "./FinanceTable.jsx";
import Debts from "./Debts.jsx";
import Donations from "./Donations.jsx";
import UnforeseenEvents from "./UnforeseenEvents.jsx";
import Tax from "./Tax.jsx";
import Goals from "./Goals.jsx";
import "./css/Category.css";

export default function Category() {
  return (
    <div className="containerCategory">
      <AssetsTable />
      <FixedCostsTable />
      <VariableExpenses />
      <FinanceTable />
      <Debts />
      <Donations />
      <UnforeseenEvents />
      <Tax />
      <Goals />
    </div>
  );
}
