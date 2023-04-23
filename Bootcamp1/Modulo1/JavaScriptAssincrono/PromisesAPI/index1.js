//EXEMPLO Promise.Race - Qual retorna primeiro que resolveu ou rejeitou

const p1 = Promise.race([
  new Promise((resolve) => setTimeout(resolve, 1200, "P1")),
  new Promise((resolve) => setTimeout(resolve, 500, "P2")),
  new Promise((resolve) => setTimeout(resolve, 2000, "P3")),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//EXEMPLO Promise.allSettled - aguarda todas elas para retornar o resultado

const p2 = Promise.allSettled([
  new Promise((resolve) => setTimeout(resolve, 1200, "P1")),
  new Promise((resolve, reject) => setTimeout(reject, 500, "P2")),
  new Promise((resolve) => setTimeout(resolve, 2000, "P3")),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//EXEMPLO Promise.any - retorna a primeira promise fulfilled/realizada/resolvida

const p3 = Promise.any([
  new Promise((resolve) => setTimeout(resolve, 1200, "P1")),
  new Promise((resolve, reject) => setTimeout(reject, 500, "P2")),
  new Promise((resolve) => setTimeout(resolve, 2000, "P3")),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
