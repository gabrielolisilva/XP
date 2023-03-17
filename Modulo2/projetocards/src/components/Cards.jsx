import React from "react";
import SingleCard from "./SingleCard";
import Button from "./Button";

const Cards = ({ allCards, handleSingleCardToggle, shuffleCards }) => {
  return (
    <div>
      <Button
        title="Embaralhar cards"
        bgColor="bg-gray-500"
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
