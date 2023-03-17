import React from "react";

const SingleCard = ({ card }) => {
  const { question, answer } = card;
  return (
    <div className="w-96 h-20 bg-slate-400 mt-6 mx-auto flex justify-center items-center rounded cursor-pointer text-center">
      <h1 className="font-semibold">{question}</h1>
    </div>
  );
};

export default SingleCard;
