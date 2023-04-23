// EXEMPLO PROXY PARA TRADUTOR
const tradutor = {
  Carro: "Car",
  Ano: "Year",
};

const handler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return property;
    }
  },
  set(target, property, value) {
    if (typeof value == "string") {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  },
};

const tradutorProxy = new Proxy(tradutor, handler);

console.log(tradutorProxy.Carro);
console.log(tradutorProxy.Ano);

tradutorProxy.Modelo = "Model";
console.log(tradutorProxy.Modelo);

// POR SER UM VALOR INVALIDO ELE RETORNA O PROPRIO VALOR ORIGINAL
tradutorProxy.gasolina = 1123;
console.log(tradutorProxy.gasolina);
