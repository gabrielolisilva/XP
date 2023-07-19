import {
  insertClienteRepository,
  updateClienteRepository,
  deleteClienteRepository,
  getClientesRepository,
  getClienteRepository,
} from "../repositories/clientes.repositories.js";

const createClienteService = (cliente) => {
  return insertClienteRepository(cliente);
};

const updateClienteService = (cliente) => {
  return updateClienteRepository(cliente);
};

const deleteClienteService = (id) => {
  return deleteClienteRepository(id);
};

const getClientesService = () => {
  return getClientesRepository();
};

const getClienteService = (id) => {
  return getClienteRepository(id);
};

export {
  createClienteService,
  updateClienteService,
  deleteClienteService,
  getClientesService,
  getClienteService,
};
