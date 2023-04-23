function* getUniqueID() {
  let i = 0;
  while (true) {
    i++;
    yield `${i}`;
  }
}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {
  const id = idCarsGenerator.next().value;
  cars[id] = { id, car };
}

addCar("Fox");
addCar("Palio");
addCar("Onix");

console.log(cars);
