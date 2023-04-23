const c1 = {
  modelo: "Onix",
  ano: 2020,
};

const { modelo, ano } = c1;

console.log(modelo, ano);

const printCarInfo = ({ modelo, ano }) => {
  console.log(`${modelo} - ${ano}`);
};

printCarInfo(c1);
