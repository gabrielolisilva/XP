// EXEMPLO DE CLOSURE ENCAPSULADA
function Carro() {
  this.proprietario = "Douglas";
  let ano = 2020;

  this.getAno = function () {
    return ano;
  };

  this.setAno = function (newAno) {
    ano = newAno;
  };
}

const c1 = new Carro();

console.log(c1.proprietario);
console.log(c1.ano); // valor da variavel ano não é possível ser acessada por causa do encapsulamento
console.log(c1.setAno(2021));
console.log(c1.getAno());
