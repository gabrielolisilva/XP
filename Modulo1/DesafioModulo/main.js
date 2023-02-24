const root = document.querySelector("#root");

const data = fetch("https://api.covid19api.com/summary");

data.then((resp) => {
  resp.json().then((data) => {
    renderData(data);
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
