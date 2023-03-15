import React from "react";
/* toLocaleString("PT") */

const TotalData = ({ citySelected, candidatesVotesCity }) => {
  return (
    <div className="totalInfoDiv">
      <h3>Eleição em {citySelected.name}</h3>
      <div>
        <p>Total de Eleitores: {citySelected.votingPopulation}</p>
        <p>Abstenção: {citySelected.absence}</p>
        <p>Comparecimento: {citySelected.presence}</p>
      </div>
      <p>{candidatesVotesCity.length} candidatos</p>
    </div>
  );
};

export default TotalData;
