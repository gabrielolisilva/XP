import Chart from "chart.js/auto";

const apiData = fetch("https://api.covid19api.com/countries");

apiData.then((resp) => {
  resp.json().then((data) => {
    console.log(data);
    renderOptions(data);
  });
});

function renderOptions(data) {
  data.map((singleData) => {
    const countrySelect = document.getElementById("paisSelect");
    const countryOption = document.createElement("option");
    countryOption.value = `${singleData.Country}`;
    countryOption.innerHTML = `${singleData.Country}`;

    countrySelect.appendChild(countryOption);
  });
}

const form = document.querySelector(".filterForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inicioDataValue = document.getElementById("comecoInput").value;
  const fimDataValue = document.getElementById("fimInput").value;
  const paisSelectValue = document.getElementById("paisSelect").value;
  const dadosSelectValue = document.getElementById("dadosSelect").value;

  const countryInfo = fetch(
    `https://api.covid19api.com/country/${paisSelectValue}?from=${inicioDataValue}&to=${fimDataValue}`
  );

  countryInfo.then((resp) => {
    resp.json().then((data) => {
      console.log(data);
      renderGraph(data, dadosSelectValue);
      renderSingleInfos(data);
    });
  });
});

function renderGraph(data, dadoValue) {
  let labelGraph = "";
  let dataGraph;

  if (dadoValue === "confirmados") {
    labelGraph = "Número de Confirmados";
    dataGraph = data.map((item) => item.Confirmed);
  }

  if (dadoValue === "mortes") {
    labelGraph = "Número de Mortos";
    dataGraph = data.map((item) => item.Deaths);
  }

  if (dadoValue === "recuperado") {
    labelGraph = "Número de Recuperados";
    dataGraph = data.map((item) => item.Recovered);
  }

  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((item) => item.Date),
      datasets: [
        {
          label: labelGraph,
          data: dataGraph,
        },
      ],
    },
  });
}

function renderSingleInfos(data) {
  let sumConfirmed = 0;
  let sumDeaths = 0;
  let sumRecovered = 0;

  for (let i = 0; i < data.length; i++) {
    let currentConfirmedValue = data[i].Confirmed;
    let currentDeathsValue = data[i].Deaths;
    let currentRecoveredValue = data[i].Recovered;

    sumConfirmed += currentConfirmedValue;
    sumDeaths += currentDeathsValue;
    sumRecovered += currentRecoveredValue;
  }

  const mediaConfirmed = sumConfirmed / data.length;
  const mediaDeaths = sumDeaths / data.length;
  const mediaRecovered = sumRecovered / data.length;

  console.log(`Media confirmados ${mediaConfirmed}`);
  console.log(`Media mortos ${mediaDeaths}`);
  console.log(`Media Recuperados ${mediaRecovered}`);

  const totalConfirmedText = document.getElementById("confirmedText");
  totalConfirmedText.innerHTML = `${sumConfirmed}`;

  const totalDeathsText = document.getElementById("deathsText");
  totalDeathsText.innerHTML = `${sumDeaths}`;

  const totalRecoveredText = document.getElementById("recoveredText");
  totalRecoveredText.innerHTML = `${sumRecovered}`;
}
