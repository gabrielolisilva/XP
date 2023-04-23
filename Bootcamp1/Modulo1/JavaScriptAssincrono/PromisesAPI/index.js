// EXEMPLO Promise.Resolve
Promise.resolve(console.log("Sempre será resolvido"));

// EXEMPLO Promise.Reject
Promise.reject(console.log("Sempre será rejeitada"));

// EXEMPLO Promise.all
Promise.all([
  new Promise((resolve) => setTimeout(resolve, 1200, "P1")),
  new Promise((resolve) => setTimeout(resolve, 500, "P2")),
  new Promise((resolve) => setTimeout(resolve, 2000, "P3")),
])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
