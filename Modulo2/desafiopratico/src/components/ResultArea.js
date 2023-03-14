import React from "react";
import TotalData from "./TotalData";
import Candidates from "./Candidates";

const ResultArea = ({
  citySelected,
  candidatesPerCity,
  candidatesNamePerCity,
}) => {
  return (
    <div className="resultDiv">
      <TotalData
        citySelected={citySelected}
        candidatesPerCity={candidatesPerCity}
      />
      <Candidates
        candidatesPerCity={candidatesPerCity}
        candidatesNamePerCity={candidatesNamePerCity}
      />
    </div>
  );
};

export default ResultArea;
