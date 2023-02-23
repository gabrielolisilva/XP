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

  inputsDiv.appendChild(nameLabel);
  inputsDiv.appendChild(brandLabel);
  inputsDiv.appendChild(typeLabel);

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
      console.log(singleProduct);
      if (currentTypeValue == "todos") singleProduct.classList.remove("hidden");
      else if (!singleProduct.textContent.includes(currentTypeValue)) {
        singleProduct.classList.add("hidden");
      } else {
        singleProduct.classList.remove("hidden");
      }
    });
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

    divEnd.appendChild(span1);
    divEnd.appendChild(span2);

    section.appendChild(h1Element);
    section.appendChild(divEnd);

    newDiv.appendChild(figureSection);
    newDiv.appendChild(section);

    root.appendChild(newDiv);
  });
}

function changePriceValue(value) {
  value *= 5.5;
  const valueMultiplied = value;
  if (valueMultiplied % 1 === 0) {
    valueMultiplied.toFixed(0);
  } else {
    valueMultiplied.toFixed(2);
  }
  const newValue = valueMultiplied.toString();
  return newValue.replace(".", ",");
}
