import React from "react";
import TotalData from "./TotalData";
import Candidates from "./Candidates";

const ResultArea = ({ citySelected }) => {
  return (
    <div className="resultDiv">
      <TotalData citySelected={citySelected} />
      <Candidates />
    </div>
  );
};

export default ResultArea;
