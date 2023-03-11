import React from "react";
import Table from "./Table";
import PercentageElement from "./PercentageElement";

const FundoElement = ({ item, reportsInfo, percentageData }) => {
  return (
    <div className="fundoContainer">
      <h1>{item.description}</h1>
      {/* <p>{item.id}</p> */}
      <div className="tablePercDiv">
        <Table reportsInfo={reportsInfo} id={item.id} />
        <PercentageElement id={item.id} percentageData={percentageData} />
      </div>
    </div>
  );
};

export default FundoElement;
