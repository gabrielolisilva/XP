import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./App.css";
import Header from "./components/Header";
import CityFilter from "./components/CityFilter";
import ResultArea from "./components/ResultArea";

function App() {
  const [cityArray, setcityArray] = useState([]);
  const [citySelected, setcitySelected] = useState({});
  const [allVotes, setallVotes] = useState([]);
  const [candidatesVotesCity, setcandidatesVotesCity] = useState([]);
  const [allCandidatesName, setallCandidatesName] = useState([]);
  const [candidatesNamePerCity, setcandidatesNamePerCity] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const response = await Promise.allSettled([
        axios.get("http://localhost:3500/cities"),
        axios.get("http://localhost:3500/candidates"),
        axios.get("http://localhost:3500/election"),
      ]);

      if (response[0].status === "fulfilled")
        setcityArray(_.orderBy(response[0].value.data, "name", "asc"));

      if (response[1].status === "fulfilled")
        setallCandidatesName(_.orderBy(response[1].value.data, "name", "asc"));

      if (response[2].status === "fulfilled") {
        setallVotes(_.orderBy(response[2].value.data, "votes", "desc"));
      }
    };

    getDatas();
  }, []);

  const handleChange = (e) => {
    //console.log(candidatesPerCity);
    const inputValue = e.target.value;

    const selectedCity = cityArray.filter((item) => item.name === inputValue);
    setcitySelected(selectedCity[0]);

    const candidatesArray = allVotes.filter(
      (items) => items.cityId === selectedCity[0].id
    );
    setcandidatesVotesCity(candidatesArray);

    const arrayNames = [];

    for (let i in candidatesArray) {
      const namesArray = allCandidatesName.filter(
        (items) => items.id === candidatesArray[i].candidateId
      );

      const [nameObj] = namesArray;
      arrayNames.push(nameObj);
    }
    setcandidatesNamePerCity(arrayNames);

    /* const fullInfo = [
      citySelected,
      ...candidatesPerCity,
      ...candidatesNamePerCity,
    ];
    setAllInfoCity(fullInfo);
    console.log(allInfoCity); */
    /* console.log(citySelected);
    console.log(candidatesVotesCity);
    console.log(candidatesNamePerCity); */
  };

  return (
    <div className="App">
      <Header />
      <CityFilter cityArray={cityArray} handleChange={handleChange} />
      <ResultArea
        citySelected={citySelected}
        candidatesVotesCity={candidatesVotesCity}
        candidatesNamePerCity={candidatesNamePerCity}
      />
    </div>
  );
}

export default App;
