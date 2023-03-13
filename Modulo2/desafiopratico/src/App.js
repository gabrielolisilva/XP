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
  const [candidatesPerCity, setcandidatesPerCity] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const response = await Promise.allSettled([
        axios.get("http://localhost:3500/cities"),
        axios.get("http://localhost:3500/candidates"),
        axios.get("http://localhost:3500/election"),
      ]);

      if (response[0].status === "fulfilled")
        setcityArray(_.orderBy(response[0].value.data, "name", "asc"));
    };

    getDatas();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    const selectedCity = cityArray.filter((item) => item.name === inputValue);
    console.log(selectedCity[0]);
    setcitySelected(selectedCity[0]);
  };

  return (
    <div className="App">
      <Header />
      <CityFilter cityArray={cityArray} handleChange={handleChange} />
      <ResultArea citySelected={citySelected} />
    </div>
  );
}

export default App;
