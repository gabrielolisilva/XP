const root = document.querySelector(".root");

const data = fetch("http://makeup-api.herokuapp.com/api/v1/products.json");

data.then((resp) => {
  resp.json().then((data) => {
    renderData(data);
  });
});

function renderData(data) {
  data.map((singleData) => {
    console.log(singleData);
    const newDiv = document.createElement("div");
    newDiv.classList.add("product");

    const figureSection = document.createElement("figure");
    figureSection.classList.add("product-figure");

    const imgSection = document.createElement("img");
    imgSection.src = singleData.api_featured_image;
    figureSection.appendChild(imgSection);

    const section = document.createElement("section");
    section.classList.add("product-description");

    const h1Element = document.createElement("h1");
    h1Element.classList.add("product-name");
    h1Element.innerHTML = singleData.name;

    const divEnd = document.createElement("div");
    divEnd.classList.add("product-brands");

    const span1 = document.createElement("span");
    span1.classList.add("product-brand", "background-brand");
    span1.innerHTML = singleData.brand;
    const span2 = document.createElement("span");
    span2.classList.add("product-brand", "background-price");
    span2.innerHTML = `R$ ${formatPrices(singleData.price)}`;

    divEnd.appendChild(span1);
    divEnd.appendChild(span2);

    section.appendChild(h1Element);
    section.appendChild(divEnd);

    newDiv.appendChild(figureSection);
    newDiv.appendChild(section);

    root.appendChild(newDiv);
  });
}

function formatPrices(number) {
  let formatedNumber = number.replace(".", ",");

  return formatedNumber;
}
