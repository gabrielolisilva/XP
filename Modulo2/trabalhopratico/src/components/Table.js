import React from "react";
import TableRow from "./TableRow";

const Table = ({ id, reportsInfo }) => {
  return (
    <table>
      <tbody>
        {reportsInfo.map((item) => (
          <TableRow item={item} id={id} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
