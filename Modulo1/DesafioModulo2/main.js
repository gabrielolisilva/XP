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
      renderGraph(data);
      renderSingleInfos(data);
    });
  });
});

function renderGraph(data) {
  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((item) => item.Date),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((item) => item.Deaths),
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

  const totalConfirmedText = document.getElementById("confirmedText");
  totalConfirmedText.innerHTML = `${sumConfirmed}`;

  const totalDeathsText = document.getElementById("deathsText");
  totalDeathsText.innerHTML = `${sumDeaths}`;

  const totalRecoveredText = document.getElementById("recoveredText");
  totalRecoveredText.innerHTML = `${sumRecovered}`;
}
