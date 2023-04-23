import React from "react";
import SingleCard from "./SingleCard";
import Button from "./Button";

const Cards = ({ allCards, handleSingleCardToggle, shuffleCards }) => {
  return (
    <div className="border-4 border-blue-300 rounded-lg p-3">
      <Button
        title="Embaralhar cards"
        bgColor="bg-gray-500"
        justify="justify-center"
        onClickMethod={shuffleCards}
      />

      {allCards.map((card) => {
        return (
          <SingleCard
            key={card.id}
            card={card}
            handleSingleCardToggle={handleSingleCardToggle}
          />
        );
      })}
    </div>
  );
};

export default Cards;
