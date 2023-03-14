import React from "react";
import Options from "./Options";

const CityFilter = ({ cityArray, handleChange }) => {
  return (
    <div className="cityFilterDiv">
      <h4>Escolha o município</h4>
      <select className="selectField" onChange={handleChange}>
        <option value="Select a city...">Select a city...</option>
        {cityArray.map((item) => (
          <Options key={item.id} name={item.name} />
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
