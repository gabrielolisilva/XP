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
  const lastValueArray = data[data.length - 1];

  const confirmedMedia = lastValueArray.Confirmed / data.length;
  const deathsMedia = lastValueArray.Deaths / data.length;
  const recoveredMedia = lastValueArray.Recovered / data.length;

  console.log(confirmedMedia, deathsMedia, recoveredMedia);

  let labelGraph = "";
  let dataGraph;
  let labelMediaGraph = "";
  let mediaGraph;

  if (dadoValue === "confirmados") {
    labelGraph = "Número de Confirmados";
    dataGraph = data.map((item) => item.Confirmed);
    labelMediaGraph = "Média de confirmados";
    mediaGraph = confirmedMedia;
  }

  if (dadoValue === "mortes") {
    labelGraph = "Número de Mortos";
    dataGraph = data.map((item) => item.Deaths);
    labelMediaGraph = "Média de mortos";
    mediaGraph = deathsMedia;
  }

  if (dadoValue === "recuperado") {
    labelGraph = "Número de Recuperados";
    dataGraph = data.map((item) => item.Recovered);
    labelMediaGraph = "Média de recuperados";
    mediaGraph = recoveredMedia;
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
        {
          label: labelMediaGraph,
          data: mediaGraph,
        },
      ],
    },
  });
}

function renderSingleInfos(data) {
  const lastValueArray = data[data.length - 1];

  const totalConfirmedText = document.getElementById("confirmedText");
  totalConfirmedText.innerHTML = `${lastValueArray.Confirmed}`;

  const totalDeathsText = document.getElementById("deathsText");
  totalDeathsText.innerHTML = `${lastValueArray.Deaths}`;

  const totalRecoveredText = document.getElementById("recoveredText");
  totalRecoveredText.innerHTML = `${lastValueArray.Recovered}`;
}
