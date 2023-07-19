import {
  insertLivroRepository,
  updateLivroRepository,
  deleteLivroRepository,
  getLivrosRepository,
  getLivroRepository,
} from "../repositories/livros.repositories.js";

const createLivroService = (livro) => {
  return insertLivroRepository(livro);
};

const updateLivroService = (livro) => {
  return updateLivroRepository(livro);
};

const deleteLivroService = (id) => {
  return deleteLivroRepository(id);
};

const getLivrosService = () => {
  return getLivrosRepository();
};

const getLivroService = (id) => {
  return getLivroRepository(id);
};

export {
  createLivroService,
  updateLivroService,
  deleteLivroService,
  getLivrosService,
  getLivroService,
};
