function Pessoa(nome) {
  nome ? (this.nome = nome) : (this.nome = "fulano");

  this.dizOla = () => console.log(`${this.nome} diz olá`);
}

const p1 = new Pessoa("Douglas");
console.log(p1.dizOla());
