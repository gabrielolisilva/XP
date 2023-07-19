import {
  insertVendaRepository,
  updateVendaRepository,
  deleteVendaRepository,
  getVendasRepository,
  getVendaRepository,
} from "../repositories/vendas.repositories.js";

const createVendaService = (venda) => {
  return insertVendaRepository(venda);
};

const updateVendaService = (venda) => {
  return updateVendaRepository(venda);
};

const deleteVendaService = (id) => {
  return deleteVendaRepository(id);
};

const getVendasService = () => {
  return getVendasRepository();
};

const getVendaService = (id) => {
  return getVendaRepository(id);
};

export {
  createVendaService,
  updateVendaService,
  deleteVendaService,
  getVendasService,
  getVendaService,
};
