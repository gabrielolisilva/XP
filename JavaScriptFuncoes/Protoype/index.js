// NOS PERMITE ADICIONAR PROPRIEDADES OU FUNÇÕES EM UMA OU MAIS INSTANCIAS DE UM OBJETO / ECONOMIA DE TEMPO E DE MEMORIA
function Carro() {
  this.proprietario = "Douglas";
  this.ano = 2020;

  Carro.prototype.getAno = function () {
    console.log(`Ano do carro é ${this.ano}`);
    return this.ano;
  };
}

const c1 = new Carro();
const c2 = new Carro();

console.log(c1.getAno());
console.log(c2.getAno());
