import lo from "lodash";

const cars = ["Palio", "Uno", "Gol", "Saveiro"];

console.log(lo.first(cars));
console.log(lo.nth(cars, 3));
console.log(lo.sample(cars));

lo.times(3, () => {
  console.log("Repetiçao");
});
