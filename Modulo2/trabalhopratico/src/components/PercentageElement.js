/* eslint-disable array-callback-return */
import React from "react";

const PercentageElement = ({ id, percentageData }) => {
  // eslint-disable-next-line array-callback-return
  return (
    <div>
      {percentageData.map((item) => {
        if (id === item.idInvest) {
          return <p>{item.percentage}</p>;
        }
      })}
    </div>
  );
};

export default PercentageElement;
