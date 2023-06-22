import {
  insertProprietarioRepository,
  updateProprietarioRepository,
  deleteProprietarioRepository,
  getProprietariosRepository,
  getProprietarioRepository,
} from "../repositories/proprietarios.repositories.js";

const createProprietarioService = (proprietario) => {
  return insertProprietarioRepository(proprietario);
};

const updateProprietarioService = (proprietario) => {
  return updateProprietarioRepository(proprietario);
};

const deleteProprietarioService = (id) => {
  return deleteProprietarioRepository(id);
};

const getProprietariosService = () => {
  return getProprietariosRepository();
};

const getProprietarioService = (id) => {
  return getProprietarioRepository(id);
};

export {
  createProprietarioService,
  updateProprietarioService,
  deleteProprietarioService,
  getProprietariosService,
  getProprietarioService,
};
