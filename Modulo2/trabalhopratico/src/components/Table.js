import React from "react";
import TableRow from "./TableRow";

const Table = ({ id, reportsInfo, percentageData }) => {
  return (
    <table>
      <tbody>
        {reportsInfo.map((item) => (
          <TableRow
            item={item}
            id={id}
            key={item.id}
            percentageData={percentageData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
