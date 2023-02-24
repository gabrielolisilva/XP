const root = document.querySelector(".root");

const data = fetch("http://makeup-api.herokuapp.com/api/v1/products.json");

data.then((resp) => {
  resp.json().then((data) => {
    renderInputs(data);
    renderData(data);
  });
});

function renderInputs(data) {
  /*   BEGGINING OF INPUTS DISPLAY  */

  const inputsDiv = document.querySelector(".inputs");

  const nameInput = document.createElement("input");
  nameInput.type = "search";
  nameInput.name = "nomeProduto";
  nameInput.id = "nomeProduto";
  const nameLabel = document.createElement("label");
  nameLabel.innerHTML = "Nome: ";
  nameLabel.appendChild(nameInput);

  const selectBrand = document.createElement("select");
  selectBrand.name = "brandSelect";
  selectBrand.id = "brandList";
  const brandOption = document.createElement("option");
  brandOption.value = "todas";
  brandOption.innerHTML = "todas";
  brandOption.setAttribute("selected", true);
  selectBrand.appendChild(brandOption);
  const brandLabel = document.createElement("label");
  brandLabel.innerHTML = "Marca: ";

  brandLabel.appendChild(selectBrand);

  const selectType = document.createElement("select");
  selectType.name = "typeSelect";
  selectType.id = "typeList";
  const typeOption = document.createElement("option");
  typeOption.value = "todos";
  typeOption.innerHTML = "todos";
  typeOption.setAttribute("selected", true);
  selectType.appendChild(typeOption);
  const typeLabel = document.createElement("label");
  typeLabel.innerHTML = "Tipo: ";

  typeLabel.appendChild(selectType);

  const filtersInput = document.createElement("select");
  filtersInput.name = "filterInput";
  filtersInput.id = "filtesInput";
  const filterOption = document.createElement("option");
  filterOption.value = "Filtros";
  filterOption.innerHTML = "Filtros...";
  filterOption.setAttribute("selected", true);
  const filterOption1 = document.createElement("option");
  filterOption1.value = "Melhor avaliados";
  filterOption1.innerHTML = "Melhor avaliados";
  const filterOption2 = document.createElement("option");
  filterOption2.value = "Menores - Maiores $";
  filterOption2.innerHTML = "Menores - Maiores $";
  const filterOption3 = document.createElement("option");
  filterOption3.value = "Maiores - Menores $";
  filterOption3.innerHTML = "Maiores - Menores $";
  const filterOption4 = document.createElement("option");
  filterOption4.value = "A-Z";
  filterOption4.innerHTML = "A-Z";
  const filterOption5 = document.createElement("option");
  filterOption5.value = "Z-A";
  filterOption5.innerHTML = "Z-A";

  filtersInput.appendChild(filterOption);
  filtersInput.appendChild(filterOption1);
  filtersInput.appendChild(filterOption2);
  filtersInput.appendChild(filterOption3);
  filtersInput.appendChild(filterOption4);
  filtersInput.appendChild(filterOption5);

  inputsDiv.appendChild(nameLabel);
  inputsDiv.appendChild(brandLabel);
  inputsDiv.appendChild(typeLabel);
  inputsDiv.appendChild(filtersInput);

  /*   BEGGINING OF OPTIONS DISPLAY INPUT  */

  data.map((singleData) => {
    const brandOption = document.createElement("option");
    brandOption.value = singleData.brand;
    brandOption.innerHTML = singleData.brand;

    selectBrand.appendChild(brandOption);

    const typeOption = document.createElement("option");
    typeOption.value = singleData.product_type;
    typeOption.innerHTML = singleData.product_type;

    selectType.appendChild(typeOption);
  });

  const brandValuesArray = [];

  document.querySelectorAll("#brandList > option").forEach((option) => {
    if (brandValuesArray.includes(option.value) || option.innerHTML == "")
      option.remove();
    else brandValuesArray.push(option.value);
  });

  const typeValuesArray = [];

  document.querySelectorAll("#typeList > option").forEach((option) => {
    if (typeValuesArray.includes(option.value)) option.remove();
    else typeValuesArray.push(option.value);
  });

  /*   BEGGINING OF NAME FILTER SEARCH  */

  const hideProducts = (valuesArray, inputValue) => {
    valuesArray
      .filter(
        (singleData) =>
          !singleData.textContent.toLowerCase().includes(inputValue)
      )
      .forEach((data) => data.classList.add("hidden"));
  };

  const showProducts = (valuesArray, inputValue) => {
    valuesArray
      .filter((singleData) =>
        singleData.textContent.toLowerCase().includes(inputValue)
      )
      .forEach((data) => data.classList.remove("hidden"));
  };

  nameInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    const valuesArray = Array.from(root.children);

    hideProducts(valuesArray, inputValue);
    showProducts(valuesArray, inputValue);
  });

  /*   BEGGINING OF BRAND INPUT FILTER */

  selectBrand.addEventListener("change", () => {
    const currentValue = selectBrand.value.toLocaleLowerCase();

    Array.from(root.children).filter((singleProduct) => {
      if (currentValue == "todas") singleProduct.classList.remove("hidden");
      else if (!singleProduct.textContent.includes(currentValue)) {
        singleProduct.classList.add("hidden");
      } else {
        singleProduct.classList.remove("hidden");
      }
    });
  });

  /*   BEGGINING OF TYPE INPUT FILTER */

  selectType.addEventListener("change", () => {
    const currentTypeValue = selectType.value.toLocaleLowerCase();

    Array.from(root.children).filter((singleProduct) => {
      if (currentTypeValue == "todos") singleProduct.classList.remove("hidden");
      else if (!singleProduct.textContent.includes(currentTypeValue)) {
        singleProduct.classList.add("hidden");
      } else {
        singleProduct.classList.remove("hidden");
      }
    });
  });

  /*   BEGGINING OF ORDER INPUT FILTER */

  filtersInput.addEventListener("change", () => {
    const currentFilterValue = filtersInput.value.toLocaleLowerCase();

    const dataArray = Array.from(data);

    if (currentFilterValue === "melhor avaliados") {
      const orderedArray = dataArray.sort(compareRating);
      console.log(orderedArray);
      renderData(orderedArray);
    }

    if (currentFilterValue === "menores - maiores $") {
      const orderedArray = dataArray.sort(comparePrice);
      console.log(orderedArray);
      renderData(orderedArray);
    }

    if (currentFilterValue === "maiores - menores $") {
      const orderedArray = dataArray.sort(comparePrice).reverse();
      console.log(orderedArray);
      renderData(orderedArray);
    }

    if (currentFilterValue === "a-z") {
      const orderedArray = dataArray.sort(compareName);
      console.log(orderedArray);
      renderData(orderedArray);
    }

    if (currentFilterValue === "z-a") {
      const orderedArray = dataArray.sort(compareName).reverse();
      console.log(orderedArray);
      renderData(orderedArray);
    }

    function comparePrice(a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }

    function compareRating(a, b) {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      } else {
        return 0;
      }
    }

    function compareName(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

function renderData(data) {
  data.map((singleData) => {
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
    span2.innerHTML = `R$ ${changePriceValue(singleData.price)}`;

    const span3 = document.createElement("span");
    span3.classList.add("product-brand", "background-info");
    span3.innerHTML = `Brand: ${singleData.brand}`;
    const span4 = document.createElement("span");
    span4.classList.add("product-brand", "background-info");
    span4.innerHTML = `Price: ${singleData.price}`;
    const span5 = document.createElement("span");
    span5.classList.add("product-brand", "background-info");
    span5.innerHTML = `Rating: ${singleData.rating}`;
    const span6 = document.createElement("span");
    span6.classList.add("product-brand", "background-info");
    span6.innerHTML = `Category: ${singleData.category}`;
    const span7 = document.createElement("span");
    span7.classList.add("product-brand", "background-info");
    span7.innerHTML = `ProductType: ${singleData.product_type}`;

    divEnd.appendChild(span1);
    divEnd.appendChild(span2);

    const divInfoAddition = document.createElement("div");
    divInfoAddition.classList.add("moreProductInfoDiv", "divInfoAddHidden");
    divInfoAddition.style.display = "none";

    divInfoAddition.appendChild(span3);
    divInfoAddition.appendChild(span4);
    divInfoAddition.appendChild(span5);
    divInfoAddition.appendChild(span6);
    divInfoAddition.appendChild(span7);

    section.appendChild(h1Element);
    section.appendChild(divEnd);
    section.appendChild(divInfoAddition);

    newDiv.appendChild(figureSection);
    newDiv.appendChild(section);

    root.appendChild(newDiv);

    newDiv.addEventListener("click", () => {
      if (divInfoAddition.style.display === "none") {
        divInfoAddition.style.display = "flex";
      } else {
        divInfoAddition.style.display = "none";
      }
    });
  });
}

function changePriceValue(value) {
  value *= 5.5;
  let valueMultiplied = value;
  if (valueMultiplied % 1 === 0) {
    valueMultiplied = valueMultiplied.toFixed(0);
  } else {
    valueMultiplied = valueMultiplied.toFixed(2);
  }
  const newValue = valueMultiplied.toString();
  return newValue.replace(".", ",");
}
