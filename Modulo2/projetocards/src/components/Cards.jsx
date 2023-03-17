import React from "react";
import SingleCard from "./SingleCard";

const Cards = ({ allCards }) => {
  return (
    <div>
      {allCards.map((card) => {
        return <SingleCard key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Cards;
