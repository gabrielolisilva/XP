const logCurrying = (date) => (type) => (message) =>
  console.log(
    `[${date.getHours()}]:[${date.getMinutes()}] [${type}] [${message}]`
  );

logCurrying(new Date())("DEBUG")("Exemplo de Currying");

const logNow = logCurrying(new Date());

logNow("DEBUG")("Exemplo de Currying com parametro fixo");
