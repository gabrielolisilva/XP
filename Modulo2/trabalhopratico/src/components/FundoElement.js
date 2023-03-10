import React from "react";

const FundoElement = ({ item }) => {
  console.log(item.id);
  return (
    <div>
      <h1>{item.description}</h1>
    </div>
  );
};

export default FundoElement;
