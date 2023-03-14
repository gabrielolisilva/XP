import React from "react";
import SingleCandidate from "./SingleCandidate";
import SingleNameCandidate from "./SingleNameCandidate";

const Candidates = ({ candidatesPerCity, candidatesNamePerCity }) => {
  return (
    <div className="candidatesContainer">
      {candidatesPerCity.map((item) => (
        <SingleCandidate
          key={item.id}
          item={item}
          candidatesNamePerCity={candidatesNamePerCity}
        />
      ))}
      {candidatesNamePerCity.map((item) => (
        <SingleNameCandidate key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Candidates;
