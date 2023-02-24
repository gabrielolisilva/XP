import { Chart } from "./chart.js";

const data = fetch("https://api.covid19api.com/summary");

data.then((resp) => {
  resp.json().then((data) => {
    renderData(data);
    renderPizzaGraph(data.Countries);
  });
});

function renderData(data) {
  const countriesArray = data.Countries;

  let totalConfirmed = 0;
  let TotalDeaths = 0;
  let TotalRecovered = 0;

  for (let i = 0; i < countriesArray.length; i++) {
    let currentConfirmedValue = countriesArray[i].TotalConfirmed;
    let currentDeathValue = countriesArray[i].TotalDeaths;
    let currentRecoveryValue = countriesArray[i].TotalRecovered;

    totalConfirmed += currentConfirmedValue;
    TotalDeaths += currentDeathValue;
    TotalRecovered += currentRecoveryValue;
  }
  const totalConfirmedText = document.querySelector(".confirmedText");
  totalConfirmedText.innerHTML = `${totalConfirmed}`;

  const totalDeathText = document.querySelector(".deathsText");
  totalDeathText.innerHTML = `${TotalDeaths}`;

  const totalRecoveryText = document.querySelector(".recoveryText");
  totalRecoveryText.innerHTML = `${TotalRecovered}`;
}

function renderPizzaGraph(data) {
  let totalNewConfirmed = 0;
  let totalNewDeaths = 0;
  let totalNewRecovered = 0;

  for (let i = 0; i < data.length; i++) {
    let currentNewConfirmedValue = data[i].NewConfirmed;
    let currentNewDeathValue = data[i].NewDeaths;
    let currentNewRecoveryValue = data[i].NewRecovered;

    totalNewConfirmed += currentNewConfirmedValue;
    totalNewDeaths += currentNewDeathValue;
    totalNewRecovered += currentNewRecoveryValue;
  }

  const dataGraph = [
    {
      value: totalNewDeaths,
      color: "#F7464A",
      highlight: "#FF5A5E",
      label: "Red",
    },
    {
      value: totalNewConfirmed,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green",
    },
    {
      value: totalNewRecovered,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow",
    },
  ];

  const graphElement = document.querySelector("#pizzaGraph").getContext("2d");
  new Chart(graphElement).Pie(dataGraph);
}
