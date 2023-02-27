import Chart from "chart.js/auto";

const data = fetch("https://api.covid19api.com/summary");

data.then((resp) => {
  resp.json().then((data) => {
    renderData(data);
    renderPizzaGraph(data.Countries);
    renderBarGraph(data.Countries);
  });
});

function renderData(data) {
  const countriesArray = data.Countries;
  console.log(countriesArray);

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

  (async function () {
    const data = [
      { title: "Confirmados", count: totalNewConfirmed },
      { title: "Recuperados", count: totalNewRecovered },
      { title: "Mortes", count: totalNewDeaths },
    ];

    new Chart(document.getElementById("pizzaGraph"), {
      type: "pie",
      data: {
        labels: data.map((row) => row.title),
        datasets: [
          {
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  })();
}

function renderBarGraph(data) {
  const dataArray = Array.from(data);

  const filteredArray = dataArray.sort(comparePrice);

  function comparePrice(a, b) {
    if (a.TotalDeaths > b.TotalDeaths) {
      return -1;
    }
    if (a.TotalDeaths < b.TotalDeaths) {
      return 1;
    } else {
      return 0;
    }
  }

  console.log(filteredArray);

  const top10DeathsArray = [];

  for (let i = 0; i <= 10; i++) {
    top10DeathsArray.push(filteredArray[i]);
  }

  console.log(top10DeathsArray);

  new Chart(document.getElementById("barGraph"), {
    type: "bar",
    data: {
      labels: top10DeathsArray.map((item) => item.Country),
      datasets: [
        {
          label: "Total de mortes por país - top 10",
          data: top10DeathsArray.map((item) => item.TotalDeaths),
        },
      ],
    },
  });
}
