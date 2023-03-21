import "./App.css";
import { React, useState, useEffect } from "react";
import getData from "./services/getAPI";
import generateId from "./services/generateId";
import MainPage from "./pages/MainPage";

function App() {
  const [allCards, setallCards] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDataInfo = async () => {
      try {
        const questions = await getData("http://localhost:3500/questions");

        const cardsArrayWithId = questions.map((card) => {
          return { id: generateId(), ...card, questionShow: true };
        });

        setallCards(cardsArrayWithId);
      } catch (error) {
        setError(error.message);
      }
    };

    setTimeout(() => {
      getDataInfo();
      setisLoading(false);
    }, 1000);
  }, []);
  console.log(allCards);
  return (
    <div className="App">
      {error ? (
        <h1 className="text-center mt-7 bg-red-400 py-4 w-96 m-auto rounded-md">
          {error}
        </h1>
      ) : (
        <MainPage
          allCards={allCards}
          isLoading={isLoading}
          setallCards={setallCards}
        />
      )}
    </div>
  );
}

export default App;
