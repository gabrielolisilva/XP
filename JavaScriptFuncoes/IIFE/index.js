// IMMEDIATELY INVOKED FUNCTION EXPRESSION / (FUNCTION () {}) ();
// SEM POLUICAO DO ESCOPO GLOBAL, PROVACIDADE DE DADOS, CLOSURES, RENOMEAR VARIAVEIS, CAPTURAR A OBJETO GLOBAL

(function mensagem() {
  console.log("IIFE example");
})();

(function mensagem() {
  const valor1 = 5;
  const valor2 = 10;

  console.log(valor1 * valor2);
})();

const uniqueID = (function () {
  let count = 0;

  return function () {
    count++;
    return `id_${count}`;
  };
})();

console.log(uniqueID());
console.log(uniqueID());
