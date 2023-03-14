import React from "react";

const SingleNameCandidate = ({ item }) => {
  return (
    <>
      <h1>{item.name}</h1>
      <p>Eleito</p>
    </>
  );
};

export default SingleNameCandidate;
