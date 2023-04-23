const api = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso");
  reject("Falha");
});

async function getData() {
  try {
    const data = await api;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
