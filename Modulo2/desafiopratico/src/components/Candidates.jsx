import React from "react";
import SingleCandidate from "./SingleCandidate";

const Candidates = ({
  citySelected,
  candidatesVotesCity,
  candidatesNamePerCity,
}) => {
  //console.log(candidatesVotesCity, candidatesNamePerCity);

  const newArrayAll = [];
  for (let i in candidatesVotesCity) {
    const newObj = {
      ...candidatesVotesCity[i],
      name: candidatesNamePerCity[i].name,
      username: candidatesNamePerCity[i].username,
    };

    if (newArrayAll.length === 0) {
      newArrayAll.push({ ...newObj, winner: true });
    } else {
      newArrayAll.push({ ...newObj, winner: false });
    }
  }

  console.log(newArrayAll);

  return (
    <div className="candidatesContainer">
      {newArrayAll.map((item) => (
        <SingleCandidate
          key={item.id}
          item={item}
          citySelected={citySelected}
        />
      ))}
    </div>
  );
};

export default Candidates;
