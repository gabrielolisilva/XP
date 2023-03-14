import React from "react";

const SingleCandidate = ({ item }) => {
  console.log(item);
  return (
    <div className="singleCandidateDiv">
      <div className="candidateContainer">
        <img alt="alternativa_img" />
        <div className="headerCandidate">
          <h5>45%</h5>
          <p>{item.votes}</p>
        </div>
      </div>

      <h1>{item.name}</h1>
      <p>Eleito</p>
    </div>
  );
};

export default SingleCandidate;
