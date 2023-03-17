import React from "react";

const SingleCard = ({ card, handleSingleCardToggle }) => {
  const { question, answer, questionShow } = card;
  return (
    <div
      className="w-96 h-20 bg-emerald-600 my-6 mx-auto flex justify-center items-center rounded cursor-pointer text-center"
      onClick={() => handleSingleCardToggle(card)}
    >
      {questionShow ? (
        <h1 className="font-semibold text-white">{question}</h1>
      ) : (
        <h3 className="font-semibold text-white">{answer}</h3>
      )}
    </div>
  );
};

export default SingleCard;
