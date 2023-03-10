import React from "react";
import TableRow from "./TableRow";

const Table = ({ id, reportsInfo, reportAllData }) => {
  return (
    <table>
      <tbody>
        {reportsInfo.map((item) => (
          <TableRow
            item={item}
            id={id}
            key={item.id}
            reportAllData={reportAllData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
