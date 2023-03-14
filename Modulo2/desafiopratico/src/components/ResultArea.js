import React from "react";
import TotalData from "./TotalData";
import Candidates from "./Candidates";

const ResultArea = ({
  citySelected,
  candidatesVotesCity,
  candidatesNamePerCity,
}) => {
  return (
    <div className="resultDiv">
      <TotalData
        citySelected={citySelected}
        candidatesVotesCity={candidatesVotesCity}
      />
      <Candidates
        candidatesVotesCity={candidatesVotesCity}
        candidatesNamePerCity={candidatesNamePerCity}
      />
    </div>
  );
};

export default ResultArea;
