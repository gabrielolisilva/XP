import React from "react";
import Table from "./Table";

const FundoElement = ({ item, reportsInfo, reportAllData }) => {
  return (
    <div className="fundoContainer">
      <h1>{item.description}</h1>
      {/* <p>{item.id}</p> */}
      <Table
        reportsInfo={reportsInfo}
        id={item.id}
        reportAllData={reportAllData}
      />
    </div>
  );
};

export default FundoElement;
