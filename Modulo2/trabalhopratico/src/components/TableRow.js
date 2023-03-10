import React from "react";
import CellElement from "./CellElement";

const TableRow = ({ item, id }) => {
  return (
    <tr>
      {item.investmentId === id &&
        Object.entries(item).map(([key, value]) => {
          return <CellElement key={key} cellData={JSON.stringify(value)} />;
        })}
    </tr>
  );
};

export default TableRow;
