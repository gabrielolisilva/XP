import React from "react";
import SingleCard from "./SingleCard";

const Cards = ({ allCards, handleSingleCardToggle }) => {
  return (
    <div>
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
