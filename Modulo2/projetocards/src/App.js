import "./App.css";
import { React, useState, useEffect } from "react";
import getData from "./services/getAPI";
import generateId from "./services/generateId";
import MainPage from "./pages/MainPage";

function App() {
  const [allCards, setallCards] = useState([]);

  useEffect(() => {
    const getDataInfo = async () => {
      const questions = await getData("http://localhost:3500/questions");

      const cardsArrayWithId = questions.map((card) => {
        return { id: generateId(), ...card, questionShow: true };
      });

      setallCards(cardsArrayWithId);
    };

    getDataInfo();
  }, []);

  console.log(allCards);

  return (
    <div className="App">
      <MainPage allCards={allCards} />
    </div>
  );
}

export default App;
