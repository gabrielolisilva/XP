import React from "react";

const SingleCandidate = ({ item, citySelected }) => {
  const porcentageData = (value) => {
    const result = (value * 100) / citySelected.presence;
    return `${result.toFixed(2)}%`;
  };

  return (
    <div className="singleCandidateDiv">
      <div className="candidateContainer">
        <img
          src={window.location.origin + `/img/${item.username}.png`}
          alt="alternativa_img"
        />
        <div className="headerCandidate">
          <h5>{porcentageData(item.votes)}</h5>
          <p>{item.votes}</p>
        </div>
      </div>

      <h1>{item.name}</h1>
      {item.winner ? <p>Eleito</p> : <p>Não eleito</p>}
    </div>
  );
};

export default SingleCandidate;
