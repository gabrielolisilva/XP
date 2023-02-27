const aluno = {
  nome: "Douglas",
  idade: 27,
  curso: "Matemática",
  [Symbol.iterator]: function* () {
    yield this.nome;
    yield this.idade;
    yield this.curso;
  },
};

for (let prop of aluno) {
  console.log(prop);
}
