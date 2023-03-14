import React from "react";
import SingleCandidate from "./SingleCandidate";

const Candidates = ({ candidatesVotesCity, candidatesNamePerCity }) => {
  //console.log(candidatesVotesCity, candidatesNamePerCity);

  const newArrayAll = [];
  for (let i in candidatesVotesCity) {
    const newObj = {
      ...candidatesVotesCity[i],
      name: candidatesNamePerCity[i].name,
      username: candidatesNamePerCity[i].username,
    };
    newArrayAll.push(newObj);
  }

  console.log(newArrayAll);

  return (
    <div className="candidatesContainer">
      {newArrayAll.map((item) => (
        <SingleCandidate key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Candidates;
