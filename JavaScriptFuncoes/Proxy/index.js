const Carro = {
  proprietario: "Vanessa",
  ano: 2012,
};

const handler = {
  get(target, property, receiver) {
    console.log(`GET ${property}`);

    if (property in target) {
      return target[property];
    } else {
      console.log("propriedade inexistente");
    }
  },
};

const carroProxy = new Proxy(Carro, handler);

console.log(Carro.ano);
console.log(carroProxy.modelo);
