import React from "react";
import Table from "./Table";

const FundoElement = ({ item, reportsInfo, setreportsInfo }) => {
  return (
    <div className="fundoContainer">
      <h1>{item.description}</h1>
      <p>{item.id}</p>
      <Table reportsInfo={reportsInfo} id={item.id} />
    </div>
  );
};

export default FundoElement;
