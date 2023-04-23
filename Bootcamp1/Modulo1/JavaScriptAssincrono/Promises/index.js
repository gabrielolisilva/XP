const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucesso"), 5000;
  });
});

p1.then((res) => console.log(res));

const p2 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso");
  } else {
    reject("Falha na promise");
  }
});

p2.then((res) => console.log(res)).catch((rej) => console.log(rej));
