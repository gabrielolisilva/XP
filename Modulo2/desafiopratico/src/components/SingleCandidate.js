import React from "react";

const SingleCandidate = ({ item }) => {
  return (
    <div>
      <div className="candidateContainer">
        <img alt="alternativa_img" />
        <div className="headerCandidate">
          <h5>45%</h5>
          <p>{item.votes}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
