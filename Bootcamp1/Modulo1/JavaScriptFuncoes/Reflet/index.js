// PROXY COM REFLECT / FACILITAR A MANIPULAÇÃO DO OBJETO TARGET
const tradutor = {
  Carro: "Car",
  Ano: "Year",
};

const handler = {
  get(target, property) {
    if (property in target) {
      return Reflect.get(target, property);
    } else {
      return property;
    }
  },
  set(target, property, value) {
    if (typeof value == "string") {
      return Reflect.set(target, property, value);
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

tradutorProxy.gasolina = 1123;
console.log(tradutorProxy.gasolina);
