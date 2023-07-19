import {
  insertAutorRepository,
  updateAutorRepository,
  deleteAutorRepository,
  getAutoresRepository,
  getAutorRepository,
} from "../repositories/autores.repositories.js";

const createAutorService = (autor) => {
  return insertAutorRepository(autor);
};

const updateAutorService = (autor) => {
  return updateAutorRepository(autor);
};

const deleteAutorService = (id) => {
  return deleteAutorRepository(id);
};

const getAutoresService = () => {
  return getAutoresRepository();
};

const getAutorService = (id) => {
  return getAutorRepository(id);
};

export {
  createAutorService,
  updateAutorService,
  deleteAutorService,
  getAutoresService,
  getAutorService,
};
