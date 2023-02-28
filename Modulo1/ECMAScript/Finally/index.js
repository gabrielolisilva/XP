// FINALLY SEMPRE CHAMADO INDEPENDENTE SE A PROMISE FOR REJEITADA OU ACEITA

const value = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso");
  reject("Fracasso");
});

function logA() {
  console.log("Chamada concluida");
}

value
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej))
  .finally(logA());
