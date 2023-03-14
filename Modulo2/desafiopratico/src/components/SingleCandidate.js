import React from "react";

const SingleCandidate = ({ item }) => {
  console.log(item[0]);
  return (
    <div className="singleCandidateDiv">
      <div className="candidateContainer">
        <img
          src={window.location.origin + `/img/${item.username}.png`}
          alt="alternativa_img"
        />
        <div className="headerCandidate">
          <h5>45%</h5>
          <p>{item.votes}</p>
        </div>
      </div>

      <h1>{item.name}</h1>
      {item[0] && <p>Eleito</p>}
    </div>
  );
};

export default SingleCandidate;
