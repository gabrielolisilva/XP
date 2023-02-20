// EXEMPLO CLOSURE
function IMC() {
  const altura = 1.8;

  function calcula() {
    const peso = 70;

    console.log(`IMC ${peso / (altura * altura)}`);
  }

  calcula();
}

IMC();
