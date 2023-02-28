const valor = {
  x: 1,
  y: 2,
  a: 3,
  b: 4,
};

const { x, y, ...resto } = valor;

console.log(x);
console.log(y);
console.log(resto);
